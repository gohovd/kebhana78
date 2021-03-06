/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { FunctionComponent, createElement } from 'react';

import { RenderingMetadata } from '../types';
import { Fonts } from './fonts';
import { Styles } from './styles';

interface Props {
  metadata: RenderingMetadata;
}

export const Template: FunctionComponent<Props> = ({
  metadata: {
    uiPublicUrl,
    locale,
    darkMode,
    injectedMetadata,
    i18n,
    bootstrapScriptUrl,
    strictCsp,
  },
}) => {
  const logo = (
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" data-name="Layer 1" width="4.38759in" height="5.49902in" viewBox="0 0 315.90634 395.92943">
  <defs>
    <linearGradient id="linear-gradient" x1="157.79023" y1="264.44058" x2="157.79023" y2="0.2093" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#ef4a83"/>
      <stop offset="0.99438" stopColor="#ee3426"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="157.69663" y1="265.12306" x2="157.69663" y2="0.68386" xlinkHref="#linear-gradient"/>
    <linearGradient id="linear-gradient-3" x1="157.69661" y1="265.12302" x2="157.69661" y2="0.68391" xlinkHref="#linear-gradient"/>
  </defs>
  <g>
    <path d="M255.56334,68.48031,164.421,15.85867a13.30418,13.30418,0,0,0-13.26241,0L60.01711,68.48031A12.845,12.845,0,0,0,53.612,79.57359V185.07622a12.84493,12.84493,0,0,0,6.4051,11.09329l91.14151,52.62164a13.30118,13.30118,0,0,0,13.26241-.0008l91.14231-52.62084a12.8448,12.8448,0,0,0,6.4051-11.09329V79.5728A12.84253,12.84253,0,0,0,255.56334,68.48031Zm-19.3969,45.4307c-.48208.31275-74.24021,42.811-77.36621,44.61142a2.77488,2.77488,0,0,1-1.29617.333,2.16246,2.16246,0,0,1-1.19618-.3476l-19.01525-11.40041a1.24251,1.24251,0,0,1-.65466-1.04034,1.158,1.158,0,0,1,.66439-.93992l10.6452-6.36218a2.23735,2.23735,0,0,1,1.042-.25929,1.86729,1.86729,0,0,1,.888.21226l6.83379,4.14774a2.88084,2.88084,0,0,0,1.17973.4465,1.904,1.904,0,0,0,.961-.31686l50.06443-29.47647a.69873.69873,0,0,0-.00324-1.20729L159.59347,83.71582a4.969,4.969,0,0,0-1.92031-.7001,3.49994,3.49994,0,0,0-1.86121.68307l-50.0207,28.66547a.6988.6988,0,0,0,0,1.21293l6.78516,3.68831c.60934.3144.75191.68142.76324.93342.013.265-.10534.66525-.74542,1.07525l-10.868,6.346a2.02229,2.02229,0,0,1-.93747.24551,1.961,1.961,0,0,1-.888-.22524L79.25846,114.01554a1.15686,1.15686,0,0,1-.0041-2.00622L156.397,67.4636a3.52,3.52,0,0,1,1.40822-.35819,3.18146,3.18146,0,0,1,1.43173.43431l76.92712,44.37645a1.174,1.174,0,0,1,.55337.98933A1.18959,1.18959,0,0,1,236.16644,113.911Z" fill="none"/>
    <path d="M262.50564,56.45605,171.36334,3.83521a27.219,27.219,0,0,0-27.147,0L53.07481,56.45605A26.76749,26.76749,0,0,0,39.72819,79.5728V185.07622a26.76878,26.76878,0,0,0,13.34662,23.11755l91.14151,52.62169a27.22416,27.22416,0,0,0,27.147,0l91.1423-52.62169A26.76749,26.76749,0,0,0,275.85226,185.077V79.5728A26.76749,26.76749,0,0,0,262.50564,56.45605Zm-.5372,128.62017a12.8448,12.8448,0,0,1-6.4051,11.09329L164.421,248.79035a13.30118,13.30118,0,0,1-13.26241.0008L60.01711,196.16951a12.84493,12.84493,0,0,1-6.4051-11.09329V79.57359a12.845,12.845,0,0,1,6.4051-11.09328l91.14151-52.62164a13.30418,13.30418,0,0,1,13.26241,0l91.14231,52.62164a12.84253,12.84253,0,0,1,6.4051,11.09249Z" fill="url(#linear-gradient)"/>
    <path d="M236.16405,111.91617,159.23693,67.53972a2.70926,2.70926,0,0,0-1.46144-.43431,2.62375,2.62375,0,0,0-1.37851.35819L79.25436,112.00932a1.15686,1.15686,0,0,0,.0041,2.00622l20.64222,11.62485a1.961,1.961,0,0,0,.888.22524,2.02229,2.02229,0,0,0,.93747-.24551l10.868-6.346c.64008-.41.7584-.81027.74542-1.07525-.01133-.252-.1539-.619-.76324-.93342l-6.78516-3.68831a.6988.6988,0,0,1,0-1.21293L155.812,83.69879a3.49994,3.49994,0,0,1,1.86121-.68307,4.969,4.969,0,0,1,1.92031.7001l49.31982,28.59578a.69873.69873,0,0,1,.00324,1.20729L158.8521,142.99536a1.58058,1.58058,0,0,1-.961.31686,2.88084,2.88084,0,0,1-1.17973-.4465L149.8776,138.718a1.86729,1.86729,0,0,0-.888-.21226,2.23735,2.23735,0,0,0-1.042.25929l-10.6452,6.36218a1.158,1.158,0,0,0-.66439.93992,1.24251,1.24251,0,0,0,.65466,1.04034l19.01525,11.40041a2.16246,2.16246,0,0,0,1.19618.3476,2.77488,2.77488,0,0,0,1.29617-.333c3.126-1.8004,76.88413-44.29867,77.36621-44.61142a1.18959,1.18959,0,0,0,.551-1.00551A1.174,1.174,0,0,0,236.16405,111.91617Z" fill="url(#linear-gradient-2)"/>
    <path d="M236.1357,150.63942l-20.64308-11.62485a1.961,1.961,0,0,0-.888-.22524,2.024,2.024,0,0,0-.93747.24551l-10.86724,6.34595c-.64088.4108-.7584.81106-.74622,1.07519.01213.2528.1539.61908.76324.93342l6.78516,3.68917a.69917.69917,0,0,1,.0008,1.21292l-49.62534,28.437-.39616.22769a3.49306,3.49306,0,0,1-1.86042.683,4.95552,4.95552,0,0,1-1.9211-.7l-.11752-.0632L106.48,152.34416a.6996.6996,0,0,1-.00324-1.20729L156.5412,121.6604a1.60539,1.60539,0,0,1,.96178-.31686,2.38365,2.38365,0,0,1,1.17973.4465l6.833,4.14688a1.86778,1.86778,0,0,0,.888.21311,2.23742,2.23742,0,0,0,1.042-.25929l10.64519-6.36218a1.15921,1.15921,0,0,0,.66439-.93991,1.24154,1.24154,0,0,0-.65466-1.04035l-19.01525-11.4004a2.30747,2.30747,0,0,0-1.26969-.3484,2.35473,2.35473,0,0,0-1.20419.36448c-.78169.44335-76.90259,44.268-77.38468,44.58077a1.18864,1.18864,0,0,0-.551,1.0055,1.17361,1.17361,0,0,0,.55343.98854L156.15637,197.116a3.19685,3.19685,0,0,0,1.43173.43425,3.53131,3.53131,0,0,0,1.40822-.35813l77.14262-44.54578a1.158,1.158,0,0,0-.00324-2.007Z" fill="url(#linear-gradient-3)"/>
  </g>
</svg>
  );
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <title>Honeywell Forge Analytics</title>
        <Fonts url={uiPublicUrl} />
        {/* Favicons (generated from http://realfavicongenerator.net/) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${uiPublicUrl}/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${uiPublicUrl}/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${uiPublicUrl}/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${uiPublicUrl}/favicons/manifest.json`} />
        <link
          rel="mask-icon"
          color="#e8488b"
          href={`${uiPublicUrl}/favicons/safari-pinned-tab.svg`}
        />
        <link rel="shortcut icon" href={`${uiPublicUrl}/favicons/favicon.ico`} />
        <meta name="msapplication-config" content={`${uiPublicUrl}/favicons/browserconfig.xml`} />
        <meta name="theme-color" content="#ffffff" />
        <Styles darkMode={darkMode} />

        {/* Inject stylesheets into the <head> before scripts so that KP plugins with bundled styles will override them */}
        <meta name="add-styles-here" />
        <meta name="add-scripts-here" />
      </head>
      <body>
        {createElement('kbn-csp', {
          data: JSON.stringify({ strictCsp }),
        })}
        {createElement('kbn-injected-metadata', { data: JSON.stringify(injectedMetadata) })}
        <div
          className="kbnWelcomeView"
          id="kbn_loading_message"
          style={{ display: 'none' }}
          data-test-subj="kbnLoadingMessage"
        >
          <div className="kbnLoaderWrap">
            {logo}
            <div
              className="kbnWelcomeText"
              data-error-message={i18n('core.ui.welcomeErrorMessage', {
                defaultMessage:
                  'Elastic did not load properly. Check the server output for more information.',
              })}
            >
              {i18n('core.ui.welcomeMessage', { defaultMessage: 'Loading Honeywell Forge Analytics' })}
            </div>
            <div className="kbnProgress" />
          </div>
        </div>

        <div className="kbnWelcomeView" id="kbn_legacy_browser_error" style={{ display: 'none' }}>
          {logo}

          <h2 className="kbnWelcomeTitle">
            {i18n('core.ui.legacyBrowserTitle', {
              defaultMessage: 'Please upgrade your browser',
            })}
          </h2>
          <div className="kbnWelcomeText">
            {i18n('core.ui.legacyBrowserMessage', {
              defaultMessage:
                'This Elastic installation has strict security requirements enabled that your current browser does not meet.',
            })}
          </div>
        </div>

        <script>
          {`
            // Since this is an unsafe inline script, this code will not run
            // in browsers that support content security policy(CSP). This is
            // intentional as we check for the existence of __kbnCspNotEnforced__ in
            // bootstrap.
            window.__kbnCspNotEnforced__ = true;
          `}
        </script>
        <script src={bootstrapScriptUrl} />
      </body>
    </html>
  );
};
