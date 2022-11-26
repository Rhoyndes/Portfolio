import Roboto from './Roboto'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'

type ButtonProps = {
  slider: (event: React.MouseEvent) => void
}

export default function OpeningPage({slider}: ButtonProps) {
  const [SpaceAnimation, setSpaceAnimation] = useState(true)
  const [BrciksAnimation, setBricksAnimation] = useState(false)
  const [UserAnimation, setUserAnimation] = useState(false)

  useEffect(() => {
    const spaceInterval = setInterval(() => {
      setSpaceAnimation(!SpaceAnimation)
    }, 600)

    return () => clearInterval(spaceInterval)
  })

  useEffect(() => {
    const bricksInterval = setInterval(() => {
      setBricksAnimation(true)
    }, 1000)

    const userInterval = setInterval(() => {
      setUserAnimation(true)
    }, 2000)

    return () => {
      clearInterval(bricksInterval)
      clearInterval(userInterval)
    }
  }, [])

 return(
    <>
    <div className='mainPage' id='home'>
      <div className="mainPage__header">
        <div className="mainPage__header-items">
        <p className='mainPage__header-items-name' style={{borderRight: SpaceAnimation ? '2px solid #f5f5f5' : 0}}>Daniel</p>
        <FontAwesomeIcon className='mainPage__header-items-settings' icon={faGears} onClick={slider}/>
        </div>
      </div>
      <div className='mainPage__leftSection'>
        <div className='mainPage__leftSection-roboto'>
          <div className='mainPage__leftSection-roboto-brick' style={{marginRight: BrciksAnimation ? `0px` : `900px`}}></div>
          <div className='mainPage__leftSection-roboto-brick' style={{marginLeft: BrciksAnimation ? `0px` : `900px`}}></div>
          <div className='mainPage__leftSection-roboto-brick' style={{marginRight: BrciksAnimation ? `0px` : `900px`}}></div>
          <Roboto/>
        </div>
      </div>
      <div className='mainPage__rightSection'>
        <div className="mainPage__rightSection-info" style={{opacity: UserAnimation ? 1 : 0}}>
          <h3 className='mainPage__rightSection-info-introduction'>Hi! my name is</h3>
          <h1 className='mainPage__rightSection-info-name'>Daniel Bednorz,</h1>
          <h2 className='mainPage__rightSection-info-proffession'>let Frontend_Developer = ['JavaScript', 'React', 'TypeScript']</h2>
          <h3 className='mainPage__rightSection-info-origin'>From Poland</h3>
          <button className='mainPage__rightSection-info-project' onClick={() => {window.open('https://github.com/Rhoyndes', '_blank', 'noopener,noreferrer')}}>Check my project!</button>
        </div>
      </div>
    </div>
    </>
 )
}

