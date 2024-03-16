def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    str1 = str(num1)
    str2 = str(num2)

    freq1 = {}
    freq2 = {}

    for num in str1:
        freq1[num] = freq1.get(num, 0) + 1

    for num in str2:
        freq2[num] = freq2.get(num, 0) + 1

    return freq1 == freq2