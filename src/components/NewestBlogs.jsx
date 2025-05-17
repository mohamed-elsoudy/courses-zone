import BlogCard from './BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NewestBlogs() {
  const blogs = [
    {
      id: 1,
      image: 'https://picsum.photos/seed/blog1/600/400',
      author: 'أحمد عطيه',
      date: '15 مايو 2025',
      title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
      excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
    },
    {
      id: 2,
      image: 'https://picsum.photos/seed/blog2/600/400',
      author: 'احمد عطيه ',
      date: '15 مايو 2025',
      title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
      excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
    },
    {
      id: 3,
      image: 'https://picsum.photos/seed/blog3/600/400',
      author: 'احمد عطيه',
      date: '15 مايو 2025',
      title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
      excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
    }
  ];

  return (
    <div className="container newest-blogs">
      <div className='max-w-282'>
        <div className="py-8">
          <div className="text-center" dir="rtl">
            <h2 className="text-2xl font-bold mb-2">أحدث التدوينات</h2>
            <p className="text-gray-400 max-w-84 mx-auto">
              اطلع على احدث التدوينات الملهمه التى تقدم نصائح وافكار مبتكره لتطوير حياتك ومهاراتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {blogs.map(blog => (
              <BlogCard 
                key={blog.id}
                image={blog.image}
                author={blog.author}
                date={blog.date}
                title={blog.title}
                excerpt={blog.excerpt}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Subscribe Box */}
      <div className="pt-32 pb-130">
        <div className="bg-maginta rounded-3xl py-8 px-8 shadow-xl max-w-4xl mx-auto" dir="rtl">
          <div className="text-center max-w-3/4 mb-6">
            <h3 className="text-yello text-2xl font-bold mb-2">اشترك في النشره الإخبارية لدينا</h3>
            <p className="text-white opacity-90 leading-[2]">
              يمكن ان تساعدك النشرات الاخبارية على البقاء على اطلاع باحدث الاخبار والاحداثفى مجال اهتمامك.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center w-full max-w-md">
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="text-yello text-2xl ml-4"
              />
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder=" برجاء ادخال بريدك الإلكتروني" 
                  className="w-full bg-white bg-opacity-10 text-gray-700 placeholder-gray-400 rounded-xl py-5 px-2 focus:outline-none"
                />
                <button className="absolute left-2 top-2 bottom-2 text-gray-700 bg-weak-maginta hover:bg-maginta hover:text-white font-bold rounded-sm px-6 transition-all duration-300 flex items-center">
                  <span className="ml-1">اشترك</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NewestBlogs;
