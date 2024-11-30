import React from "react";
import { Check } from "lucide-react";
import { addOns as addOnsList } from "../data/data";

export function PickAddOns({ data, billing, onChange }) {
  const toggleAddon = (addon) => {
    const newAddons = data.map((a) =>
      a.id === addon.id ? { ...a, selected: !a.selected } : a
    );
    onChange(newAddons);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-blue-900">Pick add-ons</h2>
        <p className="text-gray-500">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="space-y-4">
        {addOnsList.map((addon) => {
          const isSelected = data.find((a) => a.id === addon.id)?.selected;
          const price = addon.price[billing];

          return (
            <label
              key={addon.id}
              className={`w-full p-4 border rounded-lg flex items-center gap-4 hover:border-blue-500 transition-colors cursor-pointer
                ${
                  isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
                }`}
            >
              <label className="relative" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={isSelected}
                  onChange={() =>
                    toggleAddon(data.find((a) => a.id === addon.id))
                  }
                  className={`w-5 peer cursor-pointer appearance-none h-5 border rounded flex items-center justify-center transition-colors
                    ${
                      isSelected
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                />

                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <Check className="w-4 h-4 text-white font-extrabold"/>
                </span>
              </label>

              <div className="flex-1 text-left">
                <div className="font-medium text-blue-900">{addon.name}</div>
                <div className="text-sm text-gray-500">{addon.description}</div>
              </div>
              <div className="text-blue-500">
                +${price}/{billing === "monthly" ? "mo" : "yr"}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
