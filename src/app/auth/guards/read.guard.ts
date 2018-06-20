import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';

@Injectable()
export class ReadGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth,
    private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(
      map(auth => {
        if (isNullOrUndefined(auth)) {
          this.router.navigate(['crud', 'login'], {
            queryParams: {
              return: state.url
            }
          });
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
