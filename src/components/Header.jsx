import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import CustomDropdown from './CustomDropDown';

function Header() {
  return (
    <header dir="rtl">
      <div className="container shadow-sm min-h-12 lg:min-h-24 md:px-12 lg:px-24 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex flex-col font-bold text-3xl ml-2" dir='ltr'>
          <span className="text-maginta">c<span className='text-yello'>o</span>urses</span>
          <span className='text-start text-yello mt-[-17px]'>z<span className='text-maginta'>o</span>ne</span>
        </div>
        
        {/* Navigation Links in Arabic */}
        <nav className="hidden xl:flex xl:justify-center space-x-2 w-1/2 mr-3 ml-0 font-semibold text-black">
          <a href="#" className="hover:text-gray-600 active">الرئيسية</a>
          <a href="#" className="hover:text-gray-600">عن المدرب</a>
          <a href="#" className="hover:text-gray-600">الدورات التدريبيه &#9662; </a>
          <a href="#" className="hover:text-gray-600">المدونه</a>
          <a href="#" className="hover:text-gray-600">الاستشارات</a>
          <a href="#" className="hover:text-gray-600">بودكاست</a>
          <a href="#" className="hover:text-gray-600">تواصل معنا</a>
        </nav>
        
        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Shop Item */}
          <a href="#" className="">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{color: "#000000",}} />
          </a>
          
          {/* Language Selector */}
          <div className="relative">
              <CustomDropdown />
          </div>
          
          {/* Login Button */}
          <button className="group hidden sm:block bg-weak-maginta text-black hover:bg-maginta font-semibold hover:text-white rounded-full text-sm px-2 py-2 lg:text-md lg:px-4 xl:px-4 xxl:px-6 lg:py-3 xl:py-4 cursor-pointer max-h-15 transition-all duration-300">
          <FontAwesomeIcon icon={faUser} className='ml-2 text-maginta text-lg group-hover:text-yello'/>
            <span>الدخول</span>
          </button>
          
          {/* Create Account Button */}
          <button className="group hidden sm:block bg-weak-maginta text-black hover:bg-maginta font-semibold hover:text-white rounded-full text-sm px-2 py-2 lg:text-md lg:px-4 xl:px-4 xxl:px-6 lg:py-3 xl:py-4 cursor-pointer transition-all duration-300">
          <FontAwesomeIcon icon={faUserPlus} className='ml-2 text-maginta text-lg group-hover:text-yello'/>
            <span>إنشاء حساب</span>
          </button>
          <FontAwesomeIcon icon={faBars} className='cursor-pointer text-xl mr-auto xl:hidden '/>
        </div>
      </div>
    </header>
  );
}

export default Header;
