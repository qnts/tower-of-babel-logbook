interface Legendary {
  id: string;
  name: string;
  description: string;
  /**
   * Contain skill IDs the legendary mentions
   */
  skillTags: string[];
}

interface Skill {
  id: string;
  name: string;
  description: string;
  /**
   * Skill category. basic and special attack: base
   * others: physic, fire, cold, lightning, light, dark
   */
  category:
    | 'base'
    | 'physic'
    | 'fire'
    | 'cold'
    | 'lightning'
    | 'light'
    | 'dark';
}
