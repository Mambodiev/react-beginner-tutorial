import React from 'react';
import seiko from '../img/seiko.jpg';
import star from '../img/star.svg';

export default function Card(props) {
  return (
    <div className='card'>
      <img src={seiko}  alt="seiko" className='seiko' />

      <div className='card-start'>
        <img src={star}  alt="logo" className='star-icon' />
        <span>5.0</span>
        <span className='gray'>(5) .</span>
        <span className='gray'>USA</span>
      </div>
      <p> LIfe Lessons with Katir Zaferes</p>
      <p><span className='bold' >From $146</span> / person</p>
    </div>                                                                                                                               
  )
}