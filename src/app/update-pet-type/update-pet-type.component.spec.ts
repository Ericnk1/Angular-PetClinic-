import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePetTypeComponent } from './update-pet-type.component';

describe('UpdatePetTypeComponent', () => {
  let component: UpdatePetTypeComponent;
  let fixture: ComponentFixture<UpdatePetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePetTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
