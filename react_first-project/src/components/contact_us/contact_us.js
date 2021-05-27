import classes from './contact_us.module.css';
import NavToolbarNetwork from '../nav_toolbar_network';


const Contact_us = () => {
	return (
		<div className={classes.contact_us}>
			<div className={classes.contact_us_map}></div>
			<div className={classes.contact_us_content}>
				<h2><span className="yellou">C</span>ontact Us<a name="contact"></a></h2>
				<form>
					<input className={classes.contact_us_content_text} type="text" placeholder="Your Name" />
					<input className={classes.contact_us_content_tel} type="tel" placeholder="Mobile" />
					<input className={classes.contact_us_content_email} type="Email" placeholder="Email" />
					<textarea className={classes.contact_us_content_your_message} placeholder="Your Message"></textarea>
					<button type="submit" className={classes.btn_warning}>btn</button>
				</form>
				<div>
					<p>Location Map</p>
					<ul className={classes.contact_us_ul}>
						<li>Address</li>
						<li>Hill Mist garden, Pune, 411 048. India</li>
						<li>Phone</li>
						<li>+91 12534 67890</li>
						<li>Email</li>
						<li>firkho@firkho.com</li>
					</ul>
				</div>
				<hr />
				<NavToolbarNetwork />
			</div>
		</div>
	);
}


export default Contact_us;
