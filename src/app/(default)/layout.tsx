'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Header from '@/components/ui/header';
// import Footer from '@/components/ui/footer';
import { Toaster } from 'react-hot-toast';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			once: true,
			disable: 'phone',
			duration: 700,
			easing: 'ease-out-cubic',
		});
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			{/* <Header /> */}
			<main className="flex-grow">{children}</main>
			{/* <Footer border={true} /> */}
			{/* <Toaster
				position="top-right"
				toastOptions={{
					style: {
						zIndex: 9999, // Valor alto para asegurar que esté sobre otros elementos
					},
				}}
			/> */}
		</div>
	);
}
