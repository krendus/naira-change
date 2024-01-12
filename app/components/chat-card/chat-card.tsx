import { TimeIcon } from '@/app/assets/icon';
import React, { FC } from 'react'
interface IChatCard {
    name: string;
    msg: string;
    time: string;
}

const ChatCard:FC<IChatCard> = ({ name, msg, time}) => {
  return (
    <div>
        <div className='min-w-[250px] bg-white p-3 rounded-xl py-3 flex-1'>
            <h3 className='text-gray-500 font-medium'>{name}</h3>
            <p className='text-sm my-1'>{msg}</p>
            <p className='text-xs text-gray-400 flex items-center text-right'><span className='pr-3 text-sm'><TimeIcon /></span><span>{time}</span></p>
        </div>
    </div>
  )
}

export default ChatCard
