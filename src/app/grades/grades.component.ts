import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  @Input('grades') grades: Array<any>;
  average: number = 0.0;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {  
     
    for(let i =0; i <  this.grades.length; i++){
      this.average = this.average + parseFloat(this.grades[i]);
    }
    this.average = this.average/this.grades.length;
    this.childEvent.emit(this.average);
  }

}
