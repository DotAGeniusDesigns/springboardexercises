def print_upper_words(words, starting_letters):
    """Takes a list of words, if the words start with specific letters, return the words in upper case"""

    for word in words:
        if word[0] in starting_letters:
            print(word.upper())

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], {"h","y"})