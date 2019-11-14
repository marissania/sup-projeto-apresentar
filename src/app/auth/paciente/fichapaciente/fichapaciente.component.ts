import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Observable } from 'rxjs';
import { Tbpaciente } from '../Tbpaciente';
import { ParamMap } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { ServicosService } from '../../services/servicos.service';


@Component({
  selector: 'app-fichapaciente',
  templateUrl: './fichapaciente.component.html',
  styleUrls: ['./fichapaciente.component.scss']
})
export class FichapacienteComponent implements  OnInit {

  pacienteForm: FormGroup;
  item: any;

  // tslint:disable-next-line: variable-name
  validation_messages = {
   nomecrianca: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   surname: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   age: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   bairro: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   datanasc: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   localnasci: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   nomemae: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   nomepai: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   endereco: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   ptrefe: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   cep: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   cidade: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   telefone: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   etado: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   raca: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   ubf: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   npubs: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   ndnv: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   nrcn: [{ type: 'required', message: 'Campo Obrigátorio.' }],
   ncsus: [{ type: 'required', message: 'Campo Obrigátorio.' }],
 };
 estado = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
   'PA', 'PB', 'PR', 'PE', 'Piauí', 'PI', 'RJ', 'RN', 'RS', 'RO' , 'RR', 'SC', 'SP', 'SE', 'TO' , 'DF'];

   mask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/ , /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(
    public servicosSerices: ServicosService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    });
  }

  createForm() {
    this.pacienteForm = this.fb.group({
      nomecrianca: [this.item.nomecrianca],
      surname: [this.item.surname],
      age: [this.item.age],
      bairro: [this.item.bairro],
      datanasc: [this.item.datanasc],
      localnasci: [this.item.localnasci],
      nomemae: [this.item.nomemae],
      nomepai: [this.item.nomepai],
      endereco: [this.item.endereco],
      ptrefe: [this.item.ptrefe],
      cep: [this.item.cep],
      cidade: [this.item.cidade],
      telefone: [this.item.telefone],
      estado: [this.item.estado],
      raca: [this.item.raca],
      ubf: [this.item.ubf],
      npubs: [this.item.npubs],
      ndnv: [this.item.ndnv],
      nrcn: [this.item.nrcn],
      ncsus: [this.item.ncsus],

    });
  }



  onSubmit(value) {
    this.servicosSerices.updateUser(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['auth/prontuario']);
      }
    );
  }

  delete() {
    this.servicosSerices.deleteUser(this.item.id)
    .then(
      res => {
        this.router.navigate(['auth/prontuario']);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['auth/prontuario']);
  }

}
