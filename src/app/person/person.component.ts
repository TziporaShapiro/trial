import { Component, OnInit } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
public person:Person;
  constructor() { }

  ngOnInit(): void {
    this.person = new Person();
    this.person.name = "Miriam";
    this.person.id = 70
  }
  btnOnClick(): void{
    this.person.name = this.person.name + " *";
  }
}
