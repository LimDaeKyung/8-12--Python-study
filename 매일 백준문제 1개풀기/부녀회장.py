def create_floor(prev_floor):
    new_floor = [1]
    for i in prev_floor:
        if i == 1:
            continue
        new_floor.append(i+new_floor[-1])
    return new_floor

def save_floor(list_0,floor_number):
    all_floor = []
    current_floor = create_floor(list_0)
    all_floor.append(current_floor)
    
    for _ in range(floor_number-1):
        current_floor = create_floor(current_floor)
        all_floor.append(current_floor)
        

    return all_floor

list_0 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

T = int(input())
for _ in range(T):
    k = int(input())
    n = int(input())
    result = save_floor(list_0,k)
    print(result[k-1][n-1])
