### Creating a private or public repository from the current directory and setting it as the remote origin

For a private repository:

```bash
gh repo create $REPO_NAME --private --source=. --remote=origin
```

For a public repository:

```bash
gh repo create $REPO_NAME --public --source=. --remote=origin
```