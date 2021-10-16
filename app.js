let btn = document.querySelector("#btn");

let today = new Date();

function birthdayCheck() {
  let inputDate = document.querySelector('.date-value').value;
  const dateObj = new Date(inputDate);
  let birthDetails = {
    date: dateObj.getDate(),
    month: dateObj.getMonth() + 1
  }
  console.log(birthDetails)

  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  let title = document.querySelector('#title').value;

  if (birthDetails.date == currentDate || birthDetails.month == currentMonth) {
    document.write('Dear ' + title + ', Happy Birthday !')
  }
  else {
    document.write('Not your Birthday yet, ' + title + '')
  }
}
btn.addEventListener("click", birthdayCheck)