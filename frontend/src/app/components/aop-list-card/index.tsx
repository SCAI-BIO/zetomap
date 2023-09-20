/* eslint-disable prettier/prettier */
import {Collapse, List} from 'antd';
import React, {useEffect, useState} from 'react';
import isEmpty from "lodash/isEmpty";

const { Panel } = Collapse;


export function AopListCard({ graphData }) {
    const [aopList, setAopList] = useState<any>([]);
    const [keGeneMap, setKeGeneMap] = useState<Map<string, string[]>>(() => new Map())

    useEffect(() => {
        if (!isEmpty(graphData.keGeneData)) {
            setKeGeneMap(graphData.keGeneData)
        }
        const nodeMap = Object.fromEntries(
            graphData.nodes.map((node: { id: any; label: any; data: { nodeType: any; }; }) => [node.id, {'name': node.label, 'type': node.data.nodeType}])
        )

        const aopData = new Map<string, any>();
        graphData.edges.forEach((edge: { source: string | number; target: string | number; }) => {
            const sourceNodeData = nodeMap[edge.source];
            const targetNodeData = nodeMap[edge.target];

            if ((sourceNodeData.type === "aop") && (targetNodeData.type === "ke")) {
                const aopName = sourceNodeData.name;
                const keName = targetNodeData.name;

                if (aopData.has(aopName)) {
                    const newKeList = [...aopData.get(aopName), keName]
                    aopData.set(aopName, newKeList)
                } else {
                    aopData.set(aopName, [keName]);
                }
            }
        })

        setAopList(aopData);

}, [setAopList, graphData, setKeGeneMap]);


    if (!isEmpty(aopList)) {

        let aopKeLists = new Array<any>();
        let index = 1;

        for (let [aop, kes] of aopList) {
            const aopForm = <span style={{color: '#8B0000'}}><b>{aop}</b></span>;

            aopKeLists.push(
                <Panel header={aopForm} key={index}>
                    <List
                        size="small"
                        bordered
                        dataSource={kes}
                        // @ts-ignore
                        renderItem={
                            (ke: string) => {
                                const keGenes = !isEmpty(keGeneMap[ke]) ? keGeneMap[ke] : [];
                                // eslint-disable-next-line react/style-prop-object
                                // @ts-ignore
                                return (
                                    <List.Item>
                                        {/*<span style={{color: 'blue'}}>{ke} | <span style={{color: 'green'}}>{keGenes.join(", ")}</span></span>*/}
                                        <span style={{color: 'blue'}}>{ke}</span>
                                    </List.Item>
                                )
                            }
                        }>
                    </List>
                </Panel>
            );
            index++;
        }
        return <Collapse>{aopKeLists}</Collapse>

    } else {
            return (<p>No data</p>)
    }
}
// | <span style={{color: 'green'}}>{keGenes.join(", ")}</span>
export default AopListCard;
