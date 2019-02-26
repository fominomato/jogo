import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) { }

  /**
   * Requisição de acesso ao middleware
   * @param email String email de usuario cadastrado
   * @param passwd String senha do usuário cadastrado
   * @return Observable
   */
  public login(email:string, passwd:string):Observable<any> {
    let data:Object = {
      login: email,
      password: passwd
    };
    return this.http.post('/v1/login', data);
  }
}
