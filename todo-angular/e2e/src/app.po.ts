import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('todo-root .content span')).getText() as Promise<string>;
  }

  fillTodoInput(text: string) {
    return element(by.css('todo-form form input')).sendKeys(text);
  }

  submitForm() {
    return element(by.css('todo-form form')).submit();
  }

  getFirstTodoText() {
    return element(by.css('todo-root todo-list todo-item:first-child span')).getText() as Promise<string>;
  }
}
