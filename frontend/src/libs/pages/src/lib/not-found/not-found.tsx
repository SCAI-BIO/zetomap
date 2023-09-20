import React from 'react';
import { Helmet } from 'react-helmet';
import { Col, Container, Row } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Container>
        <Row>
          <h1>
            4
            <span role="img" aria-label="Crying Face">
              😢
            </span>
            4
          </h1>
          <p>Page not found.</p>
          <a href={process.env.PUBLIC_URL + '/'}>Return to Home Page</a>
        </Row>
      </Container>
    </>
  );
}

export default NotFound;
