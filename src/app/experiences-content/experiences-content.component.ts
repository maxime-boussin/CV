import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../experience';

@Component({
  selector: 'app-experiences-content',
  templateUrl: './experiences-content.component.html',
  styleUrls: ['./experiences-content.component.scss']
})
export class ExperiencesContentComponent implements OnInit {
  @Input() experiences: Experience[];
  title;
  constructor() { }

  ngOnInit(): void {
    this.title = this.experiences[0].job;
  }

  onActiveSlideChange(event): void {
    this.title = this.experiences[event.relatedTarget].job;
  }

}
