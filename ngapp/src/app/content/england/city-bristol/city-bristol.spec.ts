import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityBristol } from './city-bristol';

describe('CityBristol', () => {
  let component: CityBristol;
  let fixture: ComponentFixture<CityBristol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityBristol],
    }).compileComponents();

    fixture = TestBed.createComponent(CityBristol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
