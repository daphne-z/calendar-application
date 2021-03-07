// save reference to important DOM elements
var dateDisplayEl = $('#currentDay');
var taskText = document.getElementByTagName("textarea").value;

// handle displaying the date
function displayDate() {
  var rightNow = moment().format("dddd, MMMM Do YYYY");
  dateDisplayEl.text(rightNow);
};

displayDate();

document.getElementsByClassName('saveBtn').onclick, function saveText() {
  localStorage.setItem("tastText", taskText);
};

//Save responses to local storage
//Change color of rows based on whether they are in the past, present or future
//Add an icon to the save button