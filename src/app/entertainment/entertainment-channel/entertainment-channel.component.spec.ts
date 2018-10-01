import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentChannelComponent } from './entertainment-channel.component';

describe('EntertainmentChannelComponent', () => {
  let component: EntertainmentChannelComponent;
  let fixture: ComponentFixture<EntertainmentChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
