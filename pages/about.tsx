import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

const AboutPage = () => {
	return (
		<>
			<h1>AboutPage</h1>
			<h1 className='title'>
				Go To <Link href='/'>Home</Link>
			</h1>

			<p className='description'>
				Get started by editing <code className='code'>pages/about.tsx</code>
			</p>
		</>
	);
};

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};

export default AboutPage;
