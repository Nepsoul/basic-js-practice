/*
#~For Kids Challenges~#
Your task is easy, write a function that takes an date in format d/m/Y(String) and return
what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
Have fun!

====>example<====
(dayOfTheWeek("02/06/1940"), "Sunday", "");
(dayOfTheWeek("24/01/2017"), "Tuesday", "");
=======>pseudocode<======
1. formatting the given date
1. finding out the corresponding day e.g 1 is sunday, 2 is monday, so on....
2.
 */
function dayOfTheWeek(date) {
  let newFormat = date.split("/");
  console.log(newFormat);
  const d = new Date(newFormat[2], newFormat[1] - 1, newFormat[0]);
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = day[d.getDay()];
  return dayName;
}
console.log(dayOfTheWeek("30/12/2017"));
