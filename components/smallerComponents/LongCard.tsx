import React from 'react'
import { ILongCard } from '../sections/SectionTwo'

export default function LongCard(
  {image, imageOnRight, title}: ILongCard
) {

  return (
    <div className='LongCard'>
      {
        imageOnRight ? (
          <>
            <div className='cardTexts right'>
              <h3>{title}</h3>
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
            <div className='cardTexts left'>
              <h3>{title}</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eveniet dolor quaerat. Alias et fugit quis at repudiandae aspernatur eos.</p>
            </div>
          </>
        )
      }
      
    </div>
  )
}
