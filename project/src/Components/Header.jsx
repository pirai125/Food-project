import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartitemsContext } from '../App'

export default function Header(){

    const {cartitems , assets}=useContext(cartitemsContext)

    return(<>
    <div className="bg-white flex justify-between items-center box-border h-12 p-3 sticky top-0 border-[#FAFAF9]  border-b-2 z-10">
        <div>
            <img src={assets.logo} alt="logo" className="h-7"/>
        </div>
            <ul className="flex items-center justify-center">
                <li className="mx-2 px-1 border-black hover:border-b-2 ">
                    <Link to="/">Home</Link></li>
                <li className="mx-2 px-1 border-black hover:border-b-2 ">
                    <Link to="/cart"> Cart</Link></li>
                <p className='mx-1 px-1  bg-orange-500 rounded-full text-white text-sm'>{cartitems.length}</p>
            </ul>
    </div>
    </>)
}
