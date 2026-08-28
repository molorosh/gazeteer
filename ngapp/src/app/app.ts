import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteMap } from "./navigation/site-map/site-map";

@Component({
  imports: [RouterOutlet, SiteMap],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Gazeteer');
}
