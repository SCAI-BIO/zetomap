import { v4 as uuid } from 'uuid';
import Graphin from '@antv/graphin';
import iconLoader from '@antv/graphin-icons';

import { expApi } from 'api/sdk';

type Person = {
  class: string;
  first_name: string;
  last_name: string;
  id: string;
  image_uri: string;
};

const SERVER_URL = `${process.env.REACT_APP_API_URL}`;

const { fontFamily, glyphs } = iconLoader();
const icons = Graphin.registerFontFamily(iconLoader);

const COLOR_SCHEMA = {
  aop: {
    stroke: '#8e0000',
    fill: '#ff0000',
    size: 50,
  },
  ke: {
    stroke: '#000976',
    fill: '#0013ff',
    size: 50,
  },
  compound: {
    stroke: '#b5b800',
    fill: '#fbff00',
    size: 50,
  },
  gene: {
    stroke: '#007612',
    fill: '#00e022',
    size: 50,
  },
};

function styleIcon(nodeName: string) {
  if (nodeName === 'tutorial') {
    return {
      type: 'font',
      fontFamily: fontFamily,
      value: icons.wrench,
      color: 'blue',
      // size: [50, 50],
    };
  }
}

function styleNode(nodeType: string) {
  if (!nodeType) {
    return { stroke: '#526900', fill: '#b2d235', size: 60 };
  } else {
    return COLOR_SCHEMA[nodeType];
  }
}

export const processBaseGraphData = (data: any) => {
  const nodesToProcess = data?.nodes;
  const edgesToProcess = data?.edges;
  const keGeneData = data?.ke_gene_data;
  let processedNodes = [];
  let processedEdges = [];
  if (nodesToProcess) {
    processedNodes = nodesToProcess.map((node: any) => {
      const label = node.name;
      const nodeType = node.node_type || null;
      // @ts-ignore
      // const {stroke, fill} = COLOR_SCHEMA[nodeType];
      const { stroke, fill, size } = styleNode(nodeType);
      return {
        id: node.id,
        label,
        data: {
          id: node.id,
          name: node.name,
          linkType: node.type,
          link: node.link,
          description: node.description,
          goal: node.goal,
          nodeType,
        },
        type: 'graphin-circle',
        style: {
          keyshape: {
            stroke,
            fill,
            size,
          },
          label: {
            value: label,
          },
        },
      };
    });
  }
  if (edgesToProcess) {
    processedEdges = data.edges.map((edge: any) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
    }));
  }

  return {
    nodes: processedNodes,
    edges: processedEdges,
    keGeneData: keGeneData,
  };
};

export const processNeighborsGraphData = (data: any) => {
  const nodesToProcess = data?.nodes;
  const edgesToProcess = data?.edges;
  const keGeneData = data?.ke_gene_data;
  let processedNodes = [];
  let processedEdges = [];
  if (nodesToProcess) {
    processedNodes = data.nodes.map((node: any) => {
      let label: string;
      const nodeType = node?.node_type;
      const nodeId = node?.id;

      // types
      const basicNodeProperties = (label: string, type: string | number) => {
        const { stroke, fill } = COLOR_SCHEMA[type];
        return {
          id: nodeId,
          label,
          type: 'graphin-circle',
          style: {
            keyshape: {
              size: 50,
              stroke,
              fill,
            },
            label: {
              value: node.name,
            },
            icon: styleIcon(label),
          },
        };
      };
      if (nodeType === 'ke') {
        label = node.name;
        return {
          ...basicNodeProperties(label, nodeType),
          data: {
            id: nodeId,
            name: label,
            nodeType,
            data: node.data,
          },
        };
      } else {
        label = node.name;
        return {
          ...basicNodeProperties(label, nodeType),
          data: {
            id: nodeId,
            class: nodeType,
            nodeType,
          },
        };
      }
    });
  }

  if (edgesToProcess) {
    processedEdges = data.edges.map((edge: any) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
    }));
  }
  return {
    nodes: processedNodes,
    edges: processedEdges,
    keGeneData: keGeneData,
    /* combos: {
      members: processedNodes.map((node: any) => node.id),
    }, */
  };
};
