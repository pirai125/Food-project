import { useContext, useMemo } from "react";
import { cartitemsContext } from "../App";


export default function Productitems({ image ,list, name , price, rating }) {

    const {cartitems ,setCartitems , assets}  = useContext(cartitemsContext)
    function addtocart(item){
        setCartitems(prev=>[...prev ,item ])}
    function removefromcart(item){
        setCartitems(prev => prev.filter((p)=> p._id !== item._id))}
    const isInCart = useMemo(
        () => cartitems.some((item) => item._id === list._id),
        [cartitems, list._id]);

  return (
     <div className="mx-auto bg-white p-3 rounded-xl shadow-lg shadow-gray-300">
            <div>
                <img src={image} alt={name} className="rounded-lg" />
            </div>
            <div className="px-2 py-1">
                <div className="flex justify-between my-1">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <div className="flex items-center">
                        <img src={assets.star_fill} alt="star_fill" />
                        <p className="text-sm font-semibold">{rating.score}</p>
                    </div>
                </div>
                <div className="my-4 ">
                <p className="text-[#6F757C]">{list.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-orange-500 font-semibold text-xl">₹{price}</p>
                    {isInCart? <button onClick={()=>removefromcart(list)} className="bg-red-700 text-white px-2 py-1 rounded-md ">Remove fron Cart</button>:
                    <button onClick={()=> addtocart(list)} className="bg-green-700 text-white px-2 py-1 rounded-md">Add to Cart</button> }
                </div>
            </div>
        </div>)}

