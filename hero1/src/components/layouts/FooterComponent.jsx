import React from 'react'

function FooterComponent() {
  let a =new Date().getFullYear()
  return (
    <div>
       <p className='mt-5'>  Copyright&copy; {a} react bootstrap</p>
    </div>
  )
}

export default FooterComponent;