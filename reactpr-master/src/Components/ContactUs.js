import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    comment: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
        validateEmail(value);
      }

  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setErrors((newErrors) => ({
      ...newErrors,
      email: emailRegex.test(value) ? '' : 'Invalid email address.',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    let newErrors = { ...errors }; 

    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      }
      if (isValid) {
        setLoading(true);
  
        // Make your API call or other actions here
        axios.post("http://localhost:8888/contactus", formData)
          .then(() => {
            window.alert("Contact Details Added Successfully");
            setFormData({

              email: '',
              comment: '',
              
            });
            setErrors({

                email: '',
                comment: '',
                
              });
          })
          .catch((err) => {})
          .finally(() => {
            setLoading(false);
          });
      } else {
        // Update errors state with the new error messages
        setErrors(newErrors);
        console.log('Form has errors. Cannot submit.');
      }
  };

  return (
    <div className='container'>
      <span style={{fontSize:'25px',fontWeight:'bold'}}>Contact Us</span><br/><br/>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
          />
        <div className="text-danger">{errors.email}</div>
        </div>
        <div className="mb-3">
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your comment"
            rows="4"
          ></textarea>
        </div>
        <div style={{ textAlign: 'center' }}>
                <button type='submit' className='btn btn-success mt-2'>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
