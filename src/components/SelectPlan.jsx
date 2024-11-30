import React, { useEffect, useState } from 'react';
import {planOptions } from '../data/data';
import toast from 'react-hot-toast';



export function SelectPlan({ data,billing, setBilling, errors, onChange }) {

  // useEffect(() => {
  //   if(errors.plan){
  //     toast.error(errors.plan)
  //   }
  // },[errors])
  

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-blue-900">Select your plan</h2>
        <p className="text-gray-500">You have the option of monthly or yearly billing.</p>
      </div>


      {/* Display cards for all plans */}
      <div className="grid  md:grid-cols-3 gap-3 md:gap-4">
        {planOptions.map((option) => {
          const Icon = option.icon;
          const price = option.price[billing];
          const isSelected = data.type === option.type;

          return (
            <label
              key={option.id}
              className={`p-4 border rounded-lg text-left md:gap-12 cursor-pointer transition-colors flex md:flex-col items-start gap-8
                ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`}
            >
              <input
                type="radio"
                name="plan"
                value={option.type}
                checked={isSelected}
                onChange={() => onChange({ ...data, type: option.type })}
                className="appearance-none hidden"
              />
              <Icon className="text-blue-700" size={45} />
              <div className='space-y-1'>
                <div className="font-medium text-blue-900 capitalize">{option.type}</div>
                <div className="text-gray-500">
                  ${price}/{billing === 'monthly' ? 'mo' : 'yr'}
                </div>
              </div>
            </label>
          );
        })}
        {errors.plan && <p className="-mt-2  text-sm text-red-500">{errors.plan}</p>}
      </div>


      {/* Toggle between monthly and yearly plans */}
      <div className="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg">
        <span
          className={`font-medium ${billing === 'monthly' ? 'text-blue-900' : 'text-gray-500'}`}
        >
          Monthly
        </span>
        

        <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="appearance-none hidden peer" value=""   onChange={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly' )}/>
  <div
    className={`group bg-blue-900 peer rounded-full transition-all duration-300 w-12 h-6 after:duration-300 after:bg-white   after:rounded-full after:absolute after:h-4 after:w-4 after:top-1  
        ${billing === 'yearly' ? 'after:translate-x-7' : 'after:translate-x-1'}
     after:flex after:justify-center after:items-center `}
  ></div>
</label>
        <span
          className={`font-medium ${billing === 'yearly' ? 'text-blue-900' : 'text-gray-500'}`}
        >
          Yearly
        </span>
      </div>








    </div>
  );
}
