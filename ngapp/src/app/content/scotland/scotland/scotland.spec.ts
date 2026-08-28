import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Scotland } from './scotland';

describe('Scotland', () => {
  let component: Scotland;
  let fixture: ComponentFixture<Scotland>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scotland],
    }).compileComponents();

    fixture = TestBed.createComponent(Scotland);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
