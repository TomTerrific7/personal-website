import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@material-ui/core';
require('dotenv').config()

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_526tuk9', 'template_h12np9j', form.current, 'user_lYi0gE1YHklCp2XP2djEw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div class="emailform"> 
    <form ref={form} onSubmit={sendEmail}>
      <br/>
      <br/>
      <br/>
      <br/>
    <TextField
              
              label="First Name"
              variant="outlined"
              margin="normal"
              name="first_name"
              
            />
            <TextField
              
              label="Last Name"
              variant="outlined"
              margin="normal"
              name="last_name"
              
            />
            <br/>
      <TextField
              
              label="Enter Email"
              variant="outlined"
               margin="normal"
               name="user_email"
              
            />
            <br/>
            <TextareaAutosize
  aria-label="minimum height"
  minRows={10}
  placeholder="Enter Message"
  name="message"
  style={{ width: 300 }}
/>
<br/>
      <Button color="primary" type="submit" value="Send">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default Contact;