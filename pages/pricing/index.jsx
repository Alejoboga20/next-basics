import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

const PricingPage = () => {
	return (
		<>
			<h1>PricingPage</h1>
			<h1 className='title'>
				Go To <Link href='/'>Home</Link>
			</h1>

			<p className='description'>
				Get started by editing <code className='code'>pages/pricing.jsx</code>
			</p>
		</>
	);
};

PricingPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default PricingPage;
