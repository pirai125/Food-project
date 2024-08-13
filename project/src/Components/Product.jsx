
import { useContext } from "react";
import Productitems from "./Productitems";
import { cartitemsContext } from "../App";

export default function Product({ food_list, menu_list, category, setCategory }) {
    const {assets}= useContext(cartitemsContext)
    function handleCategoryClick(menu_name) {
        setCategory(prev => prev === menu_name ? "All" : menu_name);
     }

    return (
        <div className=" p-4 ">
            <div className=" bg-cover h-[44vw] relative z-0 lg:h-[28vw]" style={{backgroundImage : `url(${assets.header_img})`}} >
                <div className=" text-white flex flex-col gap-[1.5vw] max-w-96 absolute left-[4vw] bottom-[10%] sm:bottom-[20%]">
                    <h1 className="text-4xl font-bold">Fresh Eats at Your Fingertips</h1>
                    <p className="text-md font-medium">Satisfy your cravings with just a few clicks and enjoy the convenience of hassle-free food ordering.</p>
                </div>
            </div>
            <div className="mx-2 my-6">
                <h1 className="text-3xl font-semibold my-2">Expolore our menu</h1>
                <p>Choose from our curated menu of delectable options, each crafted to delight. Whether you're craving a hearty meal or a sweet treat, explore and pick your perfect choice!</p>
            </div>
            <div className=" mt-8  flex justify-between items-center text-center gap-2 my-5 overflow-x-scroll lg:overflow-x-hidden lg:gap-7">
                {menu_list.map((items, index) => (
                    <div key={index} onClick={() => handleCategoryClick(items.menu_name) } className="mx-2" >
                        <img src={items.menu_image} alt={items.menu_name}
                            className={"w-[10vw] min-w-20  rounded-full border-solid border-2 border-red-600 active:p-1 active:border-green-600"} />
                        <p className="py-1 ">{items.menu_name}</p>
                    </div> ))}
            </div>
            <hr/>
            <div>
                <h1 className="text-3xl font-semibold my-8">Top Dishes Near You</h1>
                <div className="grid grid-col gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 w-4/6 mx-auto sm:w-auto">
                    {food_list.map((list, index) => { if (category === "All" || category === list.category) {
                        return (<Productitems
                                    key={index}
                                    list={list}
                                    id={list._id}
                                    image={list.image}
                                    name={list.name}
                                    price={list.price}
                                    rating={list.rating}/>);}
                        return null;})}
                </div>
            </div>
        </div> );}
