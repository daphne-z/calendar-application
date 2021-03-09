$(document).ready(function() {

// save reference to important DOM elements
var dateDisplayEl = $('#currentDay');
var taskDisplayEl = $('')


// handle displaying the date
function displayDate() {
  var rightNow = moment().format("dddd, MMMM Do YYYY");
  dateDisplayEl.text(rightNow);
};

displayDate();

//Save responses to local storage
$('.saveBtn').on('click', function () {
var task = $(this).siblings('.description').val();
console.log("task", task);
localStorage.setItem("task", task);
});

//get current time
function getTime () {
  var timeNow = moment().format("H");
  console.log(timeNow);
}

getTime();

//compare block times to current time - TA demo
$(".time-block").each(function(i, elem){
  console.log(elem);
  let elmID = elem.id
  let blockHour = elemID.replace("hour-", "");
  if (blockHour > timeNow){
    then (document.getElementByTagName("textarea").style.background = "green");
  }
  if (blockHour = TimeNow){
    then (document.getElementByTagName("textarea").style.background = "red");
  }
  if (blockHour < timeNow) {
    then (document.getElementByTagName("textarea").style.background = "gray");
  }
});

//Add an icon to the save button
  
});




