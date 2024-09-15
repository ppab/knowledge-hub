### Creating a private or public repository from the current directory and setting it as the remote origin

For a private repository:

```bash
gh repo create $REPO_NAME --private --source=. --remote=origin
```

For a public repository:

```bash
gh repo create $REPO_NAME --public --source=. --remote=origin
```


## task create a new public repo
```bash
NAME='myProjectTest'

mkdir ${NAME} && cd ${NAME} git init && gh repo create ${NAME} --public --source=. --remote=orign && git checkout -b "develop" && npx gitignore && git add . && git commit -m"first commit" && git push origin develop

```