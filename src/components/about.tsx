'use client';

import Image from 'next/image';
import Lottie from 'react-lottie-player';
import Animation from '@/public/Animation3json.json';
import React from 'react';
import { FaCode, FaUniversity, FaProjectDiagram, FaRocket } from 'react-icons/fa';

const AboutUs: React.FC = () => {
	return (
		<section>
			<div className="mx-auto max-w-4xl px-4 sm:px-6">
				<div className="py-8">
					<div className="space-y-6 text-center">
						<h2 className="mb-4 text-3xl font-bold text-gray-900">
							<span style={{ color: '#4A90E2' }}>Quiénes</span> Somos
						</h2>
						<p
							data-aos="zoom-y-out"
							data-aos-delay={150}
							className="text-lg text-gray-700"
						>
							Somos un equipo de desarrolladores
							apasionados por la programación, transformamos ideas en soluciones tecnológicas personalizadas,
							con especialización en el sector bancario, impulsando la innovación y el éxito de nuestros clientes.
						</p>
					</div>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex flex-col items-center">
							<FaCode
								className="text-blue-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
							/>
							<p className="text-lg text-gray-700">
								<strong>Pasión por la Tecnología</strong>
							</p>
							<p className="text-gray-600 text-center">
								Entusiastas de la tecnología con profundo conocimiento en desarrollo de software.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<FaUniversity
								className="text-green-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
							/>
							<p className="text-lg text-gray-700">
								<strong>Experiencia en el Sector Bancario</strong>
							</p>
							<p className="text-gray-600 text-center">
								Soluciones robustas y seguras para el sector bancario.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<FaProjectDiagram
								className="text-yellow-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
							/>
							<p className="text-lg text-gray-700">
								<strong>Soluciones a Medida</strong>
							</p>
							<p className="text-gray-600 text-center">
								Sistemas personalizados que alinean con tus metas.
							</p>
						</div>
						<div className="flex flex-col items-center">
							<FaRocket
								className="text-purple-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
							/>
							<p className="text-lg text-gray-700">
								<strong>Innovación y Éxito</strong>
							</p>
							<p className="text-gray-600 text-center">
								Impulsamos el crecimiento y éxito de tu negocio.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
