/* Задание 3
  Реализовать класс, который в методе getUsers будет получать данные пользователя
 из https://randomuser.me/api/и выводить их в консоль в человекочитаемом формате.
 Конструктор класса должен принимать количество пользователей N<number>, которое нужно запросить.
*/

const fetch = require('node-fetch');

const requiredNumOfPeople = 3;

class RandomUsers {
  #URL = 'https://randomuser.me/api/'

  constructor(numOfPeople) {
    this.numOfPeople = numOfPeople;
  }

  fetchUsersData = () => fetch(this.#URL)
    .then((res) => res.json()); // Getting user data

  logUserList = (arr) => { // Output the result to the console in a beautiful form
    arr.forEach((item) => {
      console.log(JSON.stringify(...item.results, null, 4));
    });
  }

  async getUsers() {
    const list = [];

    for (let i = 0; i < this.numOfPeople; i += 1) {
      list.push(this.fetchUsersData()); // Create array of promise
    }

    return this.logUserList(await Promise.all(list)); // Waiting for all promises to be done
  }
}

const UserList = new RandomUsers(requiredNumOfPeople);

UserList.getUsers();
