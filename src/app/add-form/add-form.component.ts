import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  studentList:Student[]=[];
  constructor(private student:StudentService, private rout:Router) { }
  
  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(){
     return this.student.getDataFromServer("stud").subscribe((data:any)=>{
      if(data && data.length > 0){
        this.studentList=data;
      }   });
  }

  editStudentDetails(id:number){
    this.rout.navigate(['editStudentDetails',id]);
    
  }
}
export interface Student{
  id:number;
  collageName:string;
  class:string;
  studentName:string;
  lastName:string;
  contact:number;
  age:number
}
