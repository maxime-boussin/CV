import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {of} from 'rxjs';
import {SKILLS} from '../skills';
import {Skill} from '../skill';

interface TestData {
  name: string;
  children?: TestData[];
}
const GetChildren = (node: TestData) => of(node.children);
const TC = new NestedTreeControl(GetChildren);

@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.scss']
})
export class SkillsContentComponent implements OnInit {
  skills: Skill[] = SKILLS;
  skillDetails = [];
  tc = TC;
  constructor() { }

  ngOnInit(): void {
    this.skills.forEach(skill => {
      setInterval(() => {
        if (skill.percentage >= skill.max){
          skill.anim = 'paused';
          clearInterval();
        }else{
          skill.percentage++;
        }
      }, 40);
      }
    );
  }

  hasChild(_: number, node: TestData): boolean {
    return node.children != null && node.children.length > 0;
  }

  showDetails(i: number): void {
    this.skillDetails = this.skills[i].details;
  }
}
