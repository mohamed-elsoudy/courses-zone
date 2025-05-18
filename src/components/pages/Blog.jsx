import ArrowButton from '../ArrowButton';

import Pagination from "../Pagination";
import Footer from "./Footer";
import CustomPagination from "../CustomPagination";
import CustomSearch from "../CustomSearch";
import BlogCard from '../BlogCard';

// Sample blog data
const blogs = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/blog1/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/blog2/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/blog3/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/blog4/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/blog5/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/blog6/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 7,
    image: 'https://picsum.photos/seed/blog7/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 8,
    image: 'https://picsum.photos/seed/blog8/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  },
  {
    id: 9,
    image: 'https://picsum.photos/seed/blog9/600/400',
    author: 'أحمد عطية',
    date: '15 مايو 2025',
    title: '10 نصائح لتحسين تجربه المستخدم وزيادة التفاعل',
    excerpt: 'اكتشف افضل الممارسات لتحسين تجربه المستخدم فى تصميماتك من تحسين تدفق التفاعل'
  }
];

function Blog() {
  return(
    <div>
      <Pagination thisPage='المدونة' />
      <div className="py-16">
        <div className="mx-auto mb-10 px-8 xl:px-28" dir="rtl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">أحدث التدوينات</h2>
            <p className="text-gray-500 lg:max-w-sm mx-auto mb-5 text-md">
              اطلع على احدث التدوينات الملهمه التى تقدم نصائح وافكار مبتكره لتطوير حياتك ومهاراتك
            </p>
            <div className="flex justify-center gap-6">
              <CustomSearch className="grow" text="ابحث عن تدوينة ..."/>
            </div>
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
        <CustomPagination />
      </div>
      <div className="bg-maginta">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
