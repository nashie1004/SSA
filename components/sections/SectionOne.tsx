import React from 'react'

export default function SectionOne() {
  return (
    <div className='SectionOne'>
      <nav>
        <div id="navLogo"></div>
        <h3>
          Protoapp
        </h3>
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
        <div id="googlePlay"></div>
        <div id="appStore"></div>
      </div>
    </div>
  )
}
