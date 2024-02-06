import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

import './App.css'

function App() {

  const[amount,setAmount] = useState(0);
  const[convertedAmount, setConvertedAmount] = useState(0);
  const[from,setFrom] = useState("usd");
  const[to,setTo] = useState("inr");
  const[isEditable,setEditable] = useState(true);

  const options = useCurrencyInfo(from)
  const currencyList = Object.keys(options)

  const convert = () => {
    setConvertedAmount(amount*options[to])
  }

 const swap = () =>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
 }
 
  return (
    <>
      <h1>Currency Converter</h1>

      <InputBox 
      amount={amount}
      currencyList={currencyList}
      onAmountChange={(amount)=>setAmount(amount)}
      OnCurrencyChange={(from)=>setFrom(from)}
      selectedValue = {from}
      isEditable = {!isEditable}
      
      />

      <InputBox 
      amount={convertedAmount}
      currencyList={currencyList}
      selectedValue={to}
      OnCurrencyChange={(to)=>setTo(to)}
      isEditable ={isEditable}
      />
       

      <button onClick={convert}>Convert</button>
      <button onClick={swap}>Swap</button>

    </>
  )
}

export default App
