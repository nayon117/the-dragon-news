export function getCurrentDate() {
  // Create a new Date object to get the current date
  var currentDate = new Date();

  // Get the day, month, date, and year
  var day = currentDate.toLocaleString("default", { weekday: "long" });
  var month = currentDate.toLocaleString("default", { month: "long" });
  var date = currentDate.getDate();
  var year = currentDate.getFullYear();

  // Construct the output string
  var output =day + ", " + month + " " + date + ", " + year;
  return output;
}


