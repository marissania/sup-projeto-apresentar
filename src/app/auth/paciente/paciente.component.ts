import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tbpaciente } from './Tbpaciente';
import { MatSnackBar } from '@angular/material';
import { PacienteService } from './paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {
  [x: string]: any;

  paciente$: Observable<Tbpaciente[]>;
  filterTbpaciente$: Observable<Tbpaciente[]>;
  displayedColumns = ['cpf', 'nome', 'sobrenome', 'operations'];

   @ViewChild('nome' , {static: true}) pacienteNome: ElementRef;

   pacienteForm: FormGroup = this.fb.group({
    id: [undefined],
    nome: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    nomecrianca: ['', [Validators.required]],
    localnasc: ['', [Validators.required]],
    nomemae: ['', [Validators.required]],
    nomepai: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    ptrefe: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    bairro: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    ubf: ['', [Validators.required]],
    npubs: ['', [Validators.required]],
    ndnv: ['', [Validators.required]],
    nrcn: ['', [Validators.required]],
    ncsus: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    datanasc: ['', [Validators.required]],
    branca: ['', [Validators.required]],
    preta: ['', [Validators.required]],
    amarela: ['', [Validators.required]],
    parda: ['', [Validators.required]],
    indigena: ['', [Validators.required]],
    raca: ['', [Validators.required]],
  }

  );
  estado = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
   'PA', 'PB', 'PR', 'PE', 'Piauí', 'PI', 'RJ', 'RN', 'RS', 'RO' , 'RR', 'SC', 'SP', 'SE', 'TO' , 'DF'];

   mask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/ , /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
    this.paciente$ = this.pacienteService.getPaciente();
  }

  onSubmit() {
    const p: Tbpaciente  = this.pacienteForm.value;
    if (!p.id) {
      this.addPaciente(p);
    } else {
      this.updatePaciente(p);
    }
  }

  addPaciente(p: Tbpaciente) {
    const db =  firebase.firestore();
    db.collection('paciente').doc('cadastro');
    this.pacienteService.addPaciente(p)
      .then(() => {
        this.snackBar.open('Cadastro realizado com sucesso', '', {duration: 2000});
        this.pacienteForm.reset({nome: '', sobrenome: '', cpf: '' , nomecrianca: '', localnasc: '', nomemae: '',
        nomepai: '' , endereco: '', ptrefe: '', telefone: '', bairro: '' , cep: '', cidade: '', estado: '' , datanasc: '',
        raca: ''  , ubf: '' , npubs: '', ndnv: '', nrcn: '', ncsus: '' , id: undefined});
        this.pacienteNome.nativeElement.focus();
      });
  }



}

