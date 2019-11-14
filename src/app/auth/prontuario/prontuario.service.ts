import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Tbpaciente } from '../paciente/Tbpaciente';


@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  private pacienteCollection: AngularFirestoreCollection<Tbpaciente> = this.afs.collection('paciente');


  constructor(private afs: AngularFirestore) { }

  getPaciente(): Observable<Tbpaciente[]> {
    return this.pacienteCollection.valueChanges();
  }


  addPaciente(p: Tbpaciente) {
    p.id = this.afs.createId();
    return this.pacienteCollection.doc(p.cpf).set(p);
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
