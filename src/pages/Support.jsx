export default function Support() {
    return (
        <>
        <div className="container support-content mt-4">
            <div className="row justify-content-center d-flex mt-5 align-items-center">
                <div className="col-6 col-lg-4">
                    <img src="https://img.freepik.com/free-vector/3d-delivery-box-parcel_78370-825.jpg?semt=ais_hybrid&w=740&q=80" alt="Shipping Information" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-lg-8">
                    <div>
                        <h2>Shipping Information</h2>
                        <p>We offer free standard shipping on all orders above €50 within the Europe. Orders are typically processed and shipped within 1-2 business days. Delivery times may vary based on your location, but you can expect to receive your order within 5-7 business days after it has been shipped.</p>
                        <p>For international orders, we offer various shipping options at checkout. Shipping costs and delivery times will depend on the destination country and the shipping method selected.</p>
                        <p>Please note that we are not responsible for any customs fees or import taxes that may apply to international orders. Customers are responsible for paying any applicable fees upon delivery.</p>
                    </div>
                    <div className='mt-3'>
                        <h2>Returns and Exchanges</h2>
                        <p>We want you to be completely satisfied with your purchase. If you are not satisfied, you may return or exchange your item(s) within 30 days of receipt. To be eligible for a return or exchange, the item(s) must be unused, in their original packaging, and in the same condition as when you received them.</p>
                        <p>To initiate a return or exchange, please contact our customer service team at</p>
                        <p><a href="mailto:"></a></p>
                        <p>Once we receive your return, we will inspect the item(s) and notify you of the status of your return. If your return is approved, we will process your refund or exchange within 5-7 business days.</p>
                    </div>
                </div>
            </div>


            <div className="row justify-content-center d-flex mt-4 mb-5 align-items-center">
                <div className="col-12 col-lg-8 order-2 order-md-1">
                    <h2>Contact Us</h2>
                    <p className="heading-primary">
                        Have questions or need help? Our team is here for you. Whether you want to learn more about our products, need support, or just want to say hi, we’re all ears. Reach out anytime!

                    </p>

                    <form id="contactMail">
                        <input type="hidden" name="formType" value="contactMail" />
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" />
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" />
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label" />
                            <textarea className="form-control" id="message" name="message" rows="4" placeholder="" required />
                        </div>
                        <button type="submit" className="button-primary w-100">Send Message</button>
                    </form>
                </div>
                <div className="col-12 col-lg-4 order-1 order-md-2 text-center">
                    <img src="https://img.freepik.com/free-vector/paper-airplane-send-with-dotted-lines-flat-style_78370-2884.jpg?semt=ais_user_personalization&w=740&q=80" alt="Customer Support" className="img-fluid rounded" />
                </div>
            </div>
        </div>
        </>
    )
}