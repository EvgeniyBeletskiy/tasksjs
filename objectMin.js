//3. 
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function minSalaries(salaries) {
    var minimum = 9999999999999;
    var value = "";
    for (var i in salaries) {
        if (salaries[i] < minimum) {
            minimum = salaries[i];
            value = i;
        }
    }
    return value;
}
console.log(minSalaries(salaries));