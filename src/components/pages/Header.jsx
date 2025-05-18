import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faUserPlus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CustomDropdown from '../CustomDropDown';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCoursesDropdowwn, setIsCoursesDropdowwn] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleCoursesMenu = () => {
    setIsCoursesDropdowwn(!isCoursesDropdowwn);
  };

  return (
    <header dir="rtl">
      <div className="container shadow-sm min-h-12 lg:min-h-24 md:px-12 lg:px-24 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex flex-col font-bold text-3xl ml-2" dir='ltr'>
          <span className="text-maginta">c<span className='text-yello'>o</span>urses</span>
          <span className='text-start text-yello mt-[-17px]'>z<span className='text-maginta'>o</span>ne</span>
        </div>
        
        {/* Navigation Links in Arabic - Desktop */}
        <nav className="hidden xl:flex xl:justify-center space-x-2 w-1/2 mr-3 ml-0 font-semibold text-black">
          <NavLink to="/" className="hover:text-gray-600">الرئيسية</NavLink>
          <NavLink to="/about" className="hover:text-gray-600">عن المدرب</NavLink>

          <button onClick={toggleCoursesMenu} className="hover:text-gray-600 relative cursor-pointer">الدورات التدريبيه
            &#9662;
            <div className={`absolute text-sm text-right z-2 w-45 rounded-md shadow-xl -bottom-25 bg-white px-3 ${isCoursesDropdowwn ? 'block' : 'hidden'}`}>
                <Link to='/courses' className='block p-2 border-b border-b-gray-200'>دورات تدريبية</Link>
                <Link to="/workshops" className='p-2 block'>فعاليات ورش العمل</Link>
            </div>
          </button>

          <NavLink to="/blog" className="hover:text-gray-600">المدونه</NavLink>
          <NavLink to="/consultations" className="hover:text-gray-600">الاستشارات</NavLink>
          <NavLink to="/podcast" className="hover:text-gray-600">بودكاست</NavLink>
          <NavLink to="/contact" className="hover:text-gray-600">تواصل معنا</NavLink>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 xl:hidden">
            <div className="container px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col font-bold text-3xl" dir='ltr'>
                  <span className="text-maginta">c<span className='text-yello'>o</span>urses</span>
                  <span className='text-start text-yello mt-[-17px]'>z<span className='text-maginta'>o</span>ne</span>
                </div>
                <button onClick={toggleMobileMenu} className="text-2xl">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 items-center font-semibold text-xl text-black">
                <NavLink to="/" className="hover:text-gray-600">الرئيسية</NavLink>
                <NavLink to="/about" className="hover:text-gray-600">عن المدرب</NavLink>
                <NavLink to="/courses" className="hover:text-gray-600">الدورات التدريبيه &#9662; </NavLink>
                <NavLink to="/blog" className="hover:text-gray-600">المدونه</NavLink>
                <NavLink to="/consultations" className="hover:text-gray-600">الاستشارات</NavLink>
                <NavLink to="/podcast" className="hover:text-gray-600">بودكاست</NavLink>
                <NavLink to="/contact" className="hover:text-gray-600">تواصل معنا</NavLink>
              </nav>
              <div className="flex justify-center mt-8 space-x-4">
                <Link to="/login" className="group bg-weak-maginta text-black hover:bg-maginta font-semibold hover:text-white rounded-full text-sm px-4 py-3 cursor-pointer transition-all duration-300">
                  <FontAwesomeIcon icon={faUser} className='ml-2 text-maginta text-lg group-hover:text-yello'/>
                  <span>الدخول</span>
                </Link>
                <Link to="/register" className="group bg-weak-maginta text-black hover:bg-maginta font-semibold hover:text-white rounded-full text-sm px-4 py-3 cursor-pointer transition-all duration-300">
                  <FontAwesomeIcon icon={faUserPlus} className='ml-2 text-maginta text-lg group-hover:text-yello'/>
                  <span>إنشاء حساب</span>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Shop Item */}
          <Link to="/cart" className="">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{color: "#000000",}} />
          </Link>
          
          {/* Language Selector */}
          <div className="relative">
              <CustomDropdown 
                options={[
                  { value: 'ar', label: 'العربيه' },
                  { value: 'en', label: 'English' },
                ]}
                placeholder="اللغه"
              />
          </div>
          
          {/* Login Button */}
          <Link to="/login" className="group hidden sm:block bg-weak-maginta text-black hover:bg-maginta font-semibold hover:text-white rounded-full text-sm px-2 py-2 lg:text-md lg:px-4 xl:px-4 xxl:px-6 lg:py-3 xl:py-4 cursor-pointer max-h-15 transition-all duration-300">
          <FontAwesomeIcon icon={faUser} className='ml-2 text-maginta text-lg group-hover:text-yello'/>
            <span>الدخول</span>
          </Link>
          
          {/* Create Account Button */}
          <Link to="/register" className="group hidden sm:block bg-weak-maginta text-black hover:bg-maginta font-semibold hover:text-white rounded-full text-sm px-2 py-2 lg:text-md lg:px-4 xl:px-4 xxl:px-6 lg:py-3 xl:py-4 cursor-pointer transition-all duration-300">
          <FontAwesomeIcon icon={faUserPlus} className='ml-2 text-maginta text-lg group-hover:text-yello'/>
            <span>إنشاء حساب</span>
          </Link>
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMobileMenu} 
            className='cursor-pointer text-xl mr-auto xl:hidden'
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
