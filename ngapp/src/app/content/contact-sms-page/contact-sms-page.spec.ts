import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSmsPage } from './contact-sms-page';

describe('ContactSmsPage', () => {
  let component: ContactSmsPage;
  let fixture: ComponentFixture<ContactSmsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSmsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSmsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
