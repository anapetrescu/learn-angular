import { Component, OnInit } from '@angular/core';
import { ParentService } from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(
    private parentService: ParentService
  ) { }

  ngOnInit(): void {
  }

  title = 'Learn Angular';
  isInputValueLearnAngular: boolean = true;
  middleSchool: any;
  highSchool: any;
  university: any;

  inputChange() {
    if(this.title === "Learn Angular") {
      this.isInputValueLearnAngular = true;
    } else {
      this.isInputValueLearnAngular = false;
    }
  }

  getStudents() {
    this.parentService.getStudents("middleSchool").subscribe((students) => {
      this.middleSchool = students;
    })
    this.parentService.getStudents("highSchool").subscribe((students) => {
      this.highSchool = students;
    })
    this.parentService.getStudents("university").subscribe((students) => {
      this.university = students;
    })
  }

  addPerson(newPerson) {
    // this.people.push(newPerson);
    // console.log(this.people);
  }

}
