import './sass/MyProject.scss'
import Cards from './Cards'
import { useRef ,useEffect, useState} from 'react'

export default function MyProject() {
  const [flag, setFlag] = useState(false)
  const ref = useRef<HTMLDivElement>(null);

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
        <div className="project" id='projects'>
            <div className="project__cards"
            ref={ref} 
                     style={{opacity: flag ? 1 : 0}}>
              <Cards flag={flag}/>
            </div>
        </div>
        </>
     );
}
