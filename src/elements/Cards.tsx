import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faTv, faTired, faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './sass/MyProject.scss'

const cardsInfo = [
  {
    icon: faCreditCard,
    name: 'Upcoming subscription',
    description: 'An application that allows you to save and track upcoming payments.',
    lang: `['TypeScript', 'SASS']`,
    href: `https://github.com/Rhoyndes/Subscription`
  },
  {
    icon: faTv,
    name: 'Cinema',
    description: 'See what the cinema has to offer.',
    lang: `['JavaScript', 'SASS']`,
    href: `https://github.com/Rhoyndes/Animal`
  },
  {
    icon: faTired,
    name: 'Day at work',
    description: 'See how quickly you can get fired.',
    lang: `['JavaScript', 'SASS', 'React]`,
    href: `https://github.com/Rhoyndes/WorkDay`
  },
  {
    icon: faKitchenSet,
    name: 'Kitchen',
    description: 'Simple kitchen protein recipes, enjoy!',
    lang: `['JavaScript', 'BootStrap']`,
    href: `https://github.com/Rhoyndes/Recipes`
  }
]
export default function Cards(props: { flag: boolean }) {


    return (
        <>
          {cardsInfo.map((card, key) => {
            return  <div key={key} className="project__cards-container" style={{opacity: props.flag ? 1 : 0}} onClick={() => {window.open(card.href, '_blank', 'noopener,noreferrer')}}>
                      <div className='project__cards-card'>
                        <div className="project__cards-card-front">
                          <div className="project__cards-card-front-box">
                            <FontAwesomeIcon className="project__cards-card-front-icon"  icon={card.icon}></FontAwesomeIcon>
                          </div>
                          <div className="project__cards-card-front-info">
                            <h4 className='project__cards-card-front-info-header'>{card.name}</h4>
                            <p className='project__cards-card-front-info-text'>
                           {card.description}
                            </p>
                            <p className="project__cards-card-front-info-tools">{card.lang}</p>
                          </div>
                        </div>
                        <div className="project__cards-card-back">
                          <div>
                            <FontAwesomeIcon className="project__cards-card-back-gitIcon" icon={faGithub}></FontAwesomeIcon>
                          </div>
                        </div>
                      </div>
                    </div>  
              }
            )
          }
        </>
    )
};

