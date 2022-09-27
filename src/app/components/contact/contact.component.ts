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
  persona: any
  //isProfile: boolean

  constructor(private servizioTest: ServizioTestService) { }

  ngOnInit(): void {
   this.persone = this.servizioTest.getPersone() 
  //  this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
   
   
   
   
  //  }else {
    // this.isProfile = false
    // this.persone = this.servizioTest.getPersone() 
   }

  //  console.log(this.route.snapshot.paramMap.get('id'))
  //  console.log(this.isProfile)
   

}
