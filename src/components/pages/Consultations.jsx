import Pagination from "../Pagination";
import Footer from "./Footer";

function Consultations() {
    return(
        <>
            <Pagination thisPage='الاستشارات' />
            <div className="py-16">
                <div className="container mx-auto px-8 pt-20 xl:px-20 mb-16">
                    <div className="flex flex-col lg:flex-row gap-15 items-start" dir="rtl">
                        {/* Right side */}
                        <div className="flex justify-between w-full lg:w-1/2">
                            <div className="w-65 -mt-24">
                                <img 
                                    src="https://picsum.photos/seed/designconsult/400/600" 
                                    alt="استشارة تصميم" 
                                    className="w-full rounded-3xl shadow-xl"
                                />
                            </div>
                            <div className="w-65 hidden xl:block">
                                <img 
                                    src="https://picsum.photos/seed/designconsult/400/600" 
                                    alt="استشارة تطوير" 
                                    className="w-full rounded-3xl shadow-xl"
                                />
                            </div>
                        </div>
                        
                        {/* Left side    */}
                        <div className="w-full lg:w-1/2 text-right">
                            <h2 className="text-xl font-bold mb-6">استشارات تعاقدية</h2>
                            
                            <p className="text-gray-600 mb-4 leading-loose mr-5">
                                هى نوع منالخدمات التى يتم الاتفاق عليها ضمن عقد محدد المدة والتفاصيل, حيث يلتم المستشار بتقديم دعم واشتشارات متخصصه تغطى احتياجانت العميل طوال مدة العقد. يتميز هذا النوع من الاستشارات بالاستمراريه والمرونة فى التعامل مع متطلبات العميل, مما يضمن تحقيق اهداف طويله الأجل وفق استراتيجية محددة.  
                            </p>
                            
                            <div className="flex justify-start mt-8">
                                <button className="bg-maginta text-white py-3 px-12 rounded-full transform hover:scale-105">
                                    طلب استشارة
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-8 pt-20 xl:px-20 mb-16">
                    <div className="flex flex-col lg:flex-row gap-15 items-start" dir="rtl">
                        {/* Right side    */}
                        <div className="w-full lg:w-1/2 text-right">
                            <h2 className="text-xl font-bold mb-6">استشارات بالساعه</h2>
                            
                            <p className="text-gray-600 mb-4 leading-loose mr-5">
                                هى خدمة مرنة تعتمد على تقديم الاستشارات للعملاء على اساس عدد الساعات المطلوبة يتيح هذا النوع من الاستشارات للعميل الحصول على دعم متخصص ومركز دون الحاجه الى التزام طويل الامد, مما يجعله خيارا مناسبا للمشاريع القصيرة او لحل مشاكل محددة بشكل سريع وفعال.
                            </p>
                            
                            <div className="flex justify-start mt-8">
                                <button className="bg-maginta text-white py-3 px-12 rounded-full transform hover:scale-105">
                                    طلب استشارة
                                </button>
                            </div>
                        </div>

                        {/* Left side */}
                        <div className="flex justify-between w-full lg:w-1/2">
                            <div className="w-65">
                                <img 
                                    src="https://picsum.photos/seed/designconsult/400/600" 
                                    alt="استشارة تطوير" 
                                    className="w-full rounded-3xl shadow-xl"
                                />
                            </div>
                            <div className="w-65 hidden xl:block -mt-24">
                                <img 
                                    src="https://picsum.photos/seed/designconsult/400/600" 
                                    alt="استشارة تصميم" 
                                    className="w-full rounded-3xl shadow-xl"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}
export default Consultations;