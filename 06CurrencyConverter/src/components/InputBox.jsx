import React from 'react'

function InputBox({
    amount,
    currencyList,
    onAmountChange,
    OnCurrencyChange,
    selectedValue,
    isEditable
}) {
  return (
    <div>
         <input type="number" value={amount} onChange ={(e)=>onAmountChange(e.target.value)}  disabled = {isEditable} />
         <select  value ={selectedValue} onChange={(e)=>OnCurrencyChange(e.target.value)}> 
         {currencyList.map((currency) =>(
            <option key={currency} value={currency}>{currency}</option>
         ))}
         </select>
    </div>

  )
}

export default InputBox