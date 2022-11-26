import './sass/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState, useRef } from 'react'

export default function Contact() {
    const [state, setState] = useState(false)
    const [flag, setFlag] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

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
        <div className="contact" ref={ref} style={{opacity: flag ? 1 : 0}} id='contact'>
            <div className='contact-icon'>
                <FontAwesomeIcon className='contact-icon-img' icon={faPhone} style={{animation: state ? 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both' : ''}}></FontAwesomeIcon>
            </div>
            <div className="contact-inbox">
                <p className="contact-inbox-mail">bednorzdaniel9@gmail.com</p>
                <p className="contact-inbox-linkedin">
                  https://www.linkedin.com/in/daniel-bednorz-8579ba254/
                </p>
            </div>
        </div>
        </>
    )
};
