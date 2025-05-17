import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ArrowButton({ text }) {
  return (
    <button className="flex items-center text-black font-semibold group bg-weak-maginta hover:bg-maginta hover:text-white p-2.5 h-fit rounded-full">
      <div className="bg-maginta rounded-full w-6 h-6 flex items-center justify-center ml-2 group-hover:bg-yello transition-all duration-300">
        <FontAwesomeIcon 
          icon={faArrowRight} 
          className="text-white group-hover:translate-x-1 transition-all duration-300" 
        />
      </div>
      <span>{text}</span>
    </button>
  );
}

export default ArrowButton;
