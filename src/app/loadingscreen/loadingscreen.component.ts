import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-loadingscreen',
  templateUrl: './loadingscreen.component.html',
  styleUrls: ['./loadingscreen.component.scss'],
  animations: [
    trigger('Power', [
      state('1', style({
        width: '100vw',
        height: '2px',
        background: '#ffffff'
      })),
      state('2', style({
                   width: '0',
                   height: '0',
                   background: '#ffffff'
      })),
      transition('0 => 1', animate('200ms ease-out')),
      transition('1 => 2', animate('200ms')),
    ])
  ]
})
export class LoadingscreenComponent implements OnInit{

  loadingText = 'LOADING';
  statePower = '0';
  showText = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.statePower = '1';
      this.showText = false;
      setTimeout(() => {
          this.statePower = '2';
          }, 200);
      }, 8000);
  }
}
