import React from 'react'

const Heading = ({title}:{title:string}) => {
  return (
    <div className='text-gray-900 text-[32px] font-medium flex items-center gap-4 py-16'>{title}
    <div className='bg-red-700 h-[2px] w-[40px] translate-y-1'> </div>
    
    
    
    </div>
  )
}

export default Heading