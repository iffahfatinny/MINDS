import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  // details : Detail[]=[];
  details = {
    name: 'iffah',
    password: '123456'
  };

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  signIn(formValue : NgForm) {
     if(this.details.name == 'iffah'){
       if(this.details.password == '123456'){
          window.location.href = 'landing';
          console.log(formValue.value);
       }
      }
      else  
      console.log('wrong password & name');
    
  }

}
