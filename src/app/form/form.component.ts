import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
studentForm!:FormGroup;
// studentData:any=[];
  constructor(private fb:FormBuilder, private svc:StudentService) { }

  ngOnInit(): void {
    this.creatForm()
  }

  creatForm(){
    this.studentForm=this.fb.group({
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
    let x=this.studentForm.value;
    return this.svc.postDataToServer("stud",x).subscribe((data)=>{
      console.log(data);
    })
}
  
}
