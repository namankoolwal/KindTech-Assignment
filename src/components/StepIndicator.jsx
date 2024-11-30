import React from 'react';

export function StepIndicator({ currentStep, onStepClick }) {
  const steps = [
    { number: 1, title: 'YOUR INFO' },
    { number: 2, title: 'SELECT PLAN' },
    { number: 3, title: 'ADD-ONS' },
    { number: 4, title: 'SUMMARY' },
  ];

  return (
    <div
    id='stepIndicator'
      className={`absolute top-0 left-0 w-full h-48 md:relative flex z-[0] md:h-full md:flex-col items-start justify-center md:justify-start gap-8 bg-cover bg-no-repeat p-8 md:rounded-lg`}
    >
     
      {steps.map((step) => (
        <button
          key={step.number}
          onClick={() => onStepClick(step.number)}
          className="flex items-center gap-4"
        >
          <div
            className={`w-10 h-10 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center font-bold
              ${
                currentStep === step.number
                  ? 'bg-blue-200 border-blue-200 text-blue-800'
                  : 'border-white text-white'
              }`}
          >
            {step.number}
          </div>
          <div className="text-left hidden md:block">
            <div className="text-xs text-gray-300">STEP {step.number}</div>
            <div className="text-sm text-white font-bold">{step.title}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
