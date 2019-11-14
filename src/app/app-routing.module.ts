import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './home/footer/footer.component';
import { AuthGuardService } from './auth/auth-guard.service';

import { HomefuncionarioComponent } from './auth/homefuncionario/homefuncionario.component';
import { AuthService } from './auth/auth.service';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'content', component: ContentComponent},
  {path: 'footer', component: FooterComponent},
  {path: '**', component: NotFoundComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
