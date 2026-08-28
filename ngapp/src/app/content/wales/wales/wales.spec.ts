import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Wales } from './wales';

describe('Wales', () => {
  let component: Wales;
  let fixture: ComponentFixture<Wales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wales],
    }).compileComponents();

    fixture = TestBed.createComponent(Wales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
