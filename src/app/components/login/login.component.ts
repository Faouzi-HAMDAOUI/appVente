import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor (
    private authService: AuthUserService, 
    private flashMessage: FlashMessagesService,
    private router: Router
    ) { }
  ngOnInit(): void {
     this.authService.getAuth().subscribe(auth => {
       if (auth) {
        return this.router.navigate(['/home-user']);
       }
     });
  }
  onLoginWithGoogle(){
    this.authService.loginWithGoogle()
    .then(auth => {
      if (auth) {
        this.flashMessage.show('you are seccefuly', {cssClass: 'alert-success', timout: 5000});
        this.router.navigate(['/home-user']);
      }
    });
  }
  onLoginWithFacebook(){
    this.authService.loginWithFacebook()
    .then(auth => {
      if (auth) {
        this.flashMessage.show('you are seccefuly', {cssClass: 'alert-success', timout: 5000});
        this.router.navigate(['/home-user']);
      }
    });
  }
  onLogin(){
    this.authService.login(this.email, this.password)
    .then ( auth => {
      if (auth) {
        this.flashMessage.show('you are seccefuly', {cssClass: 'alert-success', timout: 5000});
        this.router.navigate(['/home-user']);
      }
    });
  }

}
