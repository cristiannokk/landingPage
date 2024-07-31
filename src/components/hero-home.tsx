"use client";

import PageIllustration from "@/components/page-illustration";

const HeroHome: React.FC = () => {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-20 md:pb-20 md:pt-40">
          <div className="pb-12 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}>
              <span style={{ color: '#4A90E2' }}>Tridevs</span> Solutions
            </h1>
            <div className="mx-auto max-w-3xl">
  <p
    className="mb-8 text-lg text-[#4A90E2] font-bold"
    data-aos="zoom-y-out"
    data-aos-delay={300}
  >
    Transformamos tus ideas.
  </p>
  <p
    className="mb-8 text-lg text-[#4A90E2] font-bold"
    data-aos="zoom-y-out"
    data-aos-delay={300}
  >
    ¡Únete a nosotros y revoluciona tu presencia online!
  </p>
</div>

          </div>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div
              className="hidden md:block mx-auto max-w-xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
              style={{ maxWidth: "500px", flex: "1" }}
            >
            </div>
            <div
              className="mt-8 md:mt-0 md:ml-8"
              style={{ flex: "1" }}
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              <div className="space-y-6 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  <span style={{ color: '#4A90E2' }}>Nuestros</span> Servicios
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-700">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-blue-500 hover:animate-bounce transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17v-6a4 4 0 018 0v6m-8 4h8m-4-4v4m2 0h-4m4-4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <p className="ml-3" style={{  fontSize: '1.1rem', transition: 'transform 0.3s ease-in-out, color 0.3s' }}>
                    <strong style={{ color: '#4A90E2' }} className="hover:scale-105">Desarrollo de Sistemas a Medida: </strong> 
                    Gestionamos todas las etapas del ciclo de vida del desarrollo de software para crear soluciones personalizadas.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-green-500 hover:animate-bounce transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 17h8m-8 4h8m-8-8h8m-8-4h8m-8-4h8m-8-4h8M4 6h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1"
                    ></path>
                  </svg>
                  <p className="ml-3" style={{  fontSize: '1.1rem', transition: 'transform 0.3s ease-in-out, color 0.3s' }}>
                    <strong style={{ color: '#4A90E2' }} className="hover:scale-105">Migración e Integración de Sistemas: </strong>
                    Implementamos sistemas informáticos minimizando el impacto y preservando la información de tu organización.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-red-500 hover:animate-bounce transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 19l-4-4m0 0l-4-4m4 4h12"
                    ></path>
                  </svg>
                  <p className="ml-3" style={{ fontSize: '1.1rem', transition: 'transform 0.3s ease-in-out, color 0.3s' }}>
                    <strong style={{ color: '#4A90E2' }} className="hover:scale-105">Soporte y Mantenimiento: </strong>
                    Proveemos soporte continuo, actuando como tu aliado tecnológico.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-yellow-500 hover:animate-bounce transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M8 16h.01M8 20h.01M8 4h.01M8 8h.01M16 20h.01M16 16h.01M16 12h.01M16 8h.01M16 4h.01M12 12h.01M12 16h.01M12 20h.01M12 8h.01M12 4h.01M12 16V4m0 12h-4a2 2 0 00-2 2v2h6m-6-6h4a2 2 0 012-2v-2a2 2 0 00-2-2H6v6"
                    ></path>
                  </svg>
                  <p className="ml-3" style={{ fontSize: '1.1rem', transition: 'transform 0.3s ease-in-out, color 0.3s' }}>
                    <strong style={{ color: '#4A90E2' }} className="hover:scale-105">Auditoría y Consultoría: </strong>
                    Analizamos y asesoramos en proyectos de tecnología para optimizar tus procesos y estructura organizativa.
                  </p>
                </div>
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-purple-500 hover:animate-bounce transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h.01M15 12h.01M12 12h.01M12 8h.01M12 16h.01M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                    ></path>
                  </svg>
                  <p className="ml-3" style={{ fontSize: '1.1rem', transition: 'transform 0.3s ease-in-out, color 0.3s' }}>
                    <strong style={{ color: '#4A90E2' }} className="hover:scale-105">Desarrollo de Ideas: </strong>
                    Asistimos en la maduración y desarrollo de tus ideas tecnológicas para convertirlas en aplicaciones sostenibles.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
