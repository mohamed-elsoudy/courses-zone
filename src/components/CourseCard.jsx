import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ArrowButton from './ArrowButton';

function CourseCard({ image, title, rating, price }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-4">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-38 object-cover rounded-xl" />
        <div className="absolute top-2 left-2 px-2 py-1 flex items-center">
          <span className="text-white ml-1">{rating}</span>
          <FontAwesomeIcon icon={faStar} className="text-yello text-lg" />
        </div>
      </div>
      
      <div className="pt-2" dir="rtl">
        <h3 className="text-md font-bold text-black mb-4">{title}</h3>
        
        <div className="flex justify-between items-center">
          <ArrowButton text="تفاصيل الدورة" />
          <span className="text-maginta font-bold text-md">{price} ر.س</span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
