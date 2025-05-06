#!/bin/bash
<< disclaimer
this is only the conditional statements
disclaimer

read -p "enter the name :" name
read -p "enter the age :" age
if [[ $name == "Abhishek" ]];
then
	echo "correct name"
elif [[ $age -gt 18 ]];
then 
	echo "correct age "
else
	echo "wrong name"
fi
