
const petUpdate = document.getElementById('petUpdate');
const petHunger = document.getElementById('petHunger');
const petThirst = document.getElementById('petThirst');
const petHappy = document.getElementById('petHappy');

const foodButton = document.getElementById("feedButton");
const drinkButton = document.getElementById("drinkButton");
const playButton = document.getElementById("playButton");


// button id listeners
foodButton.addEventListener("click", (event) => {
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
  // force scores to stay in range?
  if (this._hunger <= 0){
  this._hunger = 0;
  } else if (this._hunger >= 100){
    this._hunger = 100;
  } else {
  this._hunger -= 10;
  this._thirst += 5;
  this._happy += 5;
  };
}

drink(){
  if (this._thirst <= 0 || this._thirst > 100){
  // out of range do nothing
  } else {
  this._thirst -= 10;
  this._hunger += 5;
  this._happy += 5;
  };
}

play(){
  if (this._happy <= 0 || this._happy > 100){
  // out of range do nothing
  } else {
  this._happy -= 10;
  this._hunger += 5;
  this._thirst += 5;
  };
}

displayScore() {
  petHunger.innerHTML = `Hungry ${this._hunger}`;
  petThirst.innerHTML = `Thirst ${this._thirst}`; 
  petHappy.innerHTML = `Happy ${this._happy}`;
};

checkHunger(){
  if (this._hunger >= 90) {
    petUpdate.innerHTML = `${this._name} wants scooby snacks... FEED ME!`;
  } else if(this._hunger <= 10) {
    petUpdate.innerHTML = `${this._name} is going to burst! No more food`;
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.innerHTML = `mmm tasty!`;
  };
};

checkThirst(){
  if (this._thirst >= 90) {
    petUpdate.innerHTML = `${this._name} is SO thirsty, drinkies please!`;
  } else if(this._thirst <= 10) {
    petUpdate.innerHTML = `${this._name} is not thirsty anymore`;
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.innerHTML = `slurp!`;
  };
};

checkHappy(){
  if (this._happy >= 90) {
    petUpdate.innerHTML = `${this._name} is bored. I need to play!`;
  } else if(this._happy <= 10) {
    petUpdate.innerHTML = `${this._name} is tired out. I need to rest`;
  } else {
    // Link to DOM element ID here - maybe swap dog image
    petUpdate.innerHTML = `woof! woof!`;
  };
};

};



const newDog = new Animal("Layla");


// console.log(newDog.name);
// console.log(newDog.hunger);
// console.log(newDog.thirst);
// console.log(newDog.happy);
