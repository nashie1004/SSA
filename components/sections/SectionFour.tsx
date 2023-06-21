import React from 'react'
import ActionCard from '../smallerComponents/ActionCard'
import action1 from "../../assets/badge.laravel-mix.svg"
import action2 from "../../assets/badge.how-to-read-code.svg"

export interface IActionCard {
  title: string,
  image: string,
  isColorYellow: boolean
}

const actionCards: IActionCard[] = [
  {
    title: "Automatic Prototyping",
    image: action1.src,
    isColorYellow: true
  },
  {
    title: "Complexity Simplified",
    image: action2.src,
    isColorYellow: false
  },
]

export default function SectionFour() {
  return (
    <div className='SectionFour'>
      <h2>Last Call to Action</h2>
      <p>Another section content goes here</p>
      <br />
      <div>
        {
          actionCards.map((item, i) => {
            return <ActionCard 
              {...item}
              key={i}
            />
          })
        }
      </div>
    </div>
  )
}
