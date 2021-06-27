
//display date and time
var rtNow = moment().format("ddd MMMM Do, YYYY; hh:mm:ss a");
document.querySelector('#date').innerHTML=rtNow;

var currentHour = moment().format("HH");
//array to hold tasks for saving
var entry = document.querySelector('#taskEntry')


$('.btn').on('click', function() {
  var text = $(this).siblings('textarea').val();
  var key = $(this).siblings('div').text()
  console.log(text)
  localStorage.setItem(key, text);
})

var textAreaEl = document.querySelectorAll("textarea");
var arrTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"] 
for(i=0; i< textAreaEl.length; i++){
  console.log(textAreaEl[i], arrTime[i])
  if(i+9 < currentHour){
    textAreaEl[i].setAttribute("class", "col-8 border border-dark item past")
  } else if (i+9 == currentHour){
    textAreaEl[i].setAttribute("class", "col-8 border border-dark item present")
  }else {
    textAreaEl[i].setAttribute("class", "col-8 border border-dark item future")
  }
  var innerText = localStorage.getItem(arrTime[i])
  textAreaEl[i].value = innerText
}

// txtarea item 
var itemlt = document.querySelector('.item')

//button
var btn = document.querySelector('.btn');

var ni = document.querySelector('#nine');

function colblk() {
  if (rtNow > moment().hours())
  $("textarea").addClass("past")
  
console.log(colblk);
  
}



