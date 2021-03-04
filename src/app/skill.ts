interface SkillNode {
  name: string;
  children?: SkillNode[];
}
export interface Skill {
  title: string;
  percentage: number;
  max: number;
  color: string;
  anim: string;
  details: SkillNode[];
}
