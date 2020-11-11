import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredContentComponent } from './secured-content.component';

describe('SecuredContentComponent', () => {
  let component: SecuredContentComponent;
  let fixture: ComponentFixture<SecuredContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuredContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
