---
tags:
  - docker
---
["Docker docs"](https://docs.docker.com/engine/install/centos/)
#docker 
1. Become root user

```shell
su -
```

```shell
sudo su
```

> If You have used docker in the past and you have data that need to be retained then:
> make a backup of :
`var/lib/docker`
>

2. Remove Docker installations:

```shell
yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-lograte docker-engine
```

# Update OS

```shell
yum update -y
```

# Pre Requisites for docker are installed:

```shell
yum install -y yum-utils  
yum install -y device-mapper-persistent-data
yum install -y lvm2
```

## Add Docker Repository to YUM

```shell
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

## install docker

```shell
sudo yum instal -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

```

## Start Docker:

```shell
sudo systemctl start docker
```

## Verify that docker Engine installation is succesful by running the hello-wold?

```shell
sudo docker run hello-world
```