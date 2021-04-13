import React, { ReactElement } from 'react';

// Typescript declarations
interface ResponsiveIframeProps {
  iframeTitle: string;
  iframeUrl: string;
}

const ResponsiveIframe = ({ iframeTitle, iframeUrl }: ResponsiveIframeProps): ReactElement => (
  <div className='my-12 overflow-hidden pt-iframe relative '>
    <iframe className='absolute h-full left-0 top-0 w-full' src={iframeUrl} title={iframeTitle} />
  </div>
);

export default ResponsiveIframe;
