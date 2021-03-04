import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.scss']
})
export class InfoContentComponent implements OnInit {
  promptOpacity = 1;
  eraseCount = 0;
  lines = [];
  typing = '';
  lineIndex = 0;
  text = ['Ce site web est le CV / Portfolio de Maxime Boussin.',
    'Il se présente sous la forme d\'une simulation grossière de hacking.',
    'Le développement est appuyé sur le framework Angular.',
    'Les sources du projet sont disponibles sur Github,',
    'accessible depuis la fenêtre "Projets".'];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
        this.promptOpacity = (this.promptOpacity === 1 ? 0 : 1);
      }, 500
    );
    setTimeout( () => this.writeLine(), 500);
  }

  private writeLine(): void {
    if (this.text.length > this.lines.length) {
      setTimeout(() => this.typeText(), 1000);
    }
  }

  private typeText(): void {
    setTimeout(() => {
      this.typing += this.text[this.lineIndex].substr(0, 1);
      this.text[this.lineIndex] = this.text[this.lineIndex].substr(1);
      if (this.text[this.lineIndex].length === 0){
          this.lines.push(this.typing);
          this.typing = '';
          this.lineIndex++;
          this.writeLine();
      }
      else {
        const i = this.getRand(8);
        if (this.getRand(75) === 75 && this.text[this.lineIndex].length >= i){
          this.eraseCount = i;
          this.eraseText();
        }
        else {
          this.typeText();
        }
      }
    }, this.getRand(100) + (this.getRand(20) === 20 ? 400 : 0 ));
  }

  private eraseText(): void {
    setTimeout(() => {
      if (this.eraseCount > 0){
        this.text[this.lineIndex] = this.typing.substr(-1, 1) + this.text[this.lineIndex];
        this.typing = this.typing.substr(0, this.typing.length - 1);
        this.eraseCount--;
        this.eraseText();
      }
      else{
        this.typeText();
      }
    }, this.getRand(100) + (this.getRand(20) === 20 ? 400 : 0 ));
  }

  getRand(n: number): number {
    return Math.floor(Math.random() * n) + 1;
  }
}
