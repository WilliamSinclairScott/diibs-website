import './Footer.css';

const Footer = () => {
  return(
    <div className="footer">
      Contact Us
      <form>
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