import React, { useEffect, useState } from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { useHistory } from 'react-router-dom';

import { GraphinVis } from '../../../libs/visualization/src';
import { queryApi } from '../../../api/sdk';
import {
  processBaseGraphData,
  processNeighborsGraphData,
} from '../../../api/utils';
import { Row } from 'react-bootstrap';
import { Card, Collapse } from 'antd';
import { AopListCard } from '../aop-list-card';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;

const { Panel } = Collapse;

/* eslint-disable-next-line */
export interface GraphVisContainerProps {
  searchGraphData: any;
}

export function GraphVisContainer({ searchGraphData }: GraphVisContainerProps) {
  const [graphData, setGraphData] = useState<any>();
  const [selectedNode, setSelectedNode] = useState<any>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    queryApi
      .getBaseGraphResultsBaseGet()
      .then((res: any) => {
        const newData = processBaseGraphData(res?.data);
        setGraphData(newData);
        setIsSuccess(true);
      })
      .catch(e => {
        console.log(e);
      });
  }, [setGraphData, setIsSuccess]);

  useEffect(() => {
    if (selectedNode) {
      // collect data from nodes
      const clickedNodeID = selectedNode.id;
      const nodeData = selectedNode.model.data;
      const nodeClass = selectedNode.model.data.nodeType;

      queryApi
        .getNextNodesResultsNodeIdGet(clickedNodeID)
        .then(res => {
          if (!isEmpty(res.data)) {
            setGraphData((data: any) => {
              const newData = processNeighborsGraphData(res.data);
              let newNodes = [...data.nodes, ...newData.nodes];
              let newEdges = [...data.edges, ...newData.edges];

              const uniqueNodes = newNodes.filter(
                (node, i, arr) => arr.findIndex(t => t.id === node.id) === i,
              );

              return {
                nodes: uniqueNodes,
                edges: newEdges,
              };
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
      if (nodeClass === 'ke') {
        history.push(`/app/exp/${clickedNodeID}`, nodeData);
      } else {
        history.push(`/app/results/${clickedNodeID}`, nodeData);
      }
    }
  }, [selectedNode, setGraphData, history]);

  useEffect(() => {
    if (searchGraphData && !isEmpty(searchGraphData)) {
      setGraphData(searchGraphData);
    }
  }, [searchGraphData, setGraphData]);

  // useEffect(() => {
  //   if (!isEmpty(graphData)) {
  //     let node_map = graphData.nodes.reduce(function(map, obj) {
  //       map[obj.id] = obj.data.nodeType;
  //       return map;
  //     }, {});
  //
  //     let newHulls = graphData.edges.map(
  //       (edge: { source: string; target: string | number }) => {
  //         let source_type = node_map[edge.source];
  //         let target_type = node_map[edge.target];
  //         let members = new Map<string, Array<string>>();
  //         if (source_type === 'aop' && target_type === 'ke') {
  //           if (edge.source in members) {
  //             members[edge.source] = [edge.target];
  //           } else {
  //             members[edge.source].push(edge.target);
  //           }
  //         }
  //
  //         return members;
  //       },
  //     );
  //     // console.log(newHulls);
  //   }
  // });

  if (isSuccess && !isEmpty(graphData)) {
    return (
      <>
        <Row>
          <Card style={{ float: 'left' }}>
            <GraphinVis
              data={graphData}
              layout={{
                type: 'graphin-force',
                animation: true,
              }}
              setSelectedNode={setSelectedNode}
            />
          </Card>
        </Row>
        <Row>
          <Collapse>
            <Panel header="Predicted AOPs" key="1">
              <AopListCard graphData={graphData}></AopListCard>
            </Panel>
          </Collapse>
        </Row>
      </>
    );
  } else return <p>No data</p>;
}

export default GraphVisContainer;
