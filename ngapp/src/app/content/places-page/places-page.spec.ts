import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesPage } from './places-page';

describe('PlacesPage', () => {
  let component: PlacesPage;
  let fixture: ComponentFixture<PlacesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
