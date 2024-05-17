import { Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { DataStreamsComponent } from './data-streams/data-streams.component';
import { ObservablesComponent } from './observables/observables.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { LiveStockComponent } from './live-stock/live-stock.component';
import { PromisesComponent } from './promises/promises.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { SubjectComponent } from './subject/subject.component';
import { ObservableSubjectComponent } from './observable-subject/observable-subject.component';
import { SharedDataComponent } from './shared-data/shared-data.component';

export const routes: Routes = [
  {
    path: 'agenda',
    pathMatch: 'full',
    component: AgendaComponent
  },
  {
    path: 'dataStreams',
    pathMatch: 'full',
    component: DataStreamsComponent
  },
  {
    path: 'callbacks',
    pathMatch: 'full',
    component: CallbacksComponent
  },
  {
    path: 'observables',
    pathMatch: 'full',
    component: ObservablesComponent
  },
  {
    path: 'liveStock',
    pathMatch: 'full',
    component: LiveStockComponent
  },
  {
    path: 'promises',
    pathMatch: 'full',
    component: PromisesComponent
  },
  {
    path: 'promiseObservable',
    pathMatch: 'full',
    component: PromiseObservableComponent
  },
  {
    path: 'subject',
    pathMatch: 'full',
    component: SubjectComponent
  },
  {
    path: 'observableSubject',
    pathMatch: 'full',
    component: ObservableSubjectComponent
  },
  {
    path: 'sharedData',
    pathMatch: 'full',
    component: SharedDataComponent
  }
];
