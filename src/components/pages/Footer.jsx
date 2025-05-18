import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer container bg-maginta pt-8 px-0">
      <div className="flex flex-col items-center text-white" dir="rtl">
        {/* Logo */}
        <div className="flex flex-col font-bold text-5xl mb-8" dir='ltr'>
          <span className="text-white">c<span className='text-yello'>o</span>urses</span>
          <span className='text-start text-yello mt-[-17px]'>z<span className='text-white'>o</span>ne</span>
        </div>
        
        {/* Navigation Links */}
        <div className="mb-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <NavLink to="/" className="hover:text-yello">الرئيسية</NavLink>
            <NavLink to="/about" className="hover:text-yello">عن المدرب</NavLink>
            <NavLink to="/courses" className="hover:text-yello">الدورات التدريبيه</NavLink>
            <NavLink to="/blog" className="hover:text-yello">المدونه</NavLink>
            <NavLink to="/consultations" className="hover:text-yello">الاستشارات</NavLink>
            <NavLink to="/podcast" className="hover:text-yello">بودكاست</NavLink>
            <NavLink to="/contact" className="hover:text-yello">تواصل معنا</NavLink>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-yello hover:text-white text-4xl">
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a href="#" className="text-yello hover:text-white text-4xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-yello hover:text-white text-4xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-t-neutral-400 mt-5 pt-3 pb-3 text-center text-white" dir="rtl">
        <p>جميع الحقوق  محفوظة ©   {new Date().getFullYear()} </p>
      </div>
    </div>
  );
}

export default Footer;
