import React from 'react';
import './style/style.css'
// pasamor personaje
const Characters = ({ charactersToPresent = [] }) => {
  return (
    <div className='row'>
      {
        charactersToPresent.map((item, index) => (
          <div key={index} className='col-md-4 mb-4'>
            <div className='card shadow p-4 mb-4 bg-white rounded border-secondary ' style={{ minWidth: "200px" }}>
              <img src={item.image} className='widthMinimum' href="/" alt='' />
              <div className='card-body'>
                <h5 className='card-title typeFace text-truncate text-uppercase bold'>{item.name}</h5>
                <hr />
                <p className='typeFace'>Especies: {item.species}</p>
                <p className='typeFace text-truncate'>Lugar: {item.location.name}</p>
                <p className='typeFace text-truncate'>Estado: {item.status}</p>
              </div>
            </div>
          </div>
        ))
      }


    </div>
  )
}

export default Characters