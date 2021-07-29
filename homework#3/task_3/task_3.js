/* Задание 3
  Реализовать класс, который в методе getUsers будет получать данные пользователя
 из https://randomuser.me/api/и выводить их в консоль в человекочитаемом формате.
 Конструктор класса должен принимать количество пользователей N<number>, которое нужно запросить.
*/

const fetch = require('node-fetch');

const requiredNumOfPeople = 3;

class RandomUsers {
  #URL = 'https://randomuser.me/api/'

  fetchUsersData = (numOfPeople) => fetch(`${this.#URL}?results=${numOfPeople}`)
    .then((res) => res.json()); // Getting user data

  getUsers = (numOfPeople) => this.fetchUsersData(numOfPeople);
}

const UserList = new RandomUsers();

const prom = new Promise((resolve) => {
  resolve(UserList.getUsers(requiredNumOfPeople));
});

// Output the result to the console in a beautiful form
prom.then((data) => console.log(JSON.stringify(data.results, null, 4)));
