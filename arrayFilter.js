// 6. 
var arr = [5, 4, 3, 8, 0];
function filterRange(arr, a, b) {
    var filter = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            filter.push(arr[i]);
        }
    }
    return filter;
}
console.log(filterRange(arr, 3, 5));