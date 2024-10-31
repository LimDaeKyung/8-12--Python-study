x = [ i for i in range(1,1000001)]

# 리스트를 넣으면 분해합을 만들어 주는 함수.
def mix(list_):
    result_dict = {}
    sum_ = 0
    for i in list_:
        sum_ += i//1000000
        i = i % 1000000
        sum_ += i//100000
        i = i % 100000
        sum_ += i//10000
        i = i % 10000
        sum_ += i//1000
        i = i % 1000
        sum_ += i//100
        i = i % 100
        sum_ += i//10
        i = i % 10
        sum_ += i//1
        result_dict[i] = sum_
    return result_dict

print(mix(x))