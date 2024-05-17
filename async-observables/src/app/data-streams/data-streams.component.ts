import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatastreamService } from '../../services/datastream.service';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-data-streams',
  standalone: true,
  imports: [],
  templateUrl: './data-streams.component.html',
  styleUrl: './data-streams.component.css',
  // providers: [DatastreamService]
})
export class DataStreamsComponent implements OnInit, OnDestroy {
  realTimeData: number = 0;
  realTimeDataArr: number[] = [];
  realTimeDataSubscription!: Subscription;

  // constructor(private dataStreamService: DatastreamService) { }

  ngOnInit() {
    // this.realTimeDataSubscription = interval(1000).subscribe((data) => {
    //   this.realTimeData = data;
    // });
  }

  ngOnDestroy() {
  }
}
