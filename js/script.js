
//displays date and time
const dt = new Date();
document.getElementById('date').innerHTML=dt;

var buttons = document.querySelectorAll('.btn')

function saveclk(event) {

    
   console.log(event.target.parentNode.parentNode.id);
} 

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', saveclk)
});



