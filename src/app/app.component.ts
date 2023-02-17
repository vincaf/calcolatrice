import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcolatrice';
  memo = '';
  display = '';
  risultato = 0;

  addToMemo(event: any){
    const labelDelBottone = event.target.value;
    console.log(labelDelBottone);

    this.memo += labelDelBottone;
  }

  clearAll(){
    this.memo = "";
    this.display = "";
    this.risultato = 0;
  }

  addToDisplay(event: any){
    this.display = this.memo;
    this.memo = "";
  }

  calculateResult(event: any){

    this.risultato += Number(this.display) + Number(this.memo);
    this.memo = "";
    this.display = String(this.risultato);
  }
}
