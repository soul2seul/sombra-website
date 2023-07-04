import { useEffect, useState } from 'react'

export default function imageGallery(props) {
 

  return (
    <div className="img--card">
      <a href={props.path}> <img src={props.img} className="img--product"></img></a>
      <h3 className="photo--description">
        {props.title}
      </h3>
    </div>
  )
}