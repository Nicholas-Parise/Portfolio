import { Skill } from "./Skill";

export interface Project{
    id:number;
    name: string;
    summary: string;
    description: string;
    projectLink: string|null;
    liveLink: string|null;
    date: string;
    pictures: string[];
    skills:Skill[];
}

