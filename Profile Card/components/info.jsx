import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import sanjiImg from './Vinsmoke_Sanji.webp';

export default function Info() {
  return (
    <>
      <div className="profile_info">
        <img className="sanji" src={sanjiImg} alt="Joshua Dada" />
      </div>

      <h1 className="my-name">Joshua Dada</h1>
      <p className="my-job">Frontend Developer</p>
      <span className="site">joshuadada.website</span>

      <div className="contact-details">
        <div className="email-element">
          <MdEmail size={18} />
          <span>Email</span>
        </div>
        <div className="linkedin-element">
          <FaLinkedin size={18} />
          <span>LinkedIn</span>
        </div>
      </div>
    </>
  );
}
