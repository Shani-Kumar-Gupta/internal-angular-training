import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  listItems: { pathId: number; pathName: string; pathURL: string }[] = [
    {
      pathId: 0,
      pathName: 'Agenda',
      pathURL: '/agenda'
    },
    {
      pathId: 1,
      pathName: 'Asychronous Programming',
      pathURL: '/asyncProgramming',
    },
    {
      pathId: 2,
      pathName: 'Data Streams',
      pathURL: '/dataStreams',
    },
    {
      pathId: 3,
      pathName: 'Callback Functions',
      pathURL: '/callbacks',
    },
    {
      pathId: 4,
      pathName: 'Promises',
      pathURL: '/promises',
    },
    {
      pathId: 5,
      pathName: 'Async Await',
      pathURL: '/asyncAwait',
    },
    {
      pathId: 6,
      pathName: 'Observables',
      pathURL: '/observables',
    },
    {
      pathId: 7,
      pathName: 'Live Stock',
      pathURL: '/liveStock',
    },
    {
      pathId: 8,
      pathName: 'Promise vs Observable',
      pathURL: '/promiseObservable'
    },
    {
      pathId: 9,
      pathName: 'Subject',
      pathURL: '/subject'
    },
    {
      pathId: 10,
      pathName: 'Observable vs Subject',
      pathURL: '/observableSubject'
    },
    {
      pathId: 11,
      pathName: 'Shared Data b/w Component',
      pathURL: '/sharedData'
    },
    {
      pathId: 12,
      pathName: 'Behavior Subject',
      pathURL: '/behaviorSubject'
    },
    {
      pathId: 13,
      pathName: 'Reply Subject',
      pathURL: '/replySubject'
    },
    {
      pathId: 14,
      pathName: 'Async Subject',
      pathURL: '/asyncSubject'
    }
  ];
  constructor(private route: Router) {}

  // listTrackBy(
  //   idx: number,
  //   item: { pathId: number; pathName: string; pathURL: string }
  // ) {
  //   return item.pathId;
  // }

  navigate(item: { pathId: number; pathName: string; pathURL: string }) {
    this.route.navigate([item.pathURL]);
  }
}
