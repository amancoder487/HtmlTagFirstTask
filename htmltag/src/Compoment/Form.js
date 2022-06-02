import React from 'react'

const Form = () => {
    return (

        // mx-auto w-max

        <div className={"grid grid-cols-2 gap-x-5 bg-red-500"}>
            <div className={'bg-gray-500   text-center   w-76 h-60'} style={{
                backgroundImage:
                    "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
                height: '100vh',
                marginTop: '10px',
                marginBottom:'10px',
                fontSize: '50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <h1 className='my-10 text-2xl' >1</h1>
                <p className={"font-serif "}>csfcdcdcd dfefiefie cdcdcd
                    cdcdcdcdcd dcdcdcd
                </p>

            </div>


            <div >
                <form className={"w-full mt-4 border-8	border-indigo-800"}>
                    <div className='border-black-300 flex'>
                        <label className={'pr-10 w-30% my-auto'}>Name</label>
                        <input className={" mt-4 w-full pt-4 mr-10 h-20	border-gray-300	  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"} type="text" placeholder='name' maxLength={5} />
                    </div >
                    <div className={"border-black-300 flex"} >
                        <label className={"pr-10 w-30% my-auto"}>Email</label>
                        <input type="email" placeholder="email" className='w-full mt-4 pt-4 mr-10 h-20	border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ' />


                    </div>
                    <div className={" flex my-3"}>
                        <label for="male" className={"text-center"}>Male</label>
                        <input type="radio" name="gender" id="male" className='ml-2 my-auto' />
                    </div>
                    <div className='flex my-3'>
                        <label for="female" className='text-center'>Female</label>
                        <input type="radio" name="gender" id="female" className='ml-2 my-auto' />

                    </div>
                    <div className='mt-4'>

                        <textarea id="w3review" name="w3review" rows="4" cols="50">
                            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                        </textarea>

                    </div>


                </form>


            </div>
            <div>
                <video width="450"
                    height="250"
                    controls
                    preload="auto">
                    <source src=
                        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
                        type="video/mp4" />
                    <source src=
                        "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.ogg"
                        type="video/ogg" />
                </video>
                <audio controls>
                    <source src="test.mp3" type="audio/mp3" />

                </audio>
                <iframe src="https://infynno.com/" title="W3Schools Free Online Web Tutorials">
                </iframe>
            </div>



        </div>



    )
}
export default Form