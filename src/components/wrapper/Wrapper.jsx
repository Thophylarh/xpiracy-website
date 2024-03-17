import React from 'react'


const DrawerWrapper = ({children}) => {
  return (
    <div  style={{background:"rgba(0,0,0,0.5"}} className='top-0 right-0 z-10 flex justify-end w-full h-full'>
<div className='h-full animate_animated animate_fadeInRight animate_fast' >
    {children}
</div>
    </div>
  )
}

export default DrawerWrapper