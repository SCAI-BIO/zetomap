import * as React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from 'antd';
import { GiFishEggs } from 'react-icons/gi';

import { Helmet } from 'react-helmet';
import { Footer, Header, Page } from 'libs/layout/src';

const StyledHomePage = styled.div`
  .ant-btn {
    height: auto;
  }
`;

export function HomePage() {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>ZET-O-MAP Graph Visualizer</title>
        <meta
          name="ZET-O-MAP Graph Visualizer"
          content="Explore the ZET-O-MAP Graph Visualizer"
        />
      </Helmet>
      <StyledHomePage>
        <Page>
          <header>
            <Header
              iconType="metricbeatApp"
              headerName="ZET-O-MAP Graph Visualizer"
              rightSectionComponents={null}
            />
          </header>
          <main>
            <section className="text-center p-5 my-5 mt-1 bg-light rounded-3">
              <Container>
                <Row>
                  <h1 className="fw-light">Graph Visualizer for the ZET-O-MAP Project </h1>
                </Row>
                <Row>
                  <Col>
                    {/* <Button
                      type="link"
                      onClick={() => {
                        history.push('/app');
                      }}
                    > */}
                    <GiFishEggs size={140} color="grey" />
                    {/* </Button> */}
                  </Col>
                  <Col>
                    <p>
                      A dedicated graph tool for exploring Adverse Outcome
                      Pathways related to the experimental data collected
                      testing potential toxicological agents.
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
            <section>
              <Container>
                <Row>
                  <Col className="text-center">
                    <Button
                      onClick={() => {
                        history.push('/app');
                      }}
                    >
                      Explore the data!
                    </Button>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
          <Footer />
        </Page>
      </StyledHomePage>
    </>
  );
}
