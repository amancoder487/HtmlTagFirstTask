import React from 'react'

const Flexboxtask = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <header>
            <div className='mt-[56px] mx-[120px] items-center flex justify-between'>
                <div className='flex justify-between gap-[21px] items-center'>
                    <img className='w-[76px]  h-[76px] ' src='images/logo.jpg'  />
                    <h1 className='w-[142px] h-[44px]  text-[#2B2B2B] font-bold text-[30px]'>Excursy</h1>
                </div>
                <nav>
                    <ul className='  flex justify-center items-center h-[100%] p-[0px] gap-[48px]  '>
                        <li className='text-[18px] text-[Manrope] text-[#FF6600] hover:border-b-2 border-b-blue-800' >Home</li>
                        <li className='text-[Manrope] font-normal text-[18px]  text-[#2B2B2B] hover:border-b-2 border-b-blue-800'>About us </li>
                        <li className='text-[Manrope] font-normal text-[18px] text-[#2B2B2B] hover:border-b-2 border-b-blue-800'>Our interest</li>
                        <li className=' font-normal text-[Manrope] text-[#2B2B2B] hover:border-b-2 border-b-blue-800 '>Values</li>
                        <li className=' font-normal text-lg text-[Manrope] text-[#2B2B2B] hover:border-b-2 border-b-blue-800'>Current Projects</li>
                        
                    </ul>
                </nav>
                <button className='bg-[#FF6600] gap-[10px] w-[146px] h-[55px] rounded-[8px] p-[12px_40px_12px_42px] '><span>Sign Up</span></button>
            </div>
        </header>

        <section>
            <div className='mx-[120px] mt-[127px] flex flex-wrap h-[460px] flex-col'>
                <div className='w-[50%] order-1'>
                    <h1 className='w-[502px] h-[219px] text-[Manrope] font-extrabold text-6xl text-[#2B2B2B]'> Let’s take a tour to <span className='text-[#FF6600]'>Blockchain</span>  Technology</h1>
                    <p className='w-[448px] h-[64px] text-[Manrope] font-normal text-lg text-[#5B5B5B] '> We are highly focused by blockchain technology that will lead positively to the future web. </p>
                </div>
                <div className='w-[50%] order-3'>
                    <img className='w-[739px] h-[390px] ' src="images/Frame.jpg"/>
                </div>
                <div className=' gap-[32px] w-[50%] order-2 flex  text-center  '>
                    <button className='bg-[#FF6600] rounded-[10px] w-[208px] h-[64px] '><span className='text-[Manrope] font-bold text-[16px] '>Get Started</span></button>
                    <button className='w-[208px] h-[64px] rounded-[10px] p-[16px] border-[1px] border-[#FF6600]  '><span className=' font-bold  text-base text-[Manrope] text-[#2B2B2B]'>Learn more</span></button>
                </div>
            </div>
        </section>
        <section>
            <div className={'mt-[159px] ml-[202px] flex justify-center items-center p-0 w-[1035px] h-[57px] gap-12  '}>
                <img className='w-[169px] h-[43px]' src='images/A.png'/>
                <div className='w-[57px] h-[57px] border-r-2 border-[#C0C5D2]'/>
               <img className='w-[234px] h-[47px]' src='images/imageA.png'/>
               <div className='w-[57px] h-[57px] border-r-2 border-[#C0C5D2]'/>
               <img className='w-[169px] h-[51px]' src='images/image 16.png'/>
               <div className='w-[57px] h-[57px] border-r-2 border-[#C0C5D2]'/>
                <img className='w-[175px] h-[37px]'  src='images/M.png'/>

            </div>
        </section>
        <section>
            <div className= 'w-[1185px] h-[378px] gap-[35px] flex    mt-[144px] ml-[105px] mr-[120px]'>
                <div >
                    <img className='w-[546px] h-[331px] ' src='images/About.png'/>
                </div>
                <div className='flex flex-col items-start gap-9 w-[639px] h-[378px]'>
                <div >
                    <h1 className=' leading-[68px] text-[Manrope] font-extrabold text-[52px] mb-[35px]  text-[#2B2B2B]'>About Us</h1>
                    <p className='text-[#5B5B5B] w-[555px] h-[108px] text-[Manrope] font-normal text-xl '>We generated names based on a multitude of factors and picked the one that resonated with us the most. Our founder first engaged with the blockchain in 2013</p>

                </div>
                <div className='mt-[35px] flex w-[639px] justify-between items-center h-[132px]  '>
                    <div className='flex flex-col items-center '><p className='  text-[Manrope] font-semibold text-2xl text-[#5B5B5B] mb-[8px]'>Project Done<span className='  block  text-center text-[Manrope] font-bold text-[40px] text-[#FF6600]'>600+</span></p></div>
                    <div className='h-[80px] border-r-[3px] border-[#FF600]'/>
                    <div className='flex flex-col items-center'><p className=' text-[Manrope] font-semibold text-2xl text-[#5B5B5B] mb-[8px]'>Happy Client<span className='block text-center  text-[Manrope] font-bold text-[40px] text-[#FF6600]'>950+</span></p></div>
                    <div className='h-[80px] border-r-[3px] border-[#FF600]'/>
                    <div className='flex flex-col items-center'><p className=' text-[Manrope] font-semibold text-2xl text-[#5B5B5B] mb-[8px]'>Employee<span className=' mx-auto block text-center text-[Manrope] font-bold text-[40px] text-[#FF6600]'>30+</span></p></div>
                    <div className='h-[80px] border-r-[3px] border-[#FF600]'/>
                </div>
                </div>
                
            </div>
        </section>
        <section>
            <div className='w-[765px]  mt-[158px]  mx-[338px]'>
                <h1 className='text-[Manrope] font-semibold text-[52px] leading-[130%] text-center mb-[35px]'>Our Interests</h1>
                <div className=' max-w-[765px]'></div>
                <p className='text-[Manrope] font-normal text-xl leading-[180%] text-center text-[#5B5B5B]'>It's the norm these days to lay out a roadmap that gives stakeholders an indication of the direction that the project aspires to go. Inspired by Elon Musk’s 2006 masterplan, these are our skeleton ambitions.</p>

            </div>
        </section>
        <section>
            <div className=' gap-[30px] mt-[65px] mx-[121px] w-[1197px]  flex justify-center'>
                <div className='flex flex-col  w-[379px]  bg-[#FFFFFF] rounded-[12px] pl-[40px] pt-[44px] pb-[45px]'>
                    <img className='w-[70px]  h-[70px] bg-[#FFEDE6] rounded-[8px]' src="images/AI.png" />
                
                    <h1 className='my-[24px] text[Manrope] text-[28px] leading-[38px] font-bold text-[#2B2B2B]'>Blockchain product </h1>
                    <p className=' text[Manrope] max-w-[299px] text-[#5B5B5B] font-normal text-lg leading-[180%]'>Create something novel that has never been done on the blockchain before Build a product</p>
                    <p className='mt-[32px] text-[#FF6600] text-[Manrope] font-semibold text-lg leading-[180%]'>Read More</p>

                    
                    

                </div>
                <div className='flex flex-col  w-[379px] pl-[40px] pt-[44px] pb-[45px]  bg-[#FFFFFF] rounded-[12px] '>
                    <img className='w-[70px] h-[70px] bg-[#FFE1E9] rounded-[8px]' src='images/BI.png'/>
                    <h1 className='my-[24px] text[Manrope] text-[28px] leading-[38px] font-bold text-[#2B2B2B]'>Blockchain product </h1>
                    <p className='text[Manrope] max-w-[299px] text-[#5B5B5B] font-normal text-lg leading-[180%]'>Create something novel that has never been done on the blockchain before Build a product</p>
                    <p className='text-[#FF6600] mt-[32px] text-[Manrope] font-semibold text-lg leading-[180%]'>Read More</p>


                </div>
                <div className='flex flex-col justify-between w-[379px] pl-[40px] pt-[44px] pb-[45px]  bg-[#FFFFFF] rounded-[12px] border-2 '>
                    <img className='w-[70px] h-[70px] bg-[#DBF9ED] rounded-[8px]' src='images/CI.png' />
                    <h1 className='my-[24px] text[Manrope] text-[28px] leading-[38px] font-bold text-[#2B2B2B]'>Blockchain product </h1>
                    <p className='text[Manrope] max-w-[299px] text-[#5B5B5B] font-normal text-lg leading-[180%]'>Create something novel that has never been done on the blockchain before Build a product</p>
                    <p className='text-[#FF6600] mt-[32px] text-[Manrope] font-semibold text-lg leading-[180%]'>Read More</p>


                </div>
            </div>
        </section>
        <section>
            <div className='mt-[140px] mx-[122px]  flex gap-[35px]'>
                <div>
                    <img src='images/Our.png' className='w-[513.86px] h-[352.19px] '/>
                </div>
                <div className='w-[614px]  gap-[35px] flex flex-col justify-center'>
                    <h1 className='text-[52px] font-extrabold leading-[130%] text-[Manrope] text-[#2B2B2B]'>Our Values</h1>
                    <p className=' text-[Manrope] font-normal text-xl max-w-[614px] leading-[180%] text-[#5B5B5B]'>anftw is a hallmark. The team members may change, but the quality of our project execution will not.An outstanding team can build a product in any industry. Don’t be intimidated by incumbents.</p>
                    <button className=' text-[Manrope] w-[161px] bg-[#FF6600] rounded-lg h-[54px] font-semibold text-lg leading-[25px] text-[#FFFFFF]] text-[white]'>Read More</button>
                </div>

            </div>
        </section>
        <section>
            <div className='mt-[114.27px] '>
                <h1 className='text-[52px] ml-[506px]  font-extrabold leading-[130%] text-[#2B2B2B]'>Current Projects</h1>
                <div className='mx-[120px] mt-[75px] flex gap-[30px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <img src='images/FAO.png' className='w-[380px] h-[378px] '/>
                        <p className='text-[Manrope] font-semibold leading-[150%] text-[28px] ' >Certified Great Expectations Lover</p>
                        <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B]'>Certified Great Expectations Lover - To add value to  <span className='text-[#FF6600]'>Read more.</span></p>
                    </div>
                    <div  className='flex flex-col gap-[24px]'>
                        <img src='images/FAT.png' className='w-[380px] h-[378px] gap-[24px] '/>
                        <p className='text-[Manrope] font-semibold leading-[150%] text-[28px] ' >BlockSpace - A solar System</p>
                        <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B]'>BlockSpace - We built the first ever accurate model of <span className='text-[#FF6600]'>Read more.</span></p>
                    </div>
                    <div  className='flex flex-col gap-[24px]'>
                        <img src='images/FAO.png' className='w-[380px] h-[378px]'/>
                        <p className='text-[Manrope] font-semibold leading-[150%] text-[28px] ' >0xProxy - A web 3.0 Website</p>
                        <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B]'>BlockSpace - We built the first ever accurate model of <span className='text-[#FF6600]'>Read more.</span></p>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className='w-[1440] mt-[132px] bg-[#2B2B2B]'>
                <div className='ml-[622px] pt-[56px] flex items-center  gap-4'>
                    <img className='w-[62.64px] h-[62.64px]' src='images/logo.jpg'/>
                    <p className='text-[30px] leading-[41px] font-bold text-[Manrope] text-[#FFFFFF]'>Excursy</p>
                </div>
                <div className='flex ml-[621px] mt-[43.36px] items-start gap-6 '>
                    <img src='images/facebook.png'  className='w-36px h-36px'/>
                    <img src='images/github.png'  className='w-36px h-36px'/>
                    <img src='images/linkedin.png'  className='w-36px h-36px'/>
                    <img src='images/twitch.png'  className='w-36px h-36px'/>

                </div>
                <div className='ml-[426px] py-[40px] '>
                    <ul className='flex gap-10 items-start  '>
                        <li className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800' >Home</li>
                        <li className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800'>About us</li>
                        <li  className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800'>Our interests</li>
                        <li  className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800'>Values</li>
                        <li  className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800'>Current Projects</li>

                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Flexboxtask