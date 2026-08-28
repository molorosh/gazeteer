import { Routes } from '@angular/router';

import { RouteGuard } from './services/route-guard';

import { HomePage } from './content/home-page/home-page';
import { AboutPage } from './content/about-page/about-page';
import { ContactPage } from './content/contact-page/contact-page';
import { PlacesPage } from './content/places-page/places-page';
import { NotFoundPage } from './content/not-found-page/not-found-page';
import { England } from './content/england/england/england';
import { Scotland } from './content/scotland/scotland/scotland';
import { Wales } from './content/wales/wales/wales';
import { NorthernIreland } from './content/northern-ireland/northern-ireland/northern-ireland';

import { ContactTelegramPage } from './content/contact-telegram-page/contact-telegram-page';
import { ContactEmailPage } from './content/contact-email-page/contact-email-page';
import { ContactSmsPage } from './content/contact-sms-page/contact-sms-page';

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      { path: '', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'contact', component: ContactPage },
      { path: 'contact/telegram', component: ContactTelegramPage },
      { path: 'contact/email', component: ContactEmailPage },
      { path: 'contact/sms', component: ContactSmsPage },
      { path: 'places', component: PlacesPage,
        children: [
          { path: 'england', component: England },
          { path: 'scotland', component: Scotland },
          { path: 'wales', component: Wales },
          { path: 'northern-ireland', component: NorthernIreland },
        ]
      },
      { path: '**', component: NotFoundPage }
    ]
  }
];
