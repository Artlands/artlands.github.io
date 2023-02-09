## How to install a 64-bit Linux OS on Mac models that require a 32-bit EFI.

#### Prepare an USB Stick with 32-bit EFI and 64-bit Linux. 
1. Insert a usb stick and find its name on Mac. The following commands are used based on the stick name **disk2**:
   ```
   diskutil list
   ```
2. Write zero to the disk and quite the process after abut 10 seconds by `Ctrl+c`:
   ```
   sudo dd if=/dev/zero of=/dev/disk2
   ```
3. Create an EFI partition on the stick using `diskutil`, format is set to `msdos` and Scheme is set to `GUID Partition Map`. Then check the EFI partition identifier via `diskutil list`. Suppose its identifier is **disk2s1**. Note that the EFI partitin is not mounted by macOS by default so you have to unmount the USB stick and then manually mount it by yourself:
   ```
   diskutil unmountDisk /dev/disk2
   ```

4. Mount the EFI partition to `/tmp/sdb1`:
   ```
   mkdir /tmp/sdb1
   sudo mount -o rw -t msdoc /dev/disk2s1 /tmp/sdb1
   ```

5. Create some folders in the EFI partition:
   ```
   sudo mkdir -p /tmp/sdb1/boot/grub/
   sudo mkdir -p /tmp/sdb1/efi/boot/
   ```

6. Create `grub.cfg` file in `/tmp/sdb1/boot/grub/` and write the following lines:
   ```
   search --file --set=root /boot/grub/loopback.cfg
   configfile /boot/grub/loopback.cfg
   ```

7. Download a `bootia32.efi`:
   ```
   wget https://github.com/jfwells/linux-asus-t100ta/raw/master/boot/bootia32.efi
   ```

8. Copy the `bootia32.efi` to `/tmp/sdb1/efi/boot/` and then unmount the drive:
   ```
   sudo cp /path/to/bootia32.efi /tmp/sdb1/efi/boot/
   sudo unmount /tmp/sdb1
   ```

9.  Put the ISO image on the second partition (suppose its identifier is **disk2s2**):
    ```
    sudo dd if=/path/to/lubuntu.iso of=/dev/disk2s2 bs=1M.
    ```

#### Install the OS.
1. Insert the USB stick to the old Mac.
2. Power on the machine and hold the `Alt` key untill two drivers show on the scree.
3. Choose the EFI and press Enter.
4. Wait for a couple of seconds and some texts like "Try Lubuntu..." show up, then press `e` to edit the boot options. Change `quiet splash` to `nomodest nospalsh` . This is the one I use, you may change it according to your needs. For more options: [boot options](https://wiki.ubuntuusers.de/Bootoptionen/).
5. Press `f10` to save the changes and start installing. 

#### References:
1. ISO images can be found here: https://mattgadient.com/linux-dvd-images-and-how-to-for-32-bit-efi-macs-late-2006-models/
2. Adapt the method from https://mesom.de/efi32boot/index.html and adjust to the macOS environment.