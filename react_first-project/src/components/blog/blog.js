import classes from './blog.module.css';
import {Route} from  'react-router-dom';
import BlockLatestPosts from "./sub_components/latestPosts/latestPosts.js";
import BlockAppDesign from "./sub_components/appDesign/appDesign.js";
import BlockAppDevelopment from "./sub_components/appDevelopment/appDevelopment.js";
import BlockDesignSolutions from "./sub_components/designSolutions/designSolutions.js";
import BlockQualityAssurance from "./sub_components/qualityAssurance/qualityAssurance.js";
import BlockDevelopmentMode from "./sub_components/developmentMode/developmentMode.js";
import BlockWhatIsOutThere from "./sub_components/what’sOutThere/what’sOutThere.js";


const Blog = () => {
	return (
		
		       <div className={classes.blog}>
				<div>
					<h2><span className="yellou">B</span>logs<a name="blog"></a></h2>
					<ul className={classes.blog_nav}>
						<a href="/"><li>Latest Posts</li></a>
						<a href="/appDesign"><li>App Design</li></a>
						<a href="/appDevelopment"><li>App Development</li></a>
						<a href="/designSolutions"><li>Design Solutions</li></a>
						<a href="/qualityAssurance"><li>Quality Assurance</li></a>
						<a href="/developmentMode"><li>Development Mode</li></a>
						<a href="/what’sOutThere"><li>What’s Out There</li></a>
					</ul>
				</div>
				<Route path='/' component={BlockLatestPosts}  />
				<Route path='/appDesign' component={BlockAppDesign}  />
				<Route path='/appDevelopment' component={BlockAppDevelopment}  />
				<Route path='/designSolutions' component={BlockDesignSolutions}  />
				<Route path='/qualityAssurance' component={BlockQualityAssurance}  />
				<Route path='/developmentMode' component={BlockDevelopmentMode}  />
				<Route path='/what’sOutThere' component={BlockWhatIsOutThere}  />
			</div>
		
	);
}


export default Blog;
