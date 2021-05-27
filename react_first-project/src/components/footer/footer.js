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
					<a href="#home"><li>home</li></a>
					<a href="#about"><li>about sublime</li></a>
					<a href="#our_works"><li>our works</li></a>
					<a href="#services"><li>services</li></a>
					<a href="#team"><li>team</li></a>
					<a href="#testimonials"><li>testimonials</li></a>
					<a href="#blog"><li>blog</li></a>
					<a href="#contact"><li>contact us</li></a>
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
