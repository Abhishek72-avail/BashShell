myArray+=( [city]=NewYork )
str="Shell Scripting"
echo ${#str}
echo ${str/Scripting/Programming} 
echo ${str:6:10}

myVar="Hello World!"
length=${#myVar}
echo $length

upper=${myVar^^}
echo $upper # HELLO WORLD!

lower=${myVar,,}
echo $lower # hello world!