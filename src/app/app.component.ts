import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = [
    'antique', 'aqua', 'aquamarine', 'coral', 'cornflower' ,'crimson', 'lightcoral', 'lightcyan', 'palegoldenrod'
  ]
  num: Array<number> = [
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8),
    Math.floor(Math.random()*8)
    ];
}
