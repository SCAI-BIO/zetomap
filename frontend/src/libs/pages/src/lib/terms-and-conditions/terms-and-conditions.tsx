import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiSpacer,
  EuiTabbedContent,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

/* eslint-disable-next-line */
export interface TermsAndConditionsProps {}

const StyledTermsAndConditions = styled.div``;

export function TermsAndConditions(props: TermsAndConditionsProps) {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions" />
      </Helmet>
      <EuiPageContent verticalPosition="center" horizontalPosition="center">
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Terms and Conditions</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <Tabs defaultActiveKey="user-rights--id">
            <TabPane
              tab="User Rights and Duties, Restrictions on use"
              key="user-rights--id"
            >
              <>
                <EuiSpacer />
                <EuiTitle>
                  <h3>User Rights and Duties, Restrictions on use</h3>
                </EuiTitle>
                <EuiText className="w-50">
                  <div className="fhg-grid-item fhg-grid-3-3-2-1 fhg-inline-image">
                    <div className="fhg-content fhg-richtext">
                      <ol>
                        <br />
                        <li>
                          Non-commercial Purposes: Use of the Website, Website
                          Contents and Services as whole or in parts is only
                          granted non-exclusively and for non-commercial
                          purposes. Non-commercial purposes in the sense of this
                          agreement shall mean internal research and academic
                          purposes, and exclude, without limitation, any use, as
                          part of, or in any way in connection with, a product
                          or service which is sold, offered for sale, licensed,
                          leased, loaned, or rented.
                          <br /> User agrees not to access or use the Website,
                          Website Contents or Services for any other purpose
                          than personal and non-commercial use solely as
                          permitted by the normal functionality of the Website
                          or Services offered thereon.
                          <br /> <br />
                        </li>
                        <li>
                          User may:
                          <br /> a)&nbsp; access the Website in order to use the
                          Services to search, retrieve, display, download, and
                          otherwise use Content in compliance with these terms
                          and conditions;
                          <br /> b)&nbsp; electronically save and print out
                          retrieved information of the Website Content;
                          <br /> c)&nbsp; display, download, print any part or
                          parts of the resource for the purpose of promotion of
                          the Website Content;
                          <br /> d)&nbsp; publicly perform the Website Content
                          as part of an academic presentation at a seminar,
                          conference, workshop, or other such similar
                          professional and non-commercial activity.
                          <br /> <br />
                        </li>
                        <li>
                          User may not and may not authorize any third party to:
                          <br /> a)&nbsp; copy, reproduce, distribute or
                          otherwise exploit any Website Content for any other
                          purpose than non-commercial purposes without the prior
                          written consent of Fraunhofer SCAI the respective
                          owners, or licensors of the Website Content;
                          <br /> b)&nbsp; sell, resell, or otherwise distribute
                          or make available any part or parts of the Website,
                          Website Content or Services in any manner or in any
                          medium to any third party unless explicitly allowed
                          under these terms and conditions;
                          <br /> c)&nbsp; circumvent, disable or otherwise
                          interfere with any security related features of the
                          Website, Website Content, Service or features that (i)
                          prevent or restrict use of or copying of the Content
                          or (ii) enforce limitations on the use of the Website,
                          Service, or the Website Content accessible via the
                          Service;
                          <br /> d)&nbsp; remove, obscure or modify copyright
                          notices, text acknowledging, or other means of
                          identification or disclaimers as they may appear
                          without prior written permission of Fraunhofer SCAI
                          or, where third party content is concerned without
                          such permission;
                          <br /> e)&nbsp; use Website Content in published
                          books, in CD ROMs or in any other electronic format
                          that is to be marketed and published for which revenue
                          is received as a result;
                          <br /> f)&nbsp; affect or compromise the
                          functionalities of the Website or Service;
                          <br /> g)&nbsp; alter or modify any part of the
                          Website, Website Content or any Service;
                          <br /> h)&nbsp; upload third party’s content without
                          its explicit permission;
                          <br /> i)&nbsp; upload content which is not free from
                          licensing restrictions;
                          <br /> i)&nbsp; User agrees not to collect or harvest
                          any personal data of any user of the Website or any
                          Service.
                          <br /> <br />
                        </li>
                        <li>
                          User acknowledges that all copyrights, patent rights,
                          trademarks, database rights, trade secrets and other
                          intellectual property rights relating to the Website,
                          Services or Website Content which is not third party
                          content, are the property of Fraunhofer SCAI and that
                          this agreement does not assign or transfer any right,
                          title or interest therein to User except for the right
                          to use the Website Content in accordance with the
                          terms and conditions of this agreement.
                        </li>
                      </ol>
                    </div>
                  </div>
                </EuiText>
              </>
            </TabPane>
            <TabPane
              tab="Fraunhofer SCAI Rights and Duties"
              key="'rights-and-duties--id'"
            >
              <>
                <EuiSpacer />
                <EuiTitle>
                  <h3>Fraunhofer SCAI Rights and Duties</h3>
                </EuiTitle>
                <EuiText className="w-50">
                  <div className="row">
                    <div className="fhg-grid-item fhg-grid-3-3-2-1 fhg-inline-image">
                      <div className="fhg-content fhg-richtext">
                        <ol>
                          <br />
                          <li>
                            Fraunhofer SCAI provides access to the Website,
                            Website Content and Services to User in compliance
                            with these Terms and Conditions. This granting of
                            access cannot be construed to stipulate a right of
                            the User to claim access to any Services. Fraunhofer
                            SCAI reserves the right to discontinue the Website
                            and/or stop providing the Services, or any features
                            within it at its sole discretion and without prior
                            notice.
                            <br /> <br />
                          </li>
                          <li>
                            Fraunhofer SCAI reserves the right to modify or
                            supplement these Terms and Conditions at any time.
                            Accordingly, User shall check the Website from time
                            to time as each User will be bound by any such
                            revisions.
                            <br /> <br />
                          </li>
                          <li>
                            In the event that Fraunhofer SCAI becomes aware of a
                            violation of these Terms and Conditions by User and
                            where such violation consists in or results in a
                            breach of criminal law, Fraunhofer SCAI reserves the
                            right to inform the competent authorities hereof.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </EuiText>
              </>
            </TabPane>
            <TabPane
              tab="Warranty, Liability, Indemnification"
              key="warranty--id"
            >
              <>
                <EuiSpacer />
                <EuiTitle>
                  <h3>Warranty, Liability, Indemnification</h3>
                </EuiTitle>
                <EuiText className="w-50">
                  <div className="fhg-grid-item fhg-grid-3-3-2-1 fhg-inline-image">
                    <div className="fhg-content fhg-richtext">
                      <ol>
                        <br />
                        <li>
                          Services and Website Content are provided "as is".
                          Fraunhofer makes no representation or warranty
                          (express, implied, oral or written) including, but not
                          limited to, any and all implied warranties of title,
                          quality, performance, merchantability or fitness for a
                          particular purpose.
                          <br /> <br />
                        </li>
                        <li>
                          Fraunhofer does not warrant or make any representation
                          that the functions contained in the Services or
                          Website will be accurate, reliable, suitable for
                          certain purpose, uninterrupted or error-free, that
                          defects will be corrected, or that the Website, the
                          Service, or the servers that make the Website Content
                          available, are free of viruses or other harmful
                          components.
                          <br /> <br />
                        </li>
                        <li>
                          User agrees that it is solely responsible for any
                          breach of its obligations under the General Terms of
                          Use and for the consequences resulting thereof.
                          <br /> <br />
                        </li>
                        <li>
                          Fraunhofer, its legal representatives and employees
                          expressly disclaim any liability beyond willful intent
                          and gross negligence with respect to the Website,
                          Service and Website Content or any part thereof,
                          including, but not limited to, errors or omissions
                          contained therein, libel, defamation, infringements of
                          rights of publicity, privacy, trademark rights,
                          infringements of any other third party intellectual
                          property rights, moral rights, or the disclosure of
                          confidential information. Expect in cases of willful
                          intent and gross negligence, Fraunhofer, its legal
                          representatives and employees shall not be liable for
                          any direct, indirect, consequential or incidental
                          damages (including damages for loss of business
                          profits, business interruption, loss of business
                          information, and the like) arising out of the use or
                          inability to use Website, Services, or Website Content
                          even if Fraunhofer SCAI has been advised of the
                          possibility of such damages.
                          <br /> <br />
                        </li>
                        <li>
                          Fraunhofer accepts no liability for any loss suffered
                          or incurred by the User or any third party as a result
                          of their reliance on the Website, Services or Website
                          Contents. User acknowledges that use of or reliance on
                          the Website, Services or Website Contents is at User's
                          sole risk.
                          <br /> <br />
                        </li>
                        <li>
                          It is the sole responsibility of the User to ensure
                          that it has obtained any relevant third party
                          permissions for its intended forms of use of third
                          party content. User shall be responsible for any and
                          all damages, liabilities, claims, causes of action,
                          legal fees and costs incurred by User in defending
                          against any third party claim of intellectual property
                          rights infringements or threats of claims thereof with
                          respect of the use of third party content.
                          <br /> <br />
                        </li>
                        <li>
                          The above limitations of liability do not affect
                          Fraunhofer’s, its legal representatives’ and
                          employees’ liability for personal injuries, death of a
                          person, willful intent, or gross negligence.
                          <br /> <br />
                        </li>
                        <li>
                          User agrees to indemnify, defend and hold Fraunhofer
                          SCAI harmless from and against any and all claims,
                          losses, liability, costs and expenses (including
                          attorneys’ fees) incurred by Fraunhofer SCAI in
                          connection with or arising out of User's breach of
                          these Terms of Use.
                        </li>
                      </ol>
                    </div>
                  </div>
                </EuiText>
              </>
            </TabPane>
            <TabPane tab="Termination" key="termination--id">
              <>
                <EuiSpacer />
                <EuiTitle>
                  <h3>Termination</h3>
                </EuiTitle>
                <EuiText className="w-50">
                  <div className="fhg-grid-item fhg-grid-3-3-2-1 fhg-inline-image">
                    <div className="fhg-content fhg-richtext">
                      <ol>
                        <br />
                        <li>
                          Fraunhofer SCAI shall have the right to terminate this
                          agreement forthwith if User has materially breached
                          any of its obligations under this agreement or if
                          Fraunhofer SCAI is required to do so by law.
                        </li>
                      </ol>
                    </div>
                  </div>
                </EuiText>
              </>
            </TabPane>
            <TabPane tab="Miscellaneous" key="miscellaneous--id">
              <>
                <EuiSpacer />
                <EuiTitle>
                  <h3>Miscellaneous</h3>
                </EuiTitle>
                <EuiText className="w-50">
                  <div className="fhg-grid-item fhg-grid-3-3-2-1 fhg-inline-image">
                    <div className="fhg-content fhg-richtext">
                      <ol>
                        <br />
                        <li>
                          If any of the provisions of this agreement should be
                          held as invalid, the validity of the remaining
                          provisions shall not be affected. Invalid provisions
                          shall be replaced by valid provisions formulated in
                          such a way that the intended purpose will largely be
                          achieved.
                          <br /> <br />
                        </li>
                        <li>
                          The agreement and any additions or amendments shall be
                          in writing; additions and amendments must be marked as
                          such. Any waiver of these formal requirements shall be
                          in writing.
                          <br /> <br />
                        </li>
                        <li>
                          This License shall be governed and construed in
                          accordance with the laws of Germany. The application
                          of the United Nations Convention on Contracts for the
                          International Sale of Goods (CISG) is expressly
                          excluded.
                        </li>
                      </ol>
                    </div>
                  </div>
                </EuiText>
              </>
            </TabPane>
          </Tabs>
        </EuiPageContentBody>
      </EuiPageContent>
    </>
  );
}

export default TermsAndConditions;
