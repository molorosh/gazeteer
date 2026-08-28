import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityGlasgow } from './city-glasgow';

describe('CityGlasgow', () => {
  let component: CityGlasgow;
  let fixture: ComponentFixture<CityGlasgow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityGlasgow],
    }).compileComponents();

    fixture = TestBed.createComponent(CityGlasgow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
