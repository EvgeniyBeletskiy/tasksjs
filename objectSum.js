//2. 
var salaries = {
    "����": 100,
    "����": 300,
    "����": 250
};
var totalSalaries = function (salaries) {
    var sal = 0;
    for (var i in salaries) {
        sal += salaries[i];
    }
    return sal;
}
console.log(totalSalaries(salaries));