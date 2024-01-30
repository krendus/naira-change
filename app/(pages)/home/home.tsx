"use client"
import CurrencyConverter from '@/app/components/currency-converter';
import React, { useState } from 'react'
import styles from './style.module.css'
import RatesCard from '@/app/components/rates-card/rates-card';
import { Timeline } from 'react-twitter-widgets';
import BlogCard from '@/app/components/blog-card/blog-card';
import Image from 'next/image';
import CountryFlag from 'react-country-flag';
import ChatCard from '@/app/components/chat-card/chat-card';
import Script from 'next/script';

const HomePage = () => {
  const [displayName, setDisplayName] = useState("");
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [msg, setMsg] = useState("");
  const handleSetDisplay = () => {
    setCurrentDisplay(displayName);
  }
  return (
    <div>
      <div>
        <div className='h-auto md:h-[calc(100dvh-67px)] min-h-max mt-[67px] py-10 md:py-0 bg-[#092007] text-white'>
          <div className='w-[95%] max-w-[1200px] flex flex-col md:flex-row gap-7 mx-auto my-0 h-full'>
            <div className='flex-1 relative flex items-center justify-center flex-col text-center md:text-left'>
              <h1 className='text-[20px] md:text-[40px] font-bold w-full'>Discover Real-Time Exchange Rates with Naira Rate</h1>
              <p className='text-sm md:text-lg font-normal mt-3'>Welcome to Naira Rate, your go-to destination for accurate and up-to-the-minute exchange rates. Whether you're a globetrotter, a savvy investor, or a business owner navigating international markets, we've got you covered with real-time currency information. Stay informed, make informed decisions.</p>
            </div>
            <div className='flex-1 flex flex-col justify-center'>
              <h1 className='text-lg md:text-2xl font-medium text-center'>Today's Rates</h1>
              <div className='px-8 pt-7 flex flex-col gap-y-4 items-center'>
                <div className='rounded-full bg-white px-5 py-3 flex justify-between items-center text-gray-800 w-full max-w-[500px]'>
                  <div className='flex gap-x-3 items-center'>
                    <CountryFlag
                      countryCode="US"
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                      }}
                      title="US"
                    />
                    <p className='font-semibold'>NGN/USD</p>
                  </div>
                  <p className='font-bold'>₦ 1,200</p>
                </div>
                <div className='rounded-full bg-white px-5 py-3 flex justify-between items-center text-gray-800 w-full max-w-[500px]'>
                  <div className='flex gap-x-3 items-center'>
                    <CountryFlag
                      countryCode="GB"
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                      }}
                      title="GB"
                    />
                    <p className='font-semibold'>NGN/GBP</p>
                  </div>
                  <p className='font-bold'>₦ 1,450</p>
                </div>
                <div className='rounded-full bg-white px-5 py-3 flex justify-between items-center text-gray-800 w-full max-w-[500px]'>
                  <div className='flex gap-x-3 items-center'>
                    <CountryFlag
                      countryCode="EU"
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                      }}
                      title="EU"
                    />
                    <p className='font-semibold'>NGN/EUR</p>
                  </div>
                  <p className='font-bold'>₦ 1,300</p>
                </div>
                <div className='rounded-full bg-white px-5 py-3 flex justify-between items-center text-gray-800 w-full max-w-[500px]'>
                  <div className='flex gap-x-3 items-center'>
                    <CountryFlag
                      countryCode="CA"
                      svg
                      style={{
                          width: '2em',
                          height: '2em',
                      }}
                      title="CA"
                    />
                    <p className='font-semibold'>NGN/CAD</p>
                  </div>
                  <p className='font-bold'>₦ 920</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mt-8 w-[95%] max-w-[1200px] mx-auto my-0 flex-col md:flex-row'>
          <div className='flex-1'>
            <h3 className='font-medium text-center text-gray-800'>Exchange Rates</h3>
            <div className='flex py-7 px-5 flex-wrap gap-4'>
              <RatesCard />
              <RatesCard />
              <RatesCard />
              <RatesCard />
              <RatesCard />
              <RatesCard />
              <RatesCard />
              <RatesCard />
            </div>
            <div id="disqus_thread" className='px-5 outline-none'></div>
            <h3 className='font-medium text-center text-gray-800 mt-5'>Recent News</h3>
            <div className='flex py-7 px-5 flex-wrap gap-4'>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
          <div className='w-full md:w-[400px]'>
            <CurrencyConverter />
            <div>
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "NairaRates_"
                }} 
                options={{ 
                  height: '400'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Script>
      {`(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://naira-rates.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();`}
      </Script>
    </div>
  )
}

export default HomePage;