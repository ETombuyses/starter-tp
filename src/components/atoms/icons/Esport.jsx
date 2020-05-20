import React from 'react'


const Icon = props => {
  const { color } = props
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill={props.color ? props.color : 'none'} xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6667 16C26.6667 14.5334 27.8667 13.3334 29.3333 13.3334V8.00004C29.3333 6.53337 28.1333 5.33337 26.6667 5.33337H5.33333C3.86667 5.33337 2.68 6.53337 2.68 8.00004V13.3334C4.14667 13.3334 5.33333 14.5334 5.33333 16C5.33333 17.4667 4.14667 18.6667 2.66667 18.6667V24C2.66667 25.4667 3.86667 26.6667 5.33333 26.6667H26.6667C28.1333 26.6667 29.3333 25.4667 29.3333 24V18.6667C27.8667 18.6667 26.6667 17.4667 26.6667 16ZM20.7733 22.4L16 19.3334L11.2267 22.4L12.6667 16.9067L8.28 13.32L13.9333 12.9867L16 7.73337L18.0533 13L23.7067 13.3334L19.32 16.92L20.7733 22.4Z" fill="white"/>
    </svg>
  )
}

export default Icon