import React from 'react';

const Footer = () => {
    return (
        <footer className="footer flex justify-between  bg-base-200 text-base-content p-10 mt-10">
            <div className='flex-1'>
                <h2 className='font-bold'>About Us</h2>
                <p className='text-sm text-wrap'>We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className='flex-1'>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Jersy kit</a>
            </div>

            <div className='flex-1'>
                <form>
                    <h2 className="footer-title">Subscribe</h2>
                    <fieldset className="w-80">
                        <label>Subscribe to our newsletter for the latest updates.</label>
                        <div className="join mt-5">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>
    );
};

export default Footer;