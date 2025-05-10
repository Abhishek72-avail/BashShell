# consonants =["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
# vowels = ["a", "e", "i", "o", "u"]
# word = input( "enter the word :")
# count = 0
# for chr in word :
#     if chr in consonants:
#         count += 1
# print("Number of consonants in the word:", count)
# print("Number of vowels in the word:", len(word) - count)


vowel = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
word = input("Enter a word: ")
count = 0
for char in word :
    if char not in  vowel:
        count += 1
print("Number of consonants in the word:", count)