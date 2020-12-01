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

}
