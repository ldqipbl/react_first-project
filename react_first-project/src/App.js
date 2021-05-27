import './App.css';
import {BrowserRouter} from  'react-router-dom';
import Home from './components/home/home';
import AboutSublime from './components/about_sublime/about_sublime';
import OurWorks from './components/our_works/our_works';
import Strategic from './components/strategic/strategic';
import ServicesProvided from './components/services_provided/services_provided';
import Team from './components/team/team';
import Testimonials from './components/testimonials/testimonials';
import Blog from './components/blog/blog';
import ContactUs from './components/contact_us/contact_us';
import Footer from './components/footer/footer';


const App = () => {
	return (
		<div class="conteiner">
			<BrowserRouter>
				<main>
					<Home />
					<AboutSublime />
					<OurWorks />
					<Strategic />
					<ServicesProvided />
					<Team />
					<Testimonials />
					<Blog />
					<ContactUs />
					<Footer />
				</main>
			</BrowserRouter>
                </div>
	);
}


export default App;
