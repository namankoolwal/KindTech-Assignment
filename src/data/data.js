import { Gamepad2, HardDrive, Sword } from 'lucide-react';


export const addOns = [
    {
      id: 'online-service',
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: { monthly: 1, yearly: 10 }
    },
    {
      id: 'larger-storage',
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: { monthly: 2, yearly: 20 }
    },
    {
      id: 'customizable-profile',
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: { monthly: 2, yearly: 20 }
    }
  ];



  export const planOptions = [
    { 
      id: 'arcade',
      type: 'arcade', 
      icon: Sword ,
      price: {monthly: 9, yearly: 90}
    },
    { 
      id: 'advanced',
      type: 'advanced', 
      icon: HardDrive ,
      price: {monthly: 12, yearly: 120}
    },
    { 
      id: 'pro',
      type: 'pro', 
      icon: Gamepad2 ,
      price: {monthly: 15, yearly: 150}
    },
  ];