import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

const AboutPage = () => {
	return (
		<MainLayout>
			<h1>AboutPage</h1>
			<h1 className='title'>
				Go To <Link href='/'>Home</Link>
			</h1>

			<p className='description'>
				Get started by editing <code className='code'>pages/about.jsx</code>
			</p>
		</MainLayout>
	);
};

export default AboutPage;
