// Времена года
function game_1() {
  let nameMonth = Number(prompt("Введите число месяца"));
  function seasons(num) {
    if (num <= 0 || num >= 13) {
      alert("Вы ввели не корректное число");
    } else if (num === 1 || num === 2 || num === 12) {
      alert("Зима");
    } else if (num === 3 || num === 4 || num === 5) {
      alert("Весна");
    } else if (num === 6 || num === 7 || num === 8) {
      alert("Лето");
    } else if (num === 9 || num === 10 || num === 11) {
      alert("Осень");
    } else {
    }
  }
  seasons(nameMonth);
}

// Запомни слова

function game_2() {
  let list = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  list = list.sort(() => Math.random() - 0.5);
  alert(list);
  let namefruit1 = prompt("Введите первый фрукт");
  let namefruit2 = prompt("Введите последний  фрукт");
  if (
    namefruit1.toLowerCase() === list[0].toLowerCase() &&
    namefruit2.toLowerCase() === list[6].toLowerCase()
  ) {
    alert("Молодец");
  } else if (
    list[0].toLowerCase() === namefruit1.toLowerCase() ||
    list[6].toLowerCase() === namefruit2.toLowerCase()
  ) {
    alert("Ты был близок");
  } else {
    alert("Попробуй еще");
  }
}

// Загадки
function game_3() {
  const secret = {
    question: "Висит груша нельзя скушать",
    answer: "лампочка",
    hints: ["... Ильича", "Висит на потолке"],
    askQuestion() {
      let userAnswer = prompt(this.question).toLowerCase();
      for (let i = 0; i < this.hints.length; i++) {
        if (this.answer === userAnswer) {
          alert("Это правильный ответ");
          return;
        }
        if (this.answer !== userAnswer) {
          alert(this.hints[0]);
          console.log(userAnswer);
        }
        let userAnswer2 = prompt(this.question).toLowerCase();
        if (this.answer === userAnswer2) {
          alert("Это правильный ответ");
          return;
        }
        if (this.answer !== userAnswer) {
          alert(this.hints[1]);
        }
        let userAnswer3 = prompt(this.question).toLowerCase();
        if (this.answer === userAnswer3) {
          alert("Это правильный ответ");
          return;
        } else {
          alert("Ты проиграл");
          break;
        }
      }
    },
  };

  secret.askQuestion();
}
