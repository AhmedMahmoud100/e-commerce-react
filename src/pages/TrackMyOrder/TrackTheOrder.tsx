import './TrackOrder.css'

export default function TrackTheOrder() {

  return (
    <section className='TrackOrder container'>
      <h1> Check Your Order</h1>
      <p>
        Enter your order number and email address below to
        access your order details. From there you can check
        its current status, cancel items,
        request an exchange label or initiate a return.
      </p>
      <input type="number" placeholder='Order Number*'></input>
      <input type="email" placeholder="email"></input>
      <button>Submit</button>
    </section>
  )
}
