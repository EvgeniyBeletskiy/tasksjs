1.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  age > 18 ? true : confirm('Родители разрешили?');
}
2. 
function min(a, b) {
   if (a >= b) {
       return b;
   } else {
       return a;
   }
}
3. 
function pow() {
    a = prompt("Input number", )
    b = prompt("Input power of number", )
    return a ** b;
}



4. 
function sum() {
    var a = prompt("Input number", );
    var b = prompt("Input another one number", );
    return +a + +b;
}
5. 
function name () {
    a = prompt("Input Your name", );
    if (a == "Evgen") {
        alert("Hello " + a +"!");
    } else {
        alert("Your name Evgen!!!");
    }
} 
6. 
function typeArg(a) {
    console.log(typeof(a));
}
7. 
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
elements(arr)