import classes from './our_works.module.css';
import OurWorksBlock from './our_works_block';
import img0 from '../../img/projects/project_img_0.png';
import img1 from '../../img/projects/project_img_1.png';
import img2 from '../../img/projects/project_img_2.png';
import img3 from '../../img/projects/project_img_3.png';
import img4 from '../../img/projects/project_img_4.png';
import img5 from '../../img/projects/project_img_5.png';
import img6 from '../../img/projects/project_img_6.png';
import img7 from '../../img/projects/project_img_7.png';


const Our_works = () => {
	return (
		<div className={classes.our_works}>
			<h2><span className="yellou">F</span>eatured Projects</h2>
			<div className={classes.navi}>
				<ul>
					<li>all works</li>
					<li>games</li>
					<li>applications</li>
					<li>content development</li>
				</ul>
			</div>
			<div className={classes.content}>
				<OurWorksBlock src={img0} alt="project_img_0" />
				<OurWorksBlock src={img1} alt="project_img_1" />
				<OurWorksBlock src={img2} alt="project_img_2" />
				<OurWorksBlock src={img3} alt="project_img_3" />
				<OurWorksBlock src={img4} alt="project_img_4" />
				<OurWorksBlock src={img5} alt="project_img_5" />
				<OurWorksBlock src={img6} alt="project_img_6" />
				<OurWorksBlock src={img7} alt="project_img_7" />
			</div>
		</div>
	);
}


export default Our_works;
