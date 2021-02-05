import {Component, OnInit, ViewChild} from '@angular/core';
import {IdentityPictureComponent} from '../identity-picture/identity-picture.component';

@Component({
  selector: 'app-identity-content',
  templateUrl: './identity-content.component.html',
  styleUrls: ['./identity-content.component.scss']
})
export class IdentityContentComponent implements OnInit {
  @ViewChild(IdentityPictureComponent) pict: IdentityPictureComponent;

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => this.pict.simulateDecryptation(), 1000);
  }

}
