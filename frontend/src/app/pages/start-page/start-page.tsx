import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from 'antd';
import {
  GiAbstract050,
  GiBlackBook,
  GiBrain,
  GiComputing,
  GiSuitcase,
} from 'react-icons/gi';

/* eslint-disable-next-line */
export interface StartPageProps {}

const StyledStartPage = styled.div`
  .ant-btn {
    height: auto;
  }
`;

export function StartPage(props: StartPageProps) {
  const history = useHistory();
  return (
    <StyledStartPage>
      <main>
        <section className="text-center p-5 my-5 mt-1 bg-light rounded-3">
          <Container>
            <Row>
              <h1 className="fw-light">Knowledge Space made for </h1>
            </Row>
            <Row>
              <Col>
                <Button
                  type="link"
                  onClick={() => {
                    history.push('/app');
                  }}
                >
                  <GiComputing size={140} color="grey" />
                  <br />
                  Computational neurobiologists
                </Button>
              </Col>
              <Col>
                <Button
                  type="link"
                  onClick={() => {
                    history.push('/app');
                  }}
                >
                  <GiBrain size={140} color="grey" />
                  <br />
                  NDD Researchers
                </Button>
              </Col>
              <Col>
                <Button
                  type="link"
                  onClick={() => {
                    history.push('/app');
                  }}
                >
                  <GiBlackBook size={140} color="grey" />
                  <br />
                  Students
                </Button>
              </Col>
              <Col>
                <Button
                  type="link"
                  onClick={() => {
                    history.push('/app');
                  }}
                >
                  <GiSuitcase size={140} color="grey" />
                  <br />
                  Politicians
                </Button>
              </Col>
              <Col>
                <Button
                  type="link"
                  onClick={() => {
                    history.push('/app');
                  }}
                >
                  <GiAbstract050 size={140} color="grey" />
                  <br />
                  Everyone
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col>
                <p>
                  <b>AETIONOMY’s Knowledge base</b> (AKB)' is the unification
                  point of the knowledge and data management on
                  Neurodegeneration with a main focus on Alzheimer’s and
                  Parkinson’s diseases. It includes
                </p>
                <ul>
                  <li>
                    comprehensive overviews on specific public, clinical and
                    OMICS indices relevant to Neurodegeneration;
                  </li>
                  <li>
                    values for such indices at retrospective and prospective
                    studies available at different sites; and
                  </li>
                  <li>available OMICS Data.</li>
                </ul>
                <p>
                  Analytical results can be calculated by the underlying
                  tranSMART system features. As a result of these activities all
                  components for data storage, analytical results management and
                  incorporated data are integrated into this knowledge platform
                  for Neurodegeneration.&nbsp;Please check the 'AETIONOMY
                  prospective study' –&nbsp;Organising mechanistic knowledge
                  about neurodegenerative diseases for the improvement of drug
                  development and therapy&nbsp;– to get access to this
                  unification point.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Button
                  onClick={() => {
                    history.push('/app');
                  }}
                >
                  Explore the knowledge space!
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </StyledStartPage>
  );
}

export default StartPage;
