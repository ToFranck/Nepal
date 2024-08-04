import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="fpart1">
          <p>444 nuits</p>
        </div>
        <div className="fpart2">
          <p>Ce site et inspire du site officiel de l'artiste Népal afin de regrouper certaines de ces créations en hommage à ce dernier</p>
        </div>
        <div className="fpart3">
          <a href="https://etendardmgmt.com/" target="_blank">
            <img src="https://444nuits.com/assets/img/etendard-logo.png" alt="etendard" />
          </a>
          <a href="https://www.youtube.com/channel/UC1mOxnCDTcWsXeHbgbEbTZQ/videos" target="_blank">
            <img src="https://444nuits.com/assets/img/laxlogo.png" alt="instagram" />
          </a>
          <a href="https://www.youtube.com/user/75esession" target='_blanck'>
            <img src="https://444nuits.com/assets/img/75e-sesslogo.png" alt="" />
          </a>
        </div>
      </div>
    </>
  )
}
