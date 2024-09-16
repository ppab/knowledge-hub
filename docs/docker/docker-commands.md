Docker commands that will help you become a Docker power user:

<iframe width="560" height="315" src="https://google.com" frameborder="0" allowfullscreen></iframe>

| **Command**                           | **Description**                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------- |
| `docker --version`                    | Displays the version of Docker installed.                                           |
| `docker pull <image>`                 | Downloads a Docker image from a registry (e.g., Docker Hub).                        |
| `docker build -t <name>:<tag> <path>` | Builds a Docker image from a Dockerfile located at the specified path.              |
| `docker images`                       | Lists all Docker images available locally.                                          |
| `docker rmi <image>`                  | Removes a Docker image from the local storage.                                      |
| `docker run <options> <image>`        | Creates and starts a container from a specified image.                              |
| `docker ps`                           | Lists all running Docker containers.                                                |
| `docker ps -a`                        | Lists all Docker containers, including those that are stopped.                      |
| `docker stop <container>`             | Stops a running Docker container.                                                   |
| `docker start <container>`            | Starts a stopped Docker container.                                                  |
| `docker restart <container>`          | Restarts a running or stopped Docker container.                                     |
| `docker rm <container>`               | Removes a stopped Docker container.                                                 |
| `docker logs <container>`             | Shows the logs of a Docker container.                                               |
| `docker exec -it <container> <cmd>`   | Executes a command in a running Docker container (e.g., to get a shell).            |
| `docker network ls`                   | Lists all Docker networks.                                                          |
| `docker network inspect <network>`    | Displays detailed information about a Docker network.                               |
| `docker volume ls`                    | Lists all Docker volumes.                                                           |
| `docker volume inspect <volume>`      | Displays detailed information about a Docker volume.                                |
| `docker-compose up`                   | Starts up Docker containers defined in a `docker-compose.yml` file.                 |
| `docker-compose down`                 | Stops and removes containers defined in a `docker-compose.yml` file.                |
| `docker-compose logs`                 | Displays logs from containers managed by Docker Compose.                            |
| `docker-compose build`                | Builds or rebuilds Docker images defined in a `docker-compose.yml` file.            |
| `docker-compose exec <service> <cmd>` | Executes a command in a running Docker container managed by Docker Compose.         |
| `docker info`                         | Displays system-wide information about Docker.                                      |
| `docker system prune`                 | Removes unused data (e.g., stopped containers, unused images, dangling volumes).    |
| `docker save -o <file> <image>`       | Saves a Docker image to a tarball file.                                             |
| `docker load -i <file>`               | Loads a Docker image from a tarball file.                                           |
| `docker tag <source> <target>`        | Tags an existing Docker image with a new name and/or tag.                           |
| `docker commit <container> <image>`   | Creates a new image from a container's changes.                                     |
| `docker history <image>`              | Shows the history of an image, including its layers and commands used to create it. |
| `docker inspect <container/image>`    | Provides detailed information about a container or image in JSON format.            |
| `docker top <container>`              | Displays the running processes of a container.                                      |