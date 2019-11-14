import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomefuncionarioComponent } from './homefuncionario/homefuncionario.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { PacienteComponent } from './paciente/paciente.component';
import { FichapacienteComponent } from './paciente/fichapaciente/fichapaciente.component';
import { Ficharesolve } from './paciente/fichapaciente/ficharesolve';
import { AuthGuardService } from './auth-guard.service';





const routes: Routes = [

  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent},
  { path: 'auth/homefuncionario', component: HomefuncionarioComponent, canActivate: [AuthGuardService]},
  { path: 'auth/paciente', component: PacienteComponent, canActivate: [AuthGuardService]},
  { path: 'auth/prontuario', component: ProntuarioComponent,  canActivate: [AuthGuardService]},
  { path: 'details/:id', component: FichapacienteComponent, resolve: {data : Ficharesolve}},


  //  { path: 'paciente/:id', component: FichapacienteComponent, resolve: {data : PacienteResolve}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
