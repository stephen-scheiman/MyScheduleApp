
$(document).ready(function () {

  var saveTask = $(":button");
  var currentTime = parseInt(dayjs().format("HH"));
  
  saveTask.on("click", function () {
    //grab the time-block and assign it to a var
    var timeBlockID = $(this).parent().attr("id");
    //regex to parse the number from the time-block id and convert it to an integer
    var blockIDInt = parseInt(timeBlockID.match(/\d+/).shift());
    //this is the text content for the time-block
    var timeBlockContent = $(this).parent().children().eq(1).val();
    //write to local storage when save button is clicked
    localStorage.setItem(timeBlockID, timeBlockContent);
   //TODO: use this logic to assign classes to time-blocks based on current time
    if (currentTime > blockIDInt){
      console.log("BEFORE");
    } else if (currentTime < blockIDInt){
      console.log("AFTER");
    } else {
      console.log("NOW");
    }
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // Use dayjs to get current time, format it, and display it in the header of the page
  var dateTime = $("#currentDay");
  setInterval(function () {
    var currentTime = dayjs().format("MM/DD/YYYY HH:MM:ss");
    displayDate(currentTime);
  }, 1000);

  function displayDate(currentTime) {
    dateTime.text(currentTime);
  }
});
