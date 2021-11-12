import './Contact.css';

const Contact = () => {

    //handle contact form
    const handleContact = e => {
        e.preventDefault();

    };

    return (
        <div className="contact-section mb-5">
            <div className="container mt-5">
                <form onSubmit={handleContact}>
                    <div className='text-center mb-5'>
                        <h1 className='fw-bold'>CONTACT US</h1>
                        <p style={{ color: 'rgb(247 247 247 / 65%)' }}>You can easily reach us through filling up the form</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3 text-start">
                            <label htmlFor="">Your First Name:</label>
                            <input type="text" className="form-control" placeholder="First name" aria-label="Your Name" />
                        </div>
                        <div className="col-md-6 mb-3 text-start">
                            <label htmlFor="">Your Last Name:</label>
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Your Email" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-3 text-start">
                        <label htmlFor="">Your Email:</label>
                        <input type="email" className="form-control" placeholder="your email" aria-label="Your Email" />
                    </div>
                    <div className="col-md-12 mb-1 text-start">
                        <label htmlFor="">Details:</label>
                        <textarea className='form-control w-100 h-50' placeholder='Write Details'></textarea>
                    </div>
                    <input className="btn btn-danger mt-3" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;