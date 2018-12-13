// 1.
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
    console.log(isEmpty(obj))