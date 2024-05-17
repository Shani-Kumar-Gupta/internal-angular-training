import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {
  constructor(){}
  
  ngOnInit() {
    // promise
    // const promise = new Promise((resolve, reject) => {
    //   let isError = false;
    //   if (!isError) {
    //     setTimeout(() => {
    //       resolve('Promise Resolved');
    //     }, 1000);
    //   } else {
    //     reject(new Error('SOmething went wrong'));
    //   }
    // });

    // promise.then((data) => {
    //   console.log(data);
    // }).catch((err) => {
    //   console.log(err);
    // });
  }
}
