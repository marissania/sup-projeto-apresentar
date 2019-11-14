import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ProntuarioService } from './prontuario.service';
import { Observable } from 'rxjs';
import { Tbpaciente } from '../paciente/Tbpaciente';
import { PacienteService } from '../paciente/paciente.service';
import * as firebase from 'firebase';
import { ServicosService } from '../services/servicos.service';




@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.scss']
})
export class ProntuarioComponent implements OnInit {

  ageValue = 0;
  searchValue = '';
  items: Array<any>;
  // tslint:disable-next-line: variable-name
  age_filtered_items: Array<any>;
  // tslint:disable-next-line: variable-name
  nomecrianca_filtered_items: Array<any>;

  constructor(
    public servicosService: ServicosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.servicosService.getUsers()
    .subscribe(result => {
      this.items = result;
      this.age_filtered_items = result;
      this.nomecrianca_filtered_items = result;
    });
  }

  viewDetails(item) {
    this.router.navigate(['/details/' + item.payload.doc.id]);
  }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName() {
    const value = this.searchValue.toLowerCase();
    this.servicosService.searchUsers(value)
    .subscribe(result => {
      this.nomecrianca_filtered_items = result;
      this.items = this.combineLists(result, this.age_filtered_items);
    });
  }

  rangeChange(event) {
    this.servicosService.searchUsersByAge(event.value)
    .subscribe(result => {
      this.age_filtered_items = result;
      this.items = this.combineLists(result, this.nomecrianca_filtered_items);
    });
  }

  combineLists(a, b) {
    const result = [];

    a.filter(x => {
      return b.filter(x2 => {
        // tslint:disable-next-line: triple-equals
        if (x2.payload.doc.id == x.payload.doc.id) {
          result.push(x2);
        }
      });
    });
    return result;
  }

}

