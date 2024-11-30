import React, { useState } from 'react';
import { StepIndicator } from './components/StepIndicator';
import { PersonalInfo } from './components/PersonalInfo';
import { SelectPlan } from './components/SelectPlan';
import { PickAddOns } from './components/PickAddOns';
import { Summary } from './components/Summary';
import { addOns } from './data/data';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    billing: 'monthly',
    personalInfo: { name: '', email: '', phone: '' },
    plan: { type: '' },
    addOns: addOns.map(addon => ({ ...addon, selected: false }))
  });

  // console.log(formData.plan)


  const validatingStepOne = (step, formData) => {
    const errors = {};
    //* email validation regex to check if email's correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (step === 1) {
      if (!formData.personalInfo.name) errors.name = 'Name is required';
      if (!formData.personalInfo.email) errors.email = 'Email is required';
      if (!emailRegex.test(formData.personalInfo.email)) errors.email = 'Invalid email format';
      if (!formData.personalInfo.phone) errors.phone = 'Phone number is required';
    }

    if(step === 2){
      if (!formData.plan.type) errors.plan = 'Please select a plan';
    }

    return errors;
  };


  const handleNext = () => {
    const newErrors = validatingStepOne(currentStep, formData);
    setErrors(newErrors);
    // console.log(newErrors)
    // console.log(Object.keys(newErrors))

    //*if there is no errors in the first step
    if (Object.keys(newErrors).length === 0) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        toast.success('Thank you for your subscription!')
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="h-screen relative bg-gray-100 flex items-center justify-center md:p-6">
     <Toaster/>
      <div className="md:bg-white  rounded-lg md:shadow-xl p-4 h-full md:max-w-4xl w-full">
        <div className="flex flex-col md:flex-row justify-between md:justify-center h-full gap-20 ">
          <div className=' w-[100%] md:w-[30%] '>
            <StepIndicator
              currentStep={currentStep}
              onStepClick={(step) => step <= currentStep && setCurrentStep(step)}
            />
          </div>

          <div className="w-[100%]  rounded-lg z-[1] md:w-[60%] flex flex-col gap-10  h-full  justify-between  ">
            <div className=' bg-white h-[85%] md:h-full p-6 rounded-lg' >
              {currentStep === 1 && (
                <PersonalInfo
                  data={formData.personalInfo}
                  errors={errors}
                  onChange={(personalInfo) => setFormData({ ...formData, personalInfo })}
                />
              )}

              {currentStep === 2 && (
                <SelectPlan
                  data={formData.plan}
                  billing={formData.billing}
                  errors={errors}
                  setBilling={(billing) => setFormData({ ...formData, billing })}
                  onChange={(plan) => setFormData({ ...formData, plan })}
                />
              )}

              {currentStep === 3 && (
                <PickAddOns
                  data={formData.addOns}
                  billing={formData.billing}
                  onChange={(addOns) => setFormData({ ...formData, addOns })}
                />
              )}

              {currentStep === 4 && (
                <Summary
                  data={formData}
                  onChangePlan={() => setCurrentStep(2)}
                />
              )}

            </div>



            <div className="flex absolute p-3 px-6 md:relative bottom-0 left-0 bg-white w-full justify-between items-center">
              {currentStep > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-0 py-2 text-gray-500 font-semibold hover:text-[#0d1b36]"
                >
                  Go Back
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={handleNext}
                className={`px-4  py-2 ${currentStep === 4 ? 'bg-[#463ef5]' : 'bg-[#0e2757]'}  font-semibold text-white rounded-lg ${currentStep === 4 ? 'hover:bg-[#3f36e9]' : 'hover:bg-[#0d1b36]'}`}
              >
                {currentStep === 4 ? 'Confirm' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;