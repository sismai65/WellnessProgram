import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication'; 
import { HomePage } from '../home/home'; 

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  credentials = {}; 
  id: any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private authenticationProvider: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage'); 
  }

  onSubmit(){
    
    this.authenticationProvider.login(this.credentials)
    .then((res) => {
      console.log('credentials:', this.credentials);
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      //alert("Votre identifiant et/ou mot de passe est (sont) invalide(s)"); 
      alert(err); 
      console.log('err', err);  
    })
  }

}
