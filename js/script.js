
//display date and time
var rtNow = moment().format("ddd MMMM Do, YYYY; hh:mm:ss a");
document.querySelector('#date').innerHTML=rtNow;

//array to hold tasks for saving
var entry = document.querySelector('#taskEntry')

// var entryObj = {
//   id: taskEntry,
//   name: entryNameInput,
//   type: taskTypeInput,
//   status: "to do"
// }




$('.btn').on('click', function() {
  var text = $(this).siblings('textarea').val();
})

localStorage.setItem('text', 'textarea');

// var area = document.querySelector('#row');
// for(let i = 0; i < rows.length; i++) {
//   if (time === rtNow)

// }
// if (time === currentDate.format("H")) {
//   $("#taskEntry" + time)
//   //addClass
//   .addClass("present");
//   console.log("present");
//   //make new class
// } else if (time > currentDate.format("H"))  {
//   $("#taskEntry" + time)
  
// }Else
//   $("#taskEntry" + time).addClass("past");
//   console.log("past");



// textarea item 
var itemlt = document.querySelector('.item')

//button
var btn = document.querySelector('.btn');

var ni = document.querySelector('#nine');

function colblk() {
  if (rtNow > moment().hours())
  $("textarea").addClass("past")
  
console.log(colblk);
  
}

// localStorage.setItem('text',)


// function saveclk(event) { 
//     itemlt = ' '; 
//     document.getElementById("btn").addEventListener("click", saveclk)  
//    console.log(event.target.parentNode.parentNode.id);
// } 

// buttons.forEach((button) => {

//     // console.log(button)
//     button.addEventListener('click', saveclk)
    
// });
// localStorage.setItem(' ');
// localStorage.clear();
// localStorage.setItem(btn, itemlt);

// localStorage.setItem(textName, textValue);

// audit task due dates every 30 minutes
// setInterval(function() {
//     $(".row .item").each(function() {
//       auditTask($(this));
//     });
//   }, 1800000);

