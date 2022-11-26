import './sass/Me.scss'
import avatar from './img/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faChessBoard } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useRef } from 'react'

export default function Me() {
    const [state, setState] = useState(false)
    const [flag, setFlag] = useState(false)
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setState(!state)
        }, 2000)
        return () => clearInterval(interval)
    }, [state])

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
    
            if (entry.isIntersecting) {
              setTimeout(() => {setFlag(true)}, 300)
            }
          },
          {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
          }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
      }, [ref]);
    return (
        <>
            <div className="me" ref={ref} style={{opacity: flag ? 1 : 0}} id='about_me'>
                <div className="me-info">
                <p className="me-info-text">
                My name is <span className='me-fontWeight'>Daniel</span>, I come from Poland and more precisely from Rybnik. I currently live in <span className='me-fontWeight'>Cracow</span>. By education I am a <span className='me-fontWeight'>Logistician</span>.
                I became interested in programming during one of the classes at the university, from that moment my interest in computer graphics decreased to a minimum and all my attention began to focus on programming.
                </p>    
                </div>
                <div className="me-avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className='me-lang'>
                    <div className="me-lang-text">
                    Here are a few technologies I’ve been working with recently:
                    </div>
                    <div className="me-lang-item">
                        [ <span style={{animation: state ? 'camelBack .6s ease-out alternate' : ''}}>'JavaScript'</span>, <span style={{animation: state ? 'camelBack .6s 150ms ease-out alternate' : ''}}>'React'</span>, <span style={{animation: state ? 'camelBack .6s 300ms ease-out alternate' : ''}}>'TypeScript'</span> ]
                </div>
                </div>
                <div className="me-code">
                    <FontAwesomeIcon className='me-code-icon' icon={faLaptopCode}></FontAwesomeIcon>
                </div>
                <div className="me-chess">
                    <FontAwesomeIcon className='me-chess-icon' icon={faChessBoard}></FontAwesomeIcon>
                </div>
                <div className="me-interested">
                    <div className='me-interested-text'>
                        Beyond coding, I have love for a different syntax - I'm a big fan of <span className='me-fontWeight'>skateboarding</span> and <span className='me-fontWeight'>snowboarding</span>. I love the adrenaline rush that accompanies these sports. On my free evenings I will sometimes play <span className='me-fontWeight'>chess</span> or <span className='me-fontWeight'>World of Warcraft</span>. 
                    </div>
                </div>
            </div>
        </>
    )
};
