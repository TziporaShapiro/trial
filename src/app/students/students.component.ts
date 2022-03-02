import { Component, OnInit } from '@angular/core';
 import {Student} from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 
  students: Array<Student> = [];
  newStudent: Student;
 
  constructor() { 

  }

  ngOnInit(): void {

    // this.students = new Array<Student>(
    //   {id: 1, name: "Tzip", grade: 100},
    //   {id: 2, name: "Shir", grade: 90},
    //   {id: 3, name: "Shani", grade: 80}
    // )
    
    this.newStudent = new Student(0, "", 0);
    this.students.push({id: 101,  name:"alfred" , grade: 80});
    this.students.push({id: 102,  name:"Tzip" , grade: 99});
    this.students.push({id: 103,  name:"Shir" , grade: 90});

    // this.students = new Array<any>();
// this.students.push({id: 101,  name:"alfred" , grade: 80});
// this.students.push({id: 102,  name:"Tzip" , grade: 99});
// this.students.push({id: 103,  name:"Shir" , grade: 90});

}

btnAddStudent(){
  this.students.push(new Student(this.newStudent.id,this.newStudent.name, this.newStudent.grade ));
}
}
