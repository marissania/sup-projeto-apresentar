import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  }) ;

  loading: (boolean) = false;

  constructor(
    private  fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  private loginOkNotificaion(u: User) {
    this.snackBar.open(
      'Login Realizado com Sucesso.Bem Vindo' + u.firstname + '!', 'OK', {duration: 2000}
    );
  }

  // se houver um erro ele chama essa função
  private loginErrorNotificaion(err) {
    this.snackBar.open(err, 'OK', {duration: 2000}
    );
  }

  onSubmit() {
    this.loading = true;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password)

      .subscribe(
        (u) => {
          this.loginOkNotificaion(u);
          this.router.navigateByUrl('auth/homefuncionario');
          this.loading = false;
        },
        (err) => {
          this.loginErrorNotificaion(err);
          this.loading = false;
        }
      );

  }

  loginGoogle() {
    this.loading = true;
    this.authService.loginGoogle()
    .subscribe(
      (u) => {
          this.loginOkNotificaion(u);
          this.router.navigateByUrl('auth/homefuncionario');
          this.loading = false;
      },
      (err) => {
        this.loginErrorNotificaion(err);
        this.loading = false;
      }
    );

  }

}
