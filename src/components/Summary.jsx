import React from 'react';
import { planOptions, addOns } from '../data/data';

export function Summary({ data, onChangePlan }) {

  const planPrice = planOptions
    .filter((option) => option.type === data.plan.type)
    .map((option) => option.price[data.billing])



  const selectedAddons = data.addOns.filter(addon => addon.selected);
  const addonPrices = selectedAddons.map(addon => {
    const addonData = addOns.find(a => a.id === addon.id);
    return addonData.price[data.billing];
  });
  
  const total = planPrice[0] + addonPrices.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-blue-900">Finishing up</h2>
        <p className="text-gray-500">Double-check everything looks OK before confirming.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b">
          <div>
            <div className="font-medium text-blue-900">
              {data.plan.type.charAt(0).toUpperCase() + data.plan.type.slice(1)} ({data.billing})
            </div>
            <button
              onClick={onChangePlan}
              className="text-sm text-gray-500 underline hover:text-blue-500"
            >
              Change
            </button>
          </div>
          <div className="font-medium text-blue-900">
            ${planPrice}/{data.billing === 'monthly' ? 'mo' : 'yr'}
          </div>
        </div>

        {selectedAddons.map((addon) => {
          const addonData = addOns.find(a => a.id === addon.id);
          const price = addonData.price[data.billing];

          return (
            <div key={addon.id} className="flex items-center justify-between">
              <div className="text-gray-500">{addonData.name}</div>
              <div className="text-blue-900">
                +${price}/{data.billing === 'monthly' ? 'mo' : 'yr'}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between px-6">
        <div className="text-gray-500">
          Total (per {data.billing === 'monthly' ? 'month' : 'year'})
        </div>
        <div className="text-xl font-bold text-indigo-700">
          ${total}/{data.billing === 'monthly' ? 'mo' : 'yr'}
        </div>
      </div>
    </div>
  );
}