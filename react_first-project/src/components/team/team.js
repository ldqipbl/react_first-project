import classes from './team.module.css';
import teamImg1 from '../../img/team/team_img_1.png';
import teamImg2 from '../../img/team/team_img_2.png';
import teamImg3 from '../../img/team/team_img_3.png';
import teamImg4 from '../../img/team/team_img_4.png';


const Team = () => {
	return (
		<div className={classes.team}>
			<h2><span className="yellou">O</span>ur Team</h2>
			<div className={classes.team_content}>
				<div className={classes.team_top_block}>
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
				<div className={classes.team_photo}>
					<div>
						<div><img src={teamImg1} alt="team_img_1" /></div>
						<div>
							<p>John Doe</p>
							<p>CoFounder / CEO</p>
						</div>

					</div>
					<div>
						<div><img src={teamImg2} alt="team_img_2" /></div>
						<div>
							<p>John Doeprocess</p>
							<p>Manager</p>
						</div>

					</div>
					<div>
						<div><img src={teamImg3} alt="team_img_3" /></div>
						<div>
							<p>John Doe</p>
							<p>Sales President</p>
						</div>

					</div>
					<div>
						<div><img src={teamImg4} alt="team_img_4" /></div>
						<div>
							<p>John Doe</p>
							<p>Developer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Team;
