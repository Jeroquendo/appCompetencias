import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterComponent } from '../register/register.component'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user: any;
  firstName: string;
  optionSelected: any = 'informacion';
  constructor(private authService: AuthService, private route: Router, private router: ActivatedRoute) { }

  signOut(): void{
    this.authService.signOut().then(response => this.route.navigate(['login']));
    console.log("sirve");
  }
  ngOnInit(): void {
    console.log(this.router.snapshot.queryParams);
    if(this.router.snapshot.queryParams.media === 'fb'){
      this.signInWithFB();
    }else if(this.router.snapshot.queryParams.media === 'ggle'){
      this.signInWithGoogle();
    }
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(response => {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.firstName = this.user.firstName;
  });

  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(response => {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.firstName = this.user.firstName;
  })}

  mostrarDiv(){
    var divImagen = document.getElementById('div-imagen');
    if(divImagen.style.display == 'none'){
      divImagen.style.display = 'block';
    }else if (divImagen.style.display = 'block'){
      divImagen.style.display == 'none'
    }
  }
}
