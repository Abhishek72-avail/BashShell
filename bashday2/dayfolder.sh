#!/bin/bash
# This is For and While Loops
<< comment
this is a for loop
1 is argument 1  which is folder name
2 is start range 
3 is end range 
comment
# for loop, do , while loop
# check if the number of arguments is less than 3

for (( num=$2; num<=$3; num++ ))
do 
	mkdir "$1$num"
done
