from random import randint

#Random number ^ 

lower_num, higher_num = 1, 10
# two variables ^
random_number: int = randint(lower_num,higher_num) # random_number is a varialbe which will store random number from 1 - 10
# type set with int ^
print(f'Guess the number in the range from {lower_num} to {higher_num}')

#infinite loop


def game():
    tries = 5
    while tries > 0:
        try:
            user_guess: int  = int(input('Guess ')) 
            
            
            # first user_guess needs to be type of int, and then we convert input to int, and 'Guess ' is making python guess
        except ValueError as e:
            #ValueError if we try to put text in but we have to put number in
            print('Please enter a valid number.')
            continue
            #continue takes us back to the top and makes the look run again
        
        if user_guess > random_number:
            tries -= 1
            
            print(f'The number is lower {tries}')
        elif user_guess < random_number:
            tries -= 1
            print(f'The number is higher {tries}')
        else:
            print('You guessed it!')
            break #leave the loop

        if tries == 0:
            print("Sorry you didn't guess...")
            break

game()

while True:
    restart: str = str(input('You want to play again? ( y/n )'))
    print(f'You want to restart? {restart}')


    if restart == 'y':
        game()
    else:
        print('Bye Bye!')
        break