$(document).ready(function() {

// save reference to important DOM elements
var dateDisplayEl = $('#currentDay');
var taskTextEl = $("textarea");


// handle displaying the date
function displayDate() {
  var rightNow = moment().format("dddd, MMMM Do YYYY");
  dateDisplayEl.text(rightNow);
};

displayDate();

// //Save responses to local storage
// $('.saveBtn').on('click', function () {
//   var task = $(this).siblings('.description').val();
//   console.log("task", task);
//   localStorage.setItem("task", task) ;
//   taskTextEl.text(task);
// });

//pseudo code:
//Change color of rows based on whether they are in the past, present or future
//assign each time block a start time and an end time
//write a function that compares the currentTime to the start/end time of each time block
//if the current time is after the time block, then the textarea background is gray
//if the current time is during the time block, then the textarea background is red
//if they current time is before the time, then the textarea background is green
  
});
//Add an icon to the save button


