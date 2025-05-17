import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ArrowButton({ text, to = "/blog" }) {
  return (
    <Link to={to} className="flex items-center text-black font-semibold group bg-weak-maginta hover:bg-maginta hover:text-white p-2.5 h-fit rounded-full">
      <div className="bg-maginta rounded-full w-6 h-6 flex items-center justify-center ml-2 group-hover:bg-yello transition-all duration-300">
        <FontAwesomeIcon 
          icon={faArrowRight} 
          className="text-white group-hover:translate-x-1 transition-all duration-300" 
        />
      </div>
      <span>{text}</span>
    </Link>
  );
}

export default ArrowButton;
