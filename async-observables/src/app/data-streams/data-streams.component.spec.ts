import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStreamsComponent } from './data-streams.component';

describe('DataStreamsComponent', () => {
  let component: DataStreamsComponent;
  let fixture: ComponentFixture<DataStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataStreamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
