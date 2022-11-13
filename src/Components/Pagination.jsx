import React from 'react'

//props
const Pagination = ({ prev, next, onPrevius, onNext }) => {
  //funciones

  const handlePrevius = () => {
    onPrevius();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className='my-5'>
      <ul className='pagination justify-content-center my-4 rounded'>
        {
          prev ? (
            <li className='page-item'>
              <button className='page-link' onClick={handlePrevius}>Previo</button>
            </li>)
            : null
        }
        {
          next ?
            (<li className='page-item'>
              <button className='page-link' onClick={handleNext}>Siguiente</button>
            </li>) : null
        }
      </ul>
    </nav>
  )
}

export default Pagination