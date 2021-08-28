import Document, { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from '@/data/siteMetadata'



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
<script type='text/javascript' src={`${siteMetadata.siteUrl}${siteMetadata.jQuery-min}`}  id='jquery-core-js'></script>
<script type='text/javascript' src={`${siteMetadata.siteUrl}${siteMetadata.jQuery-migrate}`} id='jquery-migrate-js'></script>
</Head>
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
<script type='text/javascript' src={`${siteMetadata.siteUrl}${siteMetadata.lazyloadScript}`} id='smartmag-lazyload-js'></script>
<script type='text/javascript' src='spcore/components/auto-load-post/js/auto-load-post5a2c.js?ver=1.1.7' id='spc-auto-load-post-js'></script>
<script type='text/javascript' src={`${siteMetadata.siteUrl}${siteMetadata.lazyloadScript}`}id='magnific-popup-js'></script>
<script type='text/javascript' src={`${siteMetadata.siteUrl}${siteMetadata.themejs}`} id='smartmag-theme-js'></script>
<script type='text/javascript' src={`${siteMetadata.siteUrl}${siteMetadata.jQuery-sticky-sidebar}`} id='theia-sticky-sidebar-js'></script>
<script type='text/javascript' src={`${siteMetadata.siteUrl}${siteMetadata.microModal}`} id='micro-modal-js'></script>
        
      </Html>
    );
  }
}

export default MyDocument
