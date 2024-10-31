def plus(num_1=0,num_2=0):
        return num_1 + num_2

def minus(num_1=0,num_2=0):
        return num_1 - num_2
    
def multi(num_1=0,num_2=0):
        return num_1 * num_2
    
def divi(num_1=0,num_2=1):
        return num_1 / num_2
playing = True

while playing:
    num_1 = int(input("Choose a number:"))
    num_2 = int(input("Choose another one:"))
    print("Choose an operation:")
    print("     Options are: + , - , * , or /.")
    print("     Write 'exit' to finish.")
    operator = input()
    
    if operator == 'exit':
        playing = False
    elif operator == '+':
        result = plus(num_1,num_2)
        print(f'Result:{result}')
    elif operator == '-':
        result = minus(num_1,num_2)
        print(f'Result:{result}')
    elif operator == '*':
        result = multi(num_1,num_2)
        print(f'Result:{result}')
    elif operator == '/':
        result = divi(num_1,num_2)
        print(f'Result:{result}')
    