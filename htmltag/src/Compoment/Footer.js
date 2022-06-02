import React from 'react'

const Footer = () => {
    return (
        <div className={"grid grid-cols-4 gap-x-5 bg-gray-300 mt-1  h-48"}>
            <div className={"mt-2"}>
                <h1 className={'text-xl text-bold'}>Usefull Link</h1>
                <ul className='space-y-2 pt-2'>
                    <li><a >Acondcdc</a></li>
                    <li><a>Acondcdc</a></li>
                    <li><a>Acondcdc</a></li>
                </ul>
            </div>
            <div className={"mt-2"}>
                <h1 className={'text-xl text-bold'}>Usefull Link</h1>
                <ul className='space-y-2 pt-2'>
                    <li><a>Acondcdc</a></li>
                    <li><a>Acondcdc</a></li>
                    <li><a>Acondcdc</a></li>
                </ul>
            </div>
            <div className={"mt-2"}>
                <h1 className={'text-xl text-bold'}>Usefull Link</h1>
                <ul className='space-y-2 pt-2'>
                    <li><a>Acondcdc</a></li>
                    <li><a>Acondcdc</a></li>
                    <li><a>Acondcdc</a></li>
                </ul>
            </div>
            <div>
                <div className="App">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                        width="400"
                        height="150"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

        </div>
    )
}

export default Footer;