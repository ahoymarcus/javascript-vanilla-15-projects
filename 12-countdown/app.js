// https://www.youtube.com/watch?v=c5SIG7Ie0dM
// 5 hs  24'  30''
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
	-> Params
	year, month, day, minutes, seconds, milliseconds
*/
let futureDate = new Date(2021, 12, 25, 0, 0, 0);
console.log(futureDate);

// the easy picks
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
let minutes = futureDate.getMinutes();

// the hard picks
const monthIndex = futureDate.getMonth();
console.log('Watch out wrong month = ', monthIndex);
console.log(`The correct month is ${monthIndex} + 1 = ${months[monthIndex]}`);
const actualMonth = months[monthIndex] ;

const dayOfTheWeekIndex = futureDate.getDay();
console.log(`JavaScript getDay() brings the day of the week with 0 index based array = ${dayOfTheWeekIndex}`);
const dayOfTheWeek = weekdays[dayOfTheWeekIndex];

const dayOfTheMonth = futureDate.getDate();
console.log(dayOfTheMonth);


let periodOfDay
if (hours < 12) {
	periodOfDay = 'am';
} else {
	periodOfDay = 'pm';
}

if (minutes < 10) {
	minutes = `0${minutes}`;
}

giveawayHeading.textContent = `giveaway ends on ${dayOfTheWeek}, ${dayOfTheMonth} ${actualMonth} ${year}, ${hours}:${minutes}${periodOfDay}`;


// future time in milliseconds
const futureTime = futureDate.getTime();
console.log('Time in milliseconds = ', futureTime);


function getRemainingTime() {
	const today = new Date().getTime();
	console.log(today);
	
	const t = futureTime - today;
	console.log(t);
};

getRemainingTime();


