import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    let body = {
      email: email,
      password: password,
    };
    // Devolvemos la respuesta del Observable cuando la peticion http
    // Se ha completado, el componente suscrito accedera al token del login
    return this.http.post('https://reqres.in/api/login', body);
  }
}
