import rawLegendaries from './legendaries.json';
import rawSkills from './skills.json';
import snakeCase from 'lodash/snakeCase';

const legendaryMaps: Record<string, Legendary> = {};
// add id to legendaries
const legendaries: Legendary[] = rawLegendaries.map((legendary) => {
  const l = {
    ...legendary,
    id: snakeCase(legendary.name),
  };
  legendaryMaps[l.id] = l;
  return l;
});

const skillMaps: Record<string, Skill> = {};
const skills: Skill[] = rawSkills.map((skill) => {
  const s = {
    ...skill,
    id: snakeCase(skill.name),
  } as Skill;
  skillMaps[s.id] = s;
  return s;
});

export { legendaries, skills, legendaryMaps, skillMaps };
