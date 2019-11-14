import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Tbpaciente } from './Tbpaciente';
import { Observable, BehaviorSubject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  [index: string]: any;



  public pacienteCollection: AngularFirestoreCollection<Tbpaciente> = this.afs.collection('/paciente');
  paciente$: Observable<Tbpaciente[]>;
  constructor(private afs: AngularFirestore) { }


  getPaciente(): Observable<Tbpaciente[]> {
    const db =  firebase.firestore();
    return this.pacienteCollection.valueChanges();
    // return this.pacienteCollection.valueChanges('paciente');
  }



  getUsuario() {
    const db =  firebase.firestore();
    return this.pacienteCollection.doc('cadastro').collection('cadastro').doc('cadastro').valueChanges();
    // return this.pacienteCollection.valueChanges('paciente');
  }



  getUser(userId) {
    const db =  firebase.firestore();
    return this.pacienteCollection.doc('cadastro').collection('cadastro').doc('cadastro').valueChanges();
    // return this.db.collection('paciente').doc('cadastro').collection('cadastro').doc('id').snapshotChanges();
  }





  addPaciente(p: Tbpaciente) {
    p.id = this.afs.createId();
    return this.pacienteCollection.doc('cadastro').collection('cadastro').doc(p.id).set(p);
    /*return this.vacinasCollection.add(p);*/
  }





  deletePaciente(p: Tbpaciente) {
    return this.pacienteCollection.doc(p.id).delete();

  }

  updatePaciente(p: Tbpaciente) {
    return this.pacienteCollection.doc(p.id).set(p);
  }

  searchByNome(nome: string): Observable<Tbpaciente[]> {
    return this.afs.collection<Tbpaciente>('paciente',
      ref => ref.orderBy('nome').startAt('nome').endAt(nome + '\uf8ff' ))
      .valueChanges();

  }


}
