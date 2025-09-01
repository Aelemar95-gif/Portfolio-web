import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  CheckCircle,
  Download,
  AlertCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Send form data to backend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'duartejulian1995@gmail.com'
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('Error sending email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trabajemos Juntos
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más detalles y 
            explorar cómo puedo aportar valor a tu organización
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 dark:bg-blue-600 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-slate-300 dark:text-slate-400 text-sm">Email</p>
                    <a href="mailto:duartejulian1995@gmail.com" className="text-white font-medium hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      duartejulian1995@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 dark:bg-blue-600 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-slate-300 dark:text-slate-400 text-sm">Teléfono</p>
                    <a href="tel: +540111536536933" className="text-white font-medium hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      +54 011 15 3653-6933
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-700 dark:bg-blue-600 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-slate-300 dark:text-slate-400 text-sm">Ubicación</p>
                    <p className="text-white font-medium">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Sígueme en</h3>
              <div className="flex space-x-4">
                <a 
                    href="https://www.linkedin.com/in/j-duarte-sistemas/" 
                    target="_blank"
                    rel="noopener noreferrer"
                     className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 group"
>
                  <Linkedin size={24} className="group-hover:text-white" />
                </a>
                <a 
                  href="https://github.com/juansanchez" 
                  className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200 group"
                >
                  <Github size={24} className="group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3">Curriculum Vitae</h4>
              <p className="text-slate-300 dark:text-slate-400 mb-4 text-sm">
                Descarga mi CV completo con toda la información detallada sobre mi experiencia y formación.
              </p>
              <a
              href="/Julian_Duarte_CV_Harvard.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-700 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-200"
            >
              <Download className="mr-2" size={18} />
              Descargar CV (PDF)
            </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Envía un Mensaje</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-700/20 dark:bg-green-800/20 border border-green-700 dark:border-green-600 rounded-lg flex items-center space-x-3">
                <CheckCircle className="text-green-400 dark:text-green-300" size={20} />
                <span className="text-green-400 dark:text-green-300">¡Mensaje enviado correctamente!</span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-700/20 dark:bg-red-800/20 border border-red-700 dark:border-red-600 rounded-lg flex items-center space-x-3">
                <AlertCircle className="text-red-400 dark:text-red-300" size={20} />
                <span className="text-red-400 dark:text-red-300">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 dark:text-slate-400 mb-2">
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 dark:text-slate-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 dark:text-slate-400 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 dark:text-slate-400 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-700 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
