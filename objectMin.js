//3. 
var salaries = {
    "����": 100,
    "����": 300,
    "����": 250
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