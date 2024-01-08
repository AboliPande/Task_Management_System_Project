import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeftNavComponent } from './user-left-nav.component';

describe('UserLeftNavComponent', () => {
  let component: UserLeftNavComponent;
  let fixture: ComponentFixture<UserLeftNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLeftNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
