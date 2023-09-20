export const question = {
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
      id: 'question_1',
      outcomes_results: null,
      proposed_solutions: null,
      question:
        'How do we build our computational AD model and how do we make it queryable? ',
      tags: 'Computer Scientist,Biologist',
      value_chain_areas: '1,2',
    },
    {
      description: 'Questions we sought to answer',
      id: 'generic_2',
      link: null,
      name: 'Questions',
      type: null,
    },
  ],
};

export const knowledge = {
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

export const knowledgeNew = {
  nodes: [
    {
      id: 'generic_7',
      label: 'Knowledge-graph technologies',
      data: {
        name: 'Knowledge-graph technologies',
        type: null,
        link: null,
        description: 'Modelling',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Knowledge-graph technologies',
        },
      },
    },
    {
      id: 'generic_3',
      label: 'Knowledge Space',
      data: {
        name: 'Knowledge Space',
        type: null,
        link: null,
        description: null,
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Knowledge Space',
        },
      },
    },
    {
      id: 'generic_6',
      label: 'Unstructured information mining',
      data: {
        name: 'Unstructured information mining',
        type: null,
        link: null,
        description: 'Making Knowledge and Data „AI-ready“',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Unstructured information mining',
        },
      },
    },
    {
      id: 'generic_8',
      label: 'Models combining data and knowledge',
      data: {
        name: 'Models combining data and knowledge',
        type: null,
        link: null,
        description: 'Understanding models',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Models combining data and knowledge',
        },
      },
    },
    {
      id: 'focusarea_11',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'person_25',
      label: 'Schultz, Bruce',
      data: {
        name: 'Schultz, Bruce',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Schultz, Bruce',
        },
      },
    },
    {
      id: 'project_5',
      label: 'COVID',
      data: {
        name: 'COVID',
        link: null,
        description: null,
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'COVID',
        },
      },
    },
    {
      id: 'publication_13',
      label:
        'WISDOM-II: Screening against multiple targets implicated in malaria using computational grid infrastructures',
      data: {
        name: 'WISDOM-II: Screening against multiple targets implicated in malaria using computational grid infrastructures',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'WISDOM-II: Screening against multiple targets implicated in malaria using computational grid infrastructures',
        },
      },
    },
    {
      id: 'publication_200',
      label:
        'The COVID-19 PHARMACOME: A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
      data: {
        name: 'The COVID-19 PHARMACOME: A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'The COVID-19 PHARMACOME: A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
        },
      },
    },
    {
      id: 'presentation_4',
      label: 'PHARMACOME graphs: management, data fusion, analytics in BiKMi',
      data: {
        name: 'PHARMACOME graphs: management, data fusion, analytics in BiKMi',
        type: 'MP4',
        link: 'https://teams.microsoft.com/_#/files/Allgemein?threadId=19%3Ah4QtIgf81xjiRDB2Wdx48md-4PHTiejdXC1utHC9YOs1%40thread.tacv2&ctx=channel&context=PRESENTATION%2520MOVIES&rootfolder=%252Fsites%252FHBPSymposium2021%252FFreigegebene%2520Dokumente%252FGeneral%252FPRESENTATION%2520MOVIES',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'PHARMACOME graphs: management, data fusion, analytics in BiKMi',
        },
      },
    },
    {
      id: 'presentation_3',
      label: 'PHARMACOME graphs: management, data fusion, analytics in BiKMi',
      data: {
        name: 'PHARMACOME graphs: management, data fusion, analytics in BiKMi',
        type: 'PPTX',
        link: 'https://teams.microsoft.com/_#/files/Allgemein?threadId=19%3Ah4QtIgf81xjiRDB2Wdx48md-4PHTiejdXC1utHC9YOs1%40thread.tacv2&ctx=channel&context=PRESENTATION%2520SLIDES&rootfolder=%252Fsites%252FHBPSymposium2021%252FFreigegebene%2520Dokumente%252FGeneral%252FPRESENTATION%2520SLIDES',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'PHARMACOME graphs: management, data fusion, analytics in BiKMi',
        },
      },
    },
    {
      id: 'publication_220',
      label:
        'A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
      data: {
        name: 'A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
        },
      },
    },
    {
      id: 'project_1',
      label: 'Human Brain Pharmacome',
      data: {
        name: 'Human Brain Pharmacome',
        link: 'https://www.scai.fraunhofer.de/en/business-research-areas/bioinformatics/projects/hbp.html\n\nhttps://www.scai.fraunhofer.de/en/events/mavo_symposium.html\n\n\n',
        description:
          'The “Human Brain Pharmacome” project is pursuing a radically different strategy than \nthe pharmaceutical industry in its search for an effective preventive therapy for Alzheimer’s disease. Classical drug development typically starts from a single hypothesis for the development of the disease - and has failed with this approach in the field of dementia research for years. Our project, on the other hand, starts with a variety of disease mechanisms that are available as a knowledge base (computable models) and which allow data and knowledge to be compared very quickly and linked with simulations.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Human Brain Pharmacome',
        },
      },
    },
    {
      id: 'project_4',
      label: 'ZET-O-MAP',
      data: {
        name: 'ZET-O-MAP',
        link: null,
        description: null,
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'ZET-O-MAP',
        },
      },
    },
    {
      id: 'publication_234',
      label:
        'A hybrid approach unveils drug repurposing candidates targeting an Alzheimer pathophysiology mechanism',
      data: {
        name: 'A hybrid approach unveils drug repurposing candidates targeting an Alzheimer pathophysiology mechanism',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'A hybrid approach unveils drug repurposing candidates targeting an Alzheimer pathophysiology mechanism',
        },
      },
    },
    {
      id: 'publication_184',
      label:
        'COVID-19 Knowledge Graph: a computable, multi-modal, cause-and-effect knowledge model of COVID-19 pathophysiology',
      data: {
        name: 'COVID-19 Knowledge Graph: a computable, multi-modal, cause-and-effect knowledge model of COVID-19 pathophysiology',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'COVID-19 Knowledge Graph: a computable, multi-modal, cause-and-effect knowledge model of COVID-19 pathophysiology',
        },
      },
    },
    {
      id: 'publication_1',
      label:
        'A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
      data: {
        name: 'A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'A method for the rational selection of drug repurposing candidates from multimodal knowledge harmonization',
        },
      },
    },
    {
      id: 'publication_11',
      label:
        'The COVID-19 PHARMACOME: Rational Selection of Drug Repurposing Candidates \nfrom Multimodal Knowledge Harmonization. ',
      data: {
        name: 'The COVID-19 PHARMACOME: Rational Selection of Drug Repurposing Candidates \nfrom Multimodal Knowledge Harmonization. ',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'The COVID-19 PHARMACOME: Rational Selection of Drug Repurposing Candidates \nfrom Multimodal Knowledge Harmonization. ',
        },
      },
    },
    {
      id: 'publication_229',
      label:
        'The Epilepsy Ontology: a community-based ontology tailored for semantic interoperability and text-mining',
      data: {
        name: 'The Epilepsy Ontology: a community-based ontology tailored for semantic interoperability and text-mining',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'The Epilepsy Ontology: a community-based ontology tailored for semantic interoperability and text-mining',
        },
      },
    },
    {
      id: 'publication_58',
      label:
        'Linking hypothetical knowledge patterns to disease molecular signatures for biomarker discovery in Alzheimer’s disease',
      data: {
        name: 'Linking hypothetical knowledge patterns to disease molecular signatures for biomarker discovery in Alzheimer’s disease',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Linking hypothetical knowledge patterns to disease molecular signatures for biomarker discovery in Alzheimer’s disease',
        },
      },
    },
    {
      id: 'publication_6',
      label:
        'Re-curation and Rational Enrichment of Knowledge Graphs in \nBiological Expression Language.',
      data: {
        name: 'Re-curation and Rational Enrichment of Knowledge Graphs in \nBiological Expression Language.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Re-curation and Rational Enrichment of Knowledge Graphs in \nBiological Expression Language.',
        },
      },
    },
    {
      id: 'publication_64',
      label:
        'PDON: Parkinson’s disease ontology for representation and modeling of the Parkinson’s disease knowledge domain',
      data: {
        name: 'PDON: Parkinson’s disease ontology for representation and modeling of the Parkinson’s disease knowledge domain',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'PDON: Parkinson’s disease ontology for representation and modeling of the Parkinson’s disease knowledge domain',
        },
      },
    },
    {
      id: 'publication_4',
      label:
        'Re-curation and rational Enrichment of Knowledge Graphs in Biological Expression Language',
      data: {
        name: 'Re-curation and rational Enrichment of Knowledge Graphs in Biological Expression Language',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Re-curation and rational Enrichment of Knowledge Graphs in Biological Expression Language',
        },
      },
    },
    {
      id: 'publication_2',
      label:
        'COVID-19 Knowledge Graph: a computable, multi-modal, cause-and-effect knowledge model of COVID-19 pathophysiology',
      data: {
        name: 'COVID-19 Knowledge Graph: a computable, multi-modal, cause-and-effect knowledge model of COVID-19 pathophysiology',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'COVID-19 Knowledge Graph: a computable, multi-modal, cause-and-effect knowledge model of COVID-19 pathophysiology',
        },
      },
    },
    {
      id: 'publication_16',
      label:
        'Integration and mining of malaria molecular, functional and pharmacological data: how far are we from a chemogenomic knowledge space?',
      data: {
        name: 'Integration and mining of malaria molecular, functional and pharmacological data: how far are we from a chemogenomic knowledge space?',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Integration and mining of malaria molecular, functional and pharmacological data: how far are we from a chemogenomic knowledge space?',
        },
      },
    },
    {
      id: 'publication_196',
      label:
        'Organizing Mechanistic Knowledge About Neurodegenerative Diseases For The Improvement Of Drug Development And Therapy',
      data: {
        name: 'Organizing Mechanistic Knowledge About Neurodegenerative Diseases For The Improvement Of Drug Development And Therapy',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Organizing Mechanistic Knowledge About Neurodegenerative Diseases For The Improvement Of Drug Development And Therapy',
        },
      },
    },
    {
      id: 'publication_233',
      label:
        'Towards a global investigation of transcriptomic signatures through co-expression networks and pathway knowledge for the identification of disease mechanisms',
      data: {
        name: 'Towards a global investigation of transcriptomic signatures through co-expression networks and pathway knowledge for the identification of disease mechanisms',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Towards a global investigation of transcriptomic signatures through co-expression networks and pathway knowledge for the identification of disease mechanisms',
        },
      },
    },
    {
      id: 'publication_72',
      label:
        'Knowledge retrieval from pubmed abstracts and electronic medical records with the multiple sclerosis ontology',
      data: {
        name: 'Knowledge retrieval from pubmed abstracts and electronic medical records with the multiple sclerosis ontology',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Knowledge retrieval from pubmed abstracts and electronic medical records with the multiple sclerosis ontology',
        },
      },
    },
    {
      id: 'publication_24',
      label:
        'Knowledge environments representing molecular entities for the virtual physiological human',
      data: {
        name: 'Knowledge environments representing molecular entities for the virtual physiological human',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Knowledge environments representing molecular entities for the virtual physiological human',
        },
      },
    },
    {
      id: 'publication_199',
      label:
        'Data-driven modeling of knowledge assemblies in understanding comorbidity between type 2 diabetes mellitus and Alzheimer’s Disease',
      data: {
        name: 'Data-driven modeling of knowledge assemblies in understanding comorbidity between type 2 diabetes mellitus and Alzheimer’s Disease',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Data-driven modeling of knowledge assemblies in understanding comorbidity between type 2 diabetes mellitus and Alzheimer’s Disease',
        },
      },
    },
    {
      id: 'publication_27',
      label:
        "ADO: A disease ontology representing the domain knowledge specific to Alzheimer's disease",
      data: {
        name: "ADO: A disease ontology representing the domain knowledge specific to Alzheimer's disease",
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            "ADO: A disease ontology representing the domain knowledge specific to Alzheimer's disease",
        },
      },
    },
    {
      id: 'publication_197',
      label:
        'CLEP: a hybrid data-and knowledge-driven framework for generating patient representations',
      data: {
        name: 'CLEP: a hybrid data-and knowledge-driven framework for generating patient representations',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'CLEP: a hybrid data-and knowledge-driven framework for generating patient representations',
        },
      },
    },
    {
      id: 'publication_117',
      label:
        "Knowledge-driven computational modeling in Alzheimer's disease research: current state and future trends",
      data: {
        name: "Knowledge-driven computational modeling in Alzheimer's disease research: current state and future trends",
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            "Knowledge-driven computational modeling in Alzheimer's disease research: current state and future trends",
        },
      },
    },
    {
      id: 'publication_157',
      label: 'PathMe: merging and exploring mechanistic pathway knowledge',
      data: {
        name: 'PathMe: merging and exploring mechanistic pathway knowledge',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'PathMe: merging and exploring mechanistic pathway knowledge',
        },
      },
    },
    {
      id: 'publication_160',
      label:
        'Re-curation and rational enrichment of knowledge graphs in Biological Expression Language',
      data: {
        name: 'Re-curation and rational enrichment of knowledge graphs in Biological Expression Language',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Re-curation and rational enrichment of knowledge graphs in Biological Expression Language',
        },
      },
    },
    {
      id: 'publication_7',
      label:
        'BioKEEN: A library for learning and evaluating biological knowledge graph embeddings.',
      data: {
        name: 'BioKEEN: A library for learning and evaluating biological knowledge graph embeddings.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'BioKEEN: A library for learning and evaluating biological knowledge graph embeddings.',
        },
      },
    },
    {
      id: 'publication_223',
      label:
        'STonKGs: a sophisticated transformer trained on biomedical text and knowledge graphs',
      data: {
        name: 'STonKGs: a sophisticated transformer trained on biomedical text and knowledge graphs',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'STonKGs: a sophisticated transformer trained on biomedical text and knowledge graphs',
        },
      },
    },
    {
      id: 'publication_57',
      label:
        'Initial Results on Knowledge Discovery and Decision Support for Intracranial Aneurysms.',
      data: {
        name: 'Initial Results on Knowledge Discovery and Decision Support for Intracranial Aneurysms.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Initial Results on Knowledge Discovery and Decision Support for Intracranial Aneurysms.',
        },
      },
    },
    {
      id: 'publication_78',
      label:
        'Knowledge structuring and retrieval for intracranial aneurysm research',
      data: {
        name: 'Knowledge structuring and retrieval for intracranial aneurysm research',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            'Knowledge structuring and retrieval for intracranial aneurysm research',
        },
      },
    },
    {
      id: 'publication_22',
      label: 'for Biomedical Knowledge Discovery',
      data: {
        name: 'for Biomedical Knowledge Discovery',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'for Biomedical Knowledge Discovery',
        },
      },
    },
    {
      id: 'publication_90',
      label:
        "ADO: A formal ontology for understanding structure of information and domain knowledge of Alzheimer's disease.",
      data: {
        name: "ADO: A formal ontology for understanding structure of information and domain knowledge of Alzheimer's disease.",
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value:
            "ADO: A formal ontology for understanding structure of information and domain knowledge of Alzheimer's disease.",
        },
      },
    },
    {
      id: 'service_5',
      label: 'BiK>Mi',
      data: {
        name: 'BiK>Mi',
        description:
          'The Biological Knowledge Miner (BiK>Mi) is a comprehensive user interface for exploring the annotated and enriched knowledge graphs generated by e(BE:L). In addition to its ability to retrieve key data on specific drugs, proteins, and other biological entities, BiK>Mi also has tools available for extracting BEL statements based on user-defined criteria, for visualizing the embedded subgraphs and networks, and for comparing user-generated gene expression data against the manually curated relationships stored within.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'BiK>Mi',
        },
      },
    },
    {
      id: 'project_3',
      label: 'PHAGO',
      data: {
        name: 'PHAGO',
        link: null,
        description: null,
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'PHAGO',
        },
      },
    },
    {
      id: 'service_19',
      label: 'SCAIView',
      data: {
        name: 'SCAIView',
        description:
          'SCAIView is a knowledge discovery software for the life sciences. It facilitates­ the rapid identification of aggregate­d information from large text sources.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'SCAIView',
        },
      },
    },
    {
      id: 'project_11',
      label: 'NEUROALLIANZ',
      data: {
        name: 'NEUROALLIANZ',
        link: null,
        description: null,
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'NEUROALLIANZ',
        },
      },
    },
    {
      id: 'service_18',
      label: 'PTSDDB',
      data: {
        name: 'PTSDDB',
        description:
          'PTSDDB: A database for exploring the biomarker knowledge and meta-analyses in the context of psychiatric disorders.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'PTSDDB',
        },
      },
    },
    {
      id: 'service_2',
      label: 'AETIONOMY Knowledge Space',
      data: {
        name: 'AETIONOMY Knowledge Space',
        description: null,
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'AETIONOMY Knowledge Space',
        },
      },
    },
    {
      id: 'project_6',
      label: 'AETIONOMY',
      data: {
        name: 'AETIONOMY',
        link: null,
        description: null,
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'AETIONOMY',
        },
      },
    },
    {
      id: 'service_16',
      label: 'PathMe',
      data: {
        name: 'PathMe',
        description:
          'PathMe, a Python package that transforms pathway knowledge from three major pathway databases into a unified abstraction using Biological Expression Language as the pivotal, integrative schema. PathMe is complemented by a novel web application (freely available at https://pathme.scai.fraunhofer.de/) which allows users to comprehensively explore pathway crosstalks and compare areas of consensus and discrepancies.',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'PathMe',
        },
      },
    },
    {
      id: 'solution_11',
      label: 'Data Catalogues and Knowledge Management',
      data: {
        name: 'Data Catalogues and Knowledge Management',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Data Catalogues and Knowledge Management',
        },
      },
    },
    {
      id: 'generic_56',
      label: 'Presentations',
      data: {
        name: 'Presentations',
        type: null,
        link: null,
        description: 'Presentations for solution_11',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Presentations',
        },
      },
    },
    {
      id: 'generic_58',
      label: 'People',
      data: {
        name: 'People',
        type: null,
        link: null,
        description: 'People for solution_11',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'People',
        },
      },
    },
    {
      id: 'generic_54',
      label: 'Tutorials',
      data: {
        name: 'Tutorials',
        type: null,
        link: null,
        description: 'Tutorials for solution_11',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Tutorials',
        },
      },
    },
    {
      id: 'generic_53',
      label: 'Services',
      data: {
        name: 'Services',
        type: null,
        link: null,
        description: 'Services for solution_11',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Services',
        },
      },
    },
    {
      id: 'generic_55',
      label: 'Projects',
      data: {
        name: 'Projects',
        type: null,
        link: null,
        description: 'Projects for solution_11',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Projects',
        },
      },
    },
    {
      id: 'generic_57',
      label: 'Publications',
      data: {
        name: 'Publications',
        type: null,
        link: null,
        description: 'Publications for solution_11',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Publications',
        },
      },
    },
    {
      id: 'solution_3',
      label: 'Data and Knowledge Management',
      data: {
        name: 'Data and Knowledge Management',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Data and Knowledge Management',
        },
      },
    },
    {
      id: 'generic_107',
      label: 'Services',
      data: {
        name: 'Services',
        type: null,
        link: null,
        description: 'Services for solution_3',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Services',
        },
      },
    },
    {
      id: 'generic_109',
      label: 'Projects',
      data: {
        name: 'Projects',
        type: null,
        link: null,
        description: 'Projects for solution_3',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Projects',
        },
      },
    },
    {
      id: 'generic_111',
      label: 'Publications',
      data: {
        name: 'Publications',
        type: null,
        link: null,
        description: 'Publications for solution_3',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Publications',
        },
      },
    },
    {
      id: 'generic_112',
      label: 'People',
      data: {
        name: 'People',
        type: null,
        link: null,
        description: 'People for solution_3',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'People',
        },
      },
    },
    {
      id: 'generic_110',
      label: 'Presentations',
      data: {
        name: 'Presentations',
        type: null,
        link: null,
        description: 'Presentations for solution_3',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Presentations',
        },
      },
    },
    {
      id: 'generic_108',
      label: 'Tutorials',
      data: {
        name: 'Tutorials',
        type: null,
        link: null,
        description: 'Tutorials for solution_3',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Tutorials',
        },
      },
    },
    {
      id: 'solution_6',
      label: 'Knowledge Graphs',
      data: {
        name: 'Knowledge Graphs',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Knowledge Graphs',
        },
      },
    },
    {
      id: 'generic_23',
      label: 'Services',
      data: {
        name: 'Services',
        type: null,
        link: null,
        description: 'Services for solution_6',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Services',
        },
      },
    },
    {
      id: 'generic_24',
      label: 'Tutorials',
      data: {
        name: 'Tutorials',
        type: null,
        link: null,
        description: 'Tutorials for solution_6',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Tutorials',
        },
      },
    },
    {
      id: 'generic_27',
      label: 'Publications',
      data: {
        name: 'Publications',
        type: null,
        link: null,
        description: 'Publications for solution_6',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Publications',
        },
      },
    },
    {
      id: 'generic_28',
      label: 'People',
      data: {
        name: 'People',
        type: null,
        link: null,
        description: 'People for solution_6',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'People',
        },
      },
    },
    {
      id: 'generic_25',
      label: 'Projects',
      data: {
        name: 'Projects',
        type: null,
        link: null,
        description: 'Projects for solution_6',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Projects',
        },
      },
    },
    {
      id: 'generic_26',
      label: 'Presentations',
      data: {
        name: 'Presentations',
        type: null,
        link: null,
        description: 'Presentations for solution_6',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Presentations',
        },
      },
    },
    {
      id: 'sa_1',
      label: 'Making Data and Knowledge "AI-Ready"',
      data: {
        name: 'Making Data and Knowledge "AI-Ready"',
      },
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {
          value: 'Making Data and Knowledge "AI-Ready"',
        },
      },
    },
    {
      id: 'edge_146',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1701',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_627',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1982',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_642',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_634',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_290',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1676',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_243',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_893',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1969',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_321',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1673',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1598',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1674',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1837',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1842',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_661',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_75',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_120',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_637',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_659',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1432',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1427',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_516',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_636',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1695',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_69',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1161',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1971',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1995',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1860',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_635',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_804',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1857',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_589',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_885',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_581',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1000',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1853',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1983',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_890',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1838',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_343',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_74',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_588',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1696',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1672',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_266',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1879',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_887',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_846',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1877',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_623',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_841',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_425',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_923',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1855',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_317',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1856',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_624',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1675',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_918',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_116',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1852',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1984',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_917',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_894',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_889',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_247',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_587',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1431',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1880',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1981',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_70',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_660',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1851',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1681',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_922',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1979',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1691',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_528',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_892',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1689',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1596',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1430',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1843',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_628',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_809',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_638',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_641',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_802',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_798',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_582',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_585',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_590',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_919',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1839',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_148',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_921',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_323',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1409',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1980',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1998',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_423',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_843',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1997',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_847',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_115',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_849',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_643',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1878',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_807',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_319',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1407',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1423',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1406',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1844',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_341',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_625',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1999',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_583',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_427',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1426',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_119',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_848',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1698',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1593',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_245',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_7',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_805',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_118',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1679',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1592',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_342',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1678',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_842',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1700',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1424',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1677',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_79',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1840',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1968',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1159',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1690',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_474',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_799',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_147',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_658',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_145',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_888',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1680',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_318',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_657',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1881',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1410',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1425',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1429',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1697',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1699',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1884',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1970',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_472',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_844',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1597',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1858',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_394',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_513',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_803',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_72',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1882',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_920',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_586',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_845',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_97',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_662',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1428',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1002',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1883',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_640',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1408',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1693',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_149',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_476',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1595',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_150',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_891',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1854',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1859',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1001',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1160',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_117',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_639',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_215',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1967',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_471',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_800',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1702',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1591',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_886',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1688',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_808',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_806',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_584',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_626',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_850',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_801',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1599',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1692',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1841',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1996',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1694',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
    {
      id: 'edge_1594',
      data: {},
      type: 'graphin-circle',
      style: {
        keyshape: {
          size: 50,
        },
        label: {},
      },
    },
  ],
  edges: [
    {
      id: 'edge_51',
      source: 'person_25',
      target: 'project_5',
    },
    {
      id: 'edge_52',
      source: 'person_25',
      target: 'project_4',
    },
    {
      id: 'edge_53',
      source: 'person_25',
      target: 'project_1',
    },
    {
      id: 'edge_57',
      source: 'person_25',
      target: 'presentation_3',
    },
    {
      id: 'edge_58',
      source: 'person_25',
      target: 'presentation_4',
    },
    {
      id: 'edge_69',
      source: 'person_25',
      target: 'publication_1',
    },
    {
      id: 'edge_79',
      source: 'person_25',
      target: 'publication_11',
    },
    {
      id: 'edge_565',
      source: 'person_25',
      target: 'publication_13',
    },
    {
      id: 'edge_1595',
      source: 'person_25',
      target: 'publication_184',
    },
    {
      id: 'edge_1698',
      source: 'person_25',
      target: 'publication_200',
    },
    {
      id: 'edge_1856',
      source: 'person_25',
      target: 'publication_220',
    },
    {
      id: 'edge_1952',
      source: 'person_25',
      target: 'publication_229',
    },
    {
      id: 'edge_1992',
      source: 'person_25',
      target: 'publication_234',
    },
    {
      id: 'edge_45',
      source: 'publication_6',
      target: 'project_1',
    },
    {
      id: 'edge_43',
      source: 'publication_4',
      target: 'project_1',
    },
    {
      id: 'edge_41',
      source: 'publication_2',
      target: 'project_5',
    },
    {
      id: 'edge_40',
      source: 'publication_1',
      target: 'project_5',
    },
    {
      id: 'edge_46',
      source: 'publication_7',
      target: 'project_1',
    },
    {
      id: 'edge_50',
      source: 'publication_11',
      target: 'project_1',
    },
    {
      id: 'edge_10',
      source: 'service_5',
      target: 'project_3',
    },
    {
      id: 'edge_11',
      source: 'service_5',
      target: 'project_1',
    },
    {
      id: 'edge_12',
      source: 'service_5',
      target: 'project_5',
    },
    {
      id: 'edge_21',
      source: 'service_19',
      target: 'project_11',
    },
    {
      id: 'edge_7',
      source: 'service_2',
      target: 'project_6',
    },
    {
      id: 'edge_145',
      source: 'solution_11',
      target: 'generic_53',
    },
    {
      id: 'edge_146',
      source: 'solution_11',
      target: 'generic_54',
    },
    {
      id: 'edge_147',
      source: 'solution_11',
      target: 'generic_55',
    },
    {
      id: 'edge_148',
      source: 'solution_11',
      target: 'generic_56',
    },
    {
      id: 'edge_149',
      source: 'solution_11',
      target: 'generic_57',
    },
    {
      id: 'edge_150',
      source: 'solution_11',
      target: 'generic_58',
    },
    {
      id: 'edge_97',
      source: 'solution_3',
      target: 'generic_107',
    },
    {
      id: 'edge_98',
      source: 'solution_3',
      target: 'generic_108',
    },
    {
      id: 'edge_99',
      source: 'solution_3',
      target: 'generic_109',
    },
    {
      id: 'edge_100',
      source: 'solution_3',
      target: 'generic_110',
    },
    {
      id: 'edge_101',
      source: 'solution_3',
      target: 'generic_111',
    },
    {
      id: 'edge_102',
      source: 'solution_3',
      target: 'generic_112',
    },
    {
      id: 'edge_115',
      source: 'solution_6',
      target: 'generic_23',
    },
    {
      id: 'edge_116',
      source: 'solution_6',
      target: 'generic_24',
    },
    {
      id: 'edge_117',
      source: 'solution_6',
      target: 'generic_25',
    },
    {
      id: 'edge_118',
      source: 'solution_6',
      target: 'generic_26',
    },
    {
      id: 'edge_119',
      source: 'solution_6',
      target: 'generic_27',
    },
    {
      id: 'edge_120',
      source: 'solution_6',
      target: 'generic_28',
    },
  ],
};
