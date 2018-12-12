1.
    var obj = {};
    var counter = 0;
    function isEmpty(obj) {
      for (var i in obj) {
        counter++;
      }
      if (counter == 0) {
        return true;
      } else {
        return false;
      }
    }
    isEmpty(obj)
2. 
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var totalSalaries = function(salaries) {
    var sal = 0;
    for (var i in salaries) {
        sal += salaries[i];
    }
    return sal;
}
3. 
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
minSalaries(salaries)
4. 
  var menu = {
  width: 200,
  height: 300,
  title: "My menu"
  };

    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }
    function multiplyNumeric(menu) {
      for (var i in menu) {
        if (isNumeric(menu[i])) {
          menu[i] *= 2;
        }
      }
    return menu;
    }
    multiplyNumeric(menu)