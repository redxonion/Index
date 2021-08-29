import React from "react";
import siteMetadata from '../../../data/siteMetadata'
import { useRouter } from 'next/router'

export default function HeadShare(){
const router = useRouter()
return(
<div className="post-share post-share-b spc-social-bg  post-share-a">
	
		
		<a href={`${siteMetadata.facebookshare}${siteMetadata.siteUrl}${router.asPath}`} className="cf service s-facebook" 
			title="Share on Twitter" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-facebook"></i>
			<span className="label">Facebook</span>
		</a>
			
		
		<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;text={frontMatter.title}`} className="cf service s-twitter" 
			title="Share on Twitter" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-twitter"></i>
			<span className="label">Twitter</span>
		</a>
			
		
		<a href={`${siteMetadata.twittershare}${siteMetadata.siteUrl}${router.asPath}&amp;media={frontMatter.img}&amp;description={frontMatter.description}`} className="cf service s-pinterest" 
			title="Share on Pinterest" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-pinterest"></i>
			<span className="label">Pinterest</span>
		</a>
			
		
		<a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fairlines-face-billions-in-losses-as-covid-will-wipe-out-even-more-flights%2F" className="cf service s-linkedin" 
			title="Share on LinkedIn" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-linkedin"></i>
			<span className="label">LinkedIn</span>
		</a>
			
		
		<a href="https://www.tumblr.com/share/link?url=https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fairlines-face-billions-in-losses-as-covid-will-wipe-out-even-more-flights%2F&amp;name=Airlines%20Face%20Billions%20in%20Losses%20As%20COVID%20will%20Wipe%20Out%20Even%20More%20Flights" className="cf service s-tumblr" 
			title="Share on Tumblr" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-tumblr"></i>
			<span className="label">Tumblr</span>
		</a>
			
		
		<a href="https://wa.me/?text=Airlines%20Face%20Billions%20in%20Losses%20As%20COVID%20will%20Wipe%20Out%20Even%20More%20Flights%20https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fairlines-face-billions-in-losses-as-covid-will-wipe-out-even-more-flights%2F" className="cf service s-whatsapp" 
			title="Share on WhatsApp" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-whatsapp"></i>
			<span className="label">WhatsApp</span>
		</a>
			
		
		<a href="https://vk.com/share.php?url=https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fairlines-face-billions-in-losses-as-covid-will-wipe-out-even-more-flights%2F&amp;title=Airlines%20Face%20Billions%20in%20Losses%20As%20COVID%20will%20Wipe%20Out%20Even%20More%20Flights" className="cf service s-vk" 
			title="Share on VKontakte" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-vk"></i>
			<span className="label">VKontakte</span>
		</a>
			
		
		<a href="mailto:?subject=Airlines%20Face%20Billions%20in%20Losses%20As%20COVID%20will%20Wipe%20Out%20Even%20More%20Flights&#038;body=https%3A%2F%2Fsmartmag.theme-sphere.com%2Fgood-news%2Fairlines-face-billions-in-losses-as-covid-will-wipe-out-even-more-flights%2F" className="cf service s-email" 
			title="Share via Email" target="_blank" rel="noopener">
			<i className="tsi tsi-tsi tsi-envelope-o"></i>
			<span className="label">Email</span>
		</a>
			
		
			<a href="#" className="show-more" title="Show More Social Sharing"><i className="tsi tsi-share"></i></a>
		
</div>
);
}