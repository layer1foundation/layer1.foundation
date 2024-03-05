"use client"

import React, {ReactNode, useEffect} from 'react'

interface RightDrawerProps {
  children: ReactNode;
  open: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function RightDrawer({children, open, setIsOpen} : RightDrawerProps) {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Clean up function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);
  if(!open) return (<></>)
  return (
      <div className="fixed inset-0 z-1 bg-gray-400 bg-opacity-50 w-full h-full cursor-pointer" onClick={()=>{setIsOpen(!open)}} >
        <div 
        className="fixed z-99 w-4/5 top-0 right-0 h-full py-5 flex flex-col bg-light space-y-8 overflow-auto max-w-5xl" 
        style={open ? { animation: "slide-left 500ms" } : {}}
        onClick={stopPropagation}
        >
        <div className="w-full flex pl-3 " onClick={()=>{
          setIsOpen(!open);
        }}>
          <img src="/icons/close.svg" />
        </div>
        {children}
        </div>
      </div>
  )
}
