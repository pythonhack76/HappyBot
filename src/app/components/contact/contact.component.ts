import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioTestService } from 'src/app/service/servizio-test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  persone: any
  isProfile: boolean

  constructor(private servizioTest: ServizioTestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //  this.persone = this.servizioTest.getPersone() 
  //  this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
   if(this.route.snapshot.paramMap.get('id')){
    this.isProfile = true
    this.persone = this.servizioTest.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!)) 

   }else {
    this.isProfile = false
    this.persone = this.servizioTest.getPersone() 
   }

   console.log(this.route.snapshot.paramMap.get('id'))
   console.log(this.isProfile)
  }

}
