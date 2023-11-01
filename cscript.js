
const carcontainer = document.querySelectorAll('.car-container');
const seats = document.querySelectorAll(".seat:not(.occupied)");
const container = document.querySelector('.container');




//selecting seats

container.addEventListener('click', function (e) {

  if (e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
   
  }
  
});

//joining car
function joinCar() {
  var selectedSeats = document.querySelector('.selected');
  selectedSeats.classList.replace('selected', 'u-selection');
  var userSelection = document.querySelectorAll('.u-selection');
  const seatsIndex = [...userSelection].map(function(seat){
    return [...seats].indexOf(seat)

  });

  localStorage.setItem('userSelection', JSON.stringify(seatsIndex));

}


//localstorage
function saveData(){
  const userSelection = JSON.parse(localStorage.getItem('userSelection'));
  if(userSelection !== null && userSelection.length > 0){
    seats.forEach((seat, index) => {
      if(userSelection.indexOf(index) > -1) {
        seat.classList.add('u-selection');
      }
    });
  }
 
}
saveData()

//reload the page
function reload(){
  window.localStorage.removeItem('userSelection');
  var userSelection = document.querySelector('.u-selection');
  userSelection.classList.remove('u-selection');
}
//today

var todayContainer = document.querySelector(".today");


var d = new Date();


var weekday = new Array(7);
weekday[0] = "Sunday 🖖";
weekday[1] = "Monday 💪😀";
weekday[2] = "Tuesday 😜";
weekday[3] = "Wednesday 😌☕️";
weekday[4] = "Thursday 🤗";
weekday[5] = "Friday 🍻";
weekday[6] = "Saturday 😴";


var n = weekday[d.getDay()];


var randomWordArray = Array(
  "Oh my, it's ",
  "Whoop, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
);

var randomWord =
  randomWordArray[Math.floor(Math.random() * randomWordArray.length)];


todayContainer.innerHTML = randomWord + n;

//adding new car modal

const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const submitButton = document.querySelector('.submitButton')



// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

submitButton.addEventListener('click', function () {
  modal.classList.remove('show-modal');
});



//add new car

function addNewCar() {
  const newCarContainer = document.createElement('DIV');
  newCarContainer.className = 'car-container';
  const newWheels = document.createElement('SPAN');
  newWheels.className = 'wheels'
  const newWheel1 = document.createElement('SPAN');
  newWheel1.className = 'wheel1'
  const newWheel2 = document.createElement('SPAN');
  newWheel2.className = 'wheel2'
  const newWheel3 = document.createElement('SPAN');
  newWheel3.className = 'wheel3'
  const newWheel4 = document.createElement('SPAN');
  newWheel4.className = 'wheel4'
  const newLight = document.createElement('DIV');
  newLight.className = 'light'
  const newLeftLight = document.createElement('DIV');
  newLeftLight.className = 'leftlight'
  const newRightLight = document.createElement('DIV');
  newRightLight.className = 'rightlight'
  const newCar = document.createElement('DIV');
  newCar.className = 'car'
  const newFirstRow = document.createElement('DIV');
  newFirstRow.className = 'first-row'
  const newSeat1 = document.createElement('SPAN');
  newSeat1.className = 'seat seat1'
  const newSeat2 = document.createElement('SPAN');
  newSeat2.className = 'seat seat2'
  const newSecondRow = document.createElement('DIV');
  newSecondRow.className = 'second-row'
  const newSeat3 = document.createElement('SPAN');
  newSeat3.className = 'seat seat3'
  const newSeat4 = document.createElement('SPAN');
  newSeat4.className = 'seat seat4'
  const newSeat5 = document.createElement('SPAN');
  newSeat5.className = 'seat seat5'
  const newIndex = document.createElement('DIV');
  newIndex.className = 'indexx'
  const newRouteContainer = document.createElement('DIV');
  newRouteContainer.className = 'route-container'
  const newStart = document.createElement('DIV');
  newStart.className = 'start'
  const newFinish = document.createElement('DIV');
  newFinish.className = 'finish'
  const newTo = document.createElement('P');
  newTo.className = 'to' 
  var toText = document.createTextNode("to");
  const newClock = document.createElement('div');
  newClock.className = 'clock'
  const newTime = document.createElement('P');
  newTime.className = 'time'
  const nameParagraph = document.createElement('P');
  nameParagraph.id = 'nameP'
  nameParagraph.className = 'userName'
  const startText = document.createElement('P');
  startText.id = 'startP'
  startText.className = 'start'
  const finishText = document.createElement('P');
  finishText.id = 'finishP'
  finishText.className = 'finish'
  const timeText = document.createElement('P');
  timeText.id = 'timeP'
  const newPlate = document.createElement('DIV');
  newPlate.className = 'lp'
  const plateText = document.createElement('P');
  plateText.id = 'plateP'
  const addInfo = document.createElement('DIV');
  addInfo.className = 'a-info'
  const infoText = document.createElement('P');
  infoText.id = 'infoP'



  const flexContainer = document.querySelector('.flex-containerr');
  flexContainer.appendChild(newCarContainer);
  newCarContainer.appendChild(newWheels);
  newWheels.appendChild(newWheel1);
  newWheels.appendChild(newWheel2);
  newWheels.appendChild(newWheel3);
  newWheels.appendChild(newWheel4);
  newCarContainer.appendChild(newLight);
  newLight.appendChild(newLeftLight);
  newLight.appendChild(newRightLight);
  newCarContainer.appendChild(newCar);
  newCar.appendChild(newFirstRow);
  newFirstRow.appendChild(newSeat1);
  newFirstRow.appendChild(newSeat2);
  newCar.appendChild(newSecondRow);
  newSecondRow.appendChild(newSeat3);
  newSecondRow.appendChild(newSeat4);
  newSecondRow.appendChild(newSeat5);
  newCarContainer.appendChild(newIndex);
  newIndex.appendChild(nameParagraph);
  newIndex.appendChild(newRouteContainer);
  newRouteContainer.appendChild(newStart);
  newRouteContainer.appendChild(newTo);
  newRouteContainer.appendChild(newFinish);
  newTo.appendChild(toText);
  newIndex.appendChild(newClock);
  newClock.appendChild(newTime);
  newStart.appendChild(startText);
  newFinish.appendChild(finishText);
  newTime.appendChild(timeText);
  newIndex.appendChild(newPlate);
  newPlate.appendChild(plateText);
  newIndex.appendChild(addInfo);
  addInfo.appendChild(infoText);




  //connections

  var name = document.getElementById('name').value;
  var start = document.getElementById('start').value;
  var finish = document.getElementById('finish').value;
  var time = document.getElementById('time').value;
  var plate = document.getElementById('plate').value;
  var addinfo = document.getElementById('add-info').value;

  document.getElementById("nameP").innerHTML = name;
  document.getElementById('startP').innerHTML = start;
  document.getElementById('finishP').innerHTML = finish;
  document.getElementById('timeP').innerHTML = time;
  document.getElementById('plateP').innerHTML = plate;
  document.getElementById('infoP').innerHTML = addinfo;



  


  //checkBox

  var ride = document.getElementById('ride');
  var request = document.getElementById('request');
  if (ride.checked == true) {
    newSeat1.classList.add('u-selection');
  }
  if (request.checked == true) {
    newSeat2.classList.add('u-selection');
  }

}





//search bar  
function nameFunction() {
  var input, filter, carcontainer, userName, start, finish, txtValue, i;
  carcontainer = document.querySelectorAll('.car-container');
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase()
  for (i = 0; i < carcontainer.length; i++) {
    var userName = document.getElementsByClassName('userName')[i];
    var start = document.getElementsByClassName('start')[i];
    var finish = document.getElementsByClassName('finish')[i];
    txtValue = userName.textContent || userName.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      carcontainer[i].style.display = "";
    } else {
      carcontainer[i].style.display = "none";
    }
  }
}

function startFunction(){
  var input, filter, carcontainer, userName, start, finish, txtValue, i;
  carcontainer = document.querySelectorAll('.car-container');
  input = document.getElementById('startBar');
  filter = input.value.toUpperCase()
 
 
 
  for (i = 0; i < carcontainer.length; i++) {
    var start = document.getElementsByClassName('start')[i]
    startValue = start.textContent || start.innerText;
    if (startValue.toUpperCase().indexOf(filter) > -1) {
      carcontainer[i].style.display = "";
    } else {
      carcontainer[i].style.display = "none";
    }

  }

}  

function finishFunction(){
  var input, filter, carcontainer, userName, start, finish, txtValue, i;
  carcontainer = document.querySelectorAll('.car-container');
  input = document.getElementById('finishBar');
  filter = input.value.toUpperCase()
  
  
  for (i = 0; i < carcontainer.length; i++) {
    var finish = document.getElementsByClassName('finish')[i]
    finishValue = finish.textContent || finish.innerText;
    if (finishValue.toUpperCase().indexOf(filter) > -1) {
      carcontainer[i].style.display = "";
    } else {
      carcontainer[i].style.display = "none";
    }

  }
}



