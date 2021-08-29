import formatDate from '../../src/lib/FormatDate';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '@/layouts/default'
import { getAllPosts } from '@/renderMdxconfig/08C29695';
import { PostType } from '@/renderMdxprops/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
  <Layout>
<div id='parent'>
<nav className="breadcrumbs is-full-width breadcrumbs-a" id="breadcrumb"><div className="inner ts-contain "><span><a href="/"><span>Home</span></a></span><span className="delim">&raquo;</span><span className="current">Themeforest</span></div></nav>
<div className="main ts-contain cf right-sidebar">
	<div className="ts-row">
		<div className="col-8 main-content">

					<h1 className="archive-heading">
				Browsing: <span>Plugins</span>			</h1>
				
			
					
				<section className="block-wrap block-posts-list mb-none" data-id="8">

				
			<div className="block-content">
					
	<div className="loop loop-list loop-sep loop-list-sep grid grid-1 md:grid-1 sm:grid-1">

				
{posts.map((post) => (
<article key={post.slug} className="l-post  m-pos-left list-post">

	
			<div className="media">
<Link as={`/plugins/${post.slug}`} href={`/themeforest/[slug]`}>
			<a className="image-link media-ratio ratio-3-2" title="Consider Yourself an Aesthete? Don&#8217;t Miss These Houses">
<span data-bgsrc={post.img} className="img bg-cover wp-post-image attachment-bunyad-medium size-bunyad-medium lazyload" data-bgset={post.img} data-sizes="(max-width: 303px) 100vw, 303px"></span></a></Link>		
			
			
							
				<span className="cat-labels cat-labels-overlay c-overlay p-bot-left">
				<a href="#" className="category term-color-1" rel="category">Themeforest</a>
			</span>
						
			
		
		</div>
	

	
		<div className="content">

			<div className="post-meta post-meta-a has-below"><h2 className="is-title post-title">
<Link as={`/themeforest/${post.slug}`} href={`/themeforest/[slug]`}>
<a>{post.title}</a></Link></h2><div className="post-meta-items meta-below"><span className="meta-item post-author"><span className="by">By</span> <a href="#" title="Posts by Shane Doe" rel="author">{post.author}</a></span>
<span className="meta-item has-next-icon date"><span className="date-link"><time className="post-date" dateTime={post.date}> {formatDate(post.date)}
</time></span></span><span className="meta-item comments has-icon"><a href="#"><i className="tsi tsi-comment-o"></i>3</a></span></div></div>			
						
				<div className="excerpt">
					<p>{post.description}</p>
				</div>
			
		</div>

	
</article>
))}
			
	</div>

	

	<nav className="main-pagination pagination-numbers" data-type="numbers">
		<span aria-current="page" className="page-numbers current">1</span>
<a className="page-numbers" href="https://smartmag.theme-sphere.com/good-news/category/example-1/ts-qs/layout=posts-list%2F/page/2/">2</a>
<a className="next page-numbers" href="https://smartmag.theme-sphere.com/good-news/category/example-1/ts-qs/layout=posts-list%2F/page/2/"><span className="visuallyhidden">Next</span><i className="tsi tsi-angle-right"></i></a>	</nav>

				</div>

		</section>
		</div></div></div>
		</div></Layout>
);
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'img', 'author', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
