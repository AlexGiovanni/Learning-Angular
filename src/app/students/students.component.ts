import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  url = 'https://www.hatchways.io/api/assessment/students';
  students: Array<any>;
  average = 0;

  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data =>{
      //console.log("data: "+JSON.stringify(data) )
      this.students = data["students"];
    });
  }


  

  ngOnInit(): void {
  }

}
