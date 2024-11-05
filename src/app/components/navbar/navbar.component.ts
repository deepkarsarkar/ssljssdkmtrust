import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  //currentDay: any;
  currentYear: any;
  currentMonthNumber: any;
  currentMonth: any;
  currentDate: any;
  currentTime="";
  clockHandle: any;

  ngOnInit(){
    //this.currentDay = new Date();
    this.currentDate = new Date().getDate();
    this.currentMonthNumber =  new Date().getMonth();
    this.currentYear = new Date().getFullYear();
    this.clockHandle = setInterval(()=>{
      // this.currentDateTime = new Date().toLocaleString();
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);

    if (this.currentMonthNumber == 0) {
      this.currentMonth = "January"
    } else if (this.currentMonthNumber == 1) {
      this.currentMonth = "February"
    } else if (this.currentMonthNumber == 2) {
      this.currentMonth = "March"
    } else if (this.currentMonthNumber == 3) {
      this.currentMonth = "April"
    } else if (this.currentMonthNumber == 4) {
      this.currentMonth = "May"
    } else if (this.currentMonthNumber == 5) {
      this.currentMonth = "June"
    } else if (this.currentMonthNumber == 6) {
      this.currentMonth = "July"
    } else if (this.currentMonthNumber == 7) {
      this.currentMonth = "August"
    } else if (this.currentMonthNumber == 8) {
      this.currentMonth = "September"
    } else if (this.currentMonthNumber == 9) {
      this.currentMonth = "October"
    } else if (this.currentMonthNumber == 10) {
      this.currentMonth = "November"
    } else {
      this.currentMonth = "December"
    }
  }
}
