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

//Save responses to local storage
$('.saveBtn').on('click', function () {
  var task = $(this).siblings() ;
        localStorage.setItem("task", task.value) ;
        taskDisplayEl.text(task);
});

//Change color of rows based on whether they are in the past, present or future
//Add an icon to the save button
});

