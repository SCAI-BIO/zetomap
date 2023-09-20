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
export interface PublishingNotesProps {}

export function PublishingNotes(props: PublishingNotesProps) {
  return (
    <>
      <Helmet>
        <title>Publishing Notes</title>
        <meta name="description" content="Publishing Notes" />
      </Helmet>
      <EuiPageContent
        verticalPosition="center"
        horizontalPosition="center"
        className="w-75 w-md-50 my-3"
      >
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Publishing Notes</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiText>
            <section>
              <div className="sectionParsys parsys">
                <div className="fhg-content-article fhg-grid section">
                  <div className="row">
                    <div className="fhg-grid-item fhg-grid-3-3-2-1">
                      <div className="fhg-content fhg-richtext">
                        <p>
                          The&nbsp;Fraunhofer Institute for Algorithms
                          <br /> and Scientific Computing SCAI
                        </p>
                        <p>
                          <br /> Schloss Birlinghoven 1<br /> 53757 Sankt
                          Augustin
                          <br /> Germany
                          <br /> <br /> Phone +49 2241 14-2500
                          <br /> Fax +49 2241 14-2460
                          <br />{' '}
                          <a href="http://www.scai.fraunhofer.de/" className="">
                            http://www.scai.fraunhofer.de
                          </a>
                        </p>
                        <p>
                          is a constituent entity of the
                          Fraunhofer-Gesellschaft, and as such has no separate
                          legal status.
                          <br /> <br /> Fraunhofer-Gesellschaft&nbsp;
                          <br /> zur Förderung der angewandten Forschung e.V.
                        </p>
                        <p>
                          Hansastraße 27 c<br /> 80686 München
                          <br /> Germany
                        </p>
                        <p>
                          Phone: +49 89 1205- 0<br /> Fax: +49 89
                          1205-7531&nbsp;
                          <br /> http://www.fraunhofer.de
                        </p>
                        <p>
                          <b className="bold">
                            Responsible editor:
                            <br />{' '}
                          </b>
                          Prof. Dr. Holger Fröhlich
                          <br /> Group leader AI & Data Science
                          <br />{' '}
                          <a
                            href="mailto:holger.froehlich@scai.fraunhofer.de"
                            className=""
                          >
                            holger.froehlich@scai.fraunhofer.de
                          </a>
                          <br /> Phone +49 2241 14-4206
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <div className="sectionParsys parsys">
                <div className="fhg-content-article fhg-grid section">
                  <article>
                    <div className="row">
                      <div className="fhg-grid-item fhg-grid-3-3-2-1 fhg-inline-image">
                        <div className="fhg-content fhg-richtext">
                          <p>
                            <b className="bold">VAT Identification Number</b> in
                            accordance with §27 a VAT Tax Act: DE 129515865
                            <br /> <br />{' '}
                            <b className="bold">
                              Court of jurisdiction
                              <br />
                            </b>
                            Amtsgericht&nbsp; München&nbsp;(district court)
                            <br /> Registered nonprofit association&nbsp;
                            <br /> Registration no. VR 4461&nbsp;&nbsp;
                            <br />
                          </p>
                          <h4>Executive Board</h4>
                          <p>
                            Prof. Dr.-Ing. Reimund Neugebauer, President,
                            Corporate Policy and Research Management;
                            <br /> Technology Marketing and Business Models
                            (acting)
                            <br /> Prof. Dr. Alexander Kurz, Human Resources,
                            Legal Affairs and IP Management
                            <br /> Dipl.-Kfm.&nbsp;Andreas Meuer,&nbsp;Finances
                            and Digitalization
                          </p>
                          <h4>Usage Rights</h4>
                          <p>
                            © Fraunhofer-Gesellschaft e.V., München
                            <br /> <br /> All rights reserved.&nbsp;
                          </p>
                          <p>
                            All copyright for this Web site are owned in full by
                            the Fraunhofer-Gesellschaft.
                            <br />
                          </p>
                          <p>
                            Permission is granted to download or print material
                            published on this site for personal use only. Its
                            use for any other purpose, and in particular its
                            commercial use or distribution, are strictly
                            forbidden in the absence of prior written approval.
                          </p>
                          <p>
                            Notwithstanding this requirement, material may be
                            downloaded or printed for use in connection with
                            press reports on the activities of the
                            Fraunhofer-Gesellschaft and its constituent
                            institutes, on condition that the following terms
                            are complied with:
                          </p>
                          <p>
                            No alterations may be made to pictorial content,
                            with the exception of framing modifications to
                            emphasize the central motif. The source must be
                            quoted and two free reference copies must be sent to
                            the above-mentioned address. Such usage is free of
                            charge.
                          </p>
                          <h4>Disclaimer</h4>
                          <p>
                            We cannot assume any liability for the content of
                            external pages. Solely the operators of those linked
                            pages are responsible for their content.
                          </p>
                          <p>
                            We make every reasonable effort to ensure that the
                            content of this Web site is kept up to date, and
                            that it is accurate and complete. Nevertheless, the
                            possibility of errors cannot be entirely ruled out.
                            We do not give any warranty in respect of the
                            timeliness, accuracy or completeness of material
                            published on this Web site, and disclaim all
                            liability for (material or non-material) loss or
                            damage incurred by third parties arising from the
                            use of content obtained from the Web site.
                          </p>
                          <p>
                            Registered trademarks and proprietary names, and
                            copyrighted text and images, are not generally
                            indicated as such on our Web pages. But the absence
                            of such indications in no way implies that these
                            names, images or text belong to the public domain in
                            the context of trademark or copyright law.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </EuiText>
        </EuiPageContentBody>
      </EuiPageContent>
    </>
  );
}

export default PublishingNotes;
