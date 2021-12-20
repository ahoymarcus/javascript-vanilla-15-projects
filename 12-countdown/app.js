// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 5 hs  18'  50''
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveawayHeading = document.querySelector('.giveaway');
const deadlineContainer = document.querySelector('.deadline');
const timeBits = document.querySelectorAll('.deadline-format h4');


/*
	Careful, because month param is 0 indexed...
*/
let futureDate = new Date(2020, 4, 24, 15, 30, 0);
console.log(futureDate);

// the easy picks
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// the hard picks
const monthIndex = futureDate.getMonth();
console.log('Watch out wrong month = ', monthIndex);
console.log(`The correct month is ${monthIndex} + 1 = ${months[monthIndex]}`);
const actualMonth = months[monthIndex] ;

let periodOfDay
if (hours < 12) {
	periodOfDay = 'am';
} else {
	periodOfDay = 'pm';
}

giveawayHeading.textContent = `giveaway ends on ${actualMonth} ${year} ${hours}:${minutes}${periodOfDay}`;





