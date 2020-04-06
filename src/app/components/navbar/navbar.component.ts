import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  userLoggedIn: string;
    constructor(
      private authService: AuthUserService,
      private router: Router
      ) { }
    ngOnInit(): void {
      this.authService.getAuth().subscribe(auth => {
        if (auth) {
         this.isLoggedIn = true;
         this.userLoggedIn = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      });
    }
    onLogAout(){
  this.authService.logAout();
  this.isLoggedIn = false;
     return this.router.navigate(['/']);
    }

}
