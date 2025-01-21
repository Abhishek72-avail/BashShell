# myArray=(1 2 3 4 " hello" "world")
# myArray+=(5 6 8)
# echo "${myArray[1]}"
# echo "${myArray[@]}"  # print all elements of array
# echo "${#myArray[*]}" # print length of array
# echo "${myArray[*]:0}" # print all elements except first
# echo "${myArray[*]:2:1}" # print elements from 1 to 2

declare -A myArray
myArray=( [name]=Paul [age]=20 )

echo "${myArray[name]}"
echo "${#myArray[@]}"