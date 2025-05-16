import React, { useState } from 'react';

/**
 * A functional contact form component that sends emails
 */
const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  // Form status state
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  });
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: 'Lütfen tüm gerekli alanları doldurun.'
      });
      return;
    }
    
    // Set submitting state
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      error: null
    });
    
    try {
      // EmailJS configuration - using environment variables is better for production
      // but for this demo we'll use direct values
      const emailjsPublicKey = 'YVMxyzABCDEFGHIJKLMNOP'; // Replace with a real public key when implementing
      const emailjsServiceId = 'service_voltaris'; // Replace with your actual service ID
      const emailjsTemplateId = 'template_contact'; // Replace with your actual template ID
      
      // Format date and time for the email
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      
      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Belirtilmedi',
        message: formData.message,
        date_time: formattedDate,
        subject: `Voltaris Website İletişim: ${formData.name}`,
        to_email: 'voltaris.official@gmail.com'
      };
      
      // Load EmailJS dynamically to ensure it's available
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        script.onload = () => {
          window.emailjs.init(emailjsPublicKey);
        };
        document.body.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      } else if (!window.emailjs.init) {
        window.emailjs.init(emailjsPublicKey);
      }
      
      // Send the email with the configured service
      const response = await window.emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams);
      console.log('Email sent successfully:', response);
      
      // Implement a server-side fallback for reliability
      // This is a backup in case the EmailJS fails or for additional processing
      try {
        // You can implement a fetch to your own server endpoint here
        // For now we'll just simulate it with a timeout
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (serverError) {
        console.warn('Server fallback notification failed, but EmailJS succeeded:', serverError);
        // Continue with success flow since EmailJS worked
      }
      
      // Success state
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitting: false,
          submitted: false,
          success: false,
          error: null
        });
      }, 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Error state
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: 'E-posta gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
      
      // You might want to implement a fallback method here for critical messages
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız" 
            className="w-full bg-voltaris-neutral-100 border border-voltaris-neutral-300 rounded-lg p-2.5 text-sm text-voltaris-neutral-700 focus:outline-none focus:border-voltaris-red"
            required
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-posta Adresiniz" 
            className="w-full bg-voltaris-neutral-100 border border-voltaris-neutral-300 rounded-lg p-2.5 text-sm text-voltaris-neutral-700 focus:outline-none focus:border-voltaris-red"
            required
          />
        </div>
      </div>
      <div>
        <input 
          type="text" 
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Kurum/Şirket" 
          className="w-full bg-voltaris-neutral-100 border border-voltaris-neutral-300 rounded-lg p-2.5 text-sm text-voltaris-neutral-700 focus:outline-none focus:border-voltaris-red"
        />
      </div>
      <div>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mesajınız" 
          rows="3"
          className="w-full bg-voltaris-neutral-100 border border-voltaris-neutral-300 rounded-lg p-2.5 text-sm text-voltaris-neutral-700 focus:outline-none focus:border-voltaris-red"
          required
        ></textarea>
      </div>
      
      {/* Status messages */}
      {status.submitted && (
        <div className={`p-2 rounded-lg text-sm ${status.success ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
          {status.success ? 'Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.' : status.error}
        </div>
      )}
      
      {/* Submit button */}
      <button 
        type="submit" 
        disabled={status.submitting}
        className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
          status.submitting
            ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
            : 'bg-voltaris-red text-white hover:bg-voltaris-red/90'
        }`}
      >
        {status.submitting ? 'Gönderiliyor...' : 'Gönder'}
      </button>
    </form>
  );
};

export default ContactForm;