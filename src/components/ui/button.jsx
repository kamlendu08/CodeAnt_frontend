import React from 'react'

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
