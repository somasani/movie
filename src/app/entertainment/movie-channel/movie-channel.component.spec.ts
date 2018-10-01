import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieChannelComponent } from './movie-channel.component';

describe('MovieChannelComponent', () => {
  let component: MovieChannelComponent;
  let fixture: ComponentFixture<MovieChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
