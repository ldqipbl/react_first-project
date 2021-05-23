import classes from './strategic.module.css';
import strategicImg1 from '../../img/strategic_process/strategic_img_1.png';
import strategicImg2 from '../../img/strategic_process/strategic_img_2.png';
import strategicImg3 from '../../img/strategic_process/strategic_img_3.png';


const Strategic = () => {
	return (
		<div className={classes.strategic}>
			<h2><span className="yellou">S</span>trategic Process</h2>
			<div className={classes.top_blocks}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
					Pellentesque quis tristique magna.
				</p>
				<p>
					Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
					Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio.
					Mauris id enim gravida, tempor velit non, vehicula lacus.
					Sed rutrum tempus urna, sed aliquam lectus egestas eu.
					Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
					Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio.
					Mauris id enim gravida, tempor velit non, vehicula lacus.
					Sed rutrum tempus urna, sed aliquam lectus egestas eu.
					Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
					Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula. Mauris vitae ullamcorper odio.
					Mauris id enim gravida, tempor velit non, vehicula lacus.
					Sed rutrum tempus urna, sed aliquam lectus egestas eu.
					Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
					Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
					Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
					Sed rutrum tempus urna, sed aliquam lectus egestas eu.
				</p>
			</div>
			<div className={classes.bot_blocks}>
				<div className={classes.bot_block_our_process}>
					<div><img src={strategicImg1} alt="strategic_img_1" /></div>
					<div>
						<h3>Our Process</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
							Pellentesque quis tristique magna.
						</p>
						<p>
							Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
							Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
							Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
							Sed rutrum tempus urna, sed aliquam lectus egestas eu
						</p>
					</div>
				</div>
				<div className={classes.bot_block_method}>
					<div>
						<h3>Method</h3>
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
					<div><img src={strategicImg2} alt="strategic_img_2" /></div>
				</div>
				<div className={classes.bot_block_outcome}>
					<div><img src={strategicImg3} alt="strategic_img_3" /></div>
					<div>
						<h3>Outcome</h3>
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
			</div>
		</div>
	);
}


export default Strategic;
