import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ryanProfileImg from '../../images/ryan-profile-img.jpg'
import johnProfilImg from '../../images/john-profile-img.jpg'
import phillipProfileImg from '../../images/phillip-profile-img.jpg'
import mathewProfileImg from '../../images/mathew-profile-img.jpg'

export function JohnDetails () {
  return (
    <div className="ContactDetails">
    <h4>John Bowser</h4>
    <div className="contact_img">
      <img src={johnProfilImg}/>
    </div>
    <p>
    <a 
      href='https://github.com/jgbowser' 
      target='_blank' 
      rel='external noopener noreferrer' 
      alt='link to johns github repo'>
       <FontAwesomeIcon icon={['fab','github']} /> <span>Github</span>
    </a>
    </p>
    <p>
    <a 
      href='https://www.linkedin.com/in/john-g-bowser/' 
      target='_blank' 
      rel='external noopener noreferrer' 
      alt='link to client github repo'>
      <FontAwesomeIcon icon={['fab','linkedin']} /> <span>LinkedIn</span>
    </a>
    </p>
    <p className="personal_bio">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
      officia deserunt mollitia animi, id est laborum et dolorum fuga. 
    </p>
  </div>
  )
}

export function PhillipDetails () {
  return (
    <div className="ContactDetails">
    <h4>Phillip Cowan</h4>
    <div className="contact_img">
      <img src={phillipProfileImg}/>
    </div>
    <p>
    <a 
      href='https://github.com/lipcowan' 
      target='_blank' 
      rel='external noopener noreferrer' 
      alt='link to johns github repo'>
       <FontAwesomeIcon icon={['fab','github']} /> <span>Github</span>
    </a>
    </p>
    <p>
    <a 
      href='https://www.linkedin.com/in/lip-cowan/' 
      target='_blank' 
      rel='external noopener noreferrer' 
      alt='link to client github repo'>
      <FontAwesomeIcon icon={['fab','linkedin']} /> <span>LinkedIn</span>
    </a>
    </p>
    <p className="personal_bio">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
      officia deserunt mollitia animi, id est laborum et dolorum fuga. 
    </p>
  </div>
  )
}

export function MathewDetails () {
  return (
    <div className="ContactDetails">
    <h4>Mathew Murray</h4>
    <div className="contact_img">
      <img src={mathewProfileImg}/>
    </div>
    <p>
    <a 
      href='https://github.com/MathewMurray' 
      target='_blank' 
      rel='external noopener noreferrer' 
      alt='link to johns github repo'>
       <FontAwesomeIcon icon={['fab','github']} /> <span>Github</span>
    </a>
    </p>
    <p>
    <a 
      href='https://www.linkedin.com/in/mathewmurray/' 
      target='_blank' 
      rel='external noopener noreferrer' 
      alt='link to client github repo'>
      <FontAwesomeIcon icon={['fab','linkedin']} /> <span>LinkedIn</span>
    </a>
    </p>
    <p className="personal_bio">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
      officia deserunt mollitia animi, id est laborum et dolorum fuga. 
    </p>
  </div>
  )
}

export function RyanDetails () {
  return (
    <div className="ContactDetails">
      <h4>Ryan Whtimore</h4>
      <div className="contact_img">
        <img src={ryanProfileImg}/>
      </div>
      <p>
      <a 
        href='https://github.com/warptrail' 
        target='_blank' 
        rel='external noopener noreferrer' 
        alt='link to ryans github repo'>
         <FontAwesomeIcon icon={['fab','github']} /> <span>Github</span>
      </a>
      </p>
      <p>
      <a 
        href='https://www.linkedin.com/in/whitmorespaceindustries/' 
        target='_blank' 
        rel='external noopener noreferrer' 
        alt='link to client github repo'>
        <FontAwesomeIcon icon={['fab','linkedin']} /> <span>LinkedIn</span>
      </a>
      </p>
      <p className="personal_bio">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
      praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
      officia deserunt mollitia animi, id est laborum et dolorum fuga. 
    </p>
    </div>
  )
}

