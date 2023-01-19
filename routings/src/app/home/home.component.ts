import { Component, OnInit } from '@angular/core';

import { EmplService } from '../empl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[EmplService]
})
export class HomeComponent implements OnInit {
  public employees:any;
//   empl1:string[]=[];
//   empl2:string[]=[];
//   empl3:string[]=[];
// getempl1(){
//   this.empl1=this.employee.getemployee1()
// }

// getempl2(){
//   this.empl2=this.employee.getemployee2()
// }

// getempl3(){
//   this.empl3=this.employee.getemployee3()
// }


// constructor(private employee:EmplService){

// }

constructor( private emplservice:EmplService){
}
ngOnInit(){
  this.emplservice.datafromhttp().subscribe(data => this.employees=data);

}




}
