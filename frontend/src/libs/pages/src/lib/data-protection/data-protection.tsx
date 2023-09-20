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
export interface DataProtectionProps {}

export function DataProtection(props: DataProtectionProps) {
  return (
    <>
      <Helmet>
        <title>Data Protection</title>
        <meta name="description" content="Data protection" />
      </Helmet>
      <EuiPageContent
        verticalPosition="center"
        horizontalPosition="center"
        className="w-75 w-md-50 my-3"
      >
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Data Protection</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <EuiText>
            <article>
              <div className="fhg-grid-item fhg-grid-3-3-2-1 fhg-content heading">
                <h2>
                  Data Protection Information – Fraunhofer Institute for
                  Algorithms and Scientific Computing SCAI
                </h2>
              </div>
              <div className="row">
                <div className=" fhg-grid-item fhg-grid-3-3-2-1">
                  <div className="fhg-content fhg-richtext">
                    <p>
                      The following pertains to the use of this website. As the
                      party responsible for the data processing (controller), we
                      process your personal data collected via our website and
                      store them for the period necessary to achieve the
                      specified purposes and to comply with the statutory
                      requirements. In the following, we inform you about the
                      data we collect and the way we process them. Futerhmore,
                      we inform you about on data privacy rights pertaining to
                      the use of this website.
                    </p>
                    <p>
                      Personal data, as defined by Article 4(1) General Data
                      Protection Regulation (GDPR) includes any information
                      relating to an identified or identifiable naturel person.
                    </p>
                    <p>
                      1. Name and contact information of the person who signs
                      responsible for the data processing (controller) and of
                      the society’s Data Protection Officer
                    </p>
                    <p>
                      2. Processing of Personal Data and Purposes of Data
                      Processing
                    </p>
                    <p>3. Transfer of Personal Data to Third Parties</p>
                    <p>4. Cookies</p>
                    <p>5. Web Analysis / Tracking</p>
                    <p>6. Social Plugins</p>
                    <p>7. YouTube</p>
                    <p>8. Your Rights as Data Subject</p>
                    <p>
                      9. Information on your Right to Object Pursuant to Article
                      21 GDPR
                    </p>
                    <p>10. Data Security</p>
                    <p>
                      11. Timeliness and Amendments to this Data Protection
                      Information
                    </p>
                    <p>12. Severability</p>
                    <p>
                      <br /> &nbsp;
                    </p>
                    <h4 id="1">
                      1. Name and contact information of the person responsible
                      for data processing (controller) and of the corporate Data
                      Protection Officer
                    </h4>
                    <p>&nbsp;</p>
                    <p>
                      This data protection information shall apply to the
                      processing of data on our institute’s website “
                      <a
                        href="https://www.scai.fraunhofer.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        www.scai.fraunhofer.de
                      </a>
                      ” by the controller, the:
                    </p>
                    <p>
                      Fraunhofer Gesellschaft zur Förderung der angewandten
                      Forschung e.V.
                    </p>
                    <p>
                      Hansastrasse 27 c,
                      <br /> D-80686 München (Munich, Germany)
                    </p>
                    <p>
                      On behalf of the Fraunhofer Institute for Algorithms and
                      Scientific Computing SCAI
                    </p>
                    <p>
                      (in the following referred to as ‘<b>Fraunhofer SCAI’)</b>
                    </p>
                    <p>
                      Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                      <u>
                        <a
                          href="mailto:info@scai.fraunhofer.de"
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" external"
                        >
                          info@scai.fraunhofer.de
                        </a>
                      </u>
                      <br /> Telephone:&nbsp;&nbsp;+492241 14 2500
                      <br />{' '}
                      Fax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      +492241 14 2460
                      <br /> You can reach the data protection representative of
                      the Fraunhofer Institute at the above address c/o Data
                      Protection Officer or at{' '}
                      <u>
                        <a href="mailto:datenschutz@zv.fraunhofer.de">
                          datenschutz@zv.fraunhofer.de
                        </a>
                      </u>
                      .
                    </p>
                    <p>
                      Please feel free to contact the Data Protection Officer
                      directly at any time in case of any questions concerning
                      your data protection rights and/or your rights as data
                      subject.
                    </p>
                    <h4>&nbsp;</h4>
                    <h4>
                      2. Processing of Personal Data and Purposes of Data
                      Processing
                    </h4>
                    <ol>
                      <p>&nbsp;</p>
                    </ol>
                    <p>
                      <b>
                        <b>a) </b>During your Website Visit
                      </b>
                    </p>
                    <p>
                      Every time you visit our web pages, our website servers
                      save your device's accessing our website in a protocol
                      file. This storage is temporary; our website server saves
                      the following access data until their automated deletion:
                    </p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">
                          The IP address of the requesting device
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Access date and time
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Name and URL of the accessed data
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          The data volume transmitted
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          The message whether the access was successful
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          The browser and operating system used
                          <br />{' '}
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          The name of the Internet Provider (ISP)
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          The referring website (referring URL)
                        </span>
                      </li>
                    </ul>
                    <p>These data are processed for the following purposes:</p>
                    <ol>
                      <li>
                        To enable the use of the website (connection setup)
                      </li>
                      <li>Administration of the network infrastructure</li>
                      <li>
                        Appropriate technical and organisational measures to
                        ensure IT systems and data security taking into account
                        the state of the art technology
                      </li>
                      <li>To offer user-friendly service</li>
                      <li>To optimize the Internet offering</li>
                    </ol>
                    <p>Legal foundations for the above processing purposes:</p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">
                          Processing in response to a website visit pursuant to
                          numbers 1-2 the first sentence of Article 6(1), point
                          (b) (requirement for compliance with provisions of the
                          website user contract)
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Processing pursuant to number 3, the first sentence of
                          Article 6(1), point (c) GDPR (legal obligation to
                          implement technical and organisational measures to
                          ensure secure data processing pursuant to Article 32
                          GDPR) and the first sentence of Article 6(1), point
                          (f) GDPR (legitimate interests in data processing for
                          the network and information security) as well as
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Data processing pursuant to numbers 4 – 5, the first
                          sentence of Article 6 (1),&nbsp; lit. f GDPR
                          (legitimate interests). Our legitimate interests in
                          the processing of data are based on our desire to
                          offer user-friendly optimised web pages
                        </span>
                      </li>
                    </ul>
                    <p>
                      After the set period of 30 days, our web server
                      automatically deletes the above-mentioned data. To the
                      extent that data are processed longer for purposes
                      according to numbers 2 – 5, we will anonymise or delete
                      the data as soon as their storage no longer serves the
                      respective purpose(s).
                    </p>
                    <p>
                      Furthermore, we place Cookies once your visit our website
                      and use analytical services as well. For more information
                      on the use of Cookies and analytical services, please see
                      Sections 4 and 5 of this Data Protection Statement.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <b>b) Visitor Registration for Events</b>
                    </p>
                    <p>
                      We invite web visitors on a regular basis to different
                      kinds of events. Our website visitors are able to register
                      online.
                    </p>
                    <p>
                      In order to register online, our website's visitors have
                      to provide some mandatory data. These data include
                    </p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">
                          First and last name
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Company</span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Address</span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Email address</span>
                      </li>
                    </ul>
                    <p>
                      Should we request additional mandatory data, we will
                      specifically identify them (using an * for example). In
                      addition, our website's users often have the opportunity
                      to volunteer additional information.
                    </p>
                    <p>
                      We process the mandatory data to identify you as event
                      participant and to reserve a place for you. In addition,
                      we conclude and perform the participation contract with
                      you and provide you with information before, during and
                      after the event to ensure that you enjoy your
                      participation and the event proceeds as smoothly as
                      planned. The voluntary data help us to plan and organise
                      our events in tune with your interests and age.
                    </p>
                    <p>
                      We collect the data in response to the enquiries of
                      interested parties. Pursuant to the first sentence of
                      Article 6(1), point (b) GDPR, data collection for the
                      purposes mentioned is necessary for the performance ot the
                      participation contract and in order to takte steps priot
                      to entering into the participation contract.
                    </p>
                    <p>
                      We store data, which we collect in context with
                      registrations to events for six (6) months unless you
                      consented to a longer storage period as outlined in the
                      first sentence of Article 6(1), point (a) GDPR.
                    </p>
                    <p>
                      <b>c) Visitor Registration for Fee-based Events</b>
                    </p>
                    <p>
                      In the course of accepting the registration for fee-based
                      events, we collect the following mandatory data:
                    </p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">
                          Last name, first name
                          <br />{' '}
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Company</span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Address</span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Payment information, dependent on the selected method
                          of payment procedure (e.g. credit card, bank account)
                          and
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Email address</span>
                      </li>
                    </ul>
                    <p>We may also collect additional voluntary data.</p>
                    <p>
                      The purpose of processing the mandatory data is to
                      identify you as event participant, to check the data
                      supplied for plausibility, to reserve a place for your
                      participation, to establish a contractual relationship
                      with you and to provide you with information before,
                      during and after the event that will optimise your
                      participation, and to help us plan and ensure a smooth
                      event experience.
                    </p>
                    <p>
                      We need the payment data in order to collect the
                      participation fee.
                    </p>
                    <p>
                      Collecting voluntary information allows us to plan and
                      conduct the event in tune with participants’ interests and
                      age.
                    </p>
                    <p>
                      We process the data based on your enquiry and for the
                      above-mentioned purposes as prescribed by the first
                      sentence of Article 6(1), point (b) GDPR for the
                      performance of the contractual obligations toward our
                      participants and in order to take steps prior to entering
                      into the contract.
                    </p>
                    <p>
                      We will store the personal data collected in context with
                      the event until the end of the regular limitation period
                      of three (3) years following the end of the year in which
                      the event takes place. We will then delete the data unless
                      we are obligated by law to store the data for a longer
                      period pursuant to statutory safekeeping and documentation
                      obligations pursuant to the first sentence of Article
                      6(1), point (c) GDPR and in particular pursuant to Sec.
                      147 AO [General German Fiscal Code]) or unless you have
                      consented to a longer data storage pursuant to the first
                      sentence of Article 6(1), point (a) GDPR. In case of
                      longer data storage, we shall process the data solely to
                      the extent mandated by law or according to your
                      permission. As for all else, the further processing of the
                      data shall be barred.
                    </p>
                    <p>
                      <b>
                        d) Subscription to our PR Distribution List
                        <br />{' '}
                      </b>
                    </p>
                    <p>
                      We will send regular press releases and media information
                      to your email address provided you explicitly consent to
                      joining our PR distribution list as well as to our using
                      your email address for this purpose pursuant to the first
                      sentence of Article 6(1), point (a) GDPR. We ask you for
                      the following mandatory data to complete your PR
                      distribution list subscription:
                    </p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">Title</span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Last name, first name
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Email address</span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Media Company</span>
                      </li>
                    </ul>
                    <p>
                      You may also volunteer your company name and/or your media
                      corporation.
                    </p>
                    <p>
                      We need your title and name to address our communications
                      to you personally.
                    </p>
                    <p>
                      We use your company name and/or the name of your media
                      corporation to identify you as member of the media and to
                      send you invitations by mail.
                    </p>
                    <p>
                      Once we receive your subscription, we will send you a
                      subscription confirmation email. We need you to reply to
                      this email to confirm that you are indeed the person who
                      wants to subscribe to our PR distribution list (double
                      opt-in procedure).
                    </p>
                    <p>
                      You may unsubscribe at any time either by using the
                      unsubscribe link at the end of every press release or
                      announcement or alternatively by email to “
                      <a href="mailto:info@scai.fraunhofer.de">
                        info@scai.fraunhofer.de
                      </a>
                      ”.
                    </p>
                    <p>
                      Upon receiving your unsubscribe notification, we will
                      immediately delete your email address from our subscriber
                      list.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <b>e) The Use of Contact Forms</b>
                    </p>
                    <p>
                      We offer our website's visitors the opportunity to contact
                      us via a form on our website. To enable you to communicate
                      with us via this form, we request the following data:
                    </p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">Title</span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          First and last name
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">Email address</span>
                      </li>
                    </ul>
                    <p>
                      We need these data to find out who contacted us and to
                      process the user request.
                    </p>
                    <p>
                      We process the data in response to your enquiry. Our
                      purpose is to answer your inquiry for the purposes of our
                      legitimate interests pursuant to the first sentence of
                      Article 6(1), point (f) GDPR.
                    </p>
                    <p>
                      Once we have satisfied the enquiry via contact form, we
                      will automatically delete the personal data collected.
                    </p>
                    <p>&nbsp;</p>
                    <h4>3. Transfer of Personal Data to Third Parties</h4>
                    <h4>&nbsp;</h4>
                    <p>
                      If you contact us because you are interested in purchasing
                      our developments or products, we will forward the data we
                      collect concerning you within the framework of the query,
                      such as your name, email address, telephone number and
                      your query, to our sales partners so that they can contact
                      you and make you a concrete offer. Your data is generally
                      forwarded to Scapos AG, Schloss Birlinghoven, 53754 Sankt
                      Augustin, Germany. In individual cases, data is also
                      forwarded to other selected sales partners.
                    </p>
                    <p>
                      The legal basis for forwarding your contact data and your
                      query is Art. 6(1)(b) GDPR in conjunction with Art.
                      6(1)(f) GDPR. Forwarding is done for the aforementioned
                      purposes insofar as is necessary to carry out
                      pre-contractual measures in response to your query and/or
                      insofar as is necessary to safeguard our legitimate
                      interests or those of our sales partners.
                    </p>
                    <p>
                      Our sales partners may use the forwarded data only for the
                      purpose of contacting you within the scope of selling our
                      developments.
                    </p>
                    <p>
                      With exception of the above-mentioned cases of data
                      processing by service providers on our behalf (see also
                      event registrations, …), we give your personal data only
                      to third parties (i.e. to natural and legal persons other
                      than you, the data subject), the controller or the service
                      provider or his/her vicarious agents if:
                    </p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">
                          You consented explicitly to the data transfer to a
                          third party pursuant to the first sentence of Article
                          6(1), point (a) GDPR
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          The data transfer is necessary for the performance of
                          the contract with you pursuant to the first sentence
                          of Article 6(1), point (b) GDPR
                        </span>
                        <ul>
                          <li>
                            <span className="bulletpointlist">
                              Data transmission to the mail order firm which
                              will deliver the goods you ordered
                            </span>
                          </li>
                          <li>
                            <span className="bulletpointlist">
                              Payment data transmission to payment service
                              providers and credit institutes for payment
                              transactions
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          We are legally obligated to surrender the data to
                          financial or judicial authorities pursuant to the
                          first sentence ofo Article 6(1), point (c) GDPR
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Transferring your data to third parties is required to
                          establish, exercise or defend legal claims, and there
                          is no reason to assume that you as data subject could
                          have an overriding interest worth protecting in the
                          non-transfer of your personal data pursuant to Article
                          6(1) S. 1, point (f) GDPR. Such a data transfer to
                          government and/or law enforcement authorities may
                          occur in cases of attacks on our IT systems.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Third parties may use the transferred data only for the
                      above-mentioned purposes.
                    </p>
                    <p>
                      If you have registered for an event, it may be necessary
                      in the course of the contractual performance that your
                      personal data be transferred to an external organiser. The
                      confirmation of your event registration will name the
                      event organiser and inform you whether it is an external
                      organiser. This event organiser will not only organise and
                      manage the event but also process personal registration
                      data.
                    </p>
                    <p>
                      Pursuant to Article 28 GDPR, our service providers host
                      our websites on servers located in Germany exclusively.
                    </p>
                    <p>
                      The transfer of personal data to countries outside the EU
                      or an international organisation is excluded.
                    </p>
                    <p>&nbsp;</p>
                    <h4>4. Cookies</h4>
                    <h4>&nbsp;</h4>
                    <p>
                      We use server-side cookies. Cookies are small files which
                      are automatically created by your browser and stored in
                      your device (PC, laptop, tablet, smartphone or similar
                      device) once you visit our website. Cookies do not harm
                      your computer, and they do not contain viruses, Trojans or
                      other malware.
                    </p>
                    <p>
                      Cookies contain information pertaining to the specific
                      device, which accessed our website. However, this does not
                      provide us with direct knowledge of your identity.
                    </p>
                    <p>
                      One reason for us to use cookies is to make the use of our
                      website more convenient for you. We use session cookies to
                      allow session controls such as controls for inserting data
                      into forms or saving shopping carts. At the latest,
                      session cookies are deleted when you close your browser.
                    </p>
                    <p>
                      We also use temporary cookies to optimise the
                      user-friendliness of our website. Your device stores these
                      cookies temporarily for a specific time. Once you visit
                      our website again, our server will recognise your device
                      as prior visitor and remember your settings and
                      preferences. You will not have to enter these parameters
                      again.
                    </p>
                    <p>
                      We also use cookies to gather data for our website
                      statistics. This helps us evaluate and optimise our web
                      offering (see Section 5). These cookies allow us to
                      recognise repeat visits from your device. They will be
                      deleted automatically after a specific time.
                    </p>
                    <p>
                      The data obtained with the help of cookies help us pursue
                      our legitimate interests as website owners and serve the
                      legitimate interests of third parties according to the
                      first sentence of Article 6(1), point (f) GDPR.
                    </p>
                    <p>
                      Most browsers accept cookies automatically. However, you
                      are able to configure your browser in such a way that the
                      application does not store cookies on your computer or
                      always shows an alert before storing new cookies. However,
                      the complete deactivation of cookies may prevent you from
                      using all of the functions on our website.
                    </p>
                    <p>&nbsp;</p>
                    <h4>5. Web Analysis / Tracking</h4>
                    <h4>&nbsp;</h4>
                    <p>
                      <b>a) LeadLab (Wiredminds GmbH)</b>
                    </p>
                    <p>
                      For our website, we use the Leadlab service of the{' '}
                      <a
                        href="https://www.wiredminds.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Wiredminds GmbH
                      </a>{' '}
                      service provider and the company’s pixel counting
                      technology to analyse the habits of our website users. The
                      analysis helps us to optimise our website. The service
                      allows us to recognise which companies visit our website.
                      The data do not enable us to identify users directly.
                    </p>
                    <p>
                      In context with the Leadlab web services, we use cookies
                      and tag pixels that allow our service to analyse how you
                      use our website.The cookie stores information including
                      personal data regarding the behaviour of website visitors
                      and transmits this information directly to Wiredminds
                      unless Wiredminds collects it directly. Wiredminds uses
                      pseudonyms and anonymises the data whenever possible
                      before processing and analysing the data and creating a
                      user profile.
                    </p>
                    <p>
                      Without your explicit consent, neither Wiredminds nor we
                      use the so collected data to identify you personally, and
                      your personal data are never matched with data under a
                      pseudonym associated with you.
                    </p>
                    <p>
                      To the extent that IP addresses are collected, they are
                      stripped of their last control number block upon
                      collection to anonymise the addresses instantly.
                    </p>
                    <p>
                      You find the data protection statement of Wiredminds on
                      the{' '}
                      <a
                        href="https://www.wiredminds.de/fileadmin/testimages/content/datenschutz/Wiredminds_AVV_GDPR_0418.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Wiredminds website
                      </a>
                      .
                    </p>
                    <p>
                      The provider processes the data based on our legitimate
                      interests pursuant to Article 6(1), point (f) GDPR in the
                      optimisation of our online offerings and our web presence.
                      Wiredminds processes the data on our behalf, and we have
                      entered into an{' '}
                      <a
                        href="https://www.wiredminds.de/fileadmin/testimages/content/datenschutz/Wiredminds_AVV_DSGVO_0418.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        order processing agreement
                      </a>{' '}
                      with Wiredminds. It ensures that the data processing the
                      data on our behalf is done in compliance with the General
                      Data Protection Regulation (GDPR) and that the rights of
                      the data subjects are protected.
                    </p>
                    <p>
                      If you choose to reject the collection of data and the
                      analysis of your user activities, please use our{' '}
                      <a
                        href="https://statistik.fraunhofer.de/track/optout.php?lid=dd5f86817814da995faf987490edd266&amp;lang=DE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        opt-out cookie
                      </a>{' '}
                      to prevent the installation of our cookies. This will
                      prevent the future collection of data when you use our
                      website. The opt-out cookie in your device is valid only
                      in this browser and only for our website. If you delete
                      the cookies in this browser, you have to install the
                      opt-out cookie again.
                    </p>
                    <p>&nbsp;</p>
                    <h4>
                      <span lang="en-GB">6. Social Plugins</span>
                    </h4>
                    <h4>&nbsp;</h4>
                    <p>
                      We use social plug-ins (media buttons) on our website.
                      These are small box-like buttons. Click on them to place
                      the content of our website under your profile in social
                      network sites.
                    </p>
                    <p>
                      If you click on such a button, a link will be established
                      between our website and the social network to which you
                      subscribe. Aside from the respective content, the social
                      network provider will receive other personal information.
                      This includes the information that you visit our website
                      at that time.
                    </p>
                    <p>
                      For the integration of the social plug-in we use the
                      Shariff Solution. This solution prevents your device from
                      creating a link to the social network merely because you
                      visit a website featuring a social plug-in button without
                      clicking on it. This means that a link is only established
                      if a when you click on the social plug-in button.
                    </p>
                    <p>
                      We integrate the following social plug-in on our website:
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      a) <b>Facebook Sharing of Facebook Ireland Limited</b>
                    </p>
                    <p>
                      Sometimes, information is transmitted to the US domicile
                      of the parent company Facebook Inc. This company complies
                      with the data protection regulations of the US Privacy
                      Shield and is registered with the US Privacy Shield
                      Program of the US Department of Commerce.
                    </p>
                    <p>
                      Purpose and scope of the data collection and further
                      processing and use of the data by Facebook and your user
                      rights&nbsp; as well as your ability to protect your
                      privacy rights by changing your browser settings are
                      subject to Facebook's{' '}
                      <a
                        href="https://www.facebook.com/about/privacy/ "
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Data Protection Statement
                      </a>
                      .
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <b>b) Twitter International Company: share on Twitter</b>
                    </p>
                    <p>
                      Some information is transferred to the US parent company
                      Twitter Inc. The Twitter International Company complies
                      with the data protection regulations of the US Privacy
                      Shield. Twitter Inc. is registered with the US Privacy
                      Shield Program of the US Department of Commerce.
                    </p>
                    <p>
                      Please find more information on Twitter's data protection
                      in Twitter's{' '}
                      <a
                        href="https://twitter.com/privacy "
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Data Protection Statement
                      </a>
                      .
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <b>c) Google+ Sharing Google LLC</b>
                    </p>
                    <p>
                      Google complies with the Data Protection Regulations of
                      the US Privacy Shield and is registered with the US
                      Privacy Shield Program of the US Department of Commerce.
                    </p>
                    <p>
                      Please find more information on Google's data protection
                      in the Google's{' '}
                      <a
                        href="https://www.google.com/intl/de/policies/privacy/ "
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Data Protection Declaration.
                      </a>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <b>d) Xing Sharing by Xing SE</b>
                    </p>
                    <p>
                      Please find more information on Xing's data protection in
                      the Xing's{' '}
                      <a
                        href="https://www.xing.com/privacy "
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Data Protection Declaration.
                      </a>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <b>e) Pinterest Sharing by Pinterest Europe Ltd</b>
                    </p>
                    <p>
                      Please find more information on Pinterest's data
                      protection in Pinterest's{' '}
                      <a
                        href="https://policy.pinterest.com/de/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Data Protection Statement
                      </a>
                      .
                    </p>
                    <p>&nbsp;</p>
                    <h4>7. YouTube</h4>
                    <h4>&nbsp;</h4>
                    <p>
                      With consent pursuant to the first sentence of Article
                      6(1), point (f) GDPR, we use components (videos) of
                      YouTube, LLC, 901 Cherry Avenue, 94066 San Bruno, CA (USA)
                      (hereinafter referred to as ‘YouTube’), a company of
                      Google Inc., Amphitheatre Parkway, 94043 Mountain View
                      (USA), (hereinafter referred to as ‘Google’).
                    </p>
                    <p>
                      We use the ‘extended data protection mode’ option provided
                      by YouTube..
                    </p>
                    <p>
                      Upon requesting an Internet page with embedded video, our
                      website connects to the YouTube servers and renders the
                      content on the Internet page using your browser.
                    </p>
                    <p>
                      According to the information provided by YouTube, in the
                      ‘extended data protection mode’, your data will be
                      transmitted to the US YouTube servers only while you watch
                      the video. The transferred data include the Internet page
                      you just viewed and device-specific data including your IP
                      address. By clicking ‘run’ on the video you agree to this
                      transfer.
                    </p>
                    <p>
                      Should you be logged into your YouTube account at the same
                      time, YouTube will associate these collected data with
                      your member account. You are able to prevent this by
                      logging out of your YouTube account prior to visiting our
                      website.
                    </p>
                    <p>
                      Google complies with the data protection regulation of the
                      US Privacy Shield and is registered with the US Privacy
                      Shield Program of the US Department of Commerce.
                    </p>
                    <p>
                      You may find further information on data protection in
                      context with YouTube in Google's{' '}
                      <a
                        href="https://www.google.de/intl/de/policies/privacy/  "
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        Data Protection Regulations
                      </a>
                      .
                    </p>
                    <p>&nbsp;</p>
                    <h4>8. Your Rights as Data Subject</h4>
                    <h4>&nbsp;</h4>
                    <p>You have the following rights:</p>
                    <ul>
                      <li>
                        <span className="bulletpointlist">
                          Pursuant to Article 7(3) GDPR, you have the right to
                          withdraw at any time any consent you may have given to
                          us before. Consequently, we may no longer continue the
                          respective activity.
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Pursuant to Article 15 GDPR, you have the right to
                          obtain information on your personal data which we have
                          processed. In particular, you have the right to
                          information on the following:{' '}
                        </span>
                        <br />
                        <span className="bulletpointlist">
                          Purposes of the data processing
                          <br /> The categories of personal data,
                          <br /> The categories of recipients to which we
                          disclosed or will disclose your data
                          <br /> The planned storage periods of data
                          <br /> The existence of the right to correction,
                          deletion, restriction of processing and objection
                          <br /> The right to appeal
                          <br /> The right to know the origin of data in the
                          event that we did not collect these data
                          <br /> The right to meaningful and detailed
                          information on the existence on automated
                          decision-making including profiling and, if
                          applicable, relevant information on the details
                          thereof;
                        </span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span className="bulletpointlist">
                          Pursuant to Article 16 GDPR, you have the right to
                          obtain without undue delay the rectification of
                          inaccurate personal data and/or the completion of
                          incomplete personal data in storage at the
                          Fraunhofer-Gesellschaft.
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Pursuant to Article 17 GDPR, you have the right to the
                          erasure of your personal data unless the erasure
                          interferes with the execution of the right to the free
                          expression of opinions and to information, with the
                          compliance with legal obligations, is necessary in the
                          public interest or for establishing, exercising or
                          defending legal claims.
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Pursuant to Article 18 GDPR, you have the right to
                          restriction of processing of your personal data if you
                          contest or challenge the accuracy of these data, the
                          processing of the data is unlawful but you oppose the
                          erasure of these data and we no longer need the data
                          while you still need the data to establish, exercise
                          or defend legal claims or you have raised an objection
                          against the data processing pursuant to Article 21
                          GDPR.
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Pursuant to Article 20 GDPR, you have the right to
                          receive the personal data concerning you in a
                          structured, commonly used and machine-readable format
                          or to demand the transmit to another controller.
                        </span>
                      </li>
                      <li>
                        <span className="bulletpointlist">
                          Pursuant to Article 77 GDPR, you have the right to
                          lodge a complaint with a supervisory authority. As a
                          rule, you may find such authority at your habitual
                          residence, your workplace or our company domicile.
                        </span>
                        <br /> &nbsp;
                      </li>
                    </ul>
                    <h4>
                      9. Information on your Right to Object Pursuant to Article
                      21 GDPR
                      <br />
                    </h4>
                    <h4>&nbsp;</h4>
                    <p>
                      You have the right to object at any time, on grounds
                      relating to your particular situation, to the processing
                      of your personal data pursuant to Article 6(1), point (f)
                      GDPR (data processing for the purposes of the legitimate
                      interests) and Article 6,(1), point (e) GDPR (data
                      processing for the performance of a task carried out in
                      the public interest). This shall also apply to profiling
                      as prescribed by Article 4 No. 4 GDPR, which is based on
                      this provision.
                    </p>
                    <p>
                      Once you file an objection, we will no longer process your
                      personal data unless we can demonstrate compelling
                      legitimate grounds for processing which override your
                      interests, rights and freedoms, or unless the processing
                      serves the establishment, exercise or defence of legal
                      claims.
                    </p>
                    <p>
                      To the extent that your objection addresses the processing
                      of data for direct advertising, we will stop the
                      processing immediately. In this case, citing a special
                      situation is not required. This shall also apply to
                      profiling in as far as it does not relate to such direct
                      advertising.
                    </p>
                    <p>
                      If you would like to assert your right to object, an email
                      to{' '}
                      <u>
                        <a
                          href="mailto:datenschutz@zv.fraunhofer.de"
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" external"
                        >
                          datenschutz@zv.fraunhofer.de
                        </a>
                      </u>{' '}
                      will suffice.
                    </p>
                    <p>&nbsp;</p>
                    <h4>10. Data Security</h4>
                    <h4>&nbsp;</h4>
                    <p>
                      We transmit all your personal data using the widely used
                      and secure TLS (Transport Layer Security) encryption
                      standard. The TLS protocol is a proven and secure standard
                      that is also used in online banking transactions. You will
                      recognise a secure TLS connection by the 's' following the
                      http (https://...) in your browser URL or by the lock
                      symbol in the lower section of your browser.
                    </p>
                    <p>
                      Moreover, we use suitable technical and organisational
                      safety procedures to protect your data against accidental
                      or wilful manipulation, partial or complete loss,
                      destruction or against the unauthorised access by third
                      parties. We constantly improve these security measures as
                      the technology advances.
                    </p>
                    <p>&nbsp;</p>
                    <h4>
                      11. Timeliness and Amendments to this Data Protection
                      Information
                    </h4>
                    <h4>&nbsp;</h4>
                    <p>
                      This data protection information as amended on August 2018
                      is currently applicable.
                    </p>
                    <p>
                      Due to improvements of our website and website offers or
                      by virtue of amended statutory or government standards, it
                      may become necessary to amend this data protection
                      information. You find the latest applicable data
                      protection information by clicking the link on this
                      website:{' '}
                      <a
                        href="https://www.scai.fraunhofer.de/en/data_protection.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" external"
                      >
                        https://www.scai.fraunhofer.de/en/data_protection.html
                      </a>
                      <br /> You may read or print this updated and amended
                      version at any time.
                    </p>
                    <h4 id="12">12. Severability</h4>
                    <h4>&nbsp;</h4>
                    <p>
                      Should individual provisions of this data protection
                      declaration be or become invalid either in part or in its
                      entirety or prove infeasible at any time, this shall not
                      affect the remaining provisions of this data protection
                      declaration. This shall apply accordingly to gaps in this
                      declaration.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </EuiText>
        </EuiPageContentBody>
      </EuiPageContent>
    </>
  );
}

export default DataProtection;
