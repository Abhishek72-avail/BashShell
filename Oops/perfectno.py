n = int(input("Enter a number: "))
sum_div = sum(i for i in range(1, n) if n % i == 0)
print("Perfect number" if sum_div == n else "Not perfect")