// save reference to important DOM elements
var dateDisplayEl = $('#currentDay');

// handle displaying the date
function displayDate() {
  var rightNow = moment().format("dddd, MMMM Do YYYY");
  dateDisplayEl.text(rightNow);
};

displayDate();
