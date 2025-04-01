
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server
    // This is just a simulation
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus('error');
      }
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="section-title text-center">Get In Touch</h2>
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-1">Email Address</h4>
                <a href="mailto:john.doe@example.com" className="text-blue-600 hover:underline">john.doe@example.com</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-1">Phone Number</h4>
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-1">Location</h4>
                <p className="text-slate-600">San Francisco, California</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Connect With Me</h3>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors"
              >
                <Github className="w-6 h-6 text-slate-700" />
              </a>
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-slate-700" />
              </a>
              <a 
                href="https://twitter.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors"
              >
                <Twitter className="w-6 h-6 text-slate-700" />
              </a>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Availability</h3>
            <p className="text-slate-600">
              I'm currently available for freelance work, contract positions, or full-time opportunities. 
              Whether you have a specific project in mind or just want to discuss potential collaborations, 
              I'd love to hear from you!
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
            
            {formStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                Please fill out all required fields.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
