import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import {useState,useRef} from 'react';

const ContactForm = () => {
  const navRef = React.useRef(null);

  // for validation
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your Name"),
    organization: Yup.string().required("Please enter your Organization Name"),
    email: Yup.string()
      .required("Please enter your Email")
      .email("Please enter a valid email address"),
    phoneNumber: Yup.string()
      .required("Please enter your Phone Number")
      .matches(phoneRegExp, 'Please enter a valid phone Number')
      .min(10, "Invalid Phone number")
      .max(10, "Invalid Phone number"),
    message: Yup.string().required("Please enter message"),  
  });

  const [verifed, setVerifed] = useState(false);
  function onChange(value) {
    setVerifed(true);
  }

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
        navRef.current.classList.add("show");

        const name = e.target.name.value;
        const organization = e.target.organization.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;
        const message = e.target.message.value;

    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));

        const qs = require('qs');
        axios.post('https://webdevfolio.com/DeckoFloormail/DeckoFloormail.php' ,  qs.stringify({
            "name": name,
            "organization": organization,
            "email": email,
            "phoneNumber": phoneNumber,
            "message": message,
        }))
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.error(error)
        })

    e.target.reset();
    console.log(name, organization, email, phoneNumber, message);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
      <div className="ptf-form-group">
        <label data-number="01">What’s your name?</label>
        <input
          type="text"
          name="name"
          {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="02">What’s the name of your organization?</label>
        <input
          type="text"
          name="organization"
          {...register("organization")}
          className={`${errors.organization ? "is-invalid" : ""}`}
        />
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="03">What’s your email address?</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          className={` ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="04">What’s your phone number?</label>
        <input
          type="text"
          name="phoneNumber"
          {...register("phoneNumber")}
          className={`${errors.phoneNumber ? "is-invalid" : ""}`}
        />
        {errors.phoneNumber && (
          <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="05">Message</label>
        <textarea
          type="text"
          name="message"
          {...register("message")}
          className={`${errors.message ? "is-invalid" : ""}`}
        />
      </div>
      {/* End .ptf-form-group */}


      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "0.5rem" }}></div>

      <ReCAPTCHA sitekey="6LfEB2ckAAAAAKnfagAt6ejgQ-0pOI8nM0PF8YIw" />

      <div className="ptf-spacer" style={{ "--ptf-xxl": "1.5rem" }}></div>

      <button className="ptf-submit-button">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>

      <p className="sucessMsg" ref={navRef}>Thank you for contacting us!</p>
      {/* End .ptf-submit-button */}
    </form>
  );
};

export default ContactForm;
