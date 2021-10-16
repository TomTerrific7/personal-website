import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@material-ui/core';





export const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_526tuk9', 'template_h12np9j', form.current, 'user_lYi0gE1YHklCp2XP2djEw')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          e.target.reset();
          
      }, (error) => {
          console.log(error.text);
          alert("FAILED!"+error);
      });
  };
  
   
   
  

  return (
    
    <div class="emailform"> 
      
      <br/>
      <br/>
      <h1>Complete form below to send me a direct email.</h1>
    <form ref={form} onSubmit={sendEmail}>
      <br/>
      <br/>
    <TextField 
              label="First Name"
              variant="outlined"
              margin="normal"
              name="first_name"  
            />
            &nbsp;
            &nbsp;
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
            <br/><br/>
            <TextareaAutosize class="textbox"
  aria-label="minimum height"
  minRows={12}
  placeholder="Enter Message"
  name="message"
  style={{ width: 400 }}
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