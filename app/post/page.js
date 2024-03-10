import React from 'react'
import Link from 'next/link'

function First_Post() {
  return (
    <div>
      This is my First post, redirect to second page
    
      <p><Link href="/">Home Page</Link></p>
    </div>
  )
}

export default First_Post