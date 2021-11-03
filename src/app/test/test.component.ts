import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  date =new Date();
  seats=30;
  available=20
  booked=0
  user=0
  payment=0
  col="white"
  count=0
  one=0
  two=0
  
  ngOnInit(): void {
  }
  booking(){
   
              if(this.booked>1 && this.user==5){
                
                alert("sorry seats not available")
                return false;
              }
     this.user=this.user+1;
    this.booked=this.booked+1;
              this.one=this.booked+this.seats
              this.two=this.seats-this.booked
   this.payment=this.booked*1000
    return false;
   
  }
  abc(event:any){
    this.col=event.target.value;
    this.col="red"
    this.count=this.count+1
  }
}
