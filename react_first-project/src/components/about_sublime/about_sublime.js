import classes from './about_sublime.module.css';
import Gamepad from '../../img/Sublime/gamepad.png';


const About_sublime = () => {
	return (
		<div className={classes.about_sublime}>
			<div className={classes.about_sublime_top_block}>
				<h2>
					<span className="gray">about</span><br />
					<span className="yellou">s</span>ublime
				</h2>
				<div className={classes.block}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
						Pellentesque quis tristique magna.
					</p>
					<p>
						Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
						Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
						Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
						Sed rutrum tempus urna, sed aliquam lectus egestas eu.
						Maecenas est risus, tristique volutpat sagittis vel, feugiat consectetur diam.
						Suspendisse justo sem, molestie tincidunt rhoncus vel, molestie ut ligula.
						Mauris vitae ullamcorper odio. Mauris id enim gravida, tempor velit non, vehicula lacus.
						Sed rutrum tempus urna, sed aliquam lectus egestas eu
					</p>
				</div>
			</div>
			<div className={classes.about_sublime_bot_block}>
				<div className={classes.block}>
					<div className={classes.sublime_icon}><img src={Gamepad} alt="Sublime_gamepad" /></div>
					<h5>App Development</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
						Pellentesque quis tristique magna.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
						Pellentesque quis tristique magna.
					</p>
				</div>
				<div className={classes.block}>
					<div className={classes.sublime_icon}><img src={Gamepad} alt="Sublime_gamepad" /></div>
					<h5>App Development</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
						Pellentesque quis tristique magna.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
						Pellentesque quis tristique magna.
					</p>
				</div>
				<div className={classes.block}>
					<div className={classes.sublime_icon}><img src={Gamepad} alt="Sublime_gamepad" /></div>
					<h5>App Development</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
						Pellentesque quis tristique magna.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nulla facilisis molestie dignissim. Nulla pellentesque et nisi et euismod.
						Pellentesque quis tristique magna.
					</p>
				</div>
			</div>
		</div>
	);
}


export default About_sublime;
