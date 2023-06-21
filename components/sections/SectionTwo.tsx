import React from 'react'
import LongCard from '../smallerComponents/LongCard'
import product1 from '../../assets/product-search.svg'
import product2 from '../../assets/product-smartphone.svg'
import product3 from '../../assets/product-work.svg'

export interface ILongCard{
  title: string,
  image: any,
  imageOnRight: boolean
}

const longCards: ILongCard[] = [
  {
    title: "Discover",
    image: product1,
    imageOnRight: true
  },
  {
    title: "Augmented",
    image: product2,
    imageOnRight: false
  },
  {
    title: "Endless Possibilities",
    image: product3,
    imageOnRight: true
  }
];

export default function SectionTwo() {
  return (
    <div className='SectionTwo'>
      <h2>Meet Protoapp</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatem perferendis a sequi corporis incidunt quis? Atque soluta at sapiente.</p>
      {
        longCards.map((item, i) => {
          return <LongCard 
            key={i}
            {...item}
          />
        })
      }
    </div>
  )
}
