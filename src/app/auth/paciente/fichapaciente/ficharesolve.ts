import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PacienteService } from '../paciente.service';
import * as firebase from 'firebase';
import { combineAll } from 'rxjs/operators';
import { ServicosService } from '../../services/servicos.service';

@Injectable()
export class Ficharesolve implements Resolve<any> {

  constructor(public servicosService: ServicosService) { }

  resolve(route: ActivatedRouteSnapshot, ) {

    return new Promise((resolve, reject) => {
      const userId = route.paramMap.get('id');
      this.servicosService.getUser(userId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    });
  }
}

