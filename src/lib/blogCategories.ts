export interface BlogCategory {
  id: string;
  name: string;
  courseCode?: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  
  {
    id: "first-aid",
    name: "First Aid",
    courseCode: "HLTAID011",
    description: "Provide First Aid",
  },
  {
    id: "cpr",
    name: "CPR",
    courseCode: "HLTAID009",
    description: "Provide Cardiopulmonary Resuscitation",
  },
  
  {
    id: "community-services",
    name: "Community Services",
    description: "Community Services Courses",
  },
  {
    id: "career-advice",
    name: "Career Advice",
    description: "Career Guidance and Tips",
  },
  {
    id: "general",
    name: "General",
    description: "General Information and News",
  },
];

export function getCategoryById(id: string): BlogCategory | undefined {
  return blogCategories.find((cat) => cat.id === id);
}

export function getCategoryName(id: string): string {
  const category = getCategoryById(id);
  return category?.name ?? id;
}
