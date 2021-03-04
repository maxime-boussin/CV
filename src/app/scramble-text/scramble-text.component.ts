import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-scramble-text',
  templateUrl: './scramble-text.component.html',
  styleUrls: ['./scramble-text.component.scss']
})
export class ScrambleTextComponent implements OnChanges {
  @Input() text: string;
  oldText = '******';
  chars = '!<>-_\\/[]{}—=+*^?#_____';
  queue = []; frame; randomChars; resolve;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.queue = [];
    this.setText(this.text).then(() => {
      this.oldText = this.text;
    });
  }

  setText(newText): Promise<any> {
    const length = Math.max(this.oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    for (let i = 0; i < length; i++) {
      const from = this.oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ f : from, t : to, s : start, e : end, c : undefined });
    }
    this.frame = 0;
    this.update();
    return promise;
  }
  update(): void {
    this.randomChars = [];
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      if (this.frame >= this.queue[i].e) {
        complete++;
        this.randomChars.push({ code: this.queue[i].t, glow: false });
      } else if (this.frame >= this.queue[i].s) {
        if (!this.queue[i].c || Math.random() < 0.28) {
          this.queue[i].c = this.chars[Math.floor(Math.random() * this.chars.length)];
        }
        this.randomChars.push({ code: this.queue[i].c, glow: true });
      } else {
        this.randomChars.push({ code: this.queue[i].f, glow: true });
      }
    }
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      setTimeout(() => { this.update(); } , 20);
      this.frame++;
    }
  }
}
