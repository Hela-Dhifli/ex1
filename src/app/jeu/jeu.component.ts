import { Component, EventEmitter, Input, ViewChild,OnInit, Output } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  
  
  nombreDevin ?:any

  messageOutput ? : String ;

  @ViewChild('entree') inputNombre : any;
  test: boolean = false;
  nombreEssai : number =0;

  constructor(private http : HttpClient) { }

  ngOnInit()  {
    return this.http.get('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new').subscribe((res => {
      this.nombreDevin = res;
      console.log(this.nombreDevin);}));
  }



  onClick(nombre : String){

    if (nombre == " " || nombre =='' || isNaN(Number(nombre.toString()))){
      this.messageOutput ="Entrée non valide, saisir un nombre entre 1 et 100" ;
    }
    else {
      var nombreInput = Number(nombre);
      this.inputNombre.nativeElement.value = ' ';
      this.nombreEssai ++;
      if (this.nombreEssai <=6) {
        if(nombreInput < this.nombreDevin)
        {
          this.messageOutput ="["+this.nombreEssai + "] "+ nombre + " trop petit" ;
        }
        else if(nombreInput > this.nombreDevin)
        {
          this.messageOutput = "["+this.nombreEssai + "] "+nombre +" trop grand" ;
        }
        else
        {
          this.messageOutput ="Bravo vous avez gagne ! \n" + this.nombreDevin + " est le nombre à deviner";
          this.test = true;
        }
      }
      else {
        this.messageOutput ="Vous avez perdu, le nombre à deviner est : "+ this.nombreDevin;
        this.test = true;
      }

    }
    
  }

  rejouer(){
    this.test = false;
    this.messageOutput =" ";
    this.nombreEssai = 0 ;
    this.inputNombre.nativeElement.value = ' ';
    this.ngOnInit() ;

  }

  }