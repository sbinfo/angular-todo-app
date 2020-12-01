import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo;
  @Output() newTodoStatus = new EventEmitter<number | string>();
  @Output() indexForDelete = new EventEmitter<number | string>();

  faCheck = faCheck;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(): void {
    // this.todo.completed = !this.todo.completed;
    this.newTodoStatus.emit( this.todo.id );
  }

  deleteItem(): void {
    this.indexForDelete.emit( this.todo.id );
  }

}
