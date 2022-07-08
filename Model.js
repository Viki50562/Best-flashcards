const fs = require('fs');

class Model {

nighthawkQuestions;
otterQuestions;
raccooonQuestions;

  constructor() {

  }
  

  loadQuestionsMenuFromFiles() {
    // функция для перевода из массива строк (полученного из изначального файла) в массив объектов с ключами question и answer
    function infoToQandA(arr) {
      const questionAndAnswer = [];
      for (let i = 0; i < arr.length; i += 3) {
        const obj = {};
        obj.question = arr[i];
        obj.answer = arr[i + 1];
        questionAndAnswer.push(obj);
      }
      return questionAndAnswer
    }

    this.nighthawkQuestions = fs.readFileSync('topics/nighthawk_flashcard_data.txt', 'utf-8').split('\n');
    this.nighthawkQuestions = infoToQandA(this.nighthawkQuestions);

    this.otterQuestions = fs.readFileSync('topics/otter_flashcard_data.txt', 'utf-8').split('\n');
    this.otterQuestions =  infoToQandA(this.otterQuestions);

    this.raccooonQuestions = fs.readFileSync('topics/raccoon_flashcard_data.txt', 'utf-8').split('\n');
    this.raccooonQuestions = infoToQandA(this.raccooonQuestions);
  }

  getQuestionListByCategory(category) {
    // Будет возвращать набор вопросов
    return;
  }

  checkIncorrectAnswer() {

  }
}

module.exports = Model