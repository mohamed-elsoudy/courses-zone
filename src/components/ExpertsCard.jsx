function ExpertsCard({date, title, location, details, end = false}) {
    return(
        <div className={`bg-maginta rounded-3xl p-6 text-white text-xl max-w-132 ${end ? "justify-self-end" : "justify-self-start"}`} dir="rtl">
            <span className="text-yello">{date}</span>
            <h2 className="font-bold text-2xl my-4">{title}</h2>
            <span className="text-yello">{location}</span>
            <p className="mt-4 text-lg">{details}</p>
        </div>
    );
}
export default ExpertsCard;