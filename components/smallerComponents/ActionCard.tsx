import React from 'react'
import { IActionCard } from '../sections/SectionFour'

export default function ActionCard(
  {title, image, isColorYellow}: IActionCard
) {
  return (
    <div className={isColorYellow ? "ActionCard yellowish" : "ActionCard cyanish"}>
      <div>
        <div className="actionCardImg"
         style={{backgroundImage: `url(${image})`}} 
        ></div>
        <p>Automation</p>
      </div>
      <div>
        <h6>Lorem, ipsum.</h6>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi officiis sint quod, voluptatum sit culpa rerum enim odio quibusdam nulla iure cupiditate fugiat! Ut?</p>
      </div>
    </div>
  )
}
