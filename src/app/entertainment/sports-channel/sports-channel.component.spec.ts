import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsChannelComponent } from './sports-channel.component';

describe('SportsChannelComponent', () => {
  let component: SportsChannelComponent;
  let fixture: ComponentFixture<SportsChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
