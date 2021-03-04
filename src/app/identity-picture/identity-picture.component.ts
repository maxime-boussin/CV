import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity-picture',
  templateUrl: './identity-picture.component.html',
  styleUrls: ['./identity-picture.component.scss']
})
export class IdentityPictureComponent implements OnInit {
  cristalizedClip = 100;
  clearClip = 100;
  pointMaskClip = 100;
  vectorMaskClip = 100;
  scannerPos = 100;
  scannerOpacity = 1;
  constructor() { }

  ngOnInit(): void {
  }

  simulateDecryptation(): void {
    const interval = setInterval(() => {
      if (this.pointMaskClip > 0 && this.clearClip === 100){
        this.pointMaskClip--;
        this.scannerPos--;
      }
      else if (this.vectorMaskClip > 0  && this.clearClip === 100){
        this.vectorMaskClip--;
        this.scannerPos++;
      }
      else if (this.cristalizedClip > 0){
        this.cristalizedClip--;
        this.scannerPos--;
      }
      else if (this.clearClip > 0){
        this.clearClip--;
        this.scannerPos++;
      }
      else if (this.clearClip === 0 && this.vectorMaskClip < 100){
        this.vectorMaskClip++;
        this.scannerPos--;
      }
      else if (this.clearClip === 0 && this.pointMaskClip < 100){
        this.pointMaskClip++;
        this.scannerPos++;
      }
      else if ( this.scannerOpacity > 0){
        this.scannerOpacity -= 0.05;
      }
      else {
        clearInterval(interval);
      }
    }, 25);
  }
}
