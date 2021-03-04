import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../experience';

@Component({
  selector: 'app-experiences-item',
  templateUrl: './experiences-item.component.html',
  styleUrls: ['./experiences-item.component.scss']
})
export class ExperiencesItemComponent implements OnInit {
  @Input() data: Experience;

  constructor() { }

  ngOnInit(): void {
  }
}
