# Using && (AND) Operator:
# a=10
# b=5
# if [ $a -gt 5 ] && [ $b -lt 10 ]; then
# echo "Both conditions are true"
# else
# echo "One or both conditions are false"
# fi

# Using || (OR) Operator:
# a=10
# b=15
# if [ $a -gt 5 ] || [ $b -lt 10 ]; then
# echo "At least one condition is true"
# else
# echo "Neither condition is true"
# fi


# Combining && and || Operators:
# a=10
# b=5
# c=15
# if [ $a -gt 5 ] && [ $b -lt 10 ] || [ $c -eq 15 ]; then
# echo "Condition met"
# else
# echo "Condition not met"
# fi