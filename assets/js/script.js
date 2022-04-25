//---------------------------Todays date in jumbotron-------------------------------
// sets the date to current date = dayjs() because its empty
// the .format makes the layout how we want it to look
var todaysDate = dayjs().format("M/D/YYYY");
let currentTime = parseInt(dayjs().format("H"));

//displays current date in the jumbotron
var displayDate = function () {
  $("#currentDay").text(todaysDate);
};

console.log(todaysDate);

//-----------------------------end of jumbotron date-------------------------------

//-------------------changes the background based off time-------------------------

for (let i = 0; i < 9; i++) {
  var time = $(".row")[i].children[1];
  //if .rows id is < current time
  if ($(".row")[i].id < currentTime) {
    // adds class of past to the time slot
    time.classList.add("past");
    //if .rows id is = current time
  } else if ($(".row")[i].id == currentTime) {
    // adds class of present to the time slot
    time.classList.add("present");
  } else {
    // adds class of future to all future times
    time.classList.add("future");
  }
}

//-----------------------------gets saved items from local storage-------------------------------
var loadItems = function () {
  for (var i = 9; i < 18; i++) {
    var item = localStorage.getItem(i);
    var target = "text" + i;
    if (item !== null) {
      $("#" + target).append(item);
    } else {
    }
  }
};

//-----------------------------saves to local storage-------------------------------

$(".saveBtn").on("click", function () {
  console.log("Save click");
  var descriptionEl = $(this).prev().children().text().trim();
  var descriptionId = $(this).prev().parent().attr("id");
  localStorage.setItem(descriptionId, descriptionEl);
});

//-----------------------------click lissener to create textbox-------------------------------
$(".description").on("click", "p", function () {
  console.log("Textbox Click");
  var descriptionText = $(this) //textvalue of clicked description
    .text()
    .trim();
  var descriptionInput = $("<textarea>") //create textarea element
    .val(descriptionText);
  $(this).replaceWith(descriptionInput); //replace p with textarea
  descriptionInput.trigger("focus"); //focus on textarea
});

//-----------------------------lissener for when u leave the text box-------------------------------
$(".description").on("blur", "textarea", function () {
  var descriptionInput = $(this).val().trim();

  var descriptionText = $("<p>").text(descriptionInput);

  $(this).replaceWith(descriptionText);
});

loadItems();
displayDate();
