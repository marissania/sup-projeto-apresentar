import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/user';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  user$: Observable<User>;
  authenticated$: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private router: Router) {
    this.user$ = this.authService.getUser();
    this.authenticated$ = this.authService.authenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
