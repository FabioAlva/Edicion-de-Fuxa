import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestModalComponent } from './my-test-modal.component';

describe('MyTestModalComponent', () => {
  let component: MyTestModalComponent;
  let fixture: ComponentFixture<MyTestModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTestModalComponent]
    });
    fixture = TestBed.createComponent(MyTestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
