/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import {
  DataProtection,
  ImprintMartin,
  PublishingNotes,
  TermsAndConditions,
} from 'libs/pages/src';
import { Footer, Header, Page } from 'libs/layout/src';

import GraphVisContainer from './components/graph-vis-container/graph-vis-container';
import ExpDataCard from './components/exp-data-card/exp-data-card';

import { Card, Collapse } from 'antd';
import { CompoundsList } from './components/CompoundsList';
import { PredictGeneList } from './components/PredictFromGenes';
import { Compound } from 'api';
import { queryApi } from 'api/sdk';

const { Panel } = Collapse;

export function App() {
  const [graphData, setGraphData] = useState(null);
  const [compoundsList, setCompoundsList] = useState<Compound[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    queryApi.getCompoundsResultsCompoundsGet().then((res: any) => {
      setCompoundsList(res.data);
    });
  }, [setCompoundsList]);

  const CompoundData = () => {
    return (
      <CompoundsList compoundList={compoundsList} setGraphData={setGraphData} />
    );
  };

  return (
    <BrowserRouter>
      <Helmet
        // titleTemplate="%s - React Boilerplate"
        defaultTitle="ZET-O-MAP Graph Visualizer"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="Exploration of Research via AOPs and Data"
        />
      </Helmet>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route path="/imprint" component={ImprintMartin} />
        <Route path="/publishing-notes" component={PublishingNotes} />
        <Route path="/data-protection" component={DataProtection} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Page>
          <header>
            <Header
              iconType="visualizeApp"
              headerName="ZET-O-MAP Graph Visualizer"
              rightSectionComponents={<div />}
              // rightSectionComponents={<Button>Upload Data</Button>}
            />
          </header>
          <main>
            <Route path="/app">
              <section className="text-center my-5 mx-1 mt-1 bg-light rounded-3">
                <Container>
                  <Row>
                    <Col md={10}>
                      <Card>
                        <GraphVisContainer searchGraphData={graphData} />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Row>
                        <Card
                          title={'Omics Prediction'}
                          style={{ float: 'left', width: '195px' }}
                        >
                          <CompoundData></CompoundData>
                        </Card>
                      </Row>
                      <Row>
                        <Card
                          title={'Manual Prediction'}
                          style={{ float: 'right', width: '195px' }}
                        >
                          <PredictGeneList
                            setGraphData={setGraphData}
                          ></PredictGeneList>
                        </Card>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Card>
                      <Collapse>
                        <Panel header="Experimental Data" key="1">
                          {/* <Route path="/app/" /> */}
                          <Route
                            path="/app/exp/:keId"
                            render={props => <ExpDataCard {...props} />}
                          />
                        </Panel>
                      </Collapse>
                    </Card>
                  </Row>
                </Container>
              </section>
            </Route>
          </main>
          <Footer />
        </Page>
        <Route component={NotFoundPage} />
      </Switch>
      {/* <GlobalStyle /> */}
    </BrowserRouter>
  );
}
