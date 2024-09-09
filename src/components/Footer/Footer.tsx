import './Footer.css';

import {useEffect} from 'react';
const Footer = () => {

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData =  new FormData(event.target);

    const jsonData = Object.fromEntries(formData.entries());

    console.log(jsonData);
  }
  return(
    <div className="footer">
      Contact Us
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          First and Last name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <input type="text" name="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Footer;