import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Card, Collapse } from 'antd';

/* eslint-disable-next-line */
export interface GenericCardProps {}

const { Panel } = Collapse;

export function GenericCard(props: GenericCardProps) {
  const { genericId } = useParams<any>();
  const { state } = useLocation<any>();
  return (
    <Card title={state.name}>
      <Collapse defaultActiveKey={1}>
        <Panel header="Name" key="1">
          <p>{state.name}</p>
        </Panel>
      </Collapse>
    </Card>
  );
}

export default GenericCard;
