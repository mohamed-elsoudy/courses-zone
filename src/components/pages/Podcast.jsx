    import Pagination from "../Pagination";
    import Footer from "./Footer";
    import CustomPagination from "../CustomPagination";
    import PodcastCard from "../PodcastCard";

    function podcast() {
    return(
        <div>
        <Pagination thisPage='بودكاست' />
        <div className="py-10">
            <div className="max-w-11/12 mb-10 px-8 xl:px-20" dir="rtl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">بودكاست عالم التصميم</h2>
                    <p className="text-gray-500 lg:max-w-md mx-auto mb-5 text-md">
                    بودكاست يركز على كل ما يتعلق بعالم تصميم واجهات وتجارب المستخدم, من اساسيات التصميم الى استراتيجيات تحسين التفاعل
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Card 1 */}
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                </div>
            </div>
            <CustomPagination />
        </div>
            <Footer />

        </div>
    );
    }

    export default podcast;
