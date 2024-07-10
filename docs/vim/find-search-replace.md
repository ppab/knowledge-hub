| #   | Command                         | Description                                                                 | Mode           |     |     |
| --- | ------------------------------- |-----------------------------------------------------------------------------| -------------- | --- | --- |
| 1   | f                               | search to the next occurreance in the line                                  | Normal/Command |     |     |
| 2   | F                               | search to the next back occurreance in the line                             | Normal/Command |     |     |
| 3   | t                               | search to the next occurreance in the line and place the cursor before      | Normal/Command |     |     |
| 4   | T                               | search to the next bakc occurreance in the line and place the cursor before | Normal/Command |     |     |
| 5   | ;                               | Move to the next found word                                                 |                |     |     |
| 6   | ,                               | Move to the next previous word found                                        |                |     |     |
|     |                                 |                                                                             |                |     |     |
| 7   | dfg, df(space),dfw              | delete everything until next ‘g’                                            | Normal/Command |     |     |
| 8   | cfg                             | change everything until next ‘g’                                            | Normal/Command |     |     |
|     |                                 |                                                                             |                |     |     |
| 10  | **/**and                        | find next ocurance of word and(Forward search)                              | Normal/Command |     |     |
| 11  | n                               | go to next ocurance                                                         | Normal/Command |     |     |
| 12  | N                               | go to previous ocurance                                                     | Normal/Command |     |     |
| 13  | :set is?                        | is incremental search on?                                                   | Normal/Command |     |     |
|     | :set is                         | turn on incremental search                                                  |                |     |     |
|     | :set nois                       | turn off incremental search                                                 |                |     |     |
|     | :set hls?                       |                                                                             |                |     |     |
|     | :set hls                        |                                                                             |                |     |     |
|     | :set nohls                      | turn off search highlighting                                                |                |     |     |
|     | **?**and                        | find previous ocurance of word and(reverse search)                          |                |     |     |
|     | *****                           | find next occourance of the word you are in!!                               |                |     |     |
|     | #                               | find previous occourance of the word you are in!!                           |                |     |     |
|     |                                 |                                                                             |                |     |     |
|     | d/and                           |                                                                             |                |     |     |
|     | d*                              |                                                                             |                |     |     |
|     | y/and                           | yank from the current position up to and word                               |                |     |     |
|     |                                 |                                                                             |                |     |     |
|     | `:[range]s/old/new/`            | **Change al occurances inside a range**                                      |                |     |     |
|     | `:%s/old/new/[flag]`            | **change all occourances of old to new**                                     |                |     |     |
|     |                                 |                                                                             |                |     |     |
|     | :[range]s/old/new/[flags]       | range is 1 or more line separated by coma                                   |                |     |     |
|     | :1,5s/old/new/g                 |                                                                             |                |     |     |
|     |                                 |                                                                             |                |     |     |
|     | :1,$s/old/new/g                 |                                                                             |                |     |     |
|     | :%s/old/new/g                   | change all occourances of old to new                                        |                |     |     |
|     | :/global/,/local/s/old/new/g    |                                                                             |                |     |     |
|     | :/global/,$/s/old/new/g         |                                                                             |                |     |     |
|     |                                 |                                                                             |                |     |     |
|     | :s#/path1/path2#/path3/path4#/g |                                                                             |                |     |     |
|     | :set nu                         |                                                                             |                |     |     |
|     | :set nonu                       |                                                                             |                |     |     |
|     | :set nu!                        |                                                                             |                |     |     |
|     |                                 |                                                                             |                |     |     |
|     |                                 |                                                                             |                |     |     |