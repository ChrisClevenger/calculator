//Array holder for button logs

const i = [];  

// Function to take button presses and convert to string (of integers)

document.addEventListener('DOMContentLoaded', function() {
    var integers = document.querySelectorAll('.number');
    integers.forEach(function(integer) {
      integer.addEventListener('click', function(e) {
        i.push(this.value);
    let integerString = i.toString(); 
    integerString = integerString.replaceAll(',', ''); 
    console.log(integerString); 
      });
    });
  });