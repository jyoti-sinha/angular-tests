import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  showAds:boolean = false;
  ad_data: Array<any> = [];
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'content-type' : 'application/json'
      }
    }).subscribe((res:any) => {
      res.forEach((item, i) => {
        this.ad_data.push({
          title: item.title,
          desc: item.body
        });
      });
      this.showAds = true;
    })
  }

}
