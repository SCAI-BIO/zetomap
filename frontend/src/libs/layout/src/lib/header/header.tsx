import React from 'react';

import { EuiHeader, EuiHeaderLogo, EuiHeaderSectionItem } from '@elastic/eui';
import { useRouterLinkProps } from '../../../../utils/src';
import { IconType } from '@elastic/eui/src/components/icon';

/* eslint-disable-next-line */
export interface HeaderProps {
  headerName: string;
  iconType: IconType;
  rightSectionComponents: any;
}

export function Header({
  headerName,
  iconType,
  rightSectionComponents,
}: HeaderProps) {
  const [hrefMain, onClickMain] = useRouterLinkProps('/');
  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo
          // @ts-ignore
          href={hrefMain}
          // @ts-ignore
          onClick={onClickMain}
          iconType={iconType}
        >
          {headerName}
        </EuiHeaderLogo>
        {/*<EuiButton
          className="ml-3"
          color="secondary"
          title="Upload Patient Data"
          aria-label="Upload Patient Data"
          // @ts-ignore
          href={hrefUpload}
          // @ts-ignore
          onClick={onClickUpload}
        >
          Upload Data
        </EuiButton>*/}
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem>{rightSectionComponents}</EuiHeaderSectionItem>
      {/*<EuiHeaderSectionItem>
        <EuiButton
          className="mr-1"
          color="secondary"
          title="Help Page"
          aria-label="Help Page"
          // @ts-ignore
          href={hrefHelp}
          // @ts-ignore
          onClick={onClickHelp}
        >
          Help
        </EuiButton>
        <EuiButtonEmpty
          type="button"
          title="Download Scheme and Examples"
          aria-label="Download Data: Scheme and Examples"
          onClick={handleDownloadClick}
        >
          Download Data
        </EuiButtonEmpty>
      </EuiHeaderSectionItem>*/}
    </EuiHeader>
  );
}

export default Header;
