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
  operazione = "";

  addToMemo(event: any){
    const labelDelBottone = event.target.value;
    console.log(labelDelBottone);

    this.memo += labelDelBottone;
  }

  clearAll(){
    this.memo = "";
    this.display = "";
    this.risultato = 0;
    this.operazione = "";

    let btn = document.getElementById("btn_eguals");
    btn?.classList.remove("disabled");
  }

  addToDisplay(event: any){
    this.display = this.memo;
    this.memo = "";
  }

  add(){
    this.display = this.memo;
    this.memo = "";
    this.operazione = '+';
  }

  subtract(){
    this.display = this.memo;
    this.memo = "";
    this.operazione = '-';
  }

  multiply(){
    this.display = this.memo;
    this.memo = "";
    this.operazione = '*';
  }

  divide(){
    this.display = this.memo;
    this.memo = "";
    this.operazione = '/';
  }

  calculateResult(event: any){

    switch (this.operazione) {
      case '+':
        this.risultato = Number(this.display) + Number(this.memo);
        break;
      case '-':
        this.risultato = Number(this.display) - Number(this.memo);
        break;
      case '*':
        this.risultato = Number(this.display) * Number(this.memo);
        break;
      case '/':
        this.risultato = Number(this.display) / Number(this.memo);
        break;
      default:
        break;
    }

    this.memo = "";
    this.display = String(this.risultato);

    let btn = document.getElementById("btn_eguals");
    if(this.memo == ""){
      btn?.classList.add("disabled");
    }
  }
}
