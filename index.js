//ComputerMove
var comp = [];
//UserMove
var user = [];
//Add a random whole number between 0 and 3 to the arr
function computerMove() {
  console.log(comp);
  comp.push(Math.round(Math.random() * 3))
  computerSquence();
}
function insert0() {
  document.getElementById('blue').classList.add('active')
  document.getElementById('red').classList.remove('active')
  document.getElementById('green').classList.remove('active')
  document.getElementById('yellow').classList.remove('active')
  return user.push(0);
}
function insert1() {
  document.getElementById('red').classList.add('active')
  document.getElementById('blue').classList.remove('active')
  document.getElementById('green').classList.remove('active')
  document.getElementById('yellow').classList.remove('active')
  return user.push(1);
}
function insert2() {
  document.getElementById('green').classList.add('active')
  document.getElementById('yellow').classList.remove('active')
  document.getElementById('blue').classList.remove('active')
  document.getElementById('red').classList.remove('active')
  return user.push(2);
}
function insert3() {
  document.getElementById('yellow').classList.add('active')
  document.getElementById('green').classList.remove('active')
  document.getElementById('blue').classList.remove('active')
  document.getElementById('red').classList.remove('active')
  return user.push(3);
}
//Comparing the 2 arrays. If they aren't the same then no more actions needed.
//So leave loop and return false.
function compareMoves() {
  document.getElementById('green').classList.remove('active')
  document.getElementById('blue').classList.remove('active')
  document.getElementById('red').classList.remove('active')
  document.getElementById('yellow').classList.remove('active')
  if (comp.length !== user.length) {
    return false;
  }
  for (var i = 0; i < comp.length; i++) {
    if (comp[i] !== user[i]) {
      console.log('nah mate');
      return false;
    }
  }
  return true;
}
function done() {
  while (compareMoves()) {
    computerMove();
    user = [];
    computerSquence();
  }
}
function reset() {
  comp = [];
  user = [];
}
function computerSquence(){
  for(let i = 0; i < comp.length; i++){
    if(comp[i] === 0) {
      setTimeout(function(){ document.getElementById('blue').classList.add('active') }, 1000);
      setTimeout(function(){ document.getElementById('yellow').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('blue').classList.remove('active') }, 3000);
      setTimeout(function(){ document.getElementById('red').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('green').classList.remove('active') }, 2000);
    }
    if(comp[i] === 1) {
      setTimeout(function(){ document.getElementById('red').classList.add('active') }, 1000);
      setTimeout(function(){ document.getElementById('yellow').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('blue').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('red').classList.remove('active') }, 3000);
      setTimeout(function(){ document.getElementById('green').classList.remove('active') }, 2000);
    }
    if(comp[i] === 2){
      setTimeout(function(){ document.getElementById('green').classList.add('active') }, 1000);
      setTimeout(function(){ document.getElementById('yellow').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('blue').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('red').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('green').classList.remove('active') }, 3000);
    }
    if(comp[i] === 3){
      setTimeout(function(){ document.getElementById('yellow').classList.add('active') }, 1000);
      setTimeout(function(){ document.getElementById('yellow').classList.remove('active') }, 3000);
      setTimeout(function(){ document.getElementById('blue').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('red').classList.remove('active') }, 2000);
      setTimeout(function(){ document.getElementById('green').classList.remove('active') }, 2000);
    }
  }
}
