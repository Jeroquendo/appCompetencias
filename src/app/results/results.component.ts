import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  textComment = 'Aquí puedes darnos tus sugerencias para continuar mejorando la aplicación';
  constructor( private authService: AuthService, private route: Router) { }
  signOut(): void{
    this.authService.signOut().then(response => this.route.navigate(['login']));
    console.log("sirve");
  }
  ngOnInit(): void {
  }

  onTextClick(){
    this.textComment  ? this.textComment = '' : this.textComment = 'Aquí puedes darnos tus sugerencias para continuar mejorando la aplicación';
  }

}
