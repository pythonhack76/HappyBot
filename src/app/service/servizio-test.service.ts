import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioTestService {

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color: 'blue'},
    {nome: "giovanni", cognome: "verdi", isOnline: false, color: 'red'},
    {nome: "matteo", cognome: "gialli", isOnline: true, color: 'green'},
    {nome: "paolo", cognome: "neri", isOnline: false, color: 'yellow'},
    {nome: "filippo", cognome: "bianchi", isOnline: true, color: 'brown'},
  ]

  servizi = [

    {titolo: "preventivo", prezzo: "100", isAvaiable:true, qta: '10'},
    {titolo: "analisi", prezzo: "200", isAvaiable:false, qta: '10'},
    {titolo: "vendita", prezzo: "300", isAvaiable:true, qta: '10'},
    {titolo: "post-vendita", prezzo: "400", isAvaiable:true, qta: '10'},
  ]

  constructor() { }


  getPersone(){
    return this.persone
  }

  getPersona(index: number){
      return this.persone[index]
  }

  getServizi(){
    return this.servizi 
  }
}
