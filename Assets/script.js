// use moment.js to get the current day, month, and year
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

/* I want to dynamically create elements that will then be displayed
on the screen, i want to add those new elements to the container  */

var container = $('.container');
var row = $('<div class="row">');


var dailyTime = $('<div>');
dailyTime.attr('class', 'col-2 col-sm-2 col-md-2 dailyTime');
dailyTime.append('<p class="time-block">9:00am</p>')

var mainInput = $('<div>');
mainInput.attr('class', 'col-8 col-sm-8 col-md-9 mainInput');
mainInput.append('<textarea class="input" placeholder="Plan your day right!.. Input Here">');

var saveBtn = $('<div>')
saveBtn.attr('class', 'col-2 col-sm-1 col-md-1 saveBtn');
saveBtn.append('<button class="saveBtn"><i class="fa-solid fa-lock">');


container.append(row);
row.append(dailyTime);
row.append(mainInput);
row.append(saveBtn);



