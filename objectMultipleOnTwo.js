//4. 
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
console.log(multiplyNumeric(menu))