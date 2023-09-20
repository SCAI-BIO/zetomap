import React from 'react';
import { Helmet } from 'react-helmet';
import {
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

/* eslint-disable-next-line */
export interface ImprintHolgerProps {}

export function ImprintHolger(props: ImprintHolgerProps) {
  return (
    <>
      <Helmet>
        <title>Imprint</title>
        <meta name="description" content="Imprint" />
      </Helmet>
      <EuiPageContent verticalPosition="center" horizontalPosition="center">
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Imprint</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiText>
            <p>
              <b className="bold">
                Responsible editor:
                <br />{' '}
              </b>
              Prof. Dr. Holger Fröhlich
              <br /> Group leader AI & Data Science
              <br />{' '}
              <a href="mailto:holger.froehlich@scai.fraunhofer.de" className="">
                holger.froehlich@scai.fraunhofer.de
              </a>
              <br /> Phone +49 2241 14-4206
              <br />
            </p>
          </EuiText>
        </EuiPageContentBody>
      </EuiPageContent>
    </>
  );
}

export default ImprintHolger;
