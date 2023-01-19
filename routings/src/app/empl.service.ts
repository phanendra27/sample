
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';


@Injectable({
  providedIn: 'root'
  
})
export class EmplService {
//   employobj1:string[]=['phanendra','1382','saikumar@gmail.com'];
//   employobj2:string[]=['phanendra','1382','saikumar@gmail.com'];
//   employobj3:string[]=['phanendra','1382','saikumar@gmail.com'];
  
// getemployee1(){
//   return this.employobj1
// }

// getemployee2(){
//   return this.employobj2
// }

// getemployee3(){
//   return this.employobj3
// }

url='../json files/employee.json';

  constructor(private http:HttpClient){
    
  }
datafromhttp():Observable<Employee[]>
{
  return this.http.get<Employee[]>(this.url);
}
  
}

