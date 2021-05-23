import classes from './home.module.css';


const Home = () => {
	return (
		<div className={classes.home}>
			<div>
				<h2><span className="yellou">We</span> create<br /> Awesome Games</h2>
				<ul>
					<a href="#g"><li>About</li></a>
					<a href="#g"><li>Development</li></a>
					<a href="#g"><li>Projects</li></a>
					<a href="#g"><li>Blog</li></a>
				</ul>
			</div>
		</div>
	);
}


export default Home;
