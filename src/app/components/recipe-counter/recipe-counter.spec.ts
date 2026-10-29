import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCounter } from './recipe-counter';

describe('RecipeCounter', () => {
  let component: RecipeCounter;
  let fixture: ComponentFixture<RecipeCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
