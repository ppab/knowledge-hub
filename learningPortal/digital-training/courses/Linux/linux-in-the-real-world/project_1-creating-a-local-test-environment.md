# Creating a Local Test Environment

## Vagrant

- Easy to configure, reproducible environments.
- Provisions VirtualBox Virtual Machines

## Vagrant Boxes

**Box= Operating System Image**

You just need to download a Box Once

The command `Vagrant box add USER/BOX` will download and store a box in your system.

You can create public boxes in the [Vagrant Public Box Catalog](https://portal.cloud.hashicorp.com/vagrant/discover)

- `vagrant box add jasonc/centos8` - add box `centos8` from user `jasonc`

## Vagrant Project

- Vagrant project = Folder with a Vagrantfile.

1. Create new directory and enter the directory

```bash
mkdir vm1
cd vm1 
```

2. Initialize the Vagrant Project

```bash
 vagrant init jasonc/centos8
```

## Vagrant Up

You can bring up an instance of that box by running

```bash
vagrant up # your terminal must be inside the Vagrant Project (i.e vm1)
```

- Vagrant will import the box into VirtualBox and start it.
- The VM is started in headless mode.

## Vagrant SSH

### SSH-Secure Shell

Is the network protocol used to connect to linux systems.

Vagrant provide a convenient way to `shorcut` to ssh into the virtual machine.

```shell
vagrant ssh
```

To get out of the linux system

```shell
exit
```

## Vagrant Commands

- `vagrant halt`, Sops the VM
- `vagrant up`, Start the VM
- `vagrant suspend`, Suspends the VM
- `vagrant resume`, Resumes the VM
- `vagrant destroy`, Removes the VM
- `vagrant reload`, Reloads the VM with a new configuration
- `vagrant`, Shows your options

O my goodnes, Great docs!... Really?
jjajajja yes

## Vagrant File

```ruby
Vagrant.configure(2) do |config|
    config.vm.box="jasonc/centos8"
    config.vm.hostname="linuxsvr"
    config.vm.network "private_network", ip:"10.2.3.4"
    config.vm.provision "shell", path: "setup.sh"
end
```