import React, { useState } from 'react'
import { Fa500Px, FaAngular } from "react-icons/fa"


const Header = () => {


    const [showNav, setShowNav] = useState(false);
    return (
        <div>
            <nav className="md:flex justify-between  bg-white sticky top-0 ">
                <div className="flex items-center justify-between">

                    <img className={"w-34  p-2"} src="data:image/png;base64,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" alt="logo" />




                    {showNav ? (
                        <Fa500Px
                            onClick={() => setShowNav(!showNav)}
                            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
                        />
                    ) : (
                        <FaAngular
                            onClick={() => setShowNav(!showNav)}
                            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
                        />
                    )}
                </div>

                <ul
                    className={
                        (showNav ? "left-0" : "-left-full") +
                        " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-10/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-left"
                    }
                >
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Shop</a></li>
                    <li><a href=''>Contact</a></li>
                    <li><a href=''>About</a></li>

                </ul>
            </nav>
            <header className='bg-blue-500 w-45 h-48 mb-3' >
                <div>
                    <h1 className='text-4xl text-bold text-center font-serif  '>welcome<span className={'text-slate-50	'}>Website Tags</span>
                    </h1>
                    <div className='w-1/6 h-36 overflow-y-scroll -mb-2 '>
                         <p >
                        You can specify background images
                        for any visible HTML element.
                        In this example, the background image
                        is specified for a p element.
                        By default, the background-image
                        will repeat itself in the direction(s)
                        where it is smaller than the element
                        where it is specified. Try resizing the
                        browser window to see how the
                        background image behaves.
                    </p>

                    <p >
                        You can specify background images
                        for any visible HTML element.
                        In this example, the background image
                        is specified for a p element.
                        By default, the background-image
                        will repeat itself in the direction(s)
                        where it is smaller than the element
                        where it is specified. Try resizing the
                        browser window to see how the
                        background image behaves.
                    </p>

                    </div>
                    

                </div>


            </header>
        </div>

    )
}

export default Header