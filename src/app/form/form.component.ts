import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
studentForm!:FormGroup;
selectedId!:number;
editAction:boolean=false;
  constructor(private fb:FormBuilder, private svc:StudentService, private rout:Router, private router:ActivatedRoute) { 
    console.log(router);
  }
 
  ngOnInit(): void {
    this.creatForm();
   
    const id=this.router.snapshot.paramMap.get('id');
    if(id){
      this.selectedId=Number(id);
      this.editAction= true;
      this.getStudentDetailsById(this.selectedId);
    }
    // console.log(id);
    
  }

getStudentDetailsById(id:number){
  let path="stud/"+id;
  this.svc.getDataFromServer(path).subscribe((data)=>{
    if(data ){
      this.studentForm.patchValue(data);
    }
    // console.log(data);
  })
}




  creatForm(){
    this.studentForm=this.fb.group({
      'id':[],
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
    if(this.editAction){
      //edit data
      this.updateStudentDetails(this.selectedId)
    }else{
      //ad new data
      this.addStudentDetails();
    }}
    
    addStudentDetails(){
    let data=this.studentForm.value;
    // data.Eid="E"+Math.floor(Math.random()*1000000);
     this.svc.postDataToServer("stud",data).subscribe((data)=>{
      console.log(data);
      alert("Student added successfully.....");
      this.rout.navigate(['add-form']);
      // this.studentForm.reset();
    },
    error=>{
      alert("something wrong....")
      console.log(error);
    })
  }
    updateStudentDetails(id:number){
      let path="stud/"+id;
      let data=this.studentForm.value;
this.svc.putDataToServer(path,data).subscribe((response)=>{
  console.log(response);
})
    }
}
  

