/*
  В гоночной игре есть следующие настройки автомобиля: ABS, Traction Control, Stability Control.
Каждый параметр может меняться от 1 до 5. Для упрощения жизни игрока нужно создать функции Beginner Good Driver Maniac,
которые имеют значения все 5-ки, все 3-ки и все 0 соответсвенно.
 */

// sourse
function setABS(num) {
  if (validator(num)) {
    console.log(` ABS: ${num}`);
    return num;  
  }
}

function setTraction(num) {
  if (validator(num)) {
    console.log(` Traction Control: ${num}`);
    return num;
  }
}
function setStability(num) {
  if (validator(num)) {
    console.log(` Stability Control: ${num}`);
    return num;
  } 
}

function validator(num) {
  if (num > 5 || num < 1) {
    throw new Error("Please, use corret value");
  }
  return true;
}

class Player {
  // Создаем класс игрока с базовыми параметрами
  ABS = 0;
  TractionControl = 0;
  StabilityControl = 0;

  constructor(name) {
    this.name = name;
  }

  setAll(level) {
    this.ABS = setABS(level);
    this.TractionControl = setTraction(level);
    this.StabilityControl = setStability(level);
    console.log("============================");
  }
}

class Beginner extends Player {
  // Наследуемся от класса Player и создаем приватное свойство равное уровню игрока
  #level = 5;
  constructor(name) {
    super(name);
    this.setAll(this.#level);
  }
}

class GoodDriver extends Player {
  // Наследуемся от класса Player и создаем приватное свойство равное уровню игрока
  #level = 3;
  constructor(name) {
    super(name);
    this.setAll(this.#level);
  }
}

class Maniac extends Player {
  // Наследуемся от класса Player и создаем приватное свойство равное уровню игрока
  #level = 1;
  constructor(name) {
    super(name);
    this.setAll(this.#level);
  }
}

// Создаем новых "персонажей"
const beginner = new Beginner("Michail");
const goodDriver = new GoodDriver("Andrew");
const maniac = new Maniac("Mick");

// Выводим результат в консоль
console.log(beginner);
console.log(goodDriver);
console.log(maniac);
