import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { PacienteComponent } from './paciente/paciente.component';
import { HomefuncionarioComponent } from './homefuncionario/homefuncionario.component';
import { MatButtonModule } from '@angular/material';
import { Ficharesolve } from './paciente/fichapaciente/ficharesolve';
import { FichapacienteComponent } from './paciente/fichapaciente/fichapaciente.component';
import { PacienteService } from './paciente/paciente.service';
import { AuthGuardService } from './auth-guard.service';
import { AppComponent } from '../app.component';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [LoginComponent,
     RegisterComponent,
     ProntuarioComponent,
     PacienteComponent,
     HomefuncionarioComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    MatButtonModule,
    TextMaskModule
  ],
  providers: [
    Ficharesolve,
    FichapacienteComponent,
    PacienteService,
    AuthGuardService],
    bootstrap: [AppComponent]
})
export class AuthModule { }
