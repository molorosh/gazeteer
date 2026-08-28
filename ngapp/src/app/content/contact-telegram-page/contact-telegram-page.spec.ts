import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactTelegramPage } from './contact-telegram-page';

describe('ContactTelegramPage', () => {
  let component: ContactTelegramPage;
  let fixture: ComponentFixture<ContactTelegramPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTelegramPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactTelegramPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
