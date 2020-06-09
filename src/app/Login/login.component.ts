import { Component, OnInit } from '@angular/core';  
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig, SocialUser } from 'angularx-social-login';  
import { Socialusers } from '../modelos/socialusers'  
import { SocialloginService } from '../servicio/sociallogin.service';  
import { Router, ActivatedRoute, Params } from '@angular/router';  
import { FormBuilder, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.css']  
})  
export class LoginComponent implements OnInit {  
  user: SocialUser;
  loggedIn: boolean;
  myForm: FormGroup;
  user2: any;
  userFB:any;
  firstName: any;

  constructor(private authService: AuthService, private route: Router, private fb: FormBuilder) { }
  
 
 

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user)
     localStorage.setItem('user',JSON.stringify(user));
      this.user = user;
     this.loggedIn = (user != null);
     console.log(this.user);
     this.user ? 
     this.route.navigate(['inicio']) : null;

    });
    this.myForm =this.fb.group({
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    });
   }

   goToHome(){
    //this.route.navigate(['inicio']);
    //console.log("funciona");
    this.user2 = JSON.stringify(this.myForm.value)
    localStorage.setItem("user",this.user2); 
    let firstname = localStorage.getItem("email");  
    this.route.navigate(['inicio']);
    console.log(firstname);
   }

   onSaveForm(){
     if(this.myForm.valid){
        this.goToHome();
     }else{
       alert('Usuario no registrado')
     }
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