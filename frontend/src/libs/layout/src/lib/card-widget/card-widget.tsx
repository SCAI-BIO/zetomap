import React from 'react';
import { Card, Typography } from 'antd';
import styled from 'styled-components';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface CardWidgetProps {
  title: string;
  content: ReactNode;
}

const { Title } = Typography;

const StyledCardWidget = styled.div``;

export function CardWidget({ title, content }: CardWidgetProps) {
  return (
    <StyledCardWidget>
      <Card
        title={<div className="card--header h4">{title}</div>}
        extra={<a href="#">More</a>}
        className="card--header"
      >
        {content}
      </Card>
    </StyledCardWidget>
  );
}

export default CardWidget;
