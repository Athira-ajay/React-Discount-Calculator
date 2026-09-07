
import './App.css'
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import DiscountForm from './Components/DiscountForm'
import ResultCard from './Components/ResultCard'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {

  const [amount, setAmount] = useState('')
  const [discount, setDiscount] = useState('')

  const [discountAmount, setDiscountAmount] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)

  const [error, setError] = useState('')


  const calculateDiscount = () => {

    if (amount === '' || discount === '') {
      setError('Please enter both amount and discount percentage')
      return
    }

    if (amount <= 0) {
      setError('Amount must be greater than 0')
      return
    }

    if (discount < 0 || discount > 500) {
      setError('Discount must be between 0% and 500%')
      return
    }

  setError('')

    const calculatedDiscount = (amount * discount) / 100

    const calculatedFinalPrice = amount - calculatedDiscount

    setDiscountAmount(calculatedDiscount)
    setFinalPrice(calculatedFinalPrice)

    // Scroll to Result Card

    document.getElementById('result').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  }


  const resetCalculator = () => {

    alert('Are you sure you want to clear all values');
    setAmount('')
    setDiscount('')
    setDiscountAmount(0)
    setFinalPrice(0)
    setError('')

  }


  return (
    <>

      <Navbar/>

    <main>

    <section id="calculator">

      <DiscountForm
        amount={amount}
        setAmount={setAmount}
        discount={discount}
        setDiscount={setDiscount}
        calculateDiscount={calculateDiscount}
        resetCalculator={resetCalculator}
        error={error}
      />

      <ResultCard
        amount={amount}
        discount={discount}
        discountAmount={discountAmount}
        finalPrice={finalPrice}
      />
    
    </section>


      <About/>

    </main>

    <Footer/>
  
  </>
    
  )
}

export default App
