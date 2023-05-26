---
title: Revive An Old Mac
subtitle: How to install a 64-bit Linux OS on Mac models that require a 32-bit EFI.
summary:
authors:
  - admin
tags: [MacOS, 32-bit, 64-bit, EFI]
categories: []
projects: []
date: '2023-02-09T00:00:00Z'
lastMod: '2023-02-09T22:20:00Z'
image:
  caption: ''
  focal_point: ''
---
### Background
This project started with a old MAC I found on the street, which was thrown away by someone. It is a 2006 model with 32-bit EFI and 64-bit CPU. The problem is that the latest macOS version it can run is 10.7.5, which is too old to run most of the software I need. So I decided to install a Linux OS on it. However, the 32-bit EFI makes it impossible to install a 64-bit Linux OS. After some research, I found a way to install a 64-bit Linux OS on a 32-bit EFI Mac. The following is the procedure.
### Prepare an USB Stick with 32-bit EFI and 64-bit Linux. 
1. Insert a usb stick and find its name on Mac. The following commands are used based on the stick name **disk2**:
   ```
   diskutil list
   ```
2. Write zero to the disk and quit the process after abut 10 seconds by `Ctrl+c`. Before running the following command, you may need to run `diskutil unmountDisk /dev/disk2` to avoid `Resource busy` error.
   ```
   sudo dd if=/dev/zero of=/dev/disk2
   ```
3. Create an EFI partition on the stick using `diskutil`, format is set to `MS-DOS(FAT)` and Scheme is set to `GUID Partition Map`. Then check the EFI partition identifier via `diskutil list`. Suppose its identifier is **disk2s1**. Note that the EFI partitin is not mounted by macOS by default so you have to manually mount it by yourself:
   ```
   mkdir /tmp/sdb1
   sudo mount -o rw -t msdos /dev/disk2s1 /tmp/sdb1
   ```

4. Create some folders in the EFI partition:
   ```
   sudo mkdir -p /tmp/sdb1/boot/grub/
   sudo mkdir -p /tmp/sdb1/efi/boot/
   ```

5. Create `grub.cfg` file in `/tmp/sdb1/boot/grub/` and write the following lines:
   ```
   search --file --set=root /boot/grub/loopback.cfg
   configfile /boot/grub/loopback.cfg
   ```

6. Download a `bootia32.efi`:
   ```
   wget https://github.com/jfwells/linux-asus-t100ta/raw/master/boot/bootia32.efi
   ```

7. Copy the `bootia32.efi` to `/tmp/sdb1/efi/boot/` and then unmount the drive:
   ```
   sudo cp /path/to/bootia32.efi /tmp/sdb1/efi/boot/
   ```

8.  Put the ISO image on the second partition (suppose its identifier is **disk2s2**). You may need to run `diskutil unmountDisk /dev/disk2` to avoid `Resource busy` error:
    ```
    sudo dd if=/path/to/lubuntu.iso of=/dev/disk2s2 bs=1M.
    ```

### Install the OS.
1. Insert the USB stick to the old Mac.
2. Power on the machine and hold the `Alt` key until two drivers show on the screen.
3. Choose the EFI and press Enter.
4. Wait for a couple of seconds and some texts like "Try Lubuntu..." show up, then press `e` to edit the boot options. Change `quiet splash` to `nomodest splash` . This is the one I use, you may change it according to your needs. For more options: [boot options](https://wiki.ubuntuusers.de/Bootoptionen/).
5. Press `f10` to save the changes and start installing. 

### References:
1. ISO images can be found here: [mattgadient.com](https://mattgadient.com/linux-dvd-images-and-how-to-for-32-bit-efi-macs-late-2006-models/).
2. Adapt the method from [Live CD on an USB Stick](https://mesom.de/efi32boot/index.html) and adjust to the macOS environment.