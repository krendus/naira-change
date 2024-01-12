import React, {useState} from 'react'
import styles from './style.module.css'
import ReactFlagsSelect from 'react-flags-select'

const CurrencyConverter = () => {
  const [fromCode, setFromCode] = useState("NG");
  const [toCode, setToCode] = useState("US");
  return (
    <div className={styles.container}>
        <h1>Currency Converter</h1>
        <select className={styles.rateSelect}>
            <option>CBN Rates</option>
            <option>FX Rates</option>
        </select>
        <div className={styles.inputContainer}>
            <label>From</label>
            <div>      
                <ReactFlagsSelect 
                    selected={fromCode}
                    onSelect={(c) => setFromCode(c)}
                    className={styles.inputSelect}
                    countries={["US", "NZ", "CH", "NG"]}
                    customLabels={{ US: "USD", NZ: "NZD", CH: "CHF", NG: "NGN"}}
                />
                <input type='text' inputMode='decimal' placeholder='0.00' />
            </div>
        </div>
        <div className={styles.inputContainer}>
            <label>To</label>
            <div>      
                <ReactFlagsSelect 
                    selected={toCode}
                    onSelect={(c) => setToCode(c)}
                    className={styles.inputSelect}
                    countries={["US", "NZ", "CH", "NG"]}
                    customLabels={{ US: "USD", NZ: "NZD", CH: "CHF", NG: "NGN"}}
                />
                <input type='text' inputMode='decimal' placeholder='0.00' />
            </div>
        </div>
    </div>
  )
}

export default CurrencyConverter