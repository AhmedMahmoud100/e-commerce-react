import './Footer.css'
import Advantage from './Advantages'
export default function Footer() {
    return (
        <>
            <Advantage />
            <footer className='mainFooter'>
                <div className='container'>
                    <section className='footerContainer'>
                        <section>
                            <h2>Bonik</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate odio tempore commodi enim quaerat quasi assumenda laboriosam
                                incidunt, est itaque!
                            </p>
                        </section >
                        <section>
                            <h2>About Us</h2>
                            <ul>
                                <li>Careers</li>
                                <li>Our Stores</li>
                                <li>Our Cares</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </section>
                        <section>
                            <h2>Customer Care</h2>
                            <ul>
                                <li>Help Center</li>
                                <li>How To Buy</li>
                                <li>Track Your Order</li>
                                <li>Carparate & Bulk Purching</li>
                                <li>Returns & Refunds</li>
                            </ul>
                        </section>
                        <section>
                            <h2>Contact Us</h2>
                            <ul>
                                <li>Cairo,Egypt</li>
                                <li>Email : ahmedopo100@gmail.com</li>
                                <li>Phone : 01145628177</li>
                            </ul>
                        </section>
                    </section>
                </div>
            </footer>
        </>
    )
}
