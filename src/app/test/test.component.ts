import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServizioTestService } from '../service/servizio-test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private servizioTest: ServizioTestService) { }

  ngOnInit(): void {

    console.log(this.servizioTest.getPersone())
    
  }

}
