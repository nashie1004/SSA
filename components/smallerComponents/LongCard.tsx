import React from 'react'
import { ILongCard } from '../sections/SectionTwo'

export default function LongCard(
  {image, imageOnRight}: ILongCard
) {

  return (
    <div className='LongCard'>
      {
        imageOnRight ? (
          <>
            <div className='cardTexts'>
              <h3>Lorem</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet dolor quaerat. Alias et fugit quis at repudiandae aspernatur eos.</p>
            </div>
            <div className='cardImg' 
            style={{backgroundImage: `url(${image.src})`}}>
            </div>
          </>
        ) : (
          <>
            <div className='cardImg'
              style={{backgroundImage: `url(${image.src})`}}>
            </div>
            <div className='cardTexts'>
              <h3>Lorem</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet dolor quaerat. Alias et fugit quis at repudiandae aspernatur eos.</p>
            </div>
          </>
        )
      }
      
    </div>
  )
}
