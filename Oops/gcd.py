def gcd (a,b):
    while b != 0:
        a, b = b, a % b
    return a
print("output is  : ",gcd(60, 48)) # 12