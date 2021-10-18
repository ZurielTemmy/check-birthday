let btn = document.querySelector("#btn");

let today = new Date();

function birthdayCheck() {
  let inputDate = document.querySelector('.date-value').value;
  const dateObj = new Date(inputDate);
  let birthDetails = {
    date: dateObj.getDate(),
    month: dateObj.getMonth() +1,
    year: dateObj.getFullYear()
  }
  console.log(birthDetails)

  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  let title = document.querySelector('#title').value;

  if (birthDetails.date != currentDate || birthDetails.month != currentMonth && birthDetails.year != currentYear || birthDetails.year == currentYear) {
    document.write('Dear ' + title + ', Not your Birthday yet !')
  }
  else {
    document.write('Dear ' + title + ', Happy Birthday !')
  }
}
btn.addEventListener("click", birthdayCheck)