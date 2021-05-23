import classes from './footer/footer.module.css';
import twitter from '../img/nav/twitter.png';
import linkedin from '../img/nav/in.png';
import facebook from '../img/nav/facebook.png';


const Nav_toolbar_network = () => {
	return (
		<div className={classes.nav_toolbar_network}>
			<a href="https://twitter.com/">
				<img src={twitter} alt="nav_twitter" />
			</a>
			<a href="https://www.linkedin.cn/">
				<img src={linkedin} alt="nav_in" />
			</a>
			<a href="https://ru-ru.facebook.com/">
				<img src={facebook} alt="nav_facebook" />
			</a>
		</div>
	);
}


export default Nav_toolbar_network;
