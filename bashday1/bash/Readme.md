# **Shell Scripting Basics**
==========================

## Introduction
---------------

Shell scripting is a powerful way to automate and streamline tasks within a Linux environment by writing and executing commands. It's invaluable for system administration, task automation, and enhancing productivity.

## Types of Shells
-----------------

Some popular shells include:

* **bash (Bourne Again Shell)**: Most widely used
* **sh (Bourne Shell)**
* **ksh (KornShell)**
* **zsh (Z Shell)**

## Getting Started
-----------------

* Install a shell of your choice (e.g., bash, sh, ksh, zsh)
* Learn basic shell commands (e.g., `cd`, `ls`, `mkdir`, `rm`)
* Write and execute your first shell script

## Resources
------------

* [Shell Scripting Tutorial](link to tutorial)
* [Shell Scripting Best Practices](link to best practices)
* [Shell Scripting Communities](link to communities)

## Contributing
--------------

* Fork this repository
* Create a new branch for your changes
* Commit and push your changes
* Open a pull request

## License
---------

This project is licensed under [License Name].

# **Learning vi and Shell Scripting**
==========================

## Table of Contents
---------------

* [Introduction](#introduction)
* [Creating a New File with vi](#creating-a-new-file-with-vi)
* [Basic vi Editing Commands](#basic-vi-editing-commands)
* [Writing Content in vi](#writing-content-in-vi)
* [Saving and Exiting in vi](#saving-and-exiting-in-vi)
* [Making the Script Executable](#making-the-script-executable)
* [Running the Script and Viewing Output](#running-the-script-and-viewing-output)

## Introduction
---------------

Creating and editing files using the vi command is a core skill for working in Unix and Linux environments.

## Creating a New File with vi
-----------------------------

### Step 1: Opening vi to Create a New File

* Open your terminal and type `vi my_script.sh` to create or open a file in vi.
* Note: If `my_script.sh` doesn't exist, vi will create a new file with that name.

## Basic vi Editing Commands
-----------------------------

* Press `i` to enter insert mode and start writing content into the file.
* Use basic editing commands to navigate and edit the file.

## Writing Content in vi
------------------------

* Create a simple script that prints "Hello, World!" and displays the current date and time.
* With vi in insert mode, type the following script:
```text
#!/bin/bash
# This script prints a greeting and the current date and time
echo "Hello, World!"
echo "The current date and time is:"
date