import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.css']
})
export class AppAlertComponent implements OnInit {
  
  @Input() product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}