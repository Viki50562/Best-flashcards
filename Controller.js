class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  run() {
    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом  
    //this.model.readTopics(this.printTopicsController)


    this.model.loadQuestionsMenuFromFiles();

    this.view.showCategories(['Ястребы', 'Выдры', 'Еноты']);
    const selectedCategory = this.view.getCategory();

    this.model.getQuestionListByCategory(selectedCategory);
    
    const arrQuestions = this.model.getQuestionListByCategory(selectedCategory);
    this.view.showQuestion(arrQuestions);

    // далее зная выбранную челом категорию можно обратиться к модели и попросить у модели список вопросов
    // затем обратиться ко view и вызвать функцию showQuestion
  
    
  }

  printTopicsController(topicsMenu) {
    // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
    // а также дождаться ответа последнего
  }

  
}

module.exports = Controller