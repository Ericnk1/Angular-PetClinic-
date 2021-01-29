import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVetComponent } from './update-vet.component';

describe('UpdateVetComponent', () => {
  let component: UpdateVetComponent;
  let fixture: ComponentFixture<UpdateVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
