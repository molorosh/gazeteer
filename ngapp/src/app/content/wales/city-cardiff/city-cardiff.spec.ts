import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityCardiff } from './city-cardiff';

describe('CityCardiff', () => {
  let component: CityCardiff;
  let fixture: ComponentFixture<CityCardiff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardiff],
    }).compileComponents();

    fixture = TestBed.createComponent(CityCardiff);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
