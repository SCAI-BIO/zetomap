export const generic_2 = {
  edges: [
    {
      id: 'edge_80',
      source: 'generic_2',
      target: 'question_1',
    },
    {
      id: 'edge_81',
      source: 'generic_2',
      target: 'question_2',
    },
    {
      id: 'edge_82',
      source: 'generic_2',
      target: 'question_3',
    },
  ],
  nodes: [
    {
      id: 'question_2',
      outcomes_results: null,
      proposed_solutions: null,
      question: 'How do we find interesting target candidates? ',
      tags: 'Computer Scientist,Biologist,Medical',
      value_chain_areas: '2,3',
    },
    {
      id: 'question_3',
      outcomes_results: null,
      proposed_solutions: null,
      question: 'How do we prioritize drug-target combinations?',
      tags: 'Computer Scientist,Biologist,Medical',
      value_chain_areas: '3,4',
    },
    {
      id: 'question_1',
      outcomes_results: null,
      proposed_solutions: null,
      question:
        'How do we build our computational AD model and how do we make it queryable? ',
      tags: 'Computer Scientist,Biologist',
      value_chain_areas: '1,2',
    },
  ],
};

export const question_1 = {
  edges: [
    {
      id: 'edge_83',
      source: 'question_1',
      target: 'generic_21',
    },
    {
      id: 'edge_84',
      source: 'question_1',
      target: 'generic_22',
    },
  ],
  nodes: [
    {
      description: 'Services nod for question 1',
      id: 'generic_22',
      link: null,
      name: 'Tools',
      type: null,
    },
    {
      description: 'Generic Projects node for Question 1',
      id: 'generic_21',
      link: null,
      name: 'Projects',
      type: null,
    },
  ],
};
