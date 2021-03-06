import Me from '../components/me';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Menu from '../components/menu';
const Index = () => (
	<div className="grid grid-cols-[min-content_auto] lg:grid-cols-1 gap-x-5 gap-y-10 lg:gap-y-0">
		<Menu />
		<Me />
		<Education />
		<Experience />
		<Skills />
		<Projects />
		<Contact />
		<div className="h-0.2 rounded-xl bg-gray-dark col-span-2 lg:col-span-1 lg:my-6" />
		<Footer />
	</div>
);

export default Index;
