import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Collapse } from 'antd';

/* eslint-disable-next-line */
export interface FocusAreaCardProps {}

// const { Panel } = Collapse;

export function FocusAreaCard(props: FocusAreaCardProps) {
  const { state } = useLocation<any>();
  return (
    <Card title={state.keyword}></Card>
  );
}

export default FocusAreaCard;
