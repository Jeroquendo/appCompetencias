import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';  
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myRegister: FormGroup;
  //firstname: string;
  //lastname: string;
  //email: string;
  //password: string;
  //rePassword: string;
  //public user: Usuario;
  //arrayUser: any;
  user: any;
  
  constructor( private fb: FormBuilder, private route: Router) {
    //this.user = new Usuario('firstname','lastname','email','password', 'repassword')
    //this.user = this.llenarUsuario();
   }



  ngOnInit(): void {
    this.myRegister =this.fb.group({
      firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(4)]),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(4)]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        Validators.minLength(6)]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      rePassword: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    });
    /*this.user.subscribe((user) => {
      localStorage.setItem('usuario',JSON.stringify(user));
      this.user = user;
      console.log(this.user);
      this.user ? 
      this.route.navigate(['inicio']) : null;
    });*/
  }

  get f(){return this.myRegister.controls;}
  /*
  llenarUsuario(){
    this.firstname = this.myRegister.get('firstname').value
    this.lastname = this.myRegister.get('lastname').value
    this.email = this.myRegister.get('email').value
    this.password = this.myRegister.get('password').value
    this.rePassword = this.myRegister.get('rePassword').value

    this.arrayUser = new Array(this.firstname,this.lastname, this.email, this.password, this.rePassword)
    return this.arrayUser;
  }
    */
  goToLogin(){
    if(this.myRegister.invalid) return;
    //this.firstname = this.myRegister.get('firstname').value
    this.user = JSON.stringify(this.myRegister.value)
    localStorage.setItem("user",this.user);   
    this.route.navigate(['inicio']);
    //console.log(this.firstname);
    console.log(this.user.firstName);

  }
  onSubmit(){
    if(this.myRegister.invalid)return;
    this.user = JSON.stringify(this.myRegister.value)
    localStorage.setItem("user",this.user);
    //alert("Listo !! \n" + this.user);
    console.log(this.user);
  }
  
}

