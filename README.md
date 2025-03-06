# Linux Commands for DevOps

## 1. Basic Linux Commands

### **File & Directory Management**
```bash
ls -lah             # List files and directories
pwd                 # Show current directory
cd /path/to/dir     # Change directory
mkdir new_folder    # Create a new folder
rm -rf folder_name  # Delete a folder and its contents
touch file.txt      # Create a new file
cp file1 file2      # Copy a file
mv file1 newfile    # Rename or move a file
```

### **File Permissions & Ownership**
```bash
chmod 755 file      # Change file permissions
chown user:group file # Change file owner
ls -l              # View file permissions
```

### **Viewing & Editing Files**
```bash
cat file.txt        # View file content
less file.txt       # View file content page by page
nano file.txt       # Edit file using Nano
vi file.txt         # Edit file using Vim
echo "Hello" >> file.txt  # Append text to file
```

---

## 2. User & Group Management
```bash
whoami             # Show current user
id                 # Show user ID and group info
sudo useradd devops # Create a new user
sudo passwd devops # Set user password
sudo userdel -r devops # Delete a user
groups             # Show user groups
sudo usermod -aG docker username  # Add user to Docker group
```

---

## 3. Process Management
```bash
ps aux             # View running processes
top                # Real-time process monitoring
htop               # Advanced process monitoring (needs installation)
kill -9 <PID>      # Kill a process
pkill -9 process_name  # Kill process by name
```

---

## 4. Networking Commands
```bash
ip a               # Show network interfaces and IP
ifconfig           # Show network details (old command)
ping google.com    # Check host reachability
netstat -tulnp     # View open ports and connections
ss -tulnp          # Alternative to netstat (faster)
curl -I google.com # Fetch HTTP headers
wget file_url      # Download a file
traceroute google.com  # Trace network path
```

---

## 5. Disk Management
```bash
df -h              # Check disk usage
du -sh folder/     # Check folder size
mount /dev/sdb1 /mnt # Mount a disk
umount /mnt        # Unmount a disk
```

---

## 6. Package Management

### **Ubuntu/Debian (APT)**
```bash
sudo apt update      # Update package list
sudo apt upgrade     # Upgrade all packages
sudo apt install package_name  # Install a package
sudo apt remove package_name   # Remove a package
```

### **CentOS/RHEL (YUM/DNF)**
```bash
sudo yum update      # Update packages
sudo yum install package_name  # Install a package
sudo yum remove package_name   # Remove a package
```

---

## 7. Log Management
```bash
tail -f /var/log/syslog       # View system logs
tail -f /var/log/auth.log     # View authentication logs
journalctl -u nginx --since "1 hour ago"  # View Nginx logs (last 1 hour)
```

---

## 8. SSH & Remote Access
```bash
ssh user@remote_host           # Connect to a remote server
scp file.txt user@remote:/path # Copy file to remote server
rsync -avz source/ user@remote:/path/  # Sync files remotely
```

---

## 9. Docker Commands (For DevOps)
```bash
docker ps -a                # List all containers
docker images               # List Docker images
docker run -d -p 80:80 nginx  # Run Nginx container
docker stop container_id     # Stop a container
docker rm container_id       # Remove a container
docker rmi image_id          # Remove an image
```

---

## 10. Kubernetes Commands (For DevOps)
```bash
kubectl get pods             # List running pods
kubectl get services         # List services
kubectl apply -f deployment.yaml  # Apply deployment
kubectl delete pod pod_name  # Delete a pod
kubectl logs pod_name        # View pod logs
kubectl exec -it pod_name -- bash  # Access pod shell
```

---

## 11. CI/CD & Automation Commands

### **Git Commands**
```bash
git clone repo_url         # Clone a repository
git status                 # Check changes
git add .                  # Stage changes
git commit -m "message"    # Commit changes
git push origin branch     # Push changes
git pull origin branch     # Pull latest changes
```

### **Jenkins Commands**
```bash
sudo systemctl start jenkins   # Start Jenkins
sudo systemctl stop jenkins    # Stop Jenkins
sudo systemctl status jenkins  # Check Jenkins status
