import React from 'react'
import Image from 'next/image'

export default function ActionCard() {
  return (
    <div className='ActionCard'>
      <div>
        <img src="https://picsum.photos/id/237/200/200" alt="todo" />
        <p>Automation</p>
      </div>
      <div>
        <h6>Lorem, ipsum.</h6>
        <h3>Roll out</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi officiis sint quod, voluptatum sit culpa rerum enim odio quibusdam nulla iure cupiditate fugiat! Ut?</p>
      </div>
    </div>
  )
}
