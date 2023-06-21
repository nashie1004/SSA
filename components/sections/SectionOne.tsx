import React from 'react'

export default function SectionOne() {
  return (
    <div className='SectionOne'>
      <nav>
        <h3>@ Protoapp</h3>
        <a href="#">Home</a>
      </nav>
      <div>
        <h1>Protoapp</h1>
        <p>
          Our Landing page template works on all devices,
          so you only have to set it up once, and get 
          beautiful results forever.
        </p>      
        <button>Get Started</button>
      </div>
      <div className='mobileDownloadBtns'>
        <p>google play btn</p>
        <p>app store</p>
      </div>
    </div>
  )
}
