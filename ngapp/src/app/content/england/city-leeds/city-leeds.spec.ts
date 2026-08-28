import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityLeeds } from './city-leeds';

describe('CityLeeds', () => {
  let component: CityLeeds;
  let fixture: ComponentFixture<CityLeeds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityLeeds],
    }).compileComponents();

    fixture = TestBed.createComponent(CityLeeds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
