import './sass/Roboto.scss'
import { useState, useEffect } from 'react'

export default function Roboto() {
    const [horizontal, setHorizontal] = useState('')
    const [vertical, setVertical] = useState('')
    const [AppearAnimation, setAppearAnimation] = useState(false)
    const [HandAnimation, setHandAnimation] = useState(false)

    let width = 30
    let height = 10

    useEffect(() => {
        const appearInterval = setInterval(() => {
          setAppearAnimation(true)
        }, 1400)
        const handInterval = setInterval(() => {
            setHandAnimation(true)
        }, 2200)

        return () => {
            clearInterval(appearInterval)
            clearInterval(handInterval)
        }
      }, [])

    document.onmousemove = e => {
        let windowWidth = window.innerWidth
        let windowHeight = window.innerHeight
        if(windowWidth <= 800){
            width = 0
            height = 30
        }else{
            width = 30
            height = 10
        }
        setHorizontal(Math.floor((e.clientX / windowWidth)* 100) + width + '%')
        setVertical(Math.floor((e.clientY / windowHeight) * 100) + height + '%')
    }
     return(
        <>
            <div className="roboto" style={{opacity: AppearAnimation ? 1 : 0}}>
                <div className="roboto__head">
                    <div className="roboto__head-hat"></div>
                    <div className="roboto__head-face">
                        <div className="roboto__head-face-eye">
                            <div className="roboto__head-face-eye-pupil" style={
                                {left: horizontal, top: vertical, transform: `translate(-${horizontal}, -${vertical})`}
                            }></div>
                        </div>
                        <div className="roboto__head-face-eye">
                            <div className="roboto__head-face-eye-pupil" style={
                                {left: horizontal, top: vertical, transform: `translate(-${horizontal}, -${vertical})`}
                            }></div>
                        </div>
                    </div>
                </div>
                <div className="roboto__neck"></div>
                <div className="roboto__body">
                    <div className="roboto__body-hand roboto__body-hand-left"></div>
                    <div className="roboto__body-screen">
                        <p className="roboto__body-screen-text">
                            Glad to see you here! :D
                        </p>
                    </div>
                    <div className="roboto__body-hand roboto__body-hand-right" style={{animation: HandAnimation ? 'Move 5s infinite forwards ease-in-out' : 0}}></div>
                </div>
                <div className="roboto__legs">
                    <div className="roboto__leg roboto__leg-left"></div>
                    <div className="roboto__leg roboto__leg-right"></div>
                </div>
            </div>
        </>
     )
};
