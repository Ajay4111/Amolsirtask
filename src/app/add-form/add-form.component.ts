import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  studentList:Student[]=[];
  constructor(private student:StudentService) { }
  
  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(){
     return this.student.getDataFromServer("stud").subscribe((data:any)=>{
      if(data && data.length > 0){
        this.studentList=data;
      }   });
  }
}
export interface Student{
  studentName:string;
  studentLName:string;
  contact:number;
  age:number
}
