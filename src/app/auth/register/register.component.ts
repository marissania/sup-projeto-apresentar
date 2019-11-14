import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { equal } from 'assert';
import { User } from '../user';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  formRegister: FormGroup = this.fb.group({

    firstname: [ ' ', [Validators.required] ],
    lastname: ['', [Validators.required]],
    address: ['', [ ]],
    city: ['', [ ]],
    state: ['', []],
    phone: ['', []],
    mobilephone: ['', []],
    email: ['', [Validators.required, Validators.email, ]],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  },
  { validators: this.matchingPasswords} );

  states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO' , 'RR', 'SC', 'SP', 'SE', 'TO' , 'DF'];



  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  matchingPasswords(group: FormGroup) {
    if (group) {
      const password1 =  group.controls.password1.value;
      const password2 =  group.controls.password2.value;

      if (password1 === password2 ) {
        return null;
      }
    }
    return { matchingPasswords: false} ;

  }

  onSubmit() {
    const newUser: User = {
      firstname: this.formRegister.value.firstname,
      lastname: this.formRegister.value.lastname,
      address: this.formRegister.value.address,
      city: this.formRegister.value.city,
      state: this.formRegister.value.state,
      phone: this.formRegister.value.phone,
      mobilephone: this.formRegister.value.mobilephone,
      email: this.formRegister.value.email,
      password: this.formRegister.value.password1,
    };

    this.authService.register(newUser)
    .subscribe(
      (u) => {
        this.snackBar.open (
          'Cadastro realizado com sucesso', 'OK', {duration: 2000}
        );
        this.router.navigateByUrl ('/auth/login');
      },
      (err) => {
        console.log(err);
        this.snackBar.open(
          'Erro a se cadastraro email ja cadastrado', 'OK', {duration: 2000}
        );
      }
    );


    }}
