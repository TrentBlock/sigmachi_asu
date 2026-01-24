import { useState } from 'react';
import '../css/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gradYear: '',
        message: ''
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
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gradYear: '',
            message: ''
        });
    };

    return (
        <section className="contact-form-section">
                <div className="container">
                        <div className="form-container fade-in-up">
                                <h1 className="contact-main-title">Contact</h1>
                                <p className="contact-subtitle">Please complete the form below</p>
                                <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                                        <div className="form-row">
                                                <div className="form-group">
                                                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                                                </div>
                                                <div className="form-group">
                                                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                                                </div>
                                        </div>
                                        
                                        <div className="form-group">
                                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        
                                        <div className="form-group">
                                                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                        </div>
                                        
                                        <div className="form-group">
                                                <input type="text" name="gradYear" placeholder="Expected Graduation Year" value={formData.gradYear} onChange={handleChange} />
                                        </div>
                                        
                                        <div className="form-group">
                                                <textarea name="message" placeholder="Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                                        </div>
                                        
                                        <button type="submit" className="submit-btn">Submit</button>
                                </form>
                        </div>
                </div>
        </section>
    )
}

export default Contact