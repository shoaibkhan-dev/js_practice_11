function makeFieldYellow (element){
   element.style.backgroundColor = 'Yellow';
}

function makeFieldRed (element){
    element.style.backgroundColor = 'red';
}

function redTheButton (point){
    point.style.backgroundColor = 'red';
}

function checkAddress(fieldId){
   if(document.getElementById(fieldId).value === '') {
    alert("email is required");
   }
}