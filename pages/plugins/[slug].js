import { format, parseISO } from 'date-fns';
import fs from 'fs'
import { useRouter } from 'next/router'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import path from 'path'
import siteMetadata from '@/data/siteMetadata'
import { postFilePaths, POSTS_PATH } from '@/renderMdxutils/08C29695'
import { NextSeo } from 'next-seo';
import { BlogJsonLd } from 'next-seo';
import CustomLink from '@/components/CustomLink'
import React from "react";
//import Comments from "../../components/Posts/Comments";
import Layout from '@/layouts/default';

const url = 'https://www.quacthemes.ml/_images/'

const components = {
  a: CustomLink,
 
  TestComponent: dynamic(() => import('@/components/TestComponent')),
  Head,
}
export default function PostPage({ source, frontMatter }) {
const router = useRouter()
  return (
<>
     <title>{frontMatter.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={frontMatter.description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={frontMatter.title} />
      <meta property="og:description" content={frontMatter.description} />
      <meta property="og:title" content={frontMatter.title} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${frontMatter.img}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={frontMatter.title} />
      <meta name="twitter:description" content={frontMatter.description} />
      <meta name="twitter:image" content={`${siteMetadata.siteUrl}${frontMatter.img}`} />
<Layout>
<nav className="breadcrumbs is-full-width breadcrumbs-a" id="breadcrumb"><div className="inner ts-contain "><span><a href="/"><span>Home</span></a></span><span className="delim">&raquo;</span><span><a href="/"><span>{frontMatter.tag}</span></a></span><span className="delim">&raquo;</span><span className="current">{frontMatter.title}</span></div></nav>

<div className="main ts-contain cf right-sidebar">

			

<div className="ts-row">

	<div className="col-8 main-content">

					<div className="the-post-header s-head-modern s-head-modern-a">
	<div className="post-meta post-meta-a post-meta-left post-meta-single has-below">
<div className="post-meta-items meta-above">
<span className="meta-item cat-labels">
						
						<a href="/themes" className="category term-color-4" rel="category">{frontMatter.tag}</a>
					</span>
					</div><h1 className="is-title post-title">{frontMatter.title}</h1><div className="sub-title">{frontMatter.description}</div><div className="post-meta-items meta-below has-author-img"><span className="meta-item post-author has-img"><img alt='Shane Doe' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' srcset='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg 2x' className='avatar avatar-32 photo' height='32' width='32' loading='lazy'/><span className="by">By</span> <a href="../author/admin/index.html" title="Posts by Shane Doe" rel="author">{frontMatter.author}</a></span><span className="meta-item date"><time className="post-date" datetime="2021-01-14T10:39:34+00:00"> {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
</time></span><span className="meta-item has-next-icon date-modified"><span className="updated-on">Updated:</span><time className="post-date" datetime="2021-02-15T17:08:38+00:00">{frontMatter.updateAt}</time></span><span className="has-next-icon meta-item comments has-icon"><a href="index.html#comments"><i className="tsi tsi-comment-o"></i>3 Comments</a></span><span className="meta-item read-time has-icon"><i className="tsi tsi-clock"></i>6 Mins Read</span></div></div>
<div className="post-share post-share-b spc-social-bg  post-share-a">
	
		
		<a href={`${siteMetadata.facebookshare}${siteMetadata.siteUrl}${router.asPath}`} className="cf service s-facebook" 
			title="Share on Twitter" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-facebook"></i>
			<span className="label">Facebook</span>
		</a>
			
		
		<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;text=${frontMatter.title}`} className="cf service s-twitter" 
			title="Share on Twitter" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-twitter"></i>
			<span className="label">Twitter</span>
		</a>
			
		
		<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;media=${frontMatter.img}&amp;description=${frontMatter.description}`} className="cf service s-pinterest" 
			title="Share on Pinterest" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-pinterest"></i>
			<span className="label">Pinterest</span>
		</a>
			
		
		<a href={`${siteMetadata.linkedinshare}${siteMetadata.siteUrl}${router.asPath}`}
 className="cf service s-linkedin" 
			title="Share on LinkedIn" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-linkedin"></i>
			<span className="label">LinkedIn</span>
		</a>
			
		
		<a href={`${siteMetadata.tumblrshare}${siteMetadata.siteUrl}${router.asPath}&amp;name=${frontMatter.title} `}
 className="cf service s-tumblr" 
			title="Share on Tumblr" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-tumblr"></i>
			<span className="label">Tumblr</span>
		</a>
			
		
		<a href={`${siteMetadata.whatshapshare}${frontMatter.title} ${siteMetadata.siteUrl}${router.asPath}`}  className="cf service s-whatsapp" 
			title="Share on WhatsApp" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-whatsapp"></i>
			<span className="label">WhatsApp</span>
		</a>
			
		
		<a href={`${siteMetadata.vkontakteshare}${siteMetadata.siteUrl}${router.asPath}&amp;title=${frontMatter.title}`}
className="cf service s-vk" 
			title="Share on VKontakte" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-vk"></i>
			<span className="label">VKontakte</span>
		</a>
			
		
		<a href={`${siteMetadata.emailshare}${frontMatter.title}&#038;body=${siteMetadata.siteUrl}${router.asPath}`}
className="cf service s-email" 
			title="Share via Email" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-envelope-o"></i>
			<span className="label">Email</span>
		</a>
			
		
			<a href="#" className="show-more" title="Show More Social Sharing"><i className="tsi tsi-share"></i></a>
		
</div>
</div>		
		<div className="single-featured">
				
	<div className="featured">
				<a href="#" class="image-link media-ratio ar-bunyad-main-full"><img width="1200" height="574" layout="fill" objectFit="contain" src={frontMatter.img}  class="attachment-1536x1536 size-1536x1536 lazyload wp-post-image" alt="" loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px" title={frontMatter.title} data-srcset={frontMatter.img} data-src={frontMatter.img}  /></a>
			</div>

			</div>

		<div className="the-post s-post-modern">

			<article id="post-40" className="post-40 post type-post status-publish format-standard has-post-thumbnail category-example-3">
				
<div className="post-content-wrap has-share-float">
						<div className="post-share-float share-float-b is-hidden spc-social-c-icon">
	<div className="inner">
					<span className="share-text">Share</span>
		
		<div className="services">
		
				
			<a href={`${siteMetadata.facebookshare}${siteMetadata.siteUrl}${router.asPath}`}  className="cf service s-facebook" target="_blank" title="Facebook">
				<i className="tsi tsi-facebook"></i>
				<span className="label">Facebook</span>
			</a>
				
				
			<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;text=${frontMatter.title}`} className="cf service s-twitter" target="_blank" title="Twitter">
				<i className="tsi tsi-twitter"></i>
				<span className="label">Twitter</span>
			</a>
				
				
			<a href={`${siteMetadata.linkedinshare}${siteMetadata.siteUrl}${router.asPath}`}
 target="_blank" title="LinkedIn">
				<i className="tsi tsi-linkedin"></i>
				<span className="label">LinkedIn</span>
			</a>
				
				
			<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;media=${frontMatter.img}&amp;description=${frontMatter.description}`}  className="cf service s-pinterest" target="_blank" title="Pinterest">
				<i className="tsi tsi-pinterest-p"></i>
				<span className="label">Pinterest</span>
			</a>
				
				
			<a href={`${siteMetadata.emailshare}${frontMatter.title}&#038;body=${siteMetadata.siteUrl}${router.asPath}`}
 target="_blank" title="Email">
				<i className="tsi tsi-envelope-o"></i>
				<span className="label">Email</span>
			</a>
				
				
		</div>
	</div>		
</div>
			
	<div className="post-content cf entry-content content-spacious">
      <main>
        <MDXRemote {...source} components={components} />
      </main>
</div>
<div class="wp-block-button aligncenter is-style-fill"><a class="wp-block-button__link" href={frontMatter.download}>Download Now</a></div>
</div>
	
			</article>

	
	<div className="post-share-bot">
		<span className="info">Share.</span>
		
		<span className="share-links spc-social-bg">

			
				<a href={`${siteMetadata.facebookshare}${siteMetadata.siteUrl}${router.asPath}`}  className="service s-facebook tsi tsi-facebook" 
					title="Share on Twitter" target="_blank" rel="noopener">
					<span className="visuallyhidden">Facebook</span>
				</a>
					
			
				<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;text=${frontMatter.title}`} className="service s-twitter tsi tsi-twitter" 
					title="Share on Twitter" target="_blank" rel="noopener">
					<span className="visuallyhidden">Twitter</span>
				</a>
					
			
				<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;media=${frontMatter.img}&amp;description=${frontMatter.description}`} className="service s-pinterest tsi tsi-pinterest" 
					title="Share on Pinterest" target="_blank" rel="noopener">
					<span className="visuallyhidden">Pinterest</span>
				</a>
					
			
				<a href={`${siteMetadata.linkedinshare}${siteMetadata.siteUrl}${router.asPath}`}
 className="service s-linkedin tsi tsi-linkedin" 
					title="Share on LinkedIn" target="_blank" rel="noopener">
					<span className="visuallyhidden">LinkedIn</span>
				</a>
					
			
				<a href={`${siteMetadata.tumblrshare}${siteMetadata.siteUrl}${router.asPath}&amp;name=${frontMatter.title} `}
className="service s-tumblr tsi tsi-tumblr" 
					title="Share on Tumblr" target="_blank" rel="noopener">
					<span className="visuallyhidden">Tumblr</span>
				</a>
					
			
				<a href={`${siteMetadata.whatshapshare}${frontMatter.title} ${siteMetadata.siteUrl}${router.asPath}`} className="service s-whatsapp tsi tsi-whatsapp" 
					title="Share on WhatsApp" target="_blank" rel="noopener">
					<span className="visuallyhidden">WhatsApp</span>
				</a>
					
			
				<a href={`${siteMetadata.emailshare}${frontMatter.title}&#038;body=${siteMetadata.siteUrl}${router.asPath}`}
 className="service s-email tsi tsi-envelope-o" 
					title="Share via Email" target="_blank" rel="noopener">
					<span className="visuallyhidden">Email</span>
				</a>
					
			
		</span>
	</div>

	<section className="navigate-posts">
	
		<div className="previous">
					<span className="main-color title"><i className="tsi tsi-chevron-left"></i> Previous Article</span><span className="link"><a href="../asimo-robot-unveils-a-new-tool-for-simple-robot-programming/index.html" rel="prev">Asimo Robot Unveils a New Tool For Simple Robot Programming</a></span>
				</div>
		<div className="next">
					<span className="main-color title">Next Article <i className="tsi tsi-chevron-right"></i></span><span className="link"><a href="../bose-line-of-products-on-the-show-showroom-open-now-in-dubai/index.html" rel="next">Bose Line of Products on the Show: Showroom Open Now in Dubai</a></span>
				</div>		
	</section>



	<div className="author-box">
			<section className="author-info">
	
		<img alt='' src='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg' srcset='https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg 2x' className='avatar avatar-95 photo' height='95' width='95' loading='lazy'/>		
		<div className="description">
			<a href="../author/admin/index.html" title="Posts by Shane Doe" rel="author">Shane Doe</a>			
			<ul className="social-icons">
							
				<li>
					<a href="https://theme-sphere.com/" className="icon tsi tsi-home" title="Website"> 
						<span className="visuallyhidden">Website</span></a>				
				</li>
				
				
							
				<li>
					<a href="#" className="icon tsi tsi-facebook" title="Facebook"> 
						<span className="visuallyhidden">Facebook</span></a>				
				</li>
				
				
							
				<li>
					<a href="#" className="icon tsi tsi-twitter" title="Twitter"> 
						<span className="visuallyhidden">Twitter</span></a>				
				</li>
				
				
							
				<li>
					<a href="#" className="icon tsi tsi-pinterest-p" title="Pinterest"> 
						<span className="visuallyhidden">Pinterest</span></a>				
				</li>
				
				
							
				<li>
					<a href="#" className="icon tsi tsi-instagram" title="Instagram"> 
						<span className="visuallyhidden">Instagram</span></a>				
				</li>
				
				
						</ul>
			
			<p className="bio">I am an Example Writer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labored et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		</div>
		
	</section>	</div>


	<section className="related-posts">
							
							
				<div className="block-head block-head-ac block-head-a block-head-a1 is-left">

					<h4 className="heading">Related <span className="color">Posts</span></h4>					
									</div>
				
			
				<section className="block-wrap block-grid mb-none" data-id="7">

				
			<div className="block-content">
					
	<div className="loop loop-grid loop-grid-sm grid grid-2 md:grid-2 xs:grid-1">

					
<article className="l-post  grid-sm-post grid-post">

	
			<div className="media">

		
			<a href="../bose-line-of-products-on-the-show-showroom-open-now-in-dubai/index.html" className="image-link media-ratio ratio-16-9"><span data-bgsrc="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-450x300.jpg" className="img bg-cover wp-post-image attachment-bunyad-medium size-bunyad-medium lazyload" data-bgset="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-450x300.jpg 450w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-1024x684.jpg 1024w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-768x513.jpg 768w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-1536x1026.jpg 1536w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-2048x1368.jpg 2048w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-1200x801.jpg 1200w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/Depositphotos_138978856_xl-2015-600x401.jpg 600w" data-sizes="(max-width: 377px) 100vw, 377px"></span></a>			
			
			
			
		
		</div>
	

	
		<div className="content">

			<div className="post-meta post-meta-a has-below"><h2 className="is-title post-title"><a href="../bose-line-of-products-on-the-show-showroom-open-now-in-dubai/index.html">Bose Line of Products on the Show: Showroom Open Now in Dubai</a></h2><div className="post-meta-items meta-below"><span className="meta-item date"><a href="../bose-line-of-products-on-the-show-showroom-open-now-in-dubai/index.html" className="date-link"><time className="post-date" datetime="2021-01-14T10:39:36+00:00">Jan  14, 2021</time></a></span></div></div>			
			
			
		</div>

	
</article>					
<article className="l-post  grid-sm-post grid-post">

	
			<div className="media">

		
			<a href="../asimo-robot-unveils-a-new-tool-for-simple-robot-programming/index.html" className="image-link media-ratio ratio-16-9"><span data-bgsrc="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-450x308.jpg" className="img bg-cover wp-post-image attachment-bunyad-medium size-bunyad-medium lazyload" data-bgset="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-450x308.jpg 450w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-1024x701.jpg 1024w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-768x526.jpg 768w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-1536x1052.jpg 1536w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-2048x1402.jpg 2048w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-1200x822.jpg 1200w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/possessed-photography-g29arbbvPjo-unsplash-600x411.jpg 600w" data-sizes="(max-width: 377px) 100vw, 377px"></span></a>			
			
			
			
		
		</div>
	

	
		<div className="content">

			<div className="post-meta post-meta-a has-below"><h2 className="is-title post-title"><a href="../asimo-robot-unveils-a-new-tool-for-simple-robot-programming/index.html">Asimo Robot Unveils a New Tool For Simple Robot Programming</a></h2><div className="post-meta-items meta-below"><span className="meta-item date"><a href="../asimo-robot-unveils-a-new-tool-for-simple-robot-programming/index.html" className="date-link"><time className="post-date" datetime="2021-01-14T10:39:31+00:00">Jan  14, 2021</time></a></span></div></div>			
			
			
		</div>

	
</article>					
<article className="l-post  grid-sm-post grid-post">

	
			<div className="media">

		
			<a href="../review-post-percent/index.html" className="image-link media-ratio ratio-16-9"><span data-bgsrc="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-450x491.jpg" className="img bg-cover wp-post-image attachment-bunyad-medium size-bunyad-medium lazyload" data-bgset="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-450x491.jpg 450w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-275x300.jpg 275w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-939x1024.jpg 939w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-768x837.jpg 768w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-1409x1536.jpg 1409w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-1879x2048.jpg 1879w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-1200x1308.jpg 1200w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/torbjorn-sandbakk-z38c658bsHY-unsplash-1-600x654.jpg 600w" data-sizes="(max-width: 377px) 100vw, 377px"></span></a>			
			
			
		
		</div>
	

	
		<div className="content">

			<div className="post-meta post-meta-a has-below"><h2 className="is-title post-title"><a href="../review-post-percent/index.html">Our Review: Tesla’s Sales Goals Focus for Fourth-Quarter Earnings</a></h2><div className="post-meta-items meta-below"><span className="meta-item date"><a href="../review-post-percent/index.html" className="date-link"><time className="post-date" datetime="2021-01-14T10:39:28+00:00">Jan  14, 2021</time></a></span></div></div>			
			
			
		</div>

	
</article>					
<article className="l-post  grid-sm-post grid-post">

	
			<div className="media">

		
			<a href="../post-format-video/index.html" className="image-link media-ratio ratio-16-9"><span data-bgsrc="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-450x744.jpg" className="img bg-cover wp-post-image attachment-bunyad-medium size-bunyad-medium lazyload" data-bgset="https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-450x744.jpg 450w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-181x300.jpg 181w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-619x1024.jpg 619w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-768x1270.jpg 768w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-929x1536.jpg 929w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-1238x2048.jpg 1238w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-150x248.jpg 150w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-1200x1985.jpg 1200w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-600x992.jpg 600w, https://smartmag.theme-sphere.com/good-news/wp-content/uploads/sites/6/2021/01/omid-armin-mP4sfCCoTrI-unsplash-1-scaled.jpg 1548w" data-sizes="(max-width: 377px) 100vw, 377px"></span></a>			
			<span className="format-overlay c-overlay format-video p-center"><i className="tsi tsi-play"></i></span>
			
			
		
		</div>
	

	
		<div className="content">

			<div className="post-meta post-meta-a has-below"><h2 className="is-title post-title"><a href="../post-format-video/index.html">Huawei Planning World&#8217;s First 3-Nanometer Advanced Mobile Chipset</a></h2><div className="post-meta-items meta-below"><span className="meta-item date"><a href="../post-format-video/index.html" className="date-link"><time className="post-date" datetime="2021-01-13T16:17:26+00:00">Jan  13, 2021</time></a></span></div></div>			
			
			
		</div>

	
</article>		
	</div>

		
			</div>

		</section>
		
	</section>	
<Comments />		
			{/*<!--#comments -->*/}
			</div>

		</div>
	</div>
	</div>
	</Layout>
</>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
