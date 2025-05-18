function CustomPagination() {
    return(
            <div className="bg-weak-maginta text-maginta w-fit flex rounded-xl m-auto space-x-1">
                <span className="rounded-xl bg-maginta w-13 h-13 flex justify-center items-center mr-4"><span className="text-white text-2xl pb-1">&lt;</span></span>
                <span className="w-6 text-lg pt-3">1</span>
                <span className="w-6 text-lg pt-3">2</span>
                <span className="w-6 text-lg pt-3">3</span>
                <span className="w-6 text-lg pt-3">4</span>
                <span className="w-6 text-lg pt-3">5</span>
                <span className="rounded-xl bg-maginta w-13 h-13 flex justify-center items-center mr-4"><span className="text-white text-2xl pb-1">6</span></span>
                <span className="w-6 text-lg pt-3">...</span>
                <span className="w-6 text-lg pt-3">17</span>
                <span className="w-6 text-lg pt-3">18</span>
                <span className="rounded-xl bg-gray-300 w-13 h-13 flex justify-center items-center ml-4"><span className="text-white text-2xl pb-1">&gt;</span></span>
            </div>
    )
}
export default CustomPagination;