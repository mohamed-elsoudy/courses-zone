import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function CustomSearch({text}) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-100">
            <div className="flex items-center w-full max-w-md bg-white shadow max-w-200 rounded-lg">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-yello text-2xl ml-4 pr-2"
                />
                <div className="relative flex-grow">
                    <input
                        type="email"
                        placeholder={text}
                        className="w-full bg-white bg-opacity-10 text-gray-700 placeholder-gray-400 rounded-xl py-5 px-2 focus:outline-none"
                    />
                    <button className="absolute left-2 top-2 bottom-2 text-gray-700 bg-weak-maginta hover:bg-maginta hover:text-white font-bold rounded-sm px-8 transition-all duration-300 flex items-center">
                        <span className="ml-1">بحث</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomSearch;