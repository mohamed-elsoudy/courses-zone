import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PodcastCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md flex p-4" dir="rtl">
    <div className="w-2/5 rounded-lg overflow-hidden shadow-md">
        <img 
            src="https://picsum.photos/seed/podcast1/300/300" 
            alt="بودكاست تصميم" 
            className="w-full h-full object-cover"
        />
    </div>
    <div className="p-4 flex-1">
        <div className="flex items-center mb-3">
            <FontAwesomeIcon icon={faMicrophone} className="text-yello ml-2 fa-xl" />
            <h3 className="text-yello font-bold text-lg">أحمد عطية</h3>
        </div>
        <h4 className="text-2xl font-bold mb-4">فن تصميم واجهات وتجارب المستخدم.</h4>
        <div className="flex gap-4">
            <div className="flex items-center grow-1">
                <div className="w-full h-1 bg-gray-400 rounded-3xl" dir="ltr">
                    <span className="block h-full w-1/2 rounded-3xl bg-maginta relative before:w-3 before:h-3 before:bg-yello before:absolute before:rounded-full before:-right-1 before:-top-1/2">
                    </span>
                    <div className="flex items-center justify-between w-full mt-2 text-sm">
                        <span>07 : 23</span>
                        <span>16 : 23</span>   
                    </div>
                </div>
            </div>
            <div className="w-12 h-12">
                <span className="flex w-full h-full bg-maginta rounded-full justify-center items-center">
                    <FontAwesomeIcon icon={faPlay} className="text-yello text-xl" />
                </span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PodcastCard
