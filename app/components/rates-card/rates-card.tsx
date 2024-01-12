import React, { FC } from 'react'
import CountryFlag from 'react-country-flag'

interface IRateCardProps {
  countryCode: string,
  currency: string,
  rates: {
    rateType: string,
    label: string,
    rateChange: number,
    rates: string[],
  }
}

const RatesCard:FC<any> = ({ countryCode, currency, rates }) => {
  return (
    <div className='flex-1 min-w-[280px] rounded-lg border-gray-300 border py-3 cursor-pointer hover:scale-[1.02]'>
      <div className='flex items-center gap-x-2 px-3'>
        <CountryFlag
          countryCode="GB"
          svg
          style={{
              width: '1em',
              height: '1em',
          }}
          title="CH"
        />
        <p className='font-semibold'>GBP</p>
      </div>
      <div>
        <div className='flex mt-1 py-2 px-3 text-sm bg-[#b3f7b352] justify-between items-center'>
          <p>CBN Rates</p>
          <div>
            <p className='text-xs font-bold'>Buy/Sell</p>
            <p>₦ 143 / 120</p>
          </div>
        </div>
        <div className='flex mt-1 py-2 px-3 text-sm justify-between items-center'>
          <p>FX Rates</p>
          <div>
            <p className='text-xs font-bold'>Buy/Sell</p>
            <p>₦ 110 / 102</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatesCard
