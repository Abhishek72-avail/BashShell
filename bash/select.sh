PS3="Choose a fruit: "
select fruit in Apple Banana Orange Exit; do
case $fruit in
Apple) echo "You chose Apple";;
Banana) echo "You chose Banana";;
Orange) echo "You chose Orange";;
Exit) break;;
*) echo "Invalid option";;
esac
done

