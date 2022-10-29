import './Help.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Help() {

    return (
        <section className='help container'>
            <section className='part1'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <div>
                    <span>How do I check my order or delivery status?</span>
                    <span>What is the delivery time & cost?</span>
                    <span>When will I get my refund after I returned my order?</span>
                    <span>How to cancel a transaction made through the website?</span>
                    <span>How do I return my product(s)?</span>
                    <span>How much does it cost to return a product(s)?</span>
                    <span>Can I exchange my products?</span>
                </div>
            </section>
            <section className='part2'>
                <h1>SUPPORT TOPICS</h1>
                <ul>
                    <li>
                        <span>CORONA PERIOD ORDERS</span>
                        <FontAwesomeIcon icon={faAngleRight} className="RightIcon" />
                    </li>
                    <li>
                        <span>DELEVIRY</span>
                        <FontAwesomeIcon icon={faAngleRight} className="RightIcon" />
                    </li>
                    <li>
                        <span>RETURNS & REFUNDS</span>
                        <FontAwesomeIcon icon={faAngleRight} className="RightIcon" />
                    </li>
                    <li>
                        <span>ORDERING & PAYMENT</span>
                        <FontAwesomeIcon icon={faAngleRight} className="RightIcon" />
                    </li>
                    <li>
                        <span>ACCOUNT & NEWSLETTERS</span>
                        <FontAwesomeIcon icon={faAngleRight} className="RightIcon" />
                    </li>
                    <li>
                        <span>PRODUCTS</span>
                        <FontAwesomeIcon icon={faAngleRight} className="RightIcon" />
                    </li>
                    <li>
                        <span>COMPANY INFORMATION</span>
                        <FontAwesomeIcon icon={faAngleRight} className="RightIcon" />
                    </li>
                </ul>
            </section>
        </section>
    )
}
