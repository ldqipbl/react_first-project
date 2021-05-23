import classes from './footer.module.css';
import NavToolbarNetwork from '../nav_toolbar_network';


const Footer = () => {
	return (
		<footer>
			<div className={classes.footer_nav}>
				<ul>
					<li>
						<div>
							<h1><span className="yellou">S</span>ublime</h1>
						</div>
					</li>
					<a href="#b"><li>home</li></a>
					<a href="#b"><li>about sublime</li></a>
					<a href="#b"><li>our works</li></a>
					<a href="#b"><li>services</li></a>
					<a href="#b"><li>team</li></a>
					<a href="#b"><li>testimonials</li></a>
					<a href="#b"><li>blog</li></a>
					<a href="#b"><li>contact us</li></a>
					<li>
						<NavToolbarNetwork />
					</li>
				</ul>
			</div>
			<div className={classes.footer_content}>
				<h2><span className="yellou">We</span> create <br />Awesome Games </h2>
			</div>
		</footer>
	);
}


export default Footer;
