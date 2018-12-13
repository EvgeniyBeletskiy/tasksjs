// 1.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge1(age) {
  age > 18 ? true : confirm('Родители разрешили?');
}

console.log(checkAge(18));
console.log(checkAge1(18));