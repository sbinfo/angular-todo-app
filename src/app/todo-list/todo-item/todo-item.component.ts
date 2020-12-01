import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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

  @ViewChild('edit') editInput: ElementRef;

  faCheck = faCheck;
  faTimes = faTimes;

  toEditMode = false;

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

  editMode(): void {
    // Почему то метод focus() не хотел работать пока его не обернул в setTimeout
    // надо будет выяснить из за чего так
    setTimeout(() => {
      this.editInput.nativeElement.focus();
    }, 0);
    this.toEditMode = true;
  }

  doneEdit(event): void {
    this.toEditMode = false;
    this.todo.text = event.target.value;
  }

  doneCancel(e): void {
    this.toEditMode = false;
    e.target.value = this.todo.text;
  }

}
