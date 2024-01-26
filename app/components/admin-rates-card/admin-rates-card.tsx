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
    <div className='flex-1 min-w-[280px] rounded-lg border-gray-300 border pt-1 shadow cursor-pointer hover:scale-[1.02]'>
      <div className='flex items-center px-3 justify-between'>
        <div className='flex gap-x-2 items-center'>
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
        <p className='text-xs font-bold'>Buy/Sell</p>
      </div>
      <div>
        <div className='flex mt-1 py-2 px-3 text-sm bg-[#b3f7b352] justify-between items-center'>
          <p>CBN Rates</p>
          <div>
            <p>₦ 143 / 120</p>
          </div>
        </div>
        <div className='flex mt-1 py-2 px-3 text-sm justify-between items-center'>
          <p>FX Rates</p>
          <div>
            <p>₦ 110 / 102</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatesCard
