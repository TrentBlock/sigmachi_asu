import { useState } from 'react';
import '../css/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gradYear: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter subscription submitted:', formData);
        
        // Add your form submission/newsletter logic here
        
        // Clear the form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            gradYear: ''
        });
        
        // Optional: Add a success toast or message here
        alert("Thanks for subscribing!"); 
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
                        
                        <button type="submit" className="newsletter-submit-btn">
                            Subscribe
                        </button>
                    </form>
                    
                </div>
            </div>
        </section>
    );
}

export default Contact;