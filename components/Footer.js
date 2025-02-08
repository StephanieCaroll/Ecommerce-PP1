import React from 'react';

export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Gamer Store</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Characteristics</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Price</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Frequently Asked Questions</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Categories</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Action</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Adventure</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Strategy</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Between others...</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Address: Av. dos Pro Players, 1337 – São Paulo, SP, Brazil</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Opening hours: Monday to Friday, 9am to 6pm</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Email: support@ultragamerstore.com</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Phone: (11) 98765-4321</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Instagram: @ultragamerstore</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe</h5>
              <p>Monthly summary of news and interesting news.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
