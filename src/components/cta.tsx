"use client";

import React, { useState } from "react";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";
import { toast, Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  phone: number;
  email: string;
  message: string;
}

const Cta: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { isValid, isDirty } } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: 0,
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);

    const formattedData = {
      name: data.name,
      phone: data.phone.toString(),
      email: data.email,
      message: data.message,
    };

    emailjs.send(
      "service_6e276su",
      "template_udn8lah",
      formattedData as Record<string, unknown>,
      "_WWvbFu8YWQghZgOo"
    )
    .then(() => {
      toast.success("Mensaje enviado exitosamente! Pronto se pondrán en contacto contigo los chicos de TriDevs Solutions.", {
        duration: 5000,
        style: {
          background: 'green',
          color: 'white',
        },
      });
      reset();
      setModalOpen(false);
    })
    .catch(() => {
      toast.error("Tuvimos un problema al enviar el mensaje, te proporcionamos los canales de teléfonos para que nos llames.", {
        duration: 5000,
        style: {
          background: 'red',
          color: 'white',
        },
      });
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 99999,
          },
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Crea tu próximo proyecto con <span style={{ color: '#4A90E2' }}>Tridevs</span> Solutions
            </h2>
            <div className="flex justify-center">
  <button
    type="button"
    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow flex items-center disabled:opacity-50"
    disabled={loading}
    onClick={() => setModalOpen(true)}
  >
    <span className="relative inline-flex items-center">
      Contáctanos
    </span>
  </button>
</div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Completa los campos</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  id="phone"
                  type="number"
                  {...register("phone", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  {...register("message", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow flex items-center disabled:opacity-50"
                  disabled={loading || !isDirty || !isValid}
                >
                  {loading ? (
                    <ClipLoader color="#ffffff" size={20} />
                  ) : (
                    "Enviar"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cta;
