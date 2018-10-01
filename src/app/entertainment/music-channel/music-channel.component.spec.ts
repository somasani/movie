import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicChannelComponent } from './music-channel.component';

describe('MusicChannelComponent', () => {
  let component: MusicChannelComponent;
  let fixture: ComponentFixture<MusicChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
