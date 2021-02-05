import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hacker-text',
  templateUrl: './hacker-text.component.html',
  styleUrls: ['./hacker-text.component.scss']
})
export class HackerTextComponent implements OnInit {
  alphabet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '/', '?', '<', '>', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  randomChars = [];
  letterCount = 0;
  finished = false;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.text.length; i++ ) {
      this.randomChars.push({ code: this.text.charAt(i), glow: false });
    }
    setTimeout(() => this.write(), 90);
    setTimeout(() => this.inc(), 1000);
  }

  write(): void {
    for (let i = this.letterCount; i < this.text.length; i++) {
      const c = Math.floor(Math.random() * 36);
      this.randomChars[i].code = this.alphabet[c];
    }
    if (!this.finished) {
      setTimeout(() => this.write(), 90);
    }
  }

  inc(): void {
    this.randomChars[this.letterCount].code = this.text[this.letterCount];
    this.randomChars[this.letterCount].glow = true;
    this.letterCount++;
    if (this.letterCount >= this.text.length) {
      this.finished = true;
    } else {
      setTimeout(() => this.inc(), 200 + Math.floor(Math.random() * Math.floor(400)));
    }
  }
}
