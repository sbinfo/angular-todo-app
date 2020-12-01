import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() count;
  @Input() isEmptyList;
  @Output() clearCompleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCompleted(): void {
    this.clearCompleted.emit();
  }

}
