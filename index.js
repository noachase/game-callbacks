'use strict'

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const gameStart = function () {
  const number = Math.floor(Math.random() * 100)
  let count = 3
  let usernum = +prompt('Угадай число от 1 до 100'); // получим число введенное пользователем

  function play() {
    console.log("🚀 ~answer", number)
    if (!isNumber(+usernum) && +usernum !== null) {
      console.log('is num', typeof usernum)
      usernum = +prompt(`Введи число! ${count}`)
      return play()
    } else if (+usernum === null || typeof +usernum === 'string') {
      alert('YOU ARE DONE HERE')
    }
    if (count > 0) {
      if (+usernum === number) {
        alert('Поздравляю, Вы угадали!!!');
      }
      else if (+usernum > number) {
        count--;
        usernum = prompt(`Загаданное число меньше, осталось попыток ${count}`)
        console.log('1', usernum, count)
        if (usernum === null) {
          alert('YOU ARE DONE HERE')
        }
        return play()
      }
      else if (usernum < number) {
        count--;
        usernum = prompt(`Загаданное число больше, осталось попыток ${count}`)
        console.log('2', usernum, count)
        return play()
      } else {
        alert('Игра окончена!')
      }
    } else {
      confirm('Попытки закончились, хотите сыграть еще?') ? gameStart() : alert('ЭТО КОНЕЦ')
      console.log('3', count)
    }
  }
  return play()
}

gameStart()