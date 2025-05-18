import Card from "./Card";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { useState } from "react";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }
    function rightShiftHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }
    function surpriseHandler(){
        let randIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randIndex);
    }
    return(
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review = {reviews[index]}/>
            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center mx-auto">
                <button className="cursor-pointer hover:text-violet-500" onClick
                = {leftShiftHandler}><FaChevronLeft /></button>
                <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}><FaChevronRight /></button>
            </div>
            <div>
                <button className="bg-violet-500 px-4 py-2 rounded-md mt-5 mx-auto hover:bg-violet-600 text-white" onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials;