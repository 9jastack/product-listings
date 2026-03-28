export interface Product {
  id: string;
  name: string;
  before: {
    title: string;
    description: string;
    keywords: string[];
  };
  after: {
    title: string;
    description: string;
    features: string[];
    category: string;
    tags: string[];
  };
  image: string;
}

export interface CaseStudy {
  title: string;
  overview: string;
  tasks: {
    title: string;
    description: string;
    icon: string;
  }[];
  strategy: string[];
  results: string[];
}
