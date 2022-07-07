const fs = require('fs');

class Model {

nighthawkQuestions;
otterQuestions;
raccooonQuestions;

  constructor() {

  }
  

  loadQuestionsMenuFromFiles() {
    // Придумать формат хранение менюшки вопросов и способ нормально разлочить вопрос-ответ файл
    this.nighthawkQuestions = fs.readFileSync('topics/nighthawk_flashcard_data.txt', 'utf-8').split('\n');
  }

  getQuestionListByCategory(category) {
    // Будет возвращать набор вопросов
    return;
  }

  checkIncorrectAnswer() {

  }
}

module.exports = Model