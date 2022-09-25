import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServizioTestService } from './service/servizio-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  
  title = 'HappyBot';
  numero = 5
  oggi = Date.now() 
  
  //condizioni di sistema protery binding 
  isUnchanged = false; 
  isOver = true; 
  isOut = false; 
  isWorking = true; 


  onShow() {

    alert('Mostra tutto');
  }

  onPrintMessage(){
     //in attesa...
          }  
  constructor(private servizioTest: ServizioTestService){}


  ngOnInit(): void {
   console.log('appcomponent ', this.servizioTest.getPersone())
  }
}
