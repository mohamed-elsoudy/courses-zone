import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
  return (
      <div className="container pt-8 pb-4" dir="rtl">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-8">شهادات عملائنا</h2>
        </div>
        <div className="max-w-4xl mx-auto text-center">
              <FontAwesomeIcon icon={faStar} className="text-yello text-2xl mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yello text-2xl mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yello text-2xl mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yello text-2xl mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yello text-2xl mr-1" />
              <p className='mt-4 text-gray-700 text-lg font-bold max-w-130 m-auto leading-loose'>احمد عطيه يتمتع بمهارات استثنائيه فى تصمميم واجهه وتجربه المستخدم, يجمع بين الابداع والدقه فى عمله</p>
              
              {/* Customer Image with Yellow Border */}
              <div className="flex justify-center mt-4 mb-2">
                <div className="w-20 h-20 rounded-full border-4 border-yello overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/1.jpg" 
                    alt="احمد عطيه"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Customer Name */}
              <h3 className="text-xl font-bold text-gray-700">احمد عطيه</h3>
              
              {/* Navigation Arrows and Dots */}
              <div className="relative max-w-4xl mx-auto mt-6 mb-2 px-4">
                {/* Left Arrow (Right side in RTL) */}
                <button className="bg-yello text-white rounded-full w-14 h-14 shadow-2xl shadow-yello flex items-center justify-center absolute right-0 -top-56 cursor-pointer">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                
                {/* Slider Dots */}
                <div className="flex justify-center space-x-2">
                  <button className="w-4 h-4 rounded-full mx-1 bg-yello cursor-pointer" />
                  <button className="w-4 h-4 rounded-full mx-1 bg-gray-300 cursor-pointer" />
                  <button className="w-4 h-4 rounded-full mx-1 bg-gray-300 cursor-pointer" />
                </div>
                
                {/* Right Arrow (Left side in RTL) */}
                <button className="bg-yello text-white rounded-full w-14 h-14 shadow-2xl shadow-yello flex items-center justify-center absolute left-0 -top-56 cursor-pointer">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              </div>
        </div>
      </div>
  );
}

export default Testimonials;
