import { TimeIcon } from '@/app/assets/icon'
import React from 'react'

const BlogCard = () => {
  return (
    <div className='cursor-pointer min-w-[250px] p-3 rounded-lg border-gray-300 border py-3 flex-1 hover:scale-[1.02]'>
        <h3 className='text-gray-500 medium'>CBN Headquaters bombed</h3>
        <p className='text-xs text-gray-400 flex items-center'><span className='pr-3 text-sm'><TimeIcon /></span><span>24th Jan, 2024</span></p>
        <p className='mt-3 font-medium text-[#b3f7b3] text-sm'>View</p>
    </div>
  )
}

export default BlogCard
