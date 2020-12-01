import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  weekDay;
  date;

  @Input() completedCount;
  @Input() notCompletedTodosCount;
  @Input() isEmptyList;
  @Output() clearCompleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    this.date = new Intl.DateTimeFormat('en-US', options).format( new Date() );

    this.weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format( new Date() );

  }

  deleteCompleted(): void {
    this.clearCompleted.emit();
  }

}
