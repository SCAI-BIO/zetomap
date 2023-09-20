/* eslint-disable prettier/prettier */
import { Button, Input, InputRef, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { ColumnType, FilterConfirmProps } from 'antd/lib/table/interface';
import { SearchOutlined } from '@ant-design/icons';
import { DataIndex } from 'rc-table/lib/interface';
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { expApi } from "../../../api/sdk";
import isEmpty from "lodash/isEmpty";

export interface ExpEventCardProps {}

interface ExpData {
  key: number;
  ensembl: string;
  zfin: string;
  compound: string;
  log2fc: number;
  padj: number;
  zfinid: string;
  pvalue: number;
  timepoint: number;
  concentration: number;
}

// const onChange: TableProps<ExpData>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

export function ExpDataCard(props: ExpEventCardProps) {
  const { state } = useLocation<any>();
  const [searchText, setSearchText] = useState<any>('');
  const [searchedColumn, setSearchedColumn] = useState<any>('');
  const searchInput = useRef<InputRef>(null);
  const [tableData, setTableData] = useState<any>([]);
  const [testedGenes, setTestedGenes] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<ExpData> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined rev={""} />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} rev={""} />
    ),
    onFilter: (value, record) =>
    // @ts-ignore
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    // @ts-ignore
    onFilterDropdownOpenChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 6000);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  useEffect(() => {
    const clickedNodeID = state.id;
    setLoading(true);
    setTableData([])

    expApi.getExpGenesExpKeNodeIdGet(clickedNodeID).then(res => {
      if (!isEmpty(res.data.exp)) {
        setTableData(res.data.exp);
        setLoading(false);
        setTestedGenes(res.data.tested);
      }
    }).catch(e => {
      console.log("Exp error: ", e);
    });
  }, [state, setTableData, setLoading]);


  const columns: ColumnsType<ExpData> = [
    {
      dataIndex: 'ensembl',
      title: 'Ensembl Gene ID',
      ...getColumnSearchProps('ensembl'),
    },
    {
      dataIndex: 'zfin',
      title: 'ZFIN Gene Symbol',
      ...getColumnSearchProps('zfin'),
      render: (_: any, record: ExpData) => (
        <a href={`https://zfin.org/${record.zfinid}`} target="_blank" rel="noreferrer">{record.zfin}</a>
      )
    },
    {
      dataIndex: 'compound',
      title: 'Compound',
      filters: [
        {
          text: "Chlorpyrifos",
          value: "Chlorpyrifos",
        },
        {
          text: "Triadimefon",
          value: "Triadimefon",
        },
        {
          text: "Valproic acid",
          value: "Valproic acid",
        },
      ],
      // @ts-ignore
      onFilter: (value: string, record) => record.compound === value,
      // ...getColumnSearchProps('compound'),
    },
    {
      dataIndex: 'log2fc',
      title: 'Log2FC',
      // onFilter: (value: any, record) => record.log2fc === 0,
      sorter: (a, b) => a.log2fc - b.log2fc,
      sortDirections: ['descend', 'ascend'],
    },
    {
      dataIndex: 'pvalue',
      title: 'p-value',
      sorter: (a, b) => a.pvalue - b.pvalue,
      sortDirections: ['descend', 'ascend'],
    },
    {
      dataIndex: 'padj',
      title: 'Adjusted p-value',
      sorter: (a, b) => a.padj - b.padj,
      defaultSortOrder: 'ascend',
    },
    {
      dataIndex: 'timepoint',
      title: 'Timepoint (hr)',
      sorter: (a, b) => a.timepoint - b.timepoint,
      sortDirections: ['descend', 'ascend'],
    },
    {
      dataIndex: 'concentration',
      title: 'Compound Concentration',
      sorter: (a, b) => a.concentration - b.concentration,
      sortDirections: ['descend', 'ascend'],
    },
  ];

    return (
      <Table
      dataSource={tableData}
      columns={columns}
      onRow={(record, index) => ({style: {
          background: testedGenes.includes(record.zfin) ? 'lightblue' : 'default',
      }})}
      // onChange={onChange}
      />
    );
}


export default ExpDataCard;
