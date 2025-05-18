import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Landing() {
  return (
    <>
    <div className="landing h-(--spacing-without-header-size) relative flex items-end">
      <div className="background bg-[url('public/dotsbackground.jpg')] absolute bg-auto bg-right-top w-full h-full opacity-5 -z-10"></div>
      <Footer />
    </div>
    <div className="container bg-maginta pb-32 px-4 sm:px-8 md:px-16 lg:px-24" dir="rtl">
      <h2 className='text-yello text-4xl font-bold'>مرحبا</h2>
      <h2 className='text-white text-5xl font-bold mt-4'>أنا احمد عطيه</h2>
      <p className='text-white text-xl mt-5 leading-loose lg:max-w-[45%]'>مصمم واجهة مستخدم (UI/UX Designer) متخصص في تصميم تجارب مبتكره وواجهات سهلة  الاستخدام. ماهر فى ادوات التصميم مثل Adobe XDg Figma, مع خبره فى تحقيق أهداف المستخدمين والشركات.</p>
      
      <ul className='mt-6 space-y-4 xl:max-w-[45%]'>
        <li className='flex items-center mt-7'>
          <div className='bg-yello rounded-full w-12 h-12 flex items-center justify-center ml-3'>
            <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
          </div>
          <span className='text-white text-4xl font-bold'> +6  سنين من الخبره </span>
        </li>

        <li className='w-75 h-0.5 bg-border-grey-maginta'></li>

        <li className='flex items-center mt-7'>
          <div className='bg-yello rounded-full w-12 h-12 flex items-center justify-center ml-3'>
            <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
          </div>
          <span className='text-white text-4xl font-bold'> +150 مشروع مكتمل</span>
        </li>

        <li className='w-75 h-0.5 bg-border-grey-maginta'></li>

        <li className='flex items-center mt-7'>
          <div className='bg-yello rounded-full w-12 h-12 flex items-center justify-center ml-3'>
            <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
          </div>
          <span className='text-white text-4xl font-bold'> +130  عملاء سعداء</span>
        </li>

        <li className='w-75 h-0.5 bg-border-grey-maginta'></li>
      </ul>
    </div>
    </>
  );
}

export default Landing;
