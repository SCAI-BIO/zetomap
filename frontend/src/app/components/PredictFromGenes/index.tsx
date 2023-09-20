/**
 *
 * CompoundsList
 *
 */
import * as React from 'react';
import { Form, Button, Input } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { predictApi } from '../../../api/sdk';
import { processBaseGraphData } from '../../../api/utils';

interface AvailableCompounds {
  setGraphData: (value: any) => void;
}

const { TextArea } = Input;

export function PredictGeneList({ setGraphData }: AvailableCompounds) {
  const [form] = Form.useForm();

  const onFinish = () => {
    const genesInput = form.getFieldValue('geneList');
    const genesArray = genesInput.split(/\r\n|\r|\n/);
    const geneListQuery = { genes: genesArray };

    if (!isEmpty(genesArray)) {
      predictApi
        .getKesAndAopsFromGeneListPredictGenesPost(geneListQuery)
        .then(res => {
          const compoundGraph = processBaseGraphData(res?.data);
          setGraphData(compoundGraph);
        });
    }
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
  };

  // [ {"id": "Compound_1", "name": "EHR and something", "node_type": "Compound"}, ]
  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item label="Genes:" name={'geneList'}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <TextArea rows={6} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
