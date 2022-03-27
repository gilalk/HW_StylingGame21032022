import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  phone: string;
  birthday: number;
  contact: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User = {
    name: 'Gil',
    email: 'gil.all@gmail.com',
    phone: '0505998776',
    birthday: Date.parse('1991-02-26'),
    contact: 'phone',
  }

  styles = {};

  constructor() { 
    this.setStyles();
    this.setMyClasses();
  }

  isSpecial: boolean = true;
  colorForP:string = 'red';
  hasSpecialBackground:boolean = true;

  myClasses:any = {};

  ngOnInit(): void {
  }

  ChangeColor(){
    this.hasSpecialBackground = !this.hasSpecialBackground;
    this.isSpecial = !this.isSpecial;
  }

  setStyles(){
    this.styles = {
      'font-size' : '40px',
      'color' : this.isSpecial ? this.colorForP : 'bordo',
      'background-color' : this.hasSpecialBackground ? 'turquoise' : 'blumarine'
    }
  }

  setMyClasses(){
    this.myClasses = {
      firstClass : true,
      secondClass : true
    }
  }
}
