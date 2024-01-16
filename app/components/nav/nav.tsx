"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CountryFlag from 'react-country-flag'
import Marquee from 'react-fast-marquee'
import styles from './style.module.css'
import { NavIcon } from '@/lib/svg-icons'

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.topNav}>
        <div className={styles.wrap}>
          <Link href="/" className='font-semibold text-white text-lg'>Naira Rates</Link>
          <div className='hidden md:flex'>
            <Link href="/cbn">CBN</Link>
            <Link href="/black-market">Black Markets</Link>
            <Link href="/fx-markets">FX Markets</Link>
            <Link href="/remittances">Remittances</Link>
            <Link href="/news">News</Link>
          </div>
          <button className='block md:hidden text-white' name='Navigation Toggle' onClick={() => setShowNav(!showNav)}>
            <NavIcon height={"30px"} width={"40px"} />
          </button>
        </div>
      </div>
      <Marquee speed={30} pauseOnHover style={{ background: "#d9f0d9", borderBottom: "1px solid #ccc"}}>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="CH"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="CH"
            />
            <p>1 CHF = 2000 NGN <span style={{ color: "red" }}>-4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="NZ"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="NZ"
            />
            <p>1 NZD = 700 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="US"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="US"
            />
            <p>1 USD = 800 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="GB"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="GB"
            />
            <p>1 GBP = 800 NGN <span style={{ color: "red" }}>-4.23%</span></p>
        </div>
        <div className={styles.rate}>
            <CountryFlag
              countryCode="EU"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="EU"
            />
          <p>1 EUR = 1000 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
            <CountryFlag
              countryCode="KW"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="KW"
            />
            <p>1 KWD = 2000 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="JP"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="JP"
            />
            <p>1 JPY = 2000 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="CN"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="CN"
            />
            <p>1 CNH = 2000 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="HK"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="HK"
            />
            <p>1 HKD = 2000 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="CA"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="CA"
            />
            <p>1 CAD = 700 NGN <span style={{ color: "green" }}>+4.23%</span></p>
        </div>
        <div className={styles.rate}>
          <CountryFlag
              countryCode="AU"
              svg
              style={{
                  width: '1em',
                  height: '1em',
              }}
              title="AU"
            />
            <p>1 AUD = 700 NGN <span style={{ color: "red" }}>-4.23%</span></p>
        </div>
      </Marquee>
      { showNav && (
        <div className='h-[calc(100dvh-67px)] absolute top-[67px] w-dvw bg-[#092007] z-50'>
            <div className='flex flex-col text-lg text-white font-medium gap-y-4 text-center py-10'>
              <Link href="/cbn">CBN</Link>
              <Link href="/black-market">Black Markets</Link>
              <Link href="/fx-markets">FX Markets</Link>
              <Link href="/remittances">Remittances</Link>
              <Link href="/news">News</Link>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Nav