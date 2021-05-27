import classes from './home.module.css';


const Home = () => {
	return (
		<div className={classes.home}>
			<div>
				<h2><span className="yellou">We</span> create<br /> Awesome Games<a name="home"></a></h2>
				<ul>
					<a href="#about"><li>About</li></a>
					<a href="#our_works"><li>Projects</li></a>
					<a href="#team"><li>Development</li></a>
					<a href="#blog"><li>Blog</li></a>
				</ul>
			</div>
		</div>
	);
}


export default Home;
