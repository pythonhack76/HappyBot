import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  sottoscrizione: any
  ngOnInit(): void {

      //  this.sottoscrizione = interval(1000).subscribe(numero => {
      // console.log(numero)
    // })

    
  }

  onSubmit(form: any){
    console.log('eccomi');

  }

    // ngOnDestroy(): void {
      // Called once, before the instance is destroyed.
      // Add 'implements OnDestroy' to the class.
      // this.sottoscrizione.unsubscribe()
    // }
   

    // new Observable(observer => {
      // let count = 0
      // setInterval(() => {
        // observer.next(count);
        // count++; 
      // }, 1000);
    //  }).subscribe((numero) => {
      // console.log(numero);
    //  });
  }


function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

