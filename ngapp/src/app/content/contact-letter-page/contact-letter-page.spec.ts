import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactLetterPage } from './contact-letter-page';

describe('ContactLetterPage', () => {
  let component: ContactLetterPage;
  let fixture: ComponentFixture<ContactLetterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLetterPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactLetterPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
