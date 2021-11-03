import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css']
})
export class RefreshButtonComponent implements OnInit {

  constructor() { }
  @Input() disabled!: boolean;
  @Input() spin!: boolean

  ngOnInit(): void {
  }

}
