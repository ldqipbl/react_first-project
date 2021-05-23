import classes from './testimonials.module.css'
import testimonialsImg from '../../img/Testimonials/testimonials_img.png';


const Testimonials = () => {
	return (
		<div className={classes.testimonials}>
			<div className={classes.testimonials_content}>
				<h2><span className="yellou">T</span>estimonials</h2>
				<div className={classes.testimonials_content_text}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod. 
						Pellentesque quis tristique magna.
					</p>
					<p>
						Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam. 
						Suspendisse justo sem, molestie tincidunt
					</p>
				</div>
			</div>
			<div className={classes.testimonials_photo}>
				<div>
					<img src={testimonialsImg} alt="testimonials_img" />
				</div>
				<p>John Doe</p>
				<p>CoFounder / CEO</p>
			</div>
		</div>
	);
}


export default Testimonials;
