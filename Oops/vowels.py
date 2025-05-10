vowel = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
# vowel = "aeiouAEIOU"
word = input("Enter a word: ")
count = 0
# for char in word:
#     if char.lower() in vowel:
#         count += 1
# print("Number of vowels in the word:", count)
for character in word:
    if character in vowel:
        count += 1
print(count)