1. 
var goods = [1, 2, 3, 4, 5];
goods[goods.length - 1]
2. 
var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");
3. 
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
alert(arr[Math.floor(Math.random() * arr.length)])
4.
var array = [];
var sum = 0;
while(true) {
  var a = prompt("Input number:", 0);
  if (a === null || a === "" || isNaN(a)) {
    break;
  }
  array.push(+a);
}

for(var i in array) {
  sum += array[i];
}
alert(sum);
5. 
  var arr = ["test", 2, 1.5, false];
  function find(arr, value) {
    for (var i in arr) {
      if (arr[i] === value) {
        return i;
      } 
    }
    return -1;
  }
  find(arr, "test"); // 0
  find(arr, 2); // 1
  find(arr, 1.5); // 2

  find(arr, 0); // -1
6. 
  var arr = [5, 4, 3, 8, 0];
  function filterRange(arr, a, b) {
    var filter = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b)  {
        filter.push(arr[i]);
      }
    }
    return filter;
  }
  filterRange(arr, 3, 5)
7. Задача из программы:
var array = [1, 2, 3, 4, 5, 6, 7, 8];
var str = array.join(",");
var array1 = str.split(",");

8. Задача из программы:
var array = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i in array) {
  console.log(array[i]);
}
9. Задача из программы:
var array = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i in array) {
  array[i] += "Hello";
} 
console.log(array);
10.Задача из программы:
var array = [1, 2, 3, 4, 5, 6, 7, 8, 0];
for (var i in array) {
  array[i] = Boolean(i);
} 
console.log(array);
