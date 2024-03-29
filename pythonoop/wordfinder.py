"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    def __init__(self, path):
        self.words = self.read_words(path)
        print(f"{len(self.words)} words read")

    def read_words(self, path):
        with open(path) as file:
            return [line.strip() for line in file]
        
    def random(self):
        return random.choice(self.words)
    

class SpecialWordFinder(WordFinder):
    def read_words(self, path):
        with open(path) as file:
            return [line.strip() for line in file if line.strip() and not line.startswith("#")]
