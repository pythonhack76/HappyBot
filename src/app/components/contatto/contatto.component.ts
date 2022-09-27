import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioTestService } from 'src/app/service/servizio-test.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {

 //@Input()  persona: any
 id: number
 persona: any

  constructor(private route: ActivatedRoute, private servizioTest: ServizioTestService) { }

  // ngOnInit(): void {
    // this.id = +this.route.snapshot.paramMap.get('id')!
    // if(this.route.snapshot.paramMap.get('id')){
     // this.isProfile = true
      // this.persona = this.servizioTest.getPersona((this.id)!)
    //  }

    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap)=>{
        this.id = +params.get('id')!
        this.persona = this.servizioTest.getPersona(this.id)
      })
    }
  }


