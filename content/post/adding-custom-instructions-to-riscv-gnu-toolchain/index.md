---
title: RISC-V GNU toolchain with custom instructions
subtitle: How to add custom instructions and register files to the RISC-V GNU toolchain.
summary:
authors:
  - admin
tags: [RISC-V, xBGAS, GNU toolchain]
categories: []
projects: []
date: '2023-05-25T17:00:00Z'
lastMod: '2023-05-25T22:06:00Z'
image:
  caption: ''
  focal_point: ''
---
There are several online tutorials available on how to add custom instructions to the RISC-V GNU toolchain. Two notable examples are Hadi's tutorial [here](https://hsandid.github.io/posts/risc-v-custom-instruction/) and Vivek's tutorial [here](https://medium.com/@viveksgt/adding-custom-instructions-compilation-support-to-riscv-toolchain-78ce1b6efcf4). However, these tutorials do not cover situations that involve adding new register files to the architecture. Although such cases may be rare, they are still possible, as demonstrated by the [xBGAS](https://github.com/tactcomplabs/xbgas-archspec) project here. This post provides a summary of the steps I followed to add custom instructions and register files to the RISC-V GNU toolchain in order to support the xBGAS architecture. The source code will be provided at the end of this post.

## 1. The RISC-V Opcodes Tool.
Before we modify the RISC-V GNU toolchain, we need to generate the MATCH and MASK hexadecimal values which will be used later. The RISC-V Opcodes Tool is a Python script that can generate the MATCH and MASK values for custom instructions. It can be found [here](https://github.com/riscv/riscv-opcodes).
We clone the repository:
```
git clone https://github.com/riscv/riscv-opcodes
```
In the `unratified` folder, we create a new file `rv64_xbgas` and add the following lines:
```
eld    rd rs1 imm12 14..12=3 6..2=0x1D 1..0=3
eaddie rd rs1 imm12 14..12=7 6..2=0x1E 1..0=3
...
```
For the encoding syntax, you may refer to the `README` of the `riscv-opcodes` repository. After we add the instructions, we simply run `make` and the MATCH and MASK values can be found in the generated `encoding.out.h` file. For the `xBGAS` RISC-V extension, the MATCH and MASK values are like this:
```
#define MATCH_EADDIE 0x707b
#define MASK_EADDIE 0x707f
#define MATCH_ELD 0x3077
#define MASK_ELD 0x707f
...
DECLARE_INSN(eld, MATCH_ELD, MASK_ELD)
DECLARE_INSN(eaddie, MATCH_EADDIE, MASK_EADDIE)
...
```
## 2. The RISC-V GNU/GCC Binutils.
Modifying the GCC compiler itself is complex and not necessary in most cases. We only need to modify the binutils, which is a collection of binary utility tools developed by the GNU project. The binutils can be found [here](https://sourceware.org/git/binutils-gdb.git).
We need to modify the following files:
- `include/opcodes/riscv-opc.h`
- `include/opcode/riscv.h`
- `opcodes/riscv-opc.c`
- `opcodes/riscv-dis.c`
- `gas/config/tc-riscv.c`

### 2.1 `include/opcodes/riscv-opc.h`
In this file, we add `#define` and `DECLARE_INSN` elements we generated in the previous step and put them in the appropriate blocks. `#define` should be put before `#endif /* RISCV_ENCODING_H */` and `DECLARE_INSN` should be put after `#ifdef DECLARE_INSN`.

Adding the `#define`:
```
/* xBGAS instructions */
#define MATCH_EADDI 0x607b
#define MASK_EADDI 0x707f
#define MATCH_EADDIE 0x707b
#define MASK_EADDIE 0x707f
...
```
Adding the `DECLARE_INSN`:
```
/* xBGAS instructions. */
DECLARE_INSN(eaddi, MATCH_EADDI, MASK_EADDI)
DECLARE_INSN(eaddie, MATCH_EADDIE, MASK_EADDIE)
...
```
### 2.2 `include/opcode/riscv.h`
In this file, we add the following declarations:
```
extern const char * const riscv_xbgas_names_numeric[NGPR];
```
`riscv_xbgas_names_numeric` is the data structure that stores the names of the new register files; we will define it in the next step. `NGPR` is MARCO of the number of registers in the register file. For the `xBGAS` extension, we have 32 registers in the register file.

### 2.3 `opcodes/riscv-opc.c`
At the beginning of this file, similar to other register names, we define the registers for xBGAS:
```
const char *const riscv_xbgas_names_numeric[NGPR] =
{
  "e0",   "e1",   "e2",   "e3",   "e4",   "e5",   "e6",   "e7",   "e8",
  "e9",   "e10",  "e11",  "e12",  "e13",  "e14",  "e15",  "e16",  "e17",
  "e18",  "e19",  "e20",  "e21",  "e22",  "e23",  "e24",  "e25",  "e26",
  "e27",  "e28",  "e29",  "e30",  "e31"
};
```
The opcode or instruction definitions are in the `riscv_opcodes` array: `const struct riscv_opcode riscv_opcodes[]`. We add the following lines to the end of the array and before `{0, 0, INSN_CLASS_NONE, 0, 0, 0, 0, 0}`:
```
/* xBGAS instructions */
{"eld",       64, INSN_CLASS_I, "d,o(s)",  MATCH_ELD,  MASK_ELD,  match_opcode, 0 },
{"eaddie",    64, INSN_CLASS_I, "G,s,o",   MATCH_EADDIE,MASK_EADDIE,match_opcode, 0 },
...
```
For the meaning of the fields in the `riscv_opcode` structure, you may refer to the structure definition in the `include/opcode/riscv.h` file.

### 2.4 `opcodes/riscv-dis.c`
We made the following changes in this file:
- Add `static const char * const *riscv_xbgas_names;` to hold the register names usded by the disassembler.
- Add `static const char * const *riscv_xbgas_names;` in the `set_default_riscv_dis_options` function and the `parse_riscv_dis_option_without_args` function (after `riscv_fpr_names = ...`).

In the `print_insn_args` function, we add the following lines to `switch (*oparg)`:
```
  case 'H': /* EXT1: xBGAS extended register */
    print (info->stream, dis_style_register, "%s",
           riscv_xbgas_names[rs1]);
    break;
  
  case 'J': /* EXT2, xBGAS extended register */
    print (info->stream, dis_style_register, "%s",
           riscv_xbgas_names[EXTRACT_OPERAND (RS2, l)]);
    break;

  case 'G': /* EXTD/EXT3, xBGAS extended register */
    print (info->stream, dis_style_register, "%s",
           riscv_xbgas_names[rd]);
    break;
```
The `H`, `J` and `G` will also be used in the next step.

### 2.5 `gas/config/tc-riscv.c`
In this file, we made the following changes.

In the `reg_class` enumeration, we add the `RCLASS_XBGAS` before `RCLASS_MAX`. The `reg_class` should be like this:
```
enum reg_class
{
  RCLASS_GPR,
  RCLASS_FPR,
  RCLASS_VECR,
  RCLASS_VECM,
  RCLASS_XBGAS,
  RCLASS_MAX,
  
  RCLASS_CSR
};
```
Note that `RCLASS_XBGAS` should be before `RCLASS_MAX`, otherwise, the assembler will not recognize the new register class.

In the `validate_riscv_insn` function, we add the following lines to `switch (*oparg)`:
- Add `case 'G': /* EXTD/EXT3, xBGAS extended register. */` before `case 'd': USE_BITS (OP_MASK_RD, OP_SH_RD); break;`.
- Add `case 'H': /* EXT1, xBGAS extended register. */` before `case 's': USE_BITS (OP_MASK_RS1, OP_SH_RS1); break;`.
- Add `case 'J': /* EXT2, xBGAS extended register. */` before `case 't': USE_BITS (OP_MASK_RS2, OP_SH_RS2); break;`.

The `G`, `H` and `J` are the same as the ones in the `opcodes/riscv-dis.c` file; they should be unique and not used by other cases. 

In the `md_begin` function, wee add the following lines after other `hash_reg_names` functions:
```
  hash_reg_names (RCLASS_XBGAS, riscv_xbgas_names_numeric, NGPR);
```
In the `riscv_ip` function, we add the following lines to `switch (*oparg)`:
```
  case 'G': /* EXTD xBGAS destination register */
  case 'H': /* EXT1 xBGAS register */
  case 'J': /* EXT2 xBGAS register */
    if( reg_lookup (&asarg, RCLASS_XBGAS, &regno))
    {
      char c = *oparg;
      if (*asarg == ' ')
        ++asarg;

      /* Now that we have assembled one operand, we use the args
         string to figure out where it goes in the instruction.  */
      switch (c)
      {
        case 'G':
          INSERT_OPERAND (RD, *ip, regno);
          break;
        case 'H':
          INSERT_OPERAND (RS1, *ip, regno);
          break;
        case 'J':
          INSERT_OPERAND (RS2, *ip, regno);
          break;
      }
      continue;
    }
    break;
```

In the `tc_riscv_regname_to_dw2regnum` function, wee add the following lines:
```
  if ((reg = reg_lookup_internal (regname, RCLASS_XBGAS)) >= 0)
    return reg + 128;
``` 

## 3. RISC-V GNU Compiler Toolchain
The original RISC-V GNU Compiler Toolchain can be found at the [repo](https://github.com/riscv-collab/riscv-gnu-toolchain). However, as we modified the `binutils`, we need to redirect the binutils submodule to our modified version. We can do this by forking the repo and modifying the `.gitmodules` file in the RISC-V GNU Compiler Toolchain repo. The `.gitmodules` file should be like this:
```
[submodule "binutils"]
	path = binutils
	url = https://github.com/Artlands/binutils-xbgas.git
	branch = xbgas
...
```
After that, we run `git submodule sync` to update the submodule. Then we can build the RISC-V GNU Compiler Toolchain as usual.

For the xBGAS supported RISC-V GNU Compiler Toolchain, please refer to the [repo](https://github.com/Artlands/riscv-gnu-toolchain-xbgas/tree/xbgas). The `binutils` submodule is redirected to our modified version which can be found at the [repo](https://github.com/Artlands/binutils-xbgas/tree/xbgas).