import { Component } from '@angular/core';

interface Todo {
  id: number | string;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Переменная для изменение цвета кнопки выбора всех елементов
  isSelectedAll = false;

  todos: Todo[] = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Make Coffee', completed: true },
    { id: 3, text: 'Create Awesome Apps', completed: false },
  ];

  addItem(newItem: string): void {
    // создаем id из времени
    const index = new Date().getTime();
    // Создаем новый обьект и передаем туда новый Todo
    const newItemObj: Todo = {
      id: index,
      text: newItem,
      completed: false
    };

    // Добавляем новый todo в начале списка
    this.todos.unshift(newItemObj);
  }

  deleteTodo(id): void {
    this.todos =  this.todos.filter( item => item.id !== id );
  }

  clearCompleted(): void {
    this.todos = this.todos.filter( item => !item.completed);
  }

  selectAll(): void {
    // Сначало получаем выполненных задач
    const completedItems = this.todos.filter( item => item.completed );
    // Получаем их количество
    const itemsCount = Object.keys( completedItems ).length;

    // если itemsCount больше или равно нулю то устанавливаем всем задачам completed: true
    if (itemsCount >= 0) {
      // tslint:disable-next-line:forin
      for (const key in this.todos) {
        this.todos[key].completed = true;
      }

      this.isSelectedAll = true;
    }

    // Иначе если количество выполненных задач равно количество всех елементов в чписке то,
    // всем елементам устанавливаем обратное значение (false)
    if (itemsCount === Object.keys(this.todos).length) {
      // tslint:disable-next-line:forin
      for (const key in this.todos) {
        this.todos[key].completed = false;
      }

      this.isSelectedAll = false;
    }
  }

  notCompletedTodosCount(): number {
    return this.todos.filter( item => !item.completed ).length;
  }

}
