import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityDublin } from './city-dublin';

describe('CityDublin', () => {
  let component: CityDublin;
  let fixture: ComponentFixture<CityDublin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityDublin],
    }).compileComponents();

    fixture = TestBed.createComponent(CityDublin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
