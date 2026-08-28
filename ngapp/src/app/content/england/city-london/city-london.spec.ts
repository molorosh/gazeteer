import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityLondon } from './city-london';

describe('CityLondon', () => {
  let component: CityLondon;
  let fixture: ComponentFixture<CityLondon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityLondon],
    }).compileComponents();

    fixture = TestBed.createComponent(CityLondon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
