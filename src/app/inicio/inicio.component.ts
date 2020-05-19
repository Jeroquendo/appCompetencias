import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user: any;
  firstName: string;
  constructor(private authService: AuthService, private route: Router) { }
  
  signOut(): void{
    this.authService.signOut().then(response => this.route.navigate(['login']));
    console.log("sirve");
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.firstName = this.user.firstName;

  }

}
