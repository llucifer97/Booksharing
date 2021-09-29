import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( public signInservice :  SigninService ,private route : Router , private snackBar: MatSnackBar) { }

   islogggedIn =  this.signInservice.loggedIn();

   onClick()
   {
      this.openCustomSnackBar()
      this.signInservice.logout()
      this.route.navigate([''])
   }


   openSnackBar(message: string, action: string | undefined) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('LOGGED OUT!');
    });


  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 2000})
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Logged Out</span>`
})
export class CustomSnackBarComponent {}
