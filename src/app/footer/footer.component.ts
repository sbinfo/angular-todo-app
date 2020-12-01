import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() filter;
  @Input() isEmptyList;
  @Output() filterText = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeFilter(e): void {
    this.filterText.emit( e.target.innerText.toLowerCase() );
  }

}
