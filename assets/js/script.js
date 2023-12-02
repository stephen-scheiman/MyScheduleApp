$(document).ready(function () {
  var saveTask = $(":button");
  var tmp = "";
  var dateTime = $("#currentDay");
  var currentTime = dayjs().format("HH");

  saveTask.on("click", function () {
    //grab the time-block and assign it to a var
    var timeBlockID = $(this).parent().attr("id");
    //this is the text content for the time-block
    var timeBlockContent = $(this).parent().children().eq(1).val();
    //write to local storage when save button is clicked
    localStorage.setItem(timeBlockID, timeBlockContent);
  });

  changeClassbyTime();

  //This function compares the current time to the integer value of a time block and adds
  //the appropriate color class
  function changeClassbyTime() {
    for (i = 9; i <= 17; i++) {
      tmp = $("#hour-" + [i]);
      var tmpInt = parseInt(tmp.attr("id").match(/\d+/).shift());
      if (tmpInt < currentTime){
        tmp.addClass("past");
      } else if (tmpInt > currentTime){
        tmp.addClass("future");
      } else {
        tmp.addClass("now");
      }
    }
  }

  //This retrieves any items saved to local storage and renders them to the appropriate time-block
  for (i = 9; i <= 17; i++) {
    tmp = localStorage.getItem("hour-" + [i]);
    if (
      $("#hour-" + [i])
        .children()
        .eq(1)
        .val() !== "null"
    ) {
      $("#hour-" + [i])
        .children()
        .eq(1)
        .val(tmp);
    }
  }

  // Use dayjs to get current time, format it, and display it in the header of the page
  setInterval(function () {
    var currentTime = dayjs().format("MM/DD/YYYY HH:MM:ss");
    displayDate(currentTime);
  }, 1000);

  function displayDate(currentTime) {
    dateTime.text(currentTime);
  }
});


