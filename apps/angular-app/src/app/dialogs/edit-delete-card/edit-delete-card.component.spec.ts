import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDeleteCardComponent } from './edit-delete-card.component';

describe('EditDeleteCardComponent', () => {
  let component: EditDeleteCardComponent;
  let fixture: ComponentFixture<EditDeleteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeleteCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDeleteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
