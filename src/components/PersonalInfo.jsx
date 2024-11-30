import React from 'react';

export function PersonalInfo({ data, errors, onChange }) {

  const handelChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className="space-y-8">
      <div className='space-y-1'>
        <h2 className="text-2xl font-bold text-blue-900">Personal info</h2>
        <p className="text-gray-500">Please provide your name, email address, and phone number.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-900">Name</label>
          <input
            type="text"
            name='name'
            value={data.name}
            onChange={handelChange}
            className={`mt-1 block w-full rounded-md px-3 py-2 outline-none border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500
              ${errors.name ? 'border-red-500' : ''}`}
            placeholder="e.g. Stephen King"
          />
          {errors.name && <p className="mt-0 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900">Email Address</label>
          <input
            type="email"
            name='email'
            value={data.email}
            onChange={handelChange}

            className={`mt-1 block w-full rounded-md px-3 py-2 outline-none border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500
              ${errors.email ? 'border-red-500' : ''}`}
            placeholder="e.g. stephenking@lorem.com"
          />
          {errors.email && <p className="mt-0 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900">Phone Number</label>
          <input
            type="tel"
            name='phone'
            value={data.phone}
            onChange={handelChange}
            className={`mt-1 block w-full outline-none rounded-md px-3 py-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500
              ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="e.g. +1 234 567 890"
          />
          {errors.phone && <p className="mt-0 text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>
    </div>
  );
}