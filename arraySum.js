// 4.
var array = [];
var sum = 0;
while (true) {
    var a = prompt("Input number:", 0);
    if (a === null || a === "" || isNaN(a)) {
        break;
    }
    array.push(+a);
}

for (var i in array) {
    sum += array[i];
}
alert(sum);