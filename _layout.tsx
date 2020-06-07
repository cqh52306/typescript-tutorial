// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
import { PagicLayout } from 'https://deno.land/x/pagic/mod.ts';

import Sidebar from './_sidebar.tsx';

const Layout: PagicLayout = ({ config, title, content, script, sidebar, outputPath }) => (
  <html>
    <head>
      <script async src="https://www.google-analytics.com/analytics.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-45256157-14');`
        }}
      />
      <title>{outputPath !== 'index.html' ? `${title} · ${config.title}` : title}</title>
      <meta charSet="utf-8" />

      <link rel="shortcut icon" type="image/png" href="//xcatliu.github.io/favicon.ico" />
      <link rel="stylesheet" href="/assets/prism.css" />
      {/* <link rel="stylesheet" href="/assets/prism_tomorrow.css" /> */}
      <link rel="stylesheet" href="/assets/index.css" />
    </head>
    <body>
      <header>
        <h1>
          <a href="/">{config.title}</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/xcatliu/typescript-tutorial">GitHub</a>
            </li>
            <li>
              <a href="https://github.com/xcatliu/buy-me-a-coffee">赞助作者</a>
            </li>
            <li>
              <a href="https://github.com/xcatliu/pagic">本网站使用 Pagic 构建</a>
            </li>
          </ul>
        </nav>
      </header>
      <Sidebar sidebar={sidebar} outputPath={outputPath} />
      <section className="main">{content}</section>
      {script}
    </body>
  </html>
);

export default Layout;
