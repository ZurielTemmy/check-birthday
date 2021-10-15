let btn = document.getElementsByTagName('button')

let today = new Date();

function birthdayCheck(){
    let inputDate = document.getElementsByClassName('date-value').value;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1
        
    }
   
   
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    if (birthDetails.date == currentDate || birthDetails.month == currentMonth) {
        alert('Happy Birthday, My Boss')
    } 
    else {
        alert('Not your Birthday yet')
    }

    for (let i in btn){
        btn[i].onclick = function(){
            birthdayCheck();
        }
    }
}