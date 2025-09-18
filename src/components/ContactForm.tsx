// Importa React y hooks necesarios
import React, { useState, useEffect } from 'react';
// Importa el hook de Formspree y el componente para mostrar errores de validación
import { useForm, ValidationError } from '@formspree/react';
// Importa íconos para el formulario
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Tiempo de espera en segundos (1 hora)
const WAIT_TIME_SECONDS = 3600;

/**
 * Formatea un numero de segundos a "HH:MM:SS".
 *
 * @param seconds - El numero total de segundos a formatear.
 * @returns un string representando el tiempo en horas, minutos y segundos.
 */
function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    h.toString().padStart(2, '0'),
    m.toString().padStart(2, '0'),
    s.toString().padStart(2, '0')
  ].join(':')
}

// Componente ContactForm
const ContactForm = () => {
  // Estado local para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Hook de Formspree para manejar el envío y estado del formulario
  const [state, handleSubmit] = useForm("mblapjjl");
  const [timer, setTimer] = useState(0);

  // Al cargar el componente, revisa si hay un temporizador guardado
  useEffect(() => {
    const expiresAt = localStorage.getItem('contactFormExpiresAt');
    if (expiresAt) {
      const remaining = Math.floor((parseInt(expiresAt) - Date.now()) / 1000);
      if (remaining > 0) {
        setTimer(remaining);
      }
    }
  }, []);

  // Limpia el formulario y activa el temporizador al enviar correctamente
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Solo crea un nuevo temporizador si no existe uno activo
      const expiresAt = localStorage.getItem('contactFormExpiresAt');
      const remaining = expiresAt ? Math.floor((parseInt(expiresAt) - Date.now()) / 1000) : 0;
      if (!expiresAt || remaining <= 0) {
        const newExpiresAt = Date.now() + WAIT_TIME_SECONDS * 1000;
        localStorage.setItem('contactFormExpiresAt', newExpiresAt.toString());
        setTimer(WAIT_TIME_SECONDS);
      }
    }
  }, [state.succeeded]);

  // Cuenta regresiva del temporizador
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      localStorage.removeItem('contactFormExpiresAt');
    }
  }, [timer]);

  // Función para actualizar el estado local cuando el usuario escribe en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Renderiza el formulario y los mensajes de estado
  return (
    <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-8">
      {/* Título del formulario */}
      <h3 className="text-2xl font-bold mb-6">Envía un Mensaje</h3>
      
      {/* Mensaje de éxito si el envío fue correcto */}
      {state.succeeded && (
        <div className="mb-6 p-4 bg-green-700/20 dark:bg-green-800/20 border border-green-700 dark:border-green-600 rounded-lg flex items-center space-x-3">
          <CheckCircle className="text-green-400 dark:text-green-300" size={20} />
          <span className="text-green-400 dark:text-green-300">¡Mensaje enviado correctamente!</span>
        </div>
      )}

      {/* Mensaje de error si hay errores en el envío */}
      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="mb-6 p-4 bg-red-700/20 dark:bg-red-800/20 border border-red-700 dark:border-red-600 rounded-lg flex items-center space-x-3">
          <AlertCircle className="text-red-400 dark:text-red-300" size={20} />
          <span className="text-red-400 dark:text-red-300">Hubo un problema al enviar el mensaje. Por favor, revisa los campos.</span>
        </div>
      )}

      {/* Mensaje de espera si el temporizador está activo */}
      {timer > 0 && (
        <div className="mb-4 text-yellow-400 text-center">
          Debes esperar <b>{formatTime(timer)}</b> antes de enviar otro mensaje.
        </div>
      )}

      {/* Formulario de contacto */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Campo Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 dark:text-slate-400 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={state.submitting || timer > 0}
              className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tu nombre"
            />
          </div>
          {/* Campo Email */}
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
              disabled={state.submitting || timer > 0}
              className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="tu@email.com"
            />
            {/* Muestra errores de validación para el campo email */}
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>
        {/* Campo Asunto */}
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
            disabled={state.submitting || timer > 0}
            className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Asunto del mensaje"
          />
        </div>
        {/* Campo Mensaje */}
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
            disabled={state.submitting || timer > 0}
            className="w-full px-4 py-3 bg-slate-700 dark:bg-slate-600 border border-slate-600 dark:border-slate-500 rounded-lg text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Cuéntame sobre tu proyecto..."
          />
          {/* Muestra errores de validación para el campo mensaje */}
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        {/* Botón de envío */}
        <button
          type="submit"
          disabled={state.submitting || timer > 0}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-700 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              Enviando...
            </>
          ) : timer > 0 ? (
            <>
              <Send className="mr-2" size={20} />
              Espera {formatTime(timer)}
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
  );
};

export default ContactForm;