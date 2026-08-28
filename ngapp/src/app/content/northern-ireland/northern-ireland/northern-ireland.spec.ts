import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernIreland } from './northern-ireland';

describe('NorthernIreland', () => {
  let component: NorthernIreland;
  let fixture: ComponentFixture<NorthernIreland>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthernIreland],
    }).compileComponents();

    fixture = TestBed.createComponent(NorthernIreland);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
