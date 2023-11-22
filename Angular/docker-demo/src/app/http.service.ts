import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_PATH = 'http://localhost:8082/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http: HttpClient = inject(HttpClient);

  getRequest(path: string, params: any = {}): Observable<any> {
    return this.http.get(BASE_PATH + path, {params: params, headers: httpOptions.headers});
  }

}
