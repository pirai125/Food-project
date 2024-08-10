import { useContext, useEffect, useState } from "react"
import { cartitemsContext } from "../App"


export default function Cart(){
    const {cartitems ,setCartitems}  = useContext(cartitemsContext)
    const [total , setTotal]=useState(0)
    const delevryfee= cartitems.length * 5
    useEffect(()=>{
        const updatecart = cartitems.map(prev => 
            ({...prev , quantity : prev.quantity || 1}))
        setCartitems(updatecart)},[])
    useEffect(() => {
        const itemtotal=cartitems.reduce((total , prev) => 
            total + prev.price * prev.quantity , 0)
    setTotal(itemtotal) }
        ,[cartitems])
    function addquantity(item){
        const incquantity= cartitems.map(prev => 
            (prev._id === item._id ? ({...prev , quantity: prev.quantity +1 }): prev))
            setCartitems(incquantity)}
    function subquantity(item){
        const decquantity = cartitems.map(prev =>
           ( prev._id === item._id && prev.quantity > 1 ? 
             ({...prev , quantity: prev.quantity - 1 }): prev))
        setCartitems(decquantity)}
    function remove(item){
        setCartitems(prev => prev.filter((p)=> p._id !== item._id))}
    function ordermsg(){
        alert("Order placed successfully") }
    return(<>
    <div className="mt-20 box-border">
        <table className="w-full border-collapse">
            <thead>
                <tr className="border-b-2 ">
                    <th className="text-xs sm:text-base">Item</th>
                    <th className="text-xs sm:text-base">Title</th>
                    <th className="text-xs sm:text-base">Price</th>
                    <th className="text-xs sm:text-base">Quantity</th>
                    <th className="text-xs sm:text-base">Total</th>
                    <th className="text-xs sm:text-base px-4 sm:px-0">x</th>
                </tr>
            </thead>
            <tbody className="text-center ">
                {cartitems.length === 0 ?  
                <tr className="border-b-2"><td colSpan="6"><p className="my-5 sm:my-10 ">No items in the Cart</p></td></tr>: 
                 (cartitems.map(item =>
                  (<tr key={item._id} className=" border-b-2">
                        <td><img src={item.image} alt={item.name} className="h-12 w-12 sm:h-16 sm:w-16 object-cover mx-auto my-4 " />
                        </td>
                        <td><h1 className="px-2 text-sm sm:text-base">{item.name}</h1></td>
                        <td><p className="mx-4">₹{item.price}</p></td>
                        <td><div className="flex justify-center items-center">
                            <button className="mx-2 px-2 rounded-full sm:h-7 sm:w-7  bg-green-200 text-green-600 active:bg-green-300 text-xs sm:text-base" onClick={()=> addquantity(item)}>+</button>
                            <p className="border px-2 text-xs sm:text-base ">{item.quantity}</p>
                            <button className="bg-red-200 mx-2 px-2 rounded-full sm:h-7 sm:w-7 text-red-600 active:bg-red-300 text-xs font-bold sm:text-base" onClick={()=> subquantity(item)}>-</button>
                            </div></td>
                        <td><p className="mx-2 sm:px-2">₹{item.quantity*item.price}</p></td>
                        <td><button className="hover:bg-gray-300 sm:px-2  rounded-full active:bg-slate-400 text-xs sm:text-base" onClick={()=> remove(item)}>x</button></td>
                     </tr>) ))}
            </tbody>
            </table>
            </div >
                <div className="grid sm:grid-cols-2 items-center ">
                    <div className="order-2 sm:order-1" >
                        <h1 className="px-2 mt-8 mb-3 text-xl font-bold">Cart Totals</h1>
                        <div className="flex border-b-2 items-center justify-between p-2">
                            <p>Sub total</p>
                            <p>₹{total}</p>
                        </div>
                    <div className="flex border-b-2 items-center justify-between p-2">
                        <p>Delviery Fee</p>
                        <p>₹{delevryfee}</p>
                        </div>
                    <div className="flex border-b-2 items-center justify-between p-2">
                        <p>Total</p>
                        <p>₹{total + delevryfee }</p>
                    </div>
                    <button  onClick={ordermsg} className="bg-blue-400 px-2 py-1 rounded-md active:bg-blue-200 m-2">Order now</button>
            </div>
                <div className="px-2 sm:mx-auto order-1 sm:order-2 mt-2">
                    <p className="my-2 ">If you have promo code,enter here</p>
                    <input type="text" placeholder="Promo code" className="border border-gray-400 rounded-sm px-2 " />
                    <button className="bg-black text-white px-2  ml-2 py-1 rounded-md text-sm active:bg-gray-600">Submit</button>
                </div>
            </div>
            </>)}



