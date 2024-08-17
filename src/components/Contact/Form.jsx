import { useState, useRef } from 'react';
import { BsFillSendFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const inputStyles =
    'py-[14px] px-4 my-2 rounded-2xl bg-secondary-gunmetal font-merriweather text-body-m placeholder-secondary-battleship-gray text-secondary-battleship-gray border-none focus:outline-none focus:bg-primary-flame focus:placeholder-neutral-night focus:text-neutral-night';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          setMessageSent(true);
          setErrors({});
        },
        (error) => {
          console.log('FAILED:', error.text);
          setErrors({ server: 'Message could not be sent. Server error.' });
          setMessageSent(false);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      newErrors = {
        name: !formData.name ? 'Name is required' : '',
        email: !formData.email ? 'Email is required' : '',
        subject: !formData.subject ? 'Subject is required' : '',
        message: !formData.message ? 'Message is required' : '',
      };
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessageSent(false);
    } else {
      setErrors({});
      //if no error
      sendEmail();
    }
  };

  const getMessageClass = () => {
    if (messageSent) {
      return 'text-green-500';
    } else if (Object.keys(errors).length > 0) {
      return 'text-red-500';
    }
    return '';
  };

  const getErrorMessage = () => {
    if (errors.server) {
      return errors.server;
    }
    if (Object.keys(errors).length > 0) {
      return errors.email
        ? 'Invalid email address'
        : 'All fields should be filled in';
    }
    return messageSent ? 'Success! Your message has been sent!' : '';
  };

  return (
    <form
      className="flex flex-col w-full items-center md:items-start"
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className="flex flex-col md:flex-row items-center w-full md:space-x-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-[90%] md:w-1/2 ${inputStyles} ${
            errors.name && 'ring-2 ring-red-500'
          }`}
          placeholder="YOUR NAME"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-[90%] md:w-1/2 ${inputStyles} ${
            errors.email && 'ring-2 ring-red-500'
          }`}
          placeholder="YOUR EMAIL"
        />
      </div>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className={`w-[90%] md:w-full ${inputStyles} ${
          errors.subject && 'ring-2 ring-red-500'
        }`}
        placeholder="YOUR SUBJECT"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className={`w-[90%] md:w-full h-[125px] md:h-[150px] ${inputStyles} ${
          errors.message && 'ring-2 ring-red-500'
        }`}
        placeholder="YOUR MESSAGE"
      />
      <div className="w-1/4 mt-3 md:mt-6">
        <button
          type="submit"
          className="w-full h-[35px] flex items-center justify-center space-x-2 rounded-md px-2 border border-primary-flame font-merriweather lg:font-karla text-body-m lg:text-display-xs text-primary-flame hover:bg-primary-floral-white hover:text-neutral-night hover:border-none transition duration-150 ease-in"
        >
          <p>Send</p>
          <i>
            <BsFillSendFill />
          </i>
        </button>
      </div>
      <p className={`mt-4 font-merriweather text-body-m ${getMessageClass()}`}>
        {getErrorMessage()}
      </p>
    </form>
  );
};

export default Form;
