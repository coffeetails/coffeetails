let procentProgressElem = document.querySelector('#procentProgress');
let loadingbarElem = document.querySelector('.card--loadingbarProgress');

console.log(procentProgressElem.innerHTML);

const startDate = new Date(2021,7,30);
const endDate = new Date(2023,5,9);
let today = new Date();

console.log("startDate ", startDate);
console.log("endDate ", endDate);
console.log("today ", today);

// Total days                    secs, mins, hours, days
const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log(`totalDays: ${totalDays}`);

// days left
let daysDone = Math.round((today.setHours(0,0,0,0) - startDate) / (1000 * 60 * 60 * 24));
console.log(`daysLeft: ${daysDone}`);

let percentDays = Math.round((daysDone * 100) / totalDays);
console.log("percentDays: ", percentDays);

procentProgressElem.innerHTML = percentDays;



loadingbarElem.style.width = percentDays + "%";