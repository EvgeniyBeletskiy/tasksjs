//7. 
var arr = [];
arr = [2, 3, 5, 6, 9, 10, 15, 24, 100];
function elements(a) {
    var arr1 = [];
    var d = 0;
    for (var i in a) {
        if (a[i] % 2 == 0) {
            arr1[d] = a[i];
            d++;
        }
    }
    return arr1;
}
console.log(elements(arr));