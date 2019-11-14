import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material';
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FichapacienteComponent } from './auth/paciente/fichapaciente/fichapaciente.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './home/footer/footer.component';
import { MenuComponent } from './home/menu/menu.component';
import { OverlayModule } from '@angular/cdk/overlay' ;
import { Ficharesolve } from './auth/paciente/fichapaciente/ficharesolve';
import { PacienteService } from './auth/paciente/paciente.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AuthGuardService } from './auth/auth-guard.service';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';




library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FichapacienteComponent,
    HomeComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OrderModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
    OverlayModule,
    HttpClientModule,
    AngularFontAwesomeModule,


    MatDatepickerModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatSelectModule,
    FontAwesomeModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    TextMaskModule,
    NgxMaskModule
  ],
  providers: [
  Ficharesolve,
  FichapacienteComponent,
  PacienteService,
  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
