'use strict'

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const gameStart = function () {
  const number = Math.floor(Math.random() * 100)
  let count = 10
  let usernum = prompt('Угадай число от 1 до 100')

  const play = function () {
    if (usernum === null) {
      alert('Спасибо, что были с нами')
      return
    }
    if (!isNumber(+usernum) && +usernum !== null) {
      usernum = prompt(`Введи число! ${count}`)
      return play()
    }
    if (count > 0) {
      if (+usernum === number) {
        alert('Поздравляю, Вы угадали!!!');
      }
      else if (+usernum > number) {
        usernum = prompt(`Загаданное число меньше, осталось попыток ${count}`)
        count--;
        return play()
      }
      else if (usernum < number) {
        usernum = prompt(`Загаданное число больше, осталось попыток ${count}`)
        count--;
        return play()
      } else {
        alert('Игра окончена!')
      }
    } else {
      confirm('Попытки закончились, хотите сыграть еще?') ? gameStart() : alert('КОНЕЦ ИГРЫ')
    }
  }
  return play()
}

gameStart()