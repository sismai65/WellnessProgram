import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesListAdminComponent } from './challenges-list-admin.component';

describe('ChallengesListAdminComponent', () => {
  let component: ChallengesListAdminComponent;
  let fixture: ComponentFixture<ChallengesListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
