# def -> function -> word-type: str, value that gets in is string
def get_input(word_type): #this is not a function you can write what you want
    #we get the user input \/ - user input type string 
    user_input: str = input(f"Enter a {word_type}:") #formated string
    return user_input


#they will run to get input but i have to print something
noun = get_input('Noun')
noun2 = get_input('Noun- 2')
verb = get_input('Verb')
verb2 = get_input('Verb- 2')

adjective = get_input('Adjective')


story = f"""
Today, I decided to {verb} a {noun}. It was so {adjective} that I couldn't believe my eyes! Later, I had to {verb2} another {noun2}, which made my day even more interesting.
"""

print(story)


