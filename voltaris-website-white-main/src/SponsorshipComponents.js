import React from 'react';
import { X } from 'lucide-react';

// Sponsorship tier component
export const SponsorshipTier = ({ tier, price, benefits, color = "red", icon }) => {
  const colorClasses = {
    red: "from-red-500 to-red-600 border-red-500 hover:border-red-400 text-red-600",
    blue: "from-blue-500 to-blue-600 border-blue-500 hover:border-blue-400 text-blue-600",
    gold: "from-yellow-500 to-yellow-600 border-yellow-500 hover:border-yellow-400 text-yellow-600",
    silver: "from-gray-400 to-gray-500 border-gray-400 hover:border-gray-300 text-gray-500",
    bronze: "from-amber-600 to-amber-700 border-amber-600 hover:border-amber-500 text-amber-600"
  };
  
  return (
    <div className={`bg-voltaris-neutral-50 p-6 rounded-lg border-b-2 ${colorClasses[color]} 
      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
      hover:shadow-${color === 'red' ? 'red' : color === 'blue' ? 'blue' : color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'amber'}-500/20 
      group relative overflow-hidden backdrop-blur-sm h-full flex flex-col`}
    >
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="circuit-pattern w-full h-full"></div>
      </div>
      
      <div className="relative z-10 flex-1">
        <div className="text-center mb-4">
          <div className={`text-${color === 'red' ? 'red' : color === 'blue' ? 'blue' : color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'amber'}-600 text-4xl font-bold mb-2`}>
            {tier}
          </div>
          <div className="text-voltaris-neutral-800 text-2xl font-semibold">{price}</div>
        </div>
        
        <div className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className={`text-${color === 'red' ? 'red' : color === 'blue' ? 'blue' : color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'amber'}-600 mr-2 mt-1`}>{icon}</div>
              <div className="text-voltaris-neutral-700 text-sm">{benefit}</div>
            </div>
          ))}
        </div>
        
        <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${colorClasses[color]} mt-4 transition-all duration-300 ease-in-out`}></div>
      </div>
      
      <div className="mt-auto pt-4">
        <button className={`w-full bg-gradient-to-r ${colorClasses[color]} text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium transition-colors shadow-lg`}>
          İletişime Geç
        </button>
      </div>
    </div>
  );
};

// Technical sponsorship benefits component
export const SponsorshipBenefit = ({ title, description, icon, color = "red" }) => {
  return (
    <div className={`bg-voltaris-neutral-50 p-6 rounded-lg border-l-4 border-${color === 'red' ? 'red' : 'blue'}-500 hover:bg-${color === 'red' ? 'red' : 'blue'}-50 transition-all duration-300 backdrop-blur-sm relative group h-full`}>
      {/* Technical graphical elements in the background */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${color === 'red' ? 'red' : 'blue'}-500`} />
          <path d="M65,20 L15,20 L15,70" fill="none" stroke="currentColor" strokeWidth="1" className={`text-${color === 'red' ? 'red' : 'blue'}-500`} />
          <circle cx="15" cy="70" r="5" fill="currentColor" className={`text-${color === 'red' ? 'red' : 'blue'}-500 opacity-30`} />
        </svg>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className={`text-${color === 'red' ? 'red' : 'blue'}-500 mt-1`}>
          {icon}
        </div>
        <div>
          <h4 className={`font-bold text-lg mb-3 text-${color === 'red' ? 'red' : 'blue'}-600`}>{title}</h4>
          <p className="text-voltaris-neutral-700 text-sm leading-relaxed">{description}</p>
          <div className={`w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-${color === 'red' ? 'red' : 'blue'}-500 to-transparent mt-4 transition-all duration-500`}></div>
        </div>
      </div>
    </div>
  );
};

// Contact form component for sponsorship section
export const SponsorshipContact = () => {
const [formData, setFormData] = React.useState({
name: '',
email: '',
company: '',
phone: '',
package: '',
message: ''
});

const [status, setStatus] = React.useState({
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
if (!formData.name || !formData.email || !formData.message || !formData.package) {
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
// EmailJS configuration
const emailjsPublicKey = 'YVMxyzABCDEFGHIJKLMNOP'; // Replace with a real key
const emailjsServiceId = 'service_voltaris';
const emailjsTemplateId = 'template_sponsorship';

// Format date and time for the email
const now = new Date();
const formattedDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

// Prepare the template parameters
const templateParams = {
from_name: formData.name,
from_email: formData.email,
company: formData.company || 'Belirtilmedi',
phone: formData.phone || 'Belirtilmedi',
package: formData.package,
message: formData.message,
date_time: formattedDate,
subject: `Voltaris Sponsorluk: ${formData.package} - ${formData.name}`,
to_email: 'voltaris.official@gmail.com'
};

  // Load EmailJS dynamically
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
      
      // Send the email
      const response = await window.emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams);
      console.log('Sponsorship email sent successfully:', response);
      
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
        phone: '',
        package: '',
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
      console.error('Sponsorship email sending failed:', error);
      
      // Error state
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: 'E-posta gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    }
  };
  
  return (
    <div className="bg-voltaris-neutral-50 p-6 rounded-lg border border-voltaris-neutral-200 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="circuit-pattern w-full h-full"></div>
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-voltaris-red relative z-10">Sponsorluk İletişim Formu</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-voltaris-neutral-700 text-sm mb-1">Adınız Soyadınız <span className="text-voltaris-red">*</span></label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border border-voltaris-neutral-300 rounded-lg p-2 text-voltaris-neutral-900 focus:outline-none focus:border-voltaris-red transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-voltaris-neutral-700 text-sm mb-1">Şirket</label>
            <input 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-white border border-voltaris-neutral-300 rounded-lg p-2 text-voltaris-neutral-900 focus:outline-none focus:border-voltaris-red transition-colors"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-voltaris-neutral-700 text-sm mb-1">E-mail <span className="text-voltaris-red">*</span></label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-voltaris-neutral-300 rounded-lg p-2 text-voltaris-neutral-900 focus:outline-none focus:border-voltaris-red transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-voltaris-neutral-700 text-sm mb-1">Telefon</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white border border-voltaris-neutral-300 rounded-lg p-2 text-voltaris-neutral-900 focus:outline-none focus:border-voltaris-red transition-colors"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-voltaris-neutral-700 text-sm mb-1">Sponsorluk Paketi <span className="text-voltaris-red">*</span></label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full bg-white border border-voltaris-neutral-300 rounded-lg p-2 text-voltaris-neutral-900 focus:outline-none focus:border-voltaris-red transition-colors"
            required
          >
            <option value="">Seçiniz</option>
            <option value="Platin Sponsor">Platin Sponsor</option>
            <option value="Altın Sponsor">Altın Sponsor</option>
            <option value="Gümüş Sponsor">Gümüş Sponsor</option>
            <option value="Bronz Sponsor">Bronz Sponsor</option>
            <option value="Teknik Sponsorluk">Teknik Sponsorluk</option>
          </select>
        </div>
        
        <div>
          <label className="block text-voltaris-neutral-700 text-sm mb-1">Mesajınız <span className="text-voltaris-red">*</span></label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-white border border-voltaris-neutral-300 rounded-lg p-2 text-voltaris-neutral-900 focus:outline-none focus:border-voltaris-red transition-colors"
            required
          ></textarea>
        </div>
        
        <div className="mt-4">
          <button 
            type="submit" 
            disabled={status.submitting}
            className="bg-gradient-to-r from-voltaris-red to-red-500 hover:from-red-500 hover:to-voltaris-red text-white px-6 py-3 rounded-lg flex items-center justify-center font-medium transition-colors shadow-lg shadow-voltaris-red/20 disabled:opacity-50"
          >
            {status.submitting ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </div>
        
        {status.submitted && (
          <div className={`mt-4 p-3 rounded-lg ${status.success ? 'bg-green-100 border border-green-500 text-green-800' : 'bg-red-100 border border-red-500 text-red-800'}`}>
            {status.success ? 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' : status.error}
          </div>
        )}
      </form>
    </div>
  );
};