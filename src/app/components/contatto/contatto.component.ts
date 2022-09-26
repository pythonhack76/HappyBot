import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioTestService } from 'src/app/service/servizio-test.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {

 @Input()  persona: any

  constructor(private route: ActivatedRoute, private servizioTest: ServizioTestService) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      //this.isProfile = true
      this.persona = this.servizioTest.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!)) 
     }
  }

}
