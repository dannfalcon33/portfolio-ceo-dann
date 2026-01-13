import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import emailjs from "@emailjs/browser";
import { Check, X } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });

      // Auto close after 5 seconds if user doesn't close manually
      setTimeout(() => {
        if (status === "success") setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contacto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full content-center">
        {/* Left Column: Info */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <div>
            <span className="text-xs tracking-[0.3em] text-luxury-gray uppercase block mb-4">
              {CONTACT_CONTENT.badge}
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none text-luxury-white">
              {CONTACT_CONTENT.title.main} <br />
              <span className="italic font-light opacity-80">
                {CONTACT_CONTENT.title.highlight}
              </span>
            </h2>
          </div>

          <p className="font-sans text-sm md:text-base text-luxury-gray leading-loose max-w-md text-justify">
            {CONTACT_CONTENT.description}
          </p>

          <div className="pt-8 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-luxury-gray block">
              {CONTACT_CONTENT.email.label}
            </span>
            <a
              href={`mailto:${CONTACT_CONTENT.email.address}`}
              className="font-serif text-2xl text-luxury-white hover:text-luxury-gray transition-colors duration-300"
            >
              {CONTACT_CONTENT.email.address}
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-12 w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="relative group">
              <input
                type="text"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-luxury-border-strong py-4 text-xl font-serif text-luxury-white focus:outline-none focus:border-luxury-white transition-colors duration-500 placeholder-transparent peer"
                placeholder={CONTACT_CONTENT.form.nameLabel}
              />
              <label className="absolute left-0 top-4 text-luxury-gray text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-placeholder-shown:top-4 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                {CONTACT_CONTENT.form.nameLabel}
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-luxury-border-strong py-4 text-xl font-serif text-luxury-white focus:outline-none focus:border-luxury-white transition-colors duration-500 placeholder-transparent peer"
                placeholder={CONTACT_CONTENT.form.emailLabel}
              />
              <label className="absolute left-0 top-4 text-luxury-gray text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-placeholder-shown:top-4 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                {CONTACT_CONTENT.form.emailLabel}
              </label>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                required
                rows={3}
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-luxury-border-strong py-4 text-xl font-serif text-luxury-white focus:outline-none focus:border-luxury-white transition-colors duration-500 placeholder-transparent peer resize-none"
                placeholder={CONTACT_CONTENT.form.messageLabel}
              />
              <label className="absolute left-0 top-4 text-luxury-gray text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-placeholder-shown:top-4 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                {CONTACT_CONTENT.form.messageLabel}
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="group relative w-full md:w-auto px-12 py-4 border border-luxury-border-strong hover:border-luxury-white transition-colors duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 text-xs tracking-[0.25em] uppercase text-luxury-white mix-blend-difference">
                  {status === "sending"
                    ? CONTACT_CONTENT.form.submitButton.sending
                    : status === "success"
                    ? CONTACT_CONTENT.form.submitButton.success
                    : status === "error"
                    ? "Error"
                    : CONTACT_CONTENT.form.submitButton.idle}
                </span>
                {status === "idle" && (
                  <div className="absolute top-0 left-0 h-full w-0 bg-luxury-white group-hover:w-full transition-all duration-500 ease-out z-0"></div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-overlay-strong backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-luxury-black border border-luxury-border p-8 md:p-12 relative max-w-lg w-full text-center shadow-2xl"
            >
              <button
                onClick={() => setStatus("idle")}
                className="absolute top-4 right-4 text-luxury-gray hover:text-luxury-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full border border-green-500/20 flex items-center justify-center bg-green-500/10">
                  <Check size={32} className="text-green-500" />
                </div>
              </div>

              <h3 className="font-serif text-3xl text-luxury-white mb-4">
                ¡Mensaje Enviado!
              </h3>

              <p className="text-luxury-gray font-sans leading-relaxed mb-8">
                Gracias por contactarme. He recibido tu mensaje correctamente y
                me pondré en contacto contigo a la brevedad posible.
              </p>

              <button
                onClick={() => setStatus("idle")}
                className="px-8 py-3 border border-luxury-border hover:border-luxury-white hover:bg-luxury-white hover:text-luxury-black transition-all duration-300 text-xs tracking-widest uppercase text-luxury-white"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Contact;
