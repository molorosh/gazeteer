import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Implement your route guard logic here
    return true;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
