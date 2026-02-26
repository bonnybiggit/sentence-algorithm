length ← 0
words ← 1
vowels ← 0

read ch

while ch ≠ '.'
    length ← length + 1

    if ch = ' ' then
        words ← words + 1
    end if

    if ch in ['a','e','i','o','u','A','E','I','O','U'] then
        vowels ← vowels + 1
    end if

    read ch
end while

print length, words, vowels