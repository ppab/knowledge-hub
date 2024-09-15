## Creating a bootable USB drive for a Mac involves several steps, and you’ll need a macOS installer, a USB drive with at least 16GB of storage, and a Mac to complete the process. Here's how you can do it:

### Step 1: Prepare the USB Drive

1. Connect the USB drive to your Mac.
2. Open Disk Utility:
    - Go to `Applications > Utilities > Disk Utility`
3. Erase the USB Drive:

- In Disk Utility, select your USB drive from the list on the left.
- Click the Erase button at the top.
- Set the following options:
    - Name: You can name it anything like "BootableUSB."
    - Format: Mac OS Extended (Journaled).
    - Scheme: GUID Partition Map.
- Click Erase.

### Step 2: Download the macOS Installer

1. Open the Mac App Store and search for the macOS version you want (e.g., macOS Ventura, Monterey, etc.).
2. Download the macOS installer:
    - Once downloaded, the installer will automatically open, but you should close it instead of proceeding with
      installation.

### Step 3: Create the Bootable USB Drive

1. Open Terminal:
    - Go to `Applications > Utilities > Terminal.`
2. Run the following command based on the macOS version you downloaded. Replace MyVolume with the name of your USB
   drive (
   for example, "BootableUSB").

For macOS Ventura:

```bash
sudo /Applications/Install\ macOS\ Ventura.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
```

For macOS Monterey:

```bash
sudo /Applications/Install\ macOS\ Monterey.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume

```

For macOS Big Sur:

```bash
sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
````

Note: Make sure the installer name matches the version you downloaded.

3. Enter your password when prompted, and press Enter.

4. Confirm by typing `Y` when asked to erase the volume.

5. Wait for the process to complete. When it's done, you’ll have a bootable USB drive with the macOS installer.

## Step 4: Boot from the USB Drive

1. Restart your Mac while holding down the Option `key`.
2. Select the USB drive when the boot menu appears.
3. Follow the on-screen instructions to install or reinstall macOS from the bootable USB drive.

4. That's it! You now have a bootable macOS USB drive.


```bash
sudo /Applications/Install\ macOS\ Sonoma.app/Contents/Resources/createinstallmedia --volume /Volumes/JAB_SONOMA

```





