import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() students;
  @Output() newStudent = new EventEmitter<any>();

  first_name: string;
  last_name: string;
  age: number;
  constructor() { }

  ngOnInit(): void {
  }

  addStudent() {
    const student = {
      firstName: this.first_name,
      lastName: this.last_name,
      age: this.age
    }
    this.newStudent.emit(student);
  }

}
