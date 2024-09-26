'use client'

import Image from "next/image"
import { useState, useCallback } from "react"
import { CustomButton } from "."

const Calculate = () => {
  const [hashRate, setHashRate] = useState('')
  const [unit, setUnit] = useState('TH/s')
  const [estimatedEarnings, setEstimatedEarnings] = useState<number | null>(null)
  const [error, setError] = useState('')

  const calculateEarnings = useCallback(() => {
    setError('')
    if (!hashRate || isNaN(Number(hashRate))) {
      setError('Please enter a valid hash rate')
      setEstimatedEarnings(null)
      return
    }

    // Simple estimation formula (this should be replaced with a more accurate calculation)
    let multiplier = 0
    switch (unit) {
      case 'H/s': multiplier = 0.000000001; break
      case 'KH/s': multiplier = 0.000001; break
      case 'MH/s': multiplier = 0.001; break
      case 'GH/s': multiplier = 1; break
      case 'TH/s': multiplier = 1000; break
    }

    const estimatedEth = Number(hashRate) * multiplier * 0.000001 // Simplified calculation
    setEstimatedEarnings(estimatedEth)
  }, [hashRate, unit])

  return (
    <div className="w-full bg-gradient-to-b from-[#f8f9fb] to-[#fafbff]">
      <div className="flex flex-col items-center justify-center w-full py-20 text-white bg-[#0d0d2b]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Check how much you can earn
        </h2>
        <p className="text-lg text-center max-w-2xl px-4">
          Let's check your hash rate to see how much you will earn today.
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl -mt-20 p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div className="w-full md:w-2/5 mb-4 md:mb-0">
              <input 
                type="text" 
                className="w-full border-b-2 border-gray-300 py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter your hash rate"
                value={hashRate}
                onChange={(e) => setHashRate(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/5 mb-4 md:mb-0">
              <div className="relative">
                <select 
                  className="w-full appearance-none border-b-2 border-gray-300 py-2 px-4 pr-8 focus:outline-none focus:border-blue-500 transition-colors"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option>TH/s</option>
                  <option>GH/s</option>
                  <option>MH/s</option>
                  <option>KH/s</option>
                  <option>H/s</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <Image width={16} height={16} src="/icon--arrow-down.svg" alt="Dropdown arrow" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/5">
              <CustomButton 
                title="Calculate" 
                containerStyles="w-full rounded-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition-colors"
                handleClick={calculateEarnings}
              />
            </div>
          </div>
          
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <div className="border-t pt-6">
            <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-2">
              ESTIMATED 24 HOUR REVENUE:
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {estimatedEarnings !== null 
                ? `${estimatedEarnings.toFixed(8)} ETH `
                : '0.000000000 ETH '}
              <span className="text-blue-500">
                ({estimatedEarnings !== null 
                  ? `$${(estimatedEarnings * 2000).toFixed(2)}` // Assuming 1 ETH = $2000
                  : '$0.00'})
              </span>
            </h3>
            <p className="text-gray-600 text-sm">
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculate