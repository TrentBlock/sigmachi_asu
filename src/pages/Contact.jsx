import { useState } from 'react';
import emailjs from '@emailjs/browser'; // <-- 1. Import EmailJS
import '../css/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gradYear: ''
    });

    // Added a loading state for better user experience
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disables the button while sending

        // Prepare the variables your EmailJS template expects
        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            gradYear: formData.gradYear
        };

        // Send the email using your specific Service ID and Template ID
        emailjs.send(
            'service_nc1q0xu',    
            'template_q4v3cko',   
            templateParams,
            'S09Eblgts2EKp6YSR'    
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            
            // Clear the form after a successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                gradYear: ''
            });
            
            alert("Thanks for subscribing! Check your email for a confirmation.");
            setIsSubmitting(false);
        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert("Oops! Something went wrong. Please try again.");
            setIsSubmitting(false);
        });
    };

    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="newsletter-wrapper fade-in-up">
                    
                    <div className="newsletter-header">
                        <h1 className="newsletter-title">Stay in the Loop</h1>
                        <p className="newsletter-subtitle">
                            Sign up with your email address to receive a semester newsletter and updates on alumni events.
                        </p>
                    </div>

                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    id="firstName"
                                    name="firstName" 
                                    value={formData.firstName} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lastName"
                                    name="lastName" 
                                    value={formData.lastName} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="gradYear">Pledge Class</label>
                            <input 
                                type="text" 
                                id="gradYear"
                                name="gradYear" 
                                placeholder="e.g. Epsilon Upsilon 2025"
                                value={formData.gradYear} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="newsletter-submit-btn"
                            disabled={isSubmitting}
                            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;