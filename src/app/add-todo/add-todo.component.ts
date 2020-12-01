import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Input() isSelectedAll;
  @Output() addTodoItem = new EventEmitter<string>();
  @Output() selectAllItems = new EventEmitter();

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

  selectAll(): void {
    this.selectAllItems.emit();
  }

}
