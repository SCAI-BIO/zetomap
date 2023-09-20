/**
 *
 * CompoundsList
 *
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Radio, Space } from 'antd';
import styled from 'styled-components/macro';
import isEmpty from 'lodash/isEmpty';
import { Compound } from '../../../api';
import { predictApi } from '../../../api/sdk';
import { processBaseGraphData } from '../../../api/utils';

interface AvailableCompounds {
  compoundList: Compound[];
  setGraphData: (value: any) => void;
}

const StyledCompoundsList = styled.div``;

export function CompoundsList({
  compoundList,
  setGraphData,
}: AvailableCompounds) {
  const [selectedCompound, selectCompound] = useState<string>();
  const [radioButtonList, setRadioButtonList] = useState<any[]>([]);

  const onChange = e => {
    selectCompound(e.target.value);
  };

  useEffect(() => {
    if (compoundList && !isEmpty(compoundList)) {
      const sortedCompoundList = compoundList.sort((a, b) =>
        a.name < b.name ? -1 : 1,
      );
      setRadioButtonList(
        sortedCompoundList.map(Compound => {
          return (
            <Radio.Button key={Compound.id} value={Compound.id}>
              {Compound.name}
            </Radio.Button>
          );
        }),
      );
    }
  }, [compoundList, setRadioButtonList]);

  useEffect(() => {
    if (selectedCompound) {
      predictApi
        .getOmicsKesAndAopsPredictOmicsCompoundIdGet(selectedCompound) // TODO: fix input for that of selected compound
        .then(res => {
          const compoundGraph = processBaseGraphData(res?.data);
          setGraphData(compoundGraph);
        });
    }
  }, [selectedCompound, setGraphData]);

  // [ {"id": "Compound_1", "name": "EHR and something", "node_type": "Compound"}, ]
  return (
    <StyledCompoundsList>
      <Radio.Group buttonStyle="solid" onChange={onChange}>
        <Space direction="vertical">{radioButtonList}</Space>
      </Radio.Group>
    </StyledCompoundsList>
  );
}
