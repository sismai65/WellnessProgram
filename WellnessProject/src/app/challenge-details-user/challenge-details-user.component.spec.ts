import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDetailsUserComponent } from './challenge-details-user.component';

describe('ChallengeDetailsUserComponent', () => {
  let component: ChallengeDetailsUserComponent;
  let fixture: ComponentFixture<ChallengeDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
