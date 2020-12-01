import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodoItem = new EventEmitter<string>();

  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(e): void {
    if ( e.target.value ) {
      this.addTodoItem.emit( e.target.value );
      e.target.value = ''; // очишаем input
    }
  }

}
