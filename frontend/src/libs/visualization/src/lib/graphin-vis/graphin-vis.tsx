import React, { useEffect, useRef, useState } from 'react';

import Graphin, { Behaviors, Components } from '@antv/graphin';
import type { LegendChildrenProps } from '@antv/graphin';
import { Switch } from 'antd';
import styled from 'styled-components';

const { ClickSelect, Hoverable, ActivateRelations } = Behaviors;
const { Legend, MiniMap } = Components;

const StyledGraphVis = styled.div`
  border: 1px solid #394929;
  border-radius: 3px;
`;

const StyledToggles = styled.div`
  float: left;
  margin-top: 5px;
`;

/* eslint-disable-next-line */
export interface GraphinVisProps {
  data: any;
  layout: any;
  setSelectedNode: any;
}

export function GraphinVis({ data, layout, setSelectedNode }: GraphinVisProps) {
  const graphinRlef = useRef(null);
  const [showMiniMap, setShowMiniMap] = useState<boolean>(false);

  useEffect(() => {
    // @ts-ignore
    const { graph } = graphinRlef.current;
    graph.on('nodeselectchange', (e: any) => {
      if (e.select) {
        setSelectedNode(e.target['_cfg']);
      }
    });
  }, [graphinRlef, setSelectedNode]);

  function onChange(checked: boolean) {
    setShowMiniMap(checked);
  }

  return (
    <>
      <StyledGraphVis>
        {/*TODO implement Hull*/}
        <Graphin data={data} layout={layout} ref={graphinRlef}>
          <ClickSelect multiple={false} />
          <Hoverable />
          <ActivateRelations trigger="mouseenter" />
          <Legend bindType="node" sortKey="data.nodeType">
            {(renderProps: LegendChildrenProps) => {
              return <Legend.Node {...renderProps} />;
            }}
          </Legend>
          {showMiniMap && <MiniMap />}
        </Graphin>
      </StyledGraphVis>
      <StyledToggles>
        <Switch size="small" onChange={onChange} /> Toggle Minimap
      </StyledToggles>
    </>
  );
}

export default GraphinVis;
