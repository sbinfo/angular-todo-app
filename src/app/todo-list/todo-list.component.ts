import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos;
  @Output() indexForDelete = new EventEmitter<number | string>();
  @Output() changedTodoStatus = new EventEmitter<number | string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTodoStatus(e): void {
    this.changedTodoStatus.emit(e);
  }

  indexForDeleteSendToApp(index: number | string): void {
    this.indexForDelete.emit(index);
  }

}
