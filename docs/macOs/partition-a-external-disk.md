## Using Terminal to Partition the Drive: If Disk Utility still doesn't allow partitioning, you can try using the diskutil command in Terminal to partition the drive manually:

1. Open Terminal (Command + Space, type "Terminal").

2. Run the following command to list your disks:

```bash
diskutil list
```

Find your USB drive's identifier (should be disk3 based on the info you provided).

3. To erase and partition the disk into two equal partitions (adjust size as needed), run:

```bash
sudo diskutil partitionDisk /dev/disk3 GPT JHFS+ Partition1 1000G JHFS+ Partition2 R
```

Replace Partition1 and Partition2 with your desired partition names.
1000G represents the size of the first partition; the second partition will take the remaining space (R for the
remainder).
