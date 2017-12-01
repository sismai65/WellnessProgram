import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChallengeComponent } from './add-challenge.component';

describe('AddChallengeComponent', () => {
  let component: AddChallengeComponent;
  let fixture: ComponentFixture<AddChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
