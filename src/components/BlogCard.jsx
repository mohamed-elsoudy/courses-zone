import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import ArrowButton from './ArrowButton';

function BlogCard({ image, author, date, title, excerpt }) {
  return (
    <div className="bg-amber-50 rounded-4xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl p-4">
      <div>
        <img src={image} alt={title} className="w-full h-38 object-cover rounded-3xl" />
      </div>
      
      <div className="pt-3" dir="rtl">
        {/* Author and Date Row */}
        <div className="flex justify-start text-gray-700 font-semibold mb-3">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="ml-1 font-bold" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center mr-10">
            <FontAwesomeIcon icon={faUser} className="ml-1 font-bold" />
            <span className="text-sm">{author}</span>
          </div>
        </div>
        
        {/* Blog Title */}
        <h3 className="text-md font-bold text-black mb-2">{title}</h3>
        
        {/* Blog Excerpt */}
        <p className="text-gray-700 mb-4 text-sm">{excerpt}...</p>
        
        {/* Action Button */}
        <div className="mt-2">
          <ArrowButton text="تفاصيل التدوينه" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
