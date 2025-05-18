import Pagination from "../Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ExpertsCard from "../ExpertsCard";
import Footer from "./Footer"
function About() {
    return(
        <>
            <Pagination thisPage='عن المدرب' />
            <div className="bg-maginta pt-24">
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
            </div>
            <div className="py-24 relative">
                <div className="hidden 2xl:block h-200 w-1 border-r-3 border-r-yello border-dashed bg-transparent absolute right-1/2 top-80">
                    <div className="w-12 h-12 bg-yello rounded-full text-white font-bold text-3xl text-center pt-1 absolute -right-6">+</div>
                    <div className="w-12 h-12 bg-yello rounded-full text-white font-bold text-3xl text-center pt-1 absolute top-70 -right-6">+</div>
                    <div className="w-12 h-12 bg-yello rounded-full text-white font-bold text-3xl text-center pt-1 absolute top-130 -right-6">+</div>
                    <div className="w-12 h-12 bg-yello rounded-full text-white font-bold text-3xl text-center pt-1 absolute top-200 -right-6">+</div>
                </div>
                <div className="text-center max-w-94 mx-auto">
                    <h2 className="text-3xl font-bold">مؤهلاتى وخبراتى</h2>
                    <p className="text-gray-400 text-lg font-semibold mt-4">خبراتى ومؤهلاتى تمثل مزيجا متكاملا من المعرفة العملية والمهارات التخصصيه</p>
                </div>

                <div className="container py-8 lg:px-24 space-y-6 flex-col">
                    <ExpertsCard date='2020 - 2016' title='بكالريوس نظم ومعلومات ادارية ' location='أكاديمية الزرقاء' details='دراستى فى كلية نظم ومعلومات طورت مهاراتى فى تحليل الانظمة, ادارة البيانات, وحل المشكلات' end={true}/>
                    <ExpertsCard date='2022 - 2021' title='تصميم واجهة وتجربة المستخدم ' location='معهد تكنولوجيا المعلومات ITI ' details='منحة ITI فى مجال UI/UX قدمت لى فهما عميقا بتصميم التجارب الرقميه المميزة.' />
                    <ExpertsCard date='2024 - 2022' title='UI/UX Designer' location='TDP Solutions' details='عملى فى شركة TDP  كمصمم UI/UX شمل تحسين واجهات المستخدم وتجارب العملاء الرقمية.' end={true}/>
                    <ExpertsCard date='2025 - 2024' title='UI/UX Designer' location='Technomasr For Software Solutions' details='عملى فى شركة تكنو مصر, ركزت على تصميم حلول UI/UX مبتكرة تلبي احتياجات المستخدمين.' />
                </div>
            </div>
            <div className="bg-maginta">
                <Footer />
            </div>
        </>
    );
}

export default About;