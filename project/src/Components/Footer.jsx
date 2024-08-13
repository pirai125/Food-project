import { useContext } from "react"
import { cartitemsContext } from "../App"


export default function Footer() {
  const {assets}=useContext(cartitemsContext)
  return (
    <div className='border-t-2 h-fit bg-gray-600 text-white flex items-center justify-between p-4 mt-20 rounded-sm' >

      <div className="w-8/12">
      <img src={assets.logo} alt="logo" className="h-7 my-2"/>
      <p className="text-sm">Bringing the best of your local flavors to your doorstep. Thanks for choosing Tomato!</p>
      <div className="flex my-3">
      <a href="https://x.com/iampirai125?t=bo46pupY1LVdpm03XjLBCA&s=09" target="_blank" rel="noopener noreferrer"><img src={assets.twitter_icon} alt="twitter_icon"   className="px-1"/></a>
      <a href="https://www.linkedin.com/in/piraisudan2003/" target="_blank" rel="noopener noreferrer"><img src={assets.linkedin_icon} alt="linkedin_icon" className="px-1" /></a>
      <a href="mailto:pirair2003@gmail.com ?subject=text" target="_blank" rel="noopener noreferrer"><img src={assets.facebook_icon} alt="facebook_icon" className="px-1" /></a>
      </div>
      </div>

      <div className="flex flex-col items-start mx-auto">
        <h1 className="font-bold">GET IN TOUCH</h1>
        <ul>
          <li className="text-sm">+91-9876543210</li>
          <li className="text-sm">contact@tomato.com</li>
        </ul>
      </div>

    </div>
  )
}
