import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactEmailPage } from './contact-email-page';

describe('ContactEmailPage', () => {
  let component: ContactEmailPage;
  let fixture: ComponentFixture<ContactEmailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactEmailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactEmailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
