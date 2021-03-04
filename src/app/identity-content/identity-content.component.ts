import {Component, OnInit, ViewChild} from '@angular/core';
import {IdentityPictureComponent} from '../identity-picture/identity-picture.component';

@Component({
  selector: 'app-identity-content',
  templateUrl: './identity-content.component.html',
  styleUrls: ['./identity-content.component.scss']
})
export class IdentityContentComponent implements OnInit {
  @ViewChild(IdentityPictureComponent) pict: IdentityPictureComponent;
  // 31557600000 = 1 year in ms
  age = Math.floor((new Date().getTime() - new Date('1997-04-10').getTime()) / 31557600000);

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => this.pict.simulateDecryptation(), 1000);
  }

}
