import random

def roll_dice(amount: int = 2) -> list[int]:#if user dosent specify anything, the default value is 2, we get those values back, and we put them in a list, and we want them to #be integres
    if amount <= 0:
        raise ValueError # we are raising and error in this case its value but 

    rolls: list[int] = []

    for i in range(amount):
        random_roll: int = random.randint(1,6)
        rolls.append(random_roll)

    return rolls

def main():
    while True:
        try:
            user_input: str = input("How many dice would you like to roll? ")

            if user_input.lower() == 'exit': #we added .lower to not care if user types EXIT or Exit
                print('Thanks for playing!')
                break
            print(roll_dice(int(user_input)))

        except ValueError:
            print('(Please enter a valid Number)')

if __name__ == '__main__':
    main()


