import './App.scss';
import OpeningPage from '../elements/OpeningPage';
import MyProject from '../elements/MyProject'
import Me from '../elements/Me'
import Contact from '../elements/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGoogle, faGithub } from 
"@fortawesome/free-brands-svg-icons"
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

function App() {
  const [Flag, setFlag] = useState(false)
  const [Visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag(true)
    }, 700)
    const visibleInterval = setInterval(() => {
      setVisible(true)
    }, 2000)
    return () => {
      clearInterval(interval)
      clearInterval(visibleInterval)
    };
  }, [])

  const handleSlide = () => {
    setActive(!active)
  }

  return (
	  <>
      <div className="loading" style={{top: Flag ? '-100vh' : 0}}>
        <FontAwesomeIcon className='loading-icon' icon={faGear} />
      </div>
      <div className="sliderMenu" style={{right: active ? '0px' : '-600px'}}>
        <div className="sliderMenu-item">
          <p><a href="#home" className="sliderMenu-item-text" onClick={handleSlide}>home</a></p>
        </div>
        <div className="sliderMenu-item">
          <p><a className="sliderMenu-item-text" href="#projects" onClick={handleSlide}>projects</a></p>
        </div>
        <div className="sliderMenu-item">
          <p><a className="sliderMenu-item-text" href="#about_me" onClick={handleSlide}>about_me</a></p>
        </div>
        <div className="sliderMenu-item">
          <p><a className="sliderMenu-item-text" href="#contact" onClick={handleSlide}>contact</a></p>
        </div>
        <div className='sliderMedia-slider'>
          <FontAwesomeIcon className='socialMedia-icon-slider' icon={faTwitter}  onClick={() => {window.open('https://twitter.com/?lang=pl', '_blank', 'noopener,noreferrer')}}/>
          <FontAwesomeIcon className='socialMedia-icon-slider' icon={faLinkedin} onClick={() => {window.open('https://www.linkedin.com/in/daniel-bednorz-8579ba254/', '_blank', 'noopener,noreferrer')}}/>
          <FontAwesomeIcon className='socialMedia-icon-slider' icon={faGoogle}  onClick={() => {window.open('https://www.google.com/intl/pl/gmail/about/', '_blank', 'noopener,noreferrer')}}/>
          <FontAwesomeIcon className='socialMedia-icon-slider' icon={faGithub}  onClick={() => {window.open('https://github.com/Rhoyndes', '_blank', 'noopener,noreferrer')}}/>
        </div>
      </div>
      <div className='socialMedia'>
        <FontAwesomeIcon className='socialMedia-icon' icon={faTwitter} onClick={() => {window.open('https://twitter.com/?lang=pl', '_blank', 'noopener,noreferrer')}}/>
        <FontAwesomeIcon className='socialMedia-icon' icon={faLinkedin} onClick={() => {window.open('https://www.linkedin.com/in/daniel-bednorz-8579ba254/', '_blank', 'noopener,noreferrer')}}/>
        <FontAwesomeIcon className='socialMedia-icon' icon={faGoogle} onClick={() => {window.open('https://www.google.com/intl/pl/gmail/about/', '_blank', 'noopener,noreferrer')}}/>
        <FontAwesomeIcon className='socialMedia-icon' icon={faGithub} onClick={() => {window.open('https://github.com/Rhoyndes', '_blank', 'noopener,noreferrer')}}/>
      </div>
      <div className="copyRight">
        <p className='copyRight-text'>&copy; 2022 Daniel bednorz</p>
      </div>
      <OpeningPage slider={handleSlide}/>
      <div className='scroll' style={{visibility: Visible ? 'visible' : 'hidden'}}>
        <p className='scroll-text'>scroll</p>
        <p className='scroll-text-project'   id='project'>projects</p>
      </div>
      <MyProject/>
      <div className='scroll-two' style={{visibility: Visible ? 'visible' : 'hidden'}}>
        <p className='scroll-text'></p>
        <p className='scroll-text-project'>about_me</p>
      </div>
      <Me/>
      <div className='scroll-three' style={{visibility: Visible ? 'visible' : 'hidden'}}>
        <p className='scroll-text'></p>
        <p className='scroll-text-project'>contacts</p>
      </div>
      <Contact/>
	  </>
  )
}

export default App;
