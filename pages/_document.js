import Document, { Html, Head, Main, NextScript } from 'next/document'
import { loadEnvConfig } from '@next/env'



class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>     
<meta name='robots' content='max-image-preview:large' />
<link rel='dns-prefetch' href='https://fonts.googleapis.com/' />
<link rel='dns-prefetch' href='https://s.w.org/' />
<link rel='stylesheet' id='smartmag-core-css'  href='https://quacthemes.ml/origin/css/main.css' type='text/css' media='all' />
<link crossorigin="anonymous" rel='stylesheet' id='smartmag-fonts-css'  href='httpss://fonts.googleapis.com/css?family=Public+Sans%3A400%2C400i%2C500%2C600%2C700' type='text/css' media='all' />
<link rel='stylesheet' id='magnific-popup-css'  href='https://quacthemes.ml/origin/css/lightbox0e7d.css?ver=5.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='smartmag-icons-css'  href='https://quacthemes.ml/origin/css/icons/icons0e7d.css?ver=5.2.0' type='text/css' media='all' />
<script type='text/javascript' src='https://quacthemes.ml/origin/js/jquery/jquery.min.js?ver=3.5.1' id='jquery-core-js'></script>
<script type='text/javascript' src='https://quacthemes.ml/origin/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
</Head>
{/*<body class="home page-template page-template-page-templates page-template-no-wrapper page-template-page-templatesno-wrapper-php page page-id-786 has-lb has-lb-sm has-sb-sep layout-normal elementor-default elementor-kit-6 elementor-page elementor-page-786">*/}
          <Main />
          <NextScript />
          <script
  dangerouslySetInnerHTML={{
    __html: `
/* <![CDATA[ */
var BunyadLazy = {"type":"smart"};
/* ]]> */
`,
  }}
/>
<script type='text/javascript' src='https://quacthemes.ml/origin/js/lazyload.js?ver=5.2.0' id='smartmag-lazyload-js'></script>
<script type='text/javascript' src='spcore/components/auto-load-post/js/auto-load-post5a2c.js?ver=1.1.7' id='spc-auto-load-post-js'></script>
<script type='text/javascript' src='https://quacthemes.ml/origin/js/jquery.mfp-lightbox.js?ver=5.2.0' id='magnific-popup-js'></script>
<script type='text/javascript' src='https://quacthemes.ml/origin/js/theme.js?ver=5.2.0' id='smartmag-theme-js'></script>
<script type='text/javascript' src='https://quacthemes.ml/origin/js/jquery.sticky-sidebar.js?ver=5.2.0' id='theia-sticky-sidebar-js'></script>
<script type='text/javascript' src='https://quacthemes.ml/origin/js/micro-modal.js?ver=5.2.0' id='micro-modal-js'></script>
        
      </Html>
    );
  }
}

export default MyDocument
