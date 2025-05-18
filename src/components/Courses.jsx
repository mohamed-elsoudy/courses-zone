import Pagination from "./Pagination";
import CourseCard from "./CourseCard";
import Footer from "./Footer";
import CustomPagination from "./CustomPagination";
import CustomSearch from "./CustomSearch";
// Sample course data
const courses = [
{
    id: 1,
    image: 'https://placehold.co/600x400/9C27B0/FFFFFF/png?text=UI+Design+Course',
    title: ' دوره تعلم اساسيات  الUI/UX  للمستوى المبتدئ',
    rating: '4.8',
    price: '499'
},
{
    id: 2,
    image: 'https://placehold.co/600x400/673AB7/FFFFFF/png?text=UX+Advanced+Course',
    title: 'تجربة المستخدم المتقدمة',
    rating: '4.9',
    price: '699'
},
{
    id: 3,
    image: 'https://placehold.co/600x400/3F51B5/FFFFFF/png?text=Graphic+Design+Basics',
    title: 'أساسيات التصميم الجرافيكي',
    rating: '4.7',
    price: '399'
},
{
    id: 4,
    image: 'https://placehold.co/600x400/2196F3/FFFFFF/png?text=Web+Development',
    title: 'تطوير تطبيقات الويب التفاعلية',
    rating: '4.6',
    price: '599'
},
{
    id: 5,
    image: 'https://placehold.co/600x400/009688/FFFFFF/png?text=Professional+Web+Design',
    title: 'تصميم المواقع الإلكترونية الاحترافية',
    rating: '4.8',
    price: '649'
},
{
    id: 6,
    image: 'https://placehold.co/600x400/FF5722/FFFFFF/png?text=Adobe+XD+Course',
    title: 'أدوبي إكس دي للمصممين',
    rating: '4.7',
    price: '449'
},
{
    id: 7,
    image: 'https://placehold.co/600x400/795548/FFFFFF/png?text=Figma+Course',
    title: 'فيجما للمبتدئين والمحترفين',
    rating: '4.9',
    price: '549'
},
{
    id: 8,
    image: 'https://placehold.co/600x400/607D8B/FFFFFF/png?text=Brand+Identity+Design',
    title: 'تصميم الهوية البصرية للشركات',
    rating: '4.8',
    price: '799'
}];
function Courses() {
    return(
        <div>
            <Pagination thisPage='الدورات التدريبية' />
                <div className="py-16">
                    <div className="mx-auto mb-10 px-8 xl:px-28" dir="rtl">
                        <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-4">أحدث الدورات التدريبية</h2>
                        <p className="text-gray-500 lg:max-w-sm mx-auto mb-5 text-md">
                            اكتشف أحدث الدورات التدريبية المتنوعه لتطوير مهاراتك وتحقيق اهدافك المهنيه والشخصيه.
                        </p>
                            <div className="flex justify-center gap-6">
                                <CustomSearch className="grow" text="ابحث عن دورة .."/>
                                <div className="w-16 h-16 bg-yello rounded-xl">
                                    <span className=""></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {courses.map(course => (
                            <CourseCard 
                            key={course.id}
                            image={course.image}
                            title={course.title}
                            rating={course.rating}
                            price={course.price}
                            />
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
export default Courses;