"use client";

import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";
import { toast, Toaster } from 'react-hot-toast';
import Button from "./Button";

interface FormData {
  name: string;
  phone: number;
  email: string;
  message: string;
}

const CTA: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { isValid, isDirty } } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
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
    <section className="flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 99999,
          },
        }}
      />
      <motion.div
        className="flex-1 flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="heading2 flex items-center">
          Crea tu próximo proyecto con Tridevs Solutions
        </h2>
        <p className="paragraph max-w-[470px] mt-5">
          Ofrecemos soluciones tecnológicas personalizadas para ayudarte a alcanzar tus objetivos.
        </p>
        <p className="paragraph max-w-[470px] mt-2">
          Contáctanos hoy y descubre cómo podemos impulsar el crecimiento de tu negocio con innovación y tecnología.
        </p>
      </motion.div>

      <motion.div
        className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button styles={`mt-10 flex items-center`} onClick={() => setModalOpen(true)}>
          <FaRocket className="mr-2" />
          Get Started
        </Button>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black-gradient-2 p-8 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-white">Completa los campos</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label>
                <input
                  id="phone"
                  type="number"
                  {...register("phone", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                  style={{ MozAppearance: 'textfield' }}
                  onWheel={(e) => e.currentTarget.blur()} // Prevents changing the value on scroll
                />
                <style jsx>{`
                  input[type='number']::-webkit-outer-spin-button,
                  input[type='number']::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                  input[type='number'] {
                    -moz-appearance: textfield;
                  }
                `}</style>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  {...register("message", { required: true })}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
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
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600"
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

export default CTA;
