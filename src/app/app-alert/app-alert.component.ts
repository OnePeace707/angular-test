import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.css']
})
export class AppAlertComponent implements OnInit {
  
  @Input() product;
  @Output() notify = new EventEmitter();
  
  constructor(
    private dogService : DogService
  ) { }

  ngOnInit() {
  }

  addDog(product){
    window.alert("add a new dog");
    this.dogService.addDog(product);
  }

}