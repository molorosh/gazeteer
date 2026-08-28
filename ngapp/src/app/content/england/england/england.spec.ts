import { ComponentFixture, TestBed } from '@angular/core/testing';
import { England } from './england';

describe('England', () => {
  let component: England;
  let fixture: ComponentFixture<England>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [England],
    }).compileComponents();

    fixture = TestBed.createComponent(England);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
