import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import ArrowButton from '../ArrowButton';

import Pagination from "../Pagination";
import Footer from "./Footer";
import CustomPagination from "../CustomPagination";
import CustomSearch from "../CustomSearch";
// Sample course data
const workshops = [
    {
      id: 1,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية',
    },
    {
      id: 2,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },
    {
      id: 3,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },
    {
      id: 4,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },
    {
      id: 5,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },
    {
      id: 6,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },
    {
      id: 7,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },
    {
      id: 8,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },
    {
      id: 9,
      image: 'https://picsum.photos/seed/blog1/600/400',
      time: '03:30 مساءا',
      date: '15 مايو 2025',
      title: 'ورشة عمل تصميم موقع الكترونى لبيع وايجار الاجهزة الالكترونية',
      presenter: 'أحمد عطية ',
    },

  ];
function Workshops() {
    return(
        <div>
            <Pagination thisPage='الفعاليات وورش العمل' />
                <div className="py-16">
                    <div className="mx-auto mb-10 px-8 xl:px-28" dir="rtl">
                        <div className="text-center mb-12">
                          <h2 className="text-2xl font-bold mb-4">الفعاليات وورش العمل</h2>
                          <p className="text-gray-500 lg:max-w-sm mx-auto mb-5 text-md">
                            اطلع على أحدث الفعاليات وورش العمل لتطوير مهاراتك وزيادة خبراتك.
                          </p>
                              <div className="flex justify-center gap-6">
                                  <CustomSearch className="grow" text="ابحث عن ورشه .."/>
                              </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {workshops.map(workshop => (
                                <div key={workshop.id} className="bg-amber-50 rounded-4xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl p-4">
                                <div>
                                <img src={workshop.image} alt={workshop.titlele} className="w-full h-38 object-cover rounded-3xl" />
                                </div>
                                
                                <div className="pt-3" dir="rtl">
                                {/* Author and Date Row */}
                                <div className="flex justify-start text-gray-700 font-semibold mb-3">
                                    <div className="flex items-center">
                                      <FontAwesomeIcon icon={faCalendarAlt} className="ml-1 font-bold" />
                                      <span className="text-sm">{workshop.date}</span>
                                    </div>
                                    <div className="flex items-center mr-25">
                                      <FontAwesomeIcon icon={faClock} className="ml-1 font-bold" />
                                      <span className="text-sm">{workshop.time}</span>
                                    </div>
                                </div>
                                
                                {/* Blog Title */}
                                <h3 className="text-md font-bold text-black mb-4">{workshop.title}</h3>
                                
                                {/* Action Button */}
                                <div className="mt-2 flex justify-between items-center">
                                    <ArrowButton text="تفاصيل" />
                                    <div className="flex items-center ml-12">
                                        <FontAwesomeIcon icon={faUser} className="ml-1 text-gray-600" />
                                        <span className='text-gray-700 text-sm font-semibold'>{workshop.presenter}</span>
                                    </div>
                                </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CustomPagination />
                </div>
            <div className="bg-maginta">
                <Footer />
            </div>
        </div>
    )
}
export default Workshops;