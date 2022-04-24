//---------------------------Todays date in jumbotron-------------------------------
// sets the date to current date = dayjs() because its empty
// the .format makes the layout how we want it to look
var todaysDate = dayjs().format("M/D/YYYY");

//displays current date in the jumbotron
var displayDate = function () {
  $("#currentDay").text(todaysDate);
};

console.log(todaysDate);

$(".discription").on("click", "p", function () {
  console.log(click);
});

displayDate();
