// 10.������ �� ���������:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 0];
for (var i in array) {
    array[i] = Boolean(i);
}
console.log(array);