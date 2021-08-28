 import React from "react";
 import { NextSeo } from 'next-seo';
 
export default function Error(){
 return(
 <>
 <NextSeo
      title="Oh Snap! Can't Believe Nothing Here"
      description= "We can't recived any thing like this, Try Again or Proceed To Home"
    />
<div class="main ts-contain cf right-sidebar">
	<div class="ts-row">
		<div class="col-12 cf">
	
			<div class="the-post the-page page-404 cf">
			
				<header>
					<h1 class="main-heading">Oh Snap!  <br /> Page Not Found!</h1>
				</header>
			
				<div class="post-content error-page row">
					
					<div class="col-3 text-404 main-color">
						404					</div>
					
					<div class="col-8 post-content">
						<p>
						We're sorry, but we can't find the page you were looking for. It's probably some thing we've done wrong but now we know about it and we'll try to fix it. In the meantime, try one of these options:						</p>
						<ul class="links">
							<li> <a href="/" class="go-back">Go to Previous Page</a></li>
							<li> <a href="/">Go to Homepage</a></li>
						</ul>
						
						<form role="search" method="get" class="search-form" action="/">
				<label>
					<span class="screen-reader-text">Search for:</span>
					<input type="search" class="search-field" placeholder="Search …" value="" name="s" />
				</label>
				<input type="submit" class="search-submit" value="Search" />
			</form>					</div>
					
				</div>

			</div>

		</div>
		
	</div>
</div> 
</>
);
}
