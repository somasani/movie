import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicitemComponent } from './musicitem.component';

describe('MusicitemComponent', () => {
  let component: MusicitemComponent;
  let fixture: ComponentFixture<MusicitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
