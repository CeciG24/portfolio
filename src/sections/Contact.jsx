import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulación de envío (reemplazar con tu lógica real)
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: '¡Mensaje enviado! Te responderé pronto.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ceciliaga604@gmail.com',
      href: 'mailto:ceciliaga604@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Puebla, México',
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/CeciG24',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/cecilia-garcia-arellano-2ba84135a/',
      color: 'hover:text-sky-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ceciliaga604@gmail.com',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-gray-100">
            Conversemos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o simplemente quieres conectar? 
            Envíame un mensaje y te responderé lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left column - Contact info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-sky-100 dark:bg-sky-900/30 rounded-lg">
                        <Icon className="w-6 h-6 text-sky-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                          {info.label}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-900 dark:text-gray-100 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-gray-100">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Sígueme en redes
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-400 ${social.color} rounded-lg hover:scale-110 transition-all duration-200`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 border border-sky-200 dark:border-sky-900 rounded-xl p-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                💼 <span className="font-semibold">Disponible para proyectos freelance</span> y 
                colaboraciones remotas.
              </p>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 shadow-lg">
              
              <div className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:text-gray-100 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:text-gray-100 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:text-gray-100 transition-colors"
                    placeholder="¿De qué quieres hablar?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:text-gray-100 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                {/* Status message */}
                {status.message && (
                  <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
