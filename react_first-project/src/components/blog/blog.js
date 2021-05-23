import classes from './blog.module.css';
import blogImg1 from '../../img/Blogs/blog_img_1.png';
import blogImg2 from '../../img/Blogs/blog_img_2.png';
import blogImg3 from '../../img/Blogs/blog_img_3.png';


const Blog = () => {
	return (
	       <div className={classes.blog}>
			<div>
				<h2><span className="yellou">B</span>logs</h2>
				<ul className={classes.blog_nav}>
					<a href="#d"><li>Latest Posts</li></a>
					<a href="#d"><li>App Design</li></a>
					<a href="#d"><li>App Development</li></a>
					<a href="#d"><li>Design Solutions</li></a>
					<a href="#d"><li>Quality Assurance</li></a>
					<a href="#d"><li>Development Mode</li></a>
					<a href="#d"><li>What’s Out There</li></a>
				</ul>
			</div>
			<div className={classes.blog_content}>
				<div>
					<div><img src={blogImg1} alt="blog_img_1" /></div>
					<p className="yellou">July 4th 2016</p>
					<p>Lorem ipsum dolor sit amet</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim.
					</p>
				</div>
				<div>
					<div><img src={blogImg2} alt="blog_img_2" /></div>
					<p className="yellou">July 4th 2016</p>
					<p>Lorem ipsum dolor sit amet</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim.
					</p>
				</div>
				<div>
					<div><img src={blogImg3} alt="blog_img_3" /></div>
					<p className="yellou">July 4th 2016</p>
					<p>Lorem ipsum dolor sit amet</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim.
					</p>
				</div>
			</div>
		</div>
	);
}


export default Blog;
