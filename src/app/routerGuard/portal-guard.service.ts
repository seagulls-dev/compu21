import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PortalGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot,): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.authState.toPromise().then(user=>{
      if (user) {
        return true;
      }else {
        this.router.navigate(['safety/myAccount']);
      }
    })
  }

  constructor(private auth: AngularFireAuth,
              private router: Router) { }
}
