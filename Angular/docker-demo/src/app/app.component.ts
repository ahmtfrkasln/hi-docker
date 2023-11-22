import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'docker-demo';
  http: HttpService = inject(HttpService);
  restData: [] = [];

  ngOnInit(){
    this.http.getRequest('demo/1').subscribe(res => {
      this.restData = res;
    })
  }
}
