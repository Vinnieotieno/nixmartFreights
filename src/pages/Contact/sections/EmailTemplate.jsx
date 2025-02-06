import React from 'react'

const EmailTemplate = ({ firstName, lastName, email, message, mobileNumber}) => {
  return (
    <div>
      <h1>
        Hello {firstName} {lastName}!
      </h1>
      <p>Thank you for reaching out to us. We have received your message:</p>
      <blockquote>{message}</blockquote>
      <p>
        We will get back to you as soon as possible at {email}, Mobile Number:{mobileNumber}.
      </p>
      <p>
        Best regards,
        <br />
        Globeflight Worldwide Express
      </p>
    </div>
  );
};

export default EmailTemplate;