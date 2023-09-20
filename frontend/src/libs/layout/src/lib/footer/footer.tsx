import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

import Logo from './fraunhofer-logo.gif';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer container-fluid mt-auto pt-2 border-top shadow-sm bg-light">
      <Row className="justify-content-evenly">
        <Col>
          <a href="https://www.scai.fraunhofer.de">
            <img className="mb-2" src={Logo} alt="" height="50" />
            <small className="d-block mb-3 text-muted">
              &copy; {currentYear} Fraunhofer-Gesellschaft
            </small>
          </a>
        </Col>
        <Col>
          <h3 className="h5">Contact</h3>
          <ul className="list-unstyled text-small">
            <li>
              <a
                className="text-muted"
                href="https://www.scai.fraunhofer.de/en/business-research-areas/bioinformatics/fields-of-research/AI-DAS/team.html"
              >
                Contact
              </a>
            </li>
            {/*
            <li>
              <Link className="text-muted" to="/support">
                Support
              </Link>
            </li>
            */}
          </ul>
        </Col>
        <Col>
          <h3 className="h5">About</h3>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted" to="/imprint">
                Imprint
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/data-protection">
                Data Protection
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/terms-and-conditions">
                Terms And Conditions
              </Link>
            </li>
            <li>
              <Link className="text-muted" to="/publishing-notes">
                Publishing Notes
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
