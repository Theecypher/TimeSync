const Slide = ({ item, current, onNext}) => {
    return ( 
        <div className="w-full lg:w-[451px] mt-[48px] lg:mt-0 bg-white lg:border-[#F5F5F5] lg:shadow-md lg:border-[0.5px] lg:rounded-[12px] items-center justify-between lg:justify-start  lg:py-[20px] xl:py-[30px] 2xl:py-[48px] lg:px-[60px]">
            <h2>{item.title}</h2>
            <p>{ item.content }</p>
            {item.option && item.option}
            {/* <input className="border border-red-500" type="checkbox" /> */}

            <button onClick={onNext}>{item.button}</button>
        </div>
     );
}
 
export default Slide