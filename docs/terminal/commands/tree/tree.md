# `tree` Command Options and Examples

## Basic Usage

```shell
tree
```

## List All Files (including hidden files)

```shell
tree -a
```

## List Only Directories

```shell
tree -d
```

## Specify Depth Level

```shell
tree -L level
```

### Example:

```shell
tree -L 2
```

## Print the Full Path for Each File

```shell
tree -f
```

## Display File Sizes

```shell
tree -s
```

## Follow Symbolic Links

```shell
tree -l
```

## Show Directory Sizes

```shell
tree -D
```

## Sort by Name, Version, Size, or Last Modification Time

```shell
tree -v # Version
tree -S # Size
tree -t # Last modification time
```

## Exclude Certain Files or Directories

```shell
tree -I pattern
```

## Example to exclude a single directory:

```shell
tree -I 'directory_to_omit'
```

## Example to exclude multiple directories:

```shell
tree -I 'dir1|dir2'
```

## Display ASCII Line Graphics

```shell
tree -A
```

## Output to a File

```shell
tree > output.txt
```

## Print the Number of Files and Directories

```shell
tree --filelimit n
```

## Colorize the Output

```shell
tree -C
```

# Choose Specific Folders

## Method 1: Using Shell Globbing

```shell
tree dir1 dir2
```

## Method 2: Using the find Command

```shell
find . -type d -name "pattern" | xargs tree
```

### Example to include specific subdirectories:

```shell
find . -type d \( -name "subdir1" -o -name "subdir5" \) | xargs tree
```

```shell
find . -type d \( -name "github" \) |xargs tree    
```

```txt
find . -type d \( -name "github" \) |xargs tree    
./docs/github
└── cli
    └── repo-create.md
```

## Method 3: Manually Specifying Paths

```shell
tree path/to/dir1 path/to/dir3
```
