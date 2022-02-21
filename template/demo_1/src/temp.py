
def main():
        # get the user input for search word and result word
        searchWord = input("search word: ")
        resultWord = input("result word: ")

        searchWordCounter = 0
        resultWordCounter = 0

        # find the number of chars that are already part of the
        # subsequence 
        for i in range(len(searchWord)):
                if searchWord[i] == resultWord[resultWordCounter]:
                        resultWordCounter += 1
        # difference of length of the result word to the 
        # number of characters already present in the result word
        # will give the desired result
        return len(resultWord) - resultWordCounter


print(main())
