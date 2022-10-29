
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export default function Advantages() {
    return (
        <section className='advantages'>
            <div className='container'>
                <section className='sectionsContainer'>
                    <article className='box'>
                        <FontAwesomeIcon icon={faShippingFast} className="icon" />
                        <h2>WorldWide Delivery</h2>
                        <p>we offer competitive prices on our 100 million plus products any range</p>
                    </article>

                    <article className='box'>
                        <FontAwesomeIcon icon={faCreditCard} className="icon" />
                        <h2>Safe Payment </h2>
                        <p>we offer competitive prices on our 100 million plus products any range</p>
                    </article>

                    <article className='box'>
                        <FontAwesomeIcon icon={faShippingFast} className="icon" />
                        <h2>Shope With Confidence</h2>
                        <p>we offer competitive prices on our 100 million plus products any range</p>
                    </article>

                    <article className='box'>
                        <FontAwesomeIcon icon={faShippingFast} className="icon" />
                        <h2>24/7 support</h2>
                        <p>we offer competitive prices on our 100 million plus products any range</p>
                    </article>
                </section>
            </div>
        </section>
    )
}
