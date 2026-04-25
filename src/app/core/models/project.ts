export interface Project {
  id:          number;
  title:       string;
  description: string;
  tech:        string[];
  category:    'backend' | 'fullstack' | 'devops';
  githubUrl?:  string;
  liveUrl?:    string;
  featured:    boolean;
}

export interface Skill {
  name:     string;
  level:    number;   // 0-100
  category: 'languages' | 'frameworks' | 'databases' | 'devops' | 'tools';
}