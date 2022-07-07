const readLine = require('readline');

class View {
  rl; 
  constructor() {
    this.rl = readLine.createInterface(process.stdin, process.stdout);
  }

  //Тут вывожу просто конкретный вопрос
  showQuestion(question) {
    this.rl.question(question, (answer) => {
      // console.log(answer) (просто проверочный);

      //Тут вызываю Controller, в метод которого полетят вопрос и ответ, но это неточно!!!

    })
  }

  //Тут вывожу эмодзи в зависимости от результата проверки ответа из модели
  showResult(check) {

  }


  showCategories(categoriasList) {
    categoriasList.forEach((el, index) => {
      console.log(`${index + 1}. ${el}`);
    });
  }
}

module.exports = View