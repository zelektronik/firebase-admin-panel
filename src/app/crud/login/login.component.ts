import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: { username: string, password: string } = { username: '', password: '' };
  returnUrl: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth) { }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['return'] || '/';
  }
  submit() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.user.username, this.user.password
    ).then((d) => {
      console.log(d);
      this.router.navigateByUrl(this.returnUrl);
    }).catch(alert);
  }
  loginGoogle(event) {
    event.preventDefault();
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((d) => {
        console.log(d);
        this.router.navigateByUrl(this.returnUrl);
      }).catch(alert);
  }
}
