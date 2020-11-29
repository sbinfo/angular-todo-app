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
    { id: 2, text: 'Make Coffee', completed: false },
    { id: 3, text: 'Create Awesome Apps', completed: false },
  ];

}
