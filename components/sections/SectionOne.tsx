import React from 'react'

export default function SectionOne() {
  return (
    <div className='SectionOne'>
      <nav>
        <p className="logo"></p>
        <h3>Protoapp</h3>
        <a href="#">Home</a>
      </nav>
      <div className='homeTexts'>
        <h1>Protoapp</h1>
        <p>
          Our Landing page template works on all devices,
          so you only have to set it up once, and get 
          beautiful results forever.
        </p>      
        <button>Get Started</button>
      </div>
      <div className='mobileDownloadBtns'>
        <div className="googlePlay"></div>
        <div className="appStore"></div>
      </div>
    </div>
  )
}
