export declare const question: {
    edges: {
        id: string;
        source: string;
        target: string;
    }[];
    nodes: ({
        id: string;
        outcomes_results: null;
        proposed_solutions: null;
        question: string;
        tags: string;
        value_chain_areas: string;
        description?: undefined;
        link?: undefined;
        name?: undefined;
        type?: undefined;
    } | {
        description: string;
        id: string;
        link: null;
        name: string;
        type: null;
        outcomes_results?: undefined;
        proposed_solutions?: undefined;
        question?: undefined;
        tags?: undefined;
        value_chain_areas?: undefined;
    })[];
};
export declare const knowledge: {
    edges: {
        id: string;
        source: string;
        target: string;
    }[];
    nodes: ({
        description: string;
        id: string;
        link: null;
        name: string;
        type: null;
        outcomes_results?: undefined;
        proposed_solutions?: undefined;
        question?: undefined;
        tags?: undefined;
        value_chain_areas?: undefined;
    } | {
        id: string;
        outcomes_results: null;
        proposed_solutions: null;
        question: string;
        tags: string;
        value_chain_areas: string;
        description?: undefined;
        link?: undefined;
        name?: undefined;
        type?: undefined;
    })[];
};
