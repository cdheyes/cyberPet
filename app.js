
const petUpdate = document.getElementById('petUpdate');
const petScore = document.getElementById('petScore');

const foodButton = document.getElementById("feedButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");


// button id listeners
foodButton.addEventListener("click", (event) => {
  petUpdate.innerHTML = ` wants scooby snacks... FEED ME!`;
  newDog.eat();
  newDog.checkHunger();
  newDog.displayScore();
});

drinkButton.addEventListener("click", (event) => {
  newDog.drink();
  newDog.checkThirst();
  newDog.displayScore();
});

playButton.addEventListener("click", (event) => {
  newDog.play();
  newDog.checkHappy();
  newDog.displayScore();
});


//universal pet class
class Animal {
  constructor(name){
  this._name = name;
  this._hunger = 50;
  this._thirst = 50;
  this._happy = 50;
}
get name(){
  return this._name
}
get hunger(){
  return this._hunger
}
get thirst(){
  return this._thirst
}
get happy(){
  return this._happy
}

eat(){
  this._hunger -= 10;
  this._thirst += 5;
  this._happy += 5;
}

drink(){
  this._thirst -= 10;
  this._hunger += 5;
  this._happy += 5;
}

play(){
  this._happy -= 10;
  this._hunger += 5;
  this._thirst += 5;
}

displayScore(){
  petScore.innerHTML = `Hunger ${this._hunger}. Thirst ${this._thirst}. Happy ${this._happy}`;
}

checkHunger(){
  if (this._hunger >= 90) {
    petUpdate.innerHTML = `${this._name} wants scooby snacks... FEED ME!`;
  } else if(this._hunger <= 10) {
    petUpdate.innerHTML = `${this._name} is going to burst! No more food`;
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.innerHTML = `${this._hunger} hunger level`;
  };
};

checkThirst(){
  if (this._thirst >= 90) {
    petUpdate.innerHTML = `${this._name} is SO thirsty, drinkies please!`;
  } else if(this._thirst <= 10) {
    petUpdate.innerHTML = `${this._name} is not thirsty anymore`;
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.innerHTML = `${this._thirst} thirst level`;
  };
};

checkHappy(){
  if (this._happy >= 90) {
    petUpdate.innerHTML = `${this._name} is bored. I need to play!`;
  } else if(this._happy <= 10) {
    petUpdate.innerHTML = `${this._name} is tired out. I need to rest`;
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.innerHTML = `${this._happy} happy level`;
  };
};

};



const newDog = new Animal("Layla");


// console.log(newDog.name);
// console.log(newDog.hunger);
// console.log(newDog.thirst);
// console.log(newDog.happy);
