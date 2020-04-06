import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
    constructor(private authClient: AuthUserService, private route: Router, private flashMessage: FlashMessagesService) { }
    ngOnInit(): void {
    }
    onRegister(){
      this.authClient.registerUser(this.email, this.password)
           .then(registerUser => {
             if (registerUser) {
               this.flashMessage.show('congratuation you are loged', {
                 scssClass: 'alert-success', timout: 5000
               });
               this.route.navigate(['/home-user']);
             }
           })
           .catch(error => {
             this.flashMessage.show(error.message, {scssClass: 'alert-success', timout: 5000 });
           });
    }

}
