import { Component, OnInit } from '@angular/core';  
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig, SocialUser } from 'angularx-social-login';  
import { Socialusers } from '../modelos/socialusers'  
import { SocialloginService } from '../servicio/sociallogin.service';  
import { Router, ActivatedRoute, Params } from '@angular/router';  

@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']  
})  
export class LoginComponent implements OnInit {  
  user: SocialUser;
  loggedIn: boolean;
  
  constructor(private authService: AuthService, private route: Router) { }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
     localStorage.setItem('user',JSON.stringify(user));
      this.user = user;
     this.loggedIn = (user != null);
     console.log(this.user);
     this.user ? 
     this.route.navigate(['inicio']) : null;

    })  ;
   }

   goToLogin(){
     this.route.navigate(['inicio']);
     console.log("funciona");
   }

   
 
  
  
  /*public socialSignIn(socialProvider: string) {  
    let socialPlatformProvider;  
    if (socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    /*this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialProvider, socialusers);  
      console.log(socialusers);  
      //this.Savesresponse(socialusers);  
    });  
  }  
  Savesresponse(socialusers: Socialusers) {  
    this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {  
      debugger;  
      console.log(res);  
      this.socialusers=res;  
      this.response = res.userDetail;  
      localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
      console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
      this.router.navigate([`/Dashboard`]);  
    })  
  }  */
}