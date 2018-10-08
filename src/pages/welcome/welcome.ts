import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../providers';
import { MainPage } from '..';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
              public user: User) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  facebookLogin() {
    this.user.facebookLogin().then(res => {
      this.navCtrl.push(MainPage);
    }, err => {});
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
