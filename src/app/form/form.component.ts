import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
studentForm!:FormGroup;
// studentData:any=[];
  constructor(private fb:FormBuilder, private svc:StudentService, private rout:Router) { }

  ngOnInit(): void {
    this.creatForm()
  }

  creatForm(){
    this.studentForm=this.fb.group({
      'id':[''],
      'collageName':['',[Validators.required]],
      'class':['',[Validators.required]],
      'studentName':['',[Validators.required]],
      'lastName':['',[Validators.required]],
      'contact':['',[Validators.required]],
      'age':['',[Validators.required]]
    })
  }

  addEntry(){
    return this.studentForm.value
  }
  onSubmit(){
    let data=this.studentForm.value;
    return this.svc.postDataToServer("stud",data).subscribe((data)=>{
      console.log(data);
      this.rout.navigate(['add-form']);
    },
    error=>{
      console.log(error);
    })
}
  
}
