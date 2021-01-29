import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTypeListComponent } from './pet-type-list.component';

describe('PetTypeListComponent', () => {
  let component: PetTypeListComponent;
  let fixture: ComponentFixture<PetTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
