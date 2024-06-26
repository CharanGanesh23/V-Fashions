import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import Product from "./Productt.scss"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/vfashSlice';
import { toast } from 'react-toastify';

const Productt = () => {
  const dispatch=useDispatch()
  const [details,setDetails]=useState({})
  let [baseQty,setBaseQty]=useState(1);

  const Location=useLocation();
  useEffect(()=>{
    setDetails(Location.state.data);
  },[Location])
  return (
    <div className='maincontent'>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.img}
            alt="productImg"
          />
          <div className="fixed top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
              </p>
            )}
          </div>
        </div>
        <div className="w-3 flex flex-col justify-center gap-20">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
           

          <div className="adding">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="quantity">Quantity</p>
              <div className="buttons">
                <button onClick={()=>{
                  setBaseQty(baseQty===1 ? baseQty=1 : baseQty-1)
                }}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                   -
                </button>
                <span>{baseQty}</span>
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                 onClick={()=>{
                  setBaseQty(baseQty+1)
                 }} >
                  +
                </button>
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              _id:details._id,
              title:details.title,
              price:details.price,
              image:details.img,
              quantity:baseQty,
              description:details.description,

            }))&toast.success(`${details.title} is added`)}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to cart
            </button>
          </div>
          
        </div>
      </div>
  
    </div>

  )
}

export default Productt