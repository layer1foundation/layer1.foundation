import React, {ReactNode} from 'react'

interface RightDrawerProps {
  children: ReactNode;
  open: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function RightDrawer({children, open, setIsOpen} : RightDrawerProps) {
  return (
    open && (
      <div className="fixed inset-0 bg-gray-400 bg-opacity-50 w-full h-full cursor-pointer" onClick={()=>{setIsOpen(!open)}} >
        <div 
        className="fixed z-99 w-3/4 top-0 right-0 h-full px-5 py-5 flex flex-col bg-light space-y-8 overflow-auto" 
        style={open ? { animation: "slide-left 500ms" } : {}}
        >
        <div onClick={()=>{
          setIsOpen(!open);
        }}>
          <img src="/close.svg" />
        </div>
        {children}
        </div>
      </div>
    )
  )
}
