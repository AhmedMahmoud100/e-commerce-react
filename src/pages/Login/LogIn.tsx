import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function LogIn() {
    return (
        <section className='login container'>
            <section className='part1'>
                <h2>Log In</h2>
                <input type="email" placeholder='EMAIL'></input>
                <input type="passowrd" placeholder='PASSWORD'></input>
                <button>Log In</button>
                <p>By signing in you approve that you have read and accepted the Terms &
                    Conditions , the adidas Privacy Center and Privacy Pospancy.
                </p>
            </section>
            <section className='part2'>
                <h2>Join the club . Get rewarded.</h2>
                <span>Being a member of this platform;</span>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                        <span>Receives notifications about news</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                        <span>Access the best special offers and promotions</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                        <span>Receive invites to exclusive events</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                        <span>Get access to spanmited edition products</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                        <span>Faster checkout with your saved address and payment details</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck} className="checkIcon" />
                        <span>Access your complete order history</span>
                    </li>
                </ul>
                <button className='register'>
                    Register
                    <FontAwesomeIcon icon={faArrowRight} className="rightIcon" />
                </button>
            </section>
        </section>
    )
}
