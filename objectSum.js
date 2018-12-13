//2. 
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
var totalSalaries = function (salaries) {
    var sal = 0;
    for (var i in salaries) {
        sal += salaries[i];
    }
    return sal;
}
console.log(totalSalaries(salaries));