import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(public db: AngularFirestore) {}

  /*getAvatars() {
      return this.db.collection('/avatar').valueChanges();
  }*/


  // resgata dados individualmente
  getUser(userKey) {
    return this.db.collection('paciente').doc('cadastro').collection('cadastro').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nomecriancaToSearch = value.nomecrianca.toLowerCase();
    return this.db.collection('paciente').doc('cadastro').collection('cadastro').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('paciente').doc('cadastro').collection('cadastro').doc(userKey).delete();
  }
 // resgata todas as colecoes
  getUsers() {
    return this.db.collection('paciente').doc('cadastro').collection('cadastro').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('paciente').doc('cadastro').collection('paciente', ref => ref.where('nomecriancaToSearch', '>=', searchValue)
      .where('nomecriancaToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    // tslint:disable-next-line: max-line-length
    return this.db.collection('paciente').doc('cadastro').collection('cadastro', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }



}
