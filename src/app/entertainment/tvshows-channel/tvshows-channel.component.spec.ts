import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsChannelComponent } from './tvshows-channel.component';

describe('TvshowsChannelComponent', () => {
  let component: TvshowsChannelComponent;
  let fixture: ComponentFixture<TvshowsChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
