import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callbacks',
  standalone: true,
  imports: [],
  templateUrl: './callbacks.component.html',
  styleUrl: './callbacks.component.css'
})
export class CallbacksComponent implements OnInit {
  greetText: string = '';
  goodByeText: string = '';
  num: number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

  greet(name: string, callback: Function) {
    this.greetText = 'Hello ' + name;
    this.goodByeText = 'Goodbye';
    callback(this.num);
  }

  sayGoodbye(myNum: number) {
    setInterval(() => {
      myNum = Math.random() * 100;
      console.log(myNum);
    }, 1000);
  }

  fnCallback() {
    this.greet('Shani', this.sayGoodbye);
  }
}
