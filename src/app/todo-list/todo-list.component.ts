import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos;
  @Output() indexForDelete = new EventEmitter<number | string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTodoStatus(e): void {
    console.log(e);
  }

  indexForDeleteSendToApp(index: number | string): void {
    this.indexForDelete.emit(index);
  }

}
