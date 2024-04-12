import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormNewTravelComponent } from './form-new-travel.component';

describe('FormNewTravelComponent', () => {
  let component: FormNewTravelComponent;
  let fixture: ComponentFixture<FormNewTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNewTravelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormNewTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
