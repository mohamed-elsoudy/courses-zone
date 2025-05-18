export default function Pagination({thisPage}) {
    return(
        <div className="pagination bg-maginta py-8 text-white text-md font-bold" dir="rtl">
            <div className="container lg:px-25 space-x-2">
                <span>الرئيسية</span>
                <span>&gt;</span>
                <span className="text-yello">{thisPage}</span>
            </div>
        </div>
    );
}