import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl:string="http://localhost:3000/";

httpHeader:HttpHeaders=new HttpHeaders()
                      .set('content-type','application/json');

  constructor(private http:HttpClient) { }

  getDataFromServer(endPoint:string){
    let url=this.baseUrl+endPoint
   return this.http.get(url,{'headers':this.httpHeader});
  }

  postDataToServer(endPoint:string, requestBody:any){
    let url=this.baseUrl+endPoint
   return this.http.post(url,requestBody,{'headers':this.httpHeader})
  }
}
