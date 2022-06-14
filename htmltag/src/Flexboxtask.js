import React, { useState } from 'react'
import { BiAlignJustify } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
const Flexboxtask = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='bg-[#FAFAFA]'>
            <header >
                <div className='  mt-[56px]  mx-[120px] items-center flex justify-between sm:mx-[16px] '>

                    <div className='flex justify-between gap-[21px] items-center sm:gap-0 sm:mt-[44px] '>
                        <img className='w-[76px]  h-[76px] sm:w-[44px] sm:h-[44px] ' src='images/logo.jpg' />
                        <h1 className='w-[142px] h-[44px]  text-[#2B2B2B] font-bold text-[30px] sm:text-[24px] sm:pl-[10px]'>Excursy</h1>
                    </div>
                    {isOpen ? <div >

                        <ImCross onClick={() => { setIsOpen(false) }} className='sm:w-[29px] md:hidden  sm:h-[24px]' />
                    </div>
                        : <div >
                            <img src='images/button.png' onClick={() => { setIsOpen(true) }} className='sm:w-[29px] -left-full sm:h-[24px] sm:mt-[54px] w-0 ' />
                        </div>}




                    <nav  >
                        <ul className={(isOpen ? 'sm:left-0' : 'sm:-left-full') + ' transition-left duration-1000	 flex  justify-center items-center p-[0px] gap-[48px] whitespace-nowrap sm:fixed sm:flex-col sm:space-y-3 sm:gap-0 sm:bg-blue-500 sm:w-[100vw] sm:h-[100vh] sm:mt-5   sm:bottom-0  sm:top-12'}>
                            <div className='sm:flex sm:justify-between sm:w-[70vw]  '>
                                <div className='sm:flex sm:flex-col flex  justify-center items-center p-[0px] gap-[48px]'>
                                    <li className='text-[18px] text-[Manrope] text-[#FF6600] hover:border-b-2 border-b-blue-800' >Home</li>
                                    <li className='text-[Manrope] font-normal text-[18px]  text-[#2B2B2B] hover:border-b-2 border-b-blue-800'>About us </li>
                                    <li className='text-[Manrope] font-normal text-[18px] text-[#2B2B2B] hover:border-b-2 border-b-blue-800'>Our interest</li>
                                    <li className=' font-normal text-[Manrope] text-[#2B2B2B] hover:border-b-2 border-b-blue-800 '>Values</li>
                                    <li className=' font-normal text-lg text-[Manrope] text-[#2B2B2B] hover:border-b-2 border-b-blue-800'>Current Projects</li>
                                </div>



                                <ImCross onClick={() => { setIsOpen(false) }} className='sm:w-[29px] md:hidden  sm:h-[24px]' />
                            </div>

                        </ul>
                    </nav>
                    <button className='bg-[#FF6600] gap-[10px] w-[146px] h-[55px] rounded-[8px] p-[12px_40px_12px_42px] hover:border-2 border-blue-800 sm:hidden '><span>Sign Up</span></button>
                </div>

            </header>

            <section>
                <div className='mx-[120px] mt-[127px]  flex flex-wrap h-[460px] sm:h-auto flex-col sm:mt-[50px] sm:mx-[26px]'>
                    <div className='w-[50%] sm:w-[100%] order-1'>
                        <h1 className='w-[502px] h-[219px] text-[Manrope] font-extrabold text-6xl sm:text-[36px] sm:text-center text-[#2B2B2B] sm:w-[100%] sm:h-auto' > Let’s take a tour to <span className='text-[#FF6600]'>Blockchain</span>  Technology</h1>
                        <p className='w-[448px] h-[64px] text-[Manrope] font-normal text-lg text-[#5B5B5B] sm:w-[100%] sm:text-center sm:text-sm sm:mt-[20px] sm:mr-[27px] sm:h-auto'> We are highly focused by blockchain technology that will lead positively to the future web. </p>
                    </div>
                    <div className='w-[50%] sm:w-[100%] sm:mt-[30px] sm:mr-[33px] order-3 sm:order-2'>
                        <img className='w-[739px] h-[390px] sm:w-[309px] sm:h-[164px] ' src="images/Frame.jpg" />
                    </div>
                    <div className=' gap-[32px] mt-[74px] w-[50%] sm:w-[100%] order-2 sm:order-3 sm:mt-[39px] flex  text-center  '>
                        <button className='bg-[#FF6600] rounded-[10px] w-[208px] h-[64px] sm:w-[161px] sm:h-[48px] sm:py-[12px] sm:px-[16px] sm:ml-[17px] sm:whitespace-nowrap sm:flex sm:justify-center sm:items-center sm:py-12px sm:px-16px sm:gap-8px'><span className='text-[Manrope] font-bold text-[16px] sm:text-[14px] text-center text-[#FFFFFF]'>Get Started</span></button>
                        <button className='w-[208px] h-[64px] rounded-[10px] p-[16px] border-[1px] border-[#FF6600] sm:ml-[20px] sm:whitespace-nowrap sm:w-[161px] sm:text-center  sm:h-[48px]  sm:flex sm:justify-center sm:items-center sm:gap-8px '><span className=' font-bold  text-base text-[Manrope] text-[#2B2B2B]'>Learn more</span></button>
                    </div>
                </div>
            </section>
            <section>
                <div className={'mt-[159px] pl-[203px] sm:pl-[0] mx-[17px] flex justify-center items-center  w-[1035px] h-[57px] gap-12 sm:gap-7 sm:mt-[48px]  sm:mr-[31px] sm:ml-[35px] sm: sm:w-[309px] sm:h-[15.23px] '}>
                    <img className='w-[169px] h-[43px] sm:w-[50.46px] sm:h-[12.84px]' src='images/A.png' />
                    <div className='w-[57px] h-[57px] border-r-2 sm:hidden border-[#C0C5D2]' />
                    <img className='w-[234px] h-[47px] sm:w-[69.86px] sm:h-[14.03px] ' src='images/imageA.png' />
                    <div className='w-[57px] h-[57px] border-r-2 sm:hidden border-[#C0C5D2]' />
                    <img className='w-[169px] h-[51px] sm:w-[50.46px] sm:h-[15.23px]' src='images/image 16.png' />
                    <div className='w-[57px] h-[57px] border-r-2 border-[#C0C5D2] sm:hidden' />
                    <img className='w-[175px] h-[37px] sm:w-[52.25px] sm:h-[11.05px]  ' src='images/M.png' />

                </div>
            </section>
            <section>
                <div className='  gap-[35px] max-h-[380px] flex flex-wrap flex-col  mt-[144px] ml-[105px] mr-[120px] sm:max-h-full    sm:mt-[24.6px] sm:mx-[0px]   '>
                    <div className=' sm:order-2 ' >
                        <img className='w-[546px] h-[331px] sm:w-[410px] sm:h-[249px]  ' src='images/About.png' />
                    </div>

                    <div className='  sm:order-1 sm:mx-[16px] sm:m-[16px]'>
                        <h1 className=' leading-[68px] text-[Manrope] font-extrabold text-[52px] sm:text-2xl mb-[35px] sm:mb-[0]  text-[#2B2B2B] sm:text-center sm:leading-[130%] sm:pl-[132px] sm:max-w-max '>About Us</h1>
                        <p className='text-[#5B5B5B] w-[555px] h-[108px] text-[Manrope] font-normal text-xl sm:text-xs sm:text-center sm:w-[343px] sm:h-[66px] sm:px-[16px] sm:pt-[16px]'>We generated names based on a multitude of factors and picked the one that resonated with us the most. Our founder first engaged with the blockchain in 2013</p>

                    </div>
                    <div className='   flex  justify-between items-center  sm:flex-col sm:justify-center sm:items-center sm:gap-[32px]   sm:order-3 sm:w-auto  '>
                        <div className='flex flex-col items-center sm:flex-row-reverse sm:gap-x-[30px]'>
                            <div><p className='  text-[Manrope] font-semibold text-2xl text-[#5B5B5B] mb-[8px] sm:text-base sm:ml-70px '>Project Done</p></div>
                            <div className='  block  text-center text-[Manrope] font-bold text-[40px] text-[#FF6600] sm:bg-[#FFEDE6] sm:w-[64px] sm:h-[45px]  sm:gap-[10px] sm:rounded-[6px] sm:flex sm:justify-center sm:items-center sm:text-[18px]'>600+</div>
                        </div>
                        <div className='h-[80px] border-r-[3px] border-[#FF600] sm:h-0 sm:w-[350px] sm:border-2  sm:border-[#FF6600]  ' />
                        <div className='flex flex-col items-center sm:flex-row-reverse sm:gap-x-[30px]'>

                            <div className='flex flex-col items-center  sm:flex-row'><p className=' text-[Manrope] font-semibold text-2xl text-[#5B5B5B] mb-[8px]  sm:text-base '>Happy Client</p></div>
                            <div className='block text-center  text-[Manrope] font-bold text-[40px] text-[#FF6600] sm:bg-[#FFEDE6] sm:w-[64px] sm:h-[45px]  sm:gap-[10px] sm:rounded-[6px] sm:flex sm:justify-center sm:items-center sm:text-[18px]'>950+</div>
                        </div>
                        <div className='h-[80px] border-r-[3px] border-[#FF600] sm:h-0 sm:w-[350px] sm:border-2 sm:border-[#FF6600] ' />
                        <div className='flex flex-col items-center  sm:flex-row-reverse sm:gap-x-[30px]'>
                            <div className='flex flex-col items-center  sm:flex-row'><p className=' text-[Manrope] font-semibold text-2xl text-[#5B5B5B] mb-[8px] sm:text-base'>Employee</p></div>
                            <div className='block text-center  text-[Manrope] font-bold text-[40px] text-[#FF6600] sm:bg-[#FFEDE6] sm:w-[64px] sm:h-[45px]  sm:gap-[10px] sm:rounded-[6px] sm:flex sm:justify-center sm:items-center sm:text-[18px]'>30+</div>


                        </div>

                        <div className='h-[80px] border-r-[3px] border-[#FF600] sm:h-0 sm:w-[350px]  sm:border-[#FF6600]' />
                    </div>


                </div>
            </section>
            <section>
                <div className='w-[765px]  mt-[158px]  mx-[338px] sm:mx-[18px]  sm:flex sm:flex-col sm:items-center sm:w-[100%]  sm:m-0 sm:justify-center'>
                    <h1 className='text-[Manrope] font-semibold text-[52px] sm:text-[24px]  leading-[130%] text-center mb-[35px] sm:mt-[48px] sm:leading-[24.59px] sm:mb-0'>Our Interests</h1>
                    <div className=' max-w-[765px]'></div>
                    <p className='text-[Manrope] font-normal text-xl sm:text-[12px] leading-[180%] text-center text-[#5B5B5B] sm:pt-[16px] sm:w-[340px] sm:pl-[18px] sm:px-[17px]'>It's the norm these days to lay out a roadmap that gives stakeholders an indication of the direction that the project aspires to go. Inspired by Elon Musk’s 2006 masterplan, these are our skeleton ambitions.</p>

                </div>
            </section>
            <section>
                <div className=' gap-[30px] mt-[65px] mx-[121px] w-[1197px]  flex justify-center sm:flex-col sm:py-[24px] sm:pl-[24px] sm:pr-[65px sm:mx-[16px] sm:w-auto sm:mt-[18px] '>
                    <div className='flex flex-col  w-[379px]  bg-[#FFFFFF] rounded-[12px] pl-[40px] pt-[44px] pb-[45px] sm:p-[24px] sm:flex-row sm:mr-16px sm:mt-18px '>
                        <img className='w-[70px]  h-[70px] bg-[#FFEDE6] rounded-[8px] sm:w-[48px] sm:h-[48px] sm:rounded-[8px]' src="images/AI.png" />
                        <div className='sm:flex sm:flex-col sm:justify-between'>
                            <h1 className='my-[24px] text[Manrope] text-[28px] leading-[38px] font-bold text-[#2B2B2B] sm:text-[18px] sm:my-[0px]  sm:leading-[24.59px]  sm:ml-4'>Blockchain product </h1>
                            <p className=' text[Manrope] max-w-[299px] text-[#5B5B5B] font-normal text-lg leading-[180%]  sm:pl-[16px] sm:text-xs sm:font-normal sm:gap-x-3 sm:pr-[65px]'>Create something novel that has never been done<span className='sm:hidden'> on the blockchain before Build a product </span></p>
                            <p className='mt-[32px] text-[#FF6600] text-[Manrope] font-semibold text-lg leading-[180%]   sm:text-sm sm:mt-[8px] sm:font-normal sm:ml-4'>Read More</p>

                        </div>




                    </div>
                    <div className='flex flex-col  w-[379px] pl-[40px] pt-[44px] pb-[45px]  bg-[#FFFFFF] rounded-[12px] sm:py-[24px] sm:pl-[24px] sm:pr-[65px] sm:flex-row sm:mr-16px sm:mt-[18px]'>
                        <img className='w-[70px] h-[70px] bg-[#FFE1E9] rounded-[8px]' src='images/BI.png' />
                        <div className='sm:flex sm:flex-col sm:justify-between '>
                            <h1 className='my-[24px] text[Manrope] text-[28px] leading-[38px] font-bold text-[#2B2B2B] sm:text-[18px]  sm:my-[0px]  sm:leading-[24.59px] sm:ml-4'>Blockchain product </h1>
                            <p className='text[Manrope] max-w-[299px] text-[#5B5B5B] font-normal text-lg leading-[180% sm:pl-[16px] sm:text-xs sm:font-normal sm:gap-x-3 sm:pr-[65px] '>Create something novel that has never been done<span className='sm:hidden'>on the blockchain before Build a product</span></p>
                            <p className='text-[#FF6600] mt-[32px] text-[Manrope] font-semibold text-lg leading-[180%]  sm:text-sm sm:mt-[8px] sm:font-normal sm:ml-4'>Read More</p>

                        </div>


                    </div>
                    <div className='flex flex-col justify-between w-[379px] pl-[40px] pt-[44px] pb-[45px]  bg-[#FFFFFF]  sm:py-[24px] sm:pl-[24px] sm:pr-[65px sm:flex-row sm:mr-16px sm:mt-[18px]'>
                        <img className='w-[70px] h-[70px] bg-[#DBF9ED] rounded-[8px]' src='images/CI.png' />
                        <div className='sm:flex sm:flex-col sm:justify-between  '>
                            <h1 className='my-[24px] text[Manrope] text-[28px] leading-[38px] font-bold text-[#2B2B2B] sm:text-[18px] sm:leading-[24.59px]  sm:ml-4 sm:my-[0px]'>Blockchain product </h1>
                            <p className='text[Manrope] max-w-[299px] text-[#5B5B5B] font-normal text-lg leading-[180%] sm:pl-[16px] sm:text-xs sm:font-normal sm:gap-x-3 sm:pr-[65px]'>Create something novel that has never been done<span className='sm:hidden'>on the blockchain before Build a product</span></p>
                            <p className='text-[#FF6600] mt-[32px] text-[Manrope] font-semibold text-lg leading-[180%]  sm:mt-[8px] sm:text-sm sm:font-normal sm:ml-4'>Read More</p>

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className='mt-[140px] mx-[122px]  flex gap-[35px] sm:gap-0 sm:flex-col sm:mt-[48px] sm:mx-0 sm:w-[100vw]'>
                    <div >
                        <img src='images/Our.png' className=' sm:w-full' />
                    </div>
                    <div className='w-[614px]  gap-[35px] flex flex-col justify-center sm:gap-y-0 sm:w-[100%] sm:gap-0 sm:gap-x-3 sm:mx-[17px] sm:mx-[16px]'>
                        <h1 className='text-[52px] font-extrabold leading-[130%] text-[Manrope] text-[#2B2B2B] sm:text-center sm:text-2xl '>Our Values</h1>
                        <p className=' text-[Manrope] font-normal text-xl max-w-[614px] leading-[180%] text-[#5B5B5B] sm:text-xs sm:font-normal sm:gap-x-[17px] sm:gap-y-[16px] text-center px-[17px] pt-[16px]'>anftw is a hallmark. The team members may change, but the quality of our project execution will not.An outstanding team can build a product in any industry. Don’t be intimidated by incumbents.</p>
                        <button className=' text-[Manrope] w-[161px] bg-[#FF6600] rounded-lg h-[54px] font-semibold text-lg leading-[25px] text-[#FFFFFF]] text-[white] sm:w-[161px] sm:h-[48px] sm:p-[14px] sm:mt-[32px] sm:gap-[26px] sm:mx-auto'>Read More</button>
                    </div>

                </div>
            </section>
            <section>
                <div className='mt-[114.27px] sm:mt-[47px] '>
                    <h1 className='text-[52px] ml-[506px]  font-extrabold leading-[130%] text-[#2B2B2B] sm:text-[24px] sm:m-0 sm:text-center'>Current Projects</h1>
                    <div className='mx-[120px] mt-[75px] flex sm:flex-col gap-[30px] sm:mx-[16px] sm:mt-[24px] '>
                        <div className='flex flex-col gap-[24px]'>
                            <img src='images/FAO.png' className='w-[380px] h-[378px] sm:w-[343px] sm:h-[274px]' />
                            <p className='text-[Manrope] font-semibold leading-[150%] text-[28px] sm:text-[24px] sm:pr-[96px]' >Certified Great Expectations Lover</p>
                            <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B] sm:text-[12px] sm:text-center sm:hidden'>Certified Great Expectations Lover - To add value to  <span className='text-[#FF6600]'>Read more.</span></p>
                            <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B] sm:text-[12px]  sm:pr-[16px] md:hidden '>Certified Great Expectations Lover - To add value to An outstanding team can build a product in any industry</p>
                            <p className='text-[#FF6600]  sm:w-[106px] sm:h-[22px] md:hidden '>Read More</p>
                        </div>
                        <div className='flex flex-col gap-[24px]'>
                            <img src='images/FAT.png' className='w-[380px] h-[378px]   sm:w-[343px] sm:h-[274px]' />
                            <p className='text-[Manrope] font-semibold leading-[150%] text-[28px] sm:text-[24px] sm:pr-[96px]' >Certified Great Expectations Lover</p>
                            <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B] sm:text-[12px] sm:text-center  sm:hidden'>BlockSpace - We built the first ever accurate model of <span className='text-[#FF6600]'>Read more.</span></p>
                            <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B] sm:text-[12px]  sm:pr-[16px] md:hidden'>Certified Great Expectations Lover - To add value to An outstanding team can build a product in any industry</p>
                            <p className='text-[#FF6600]  sm:w-[106px] sm:h-[22px] md:hidden'>Read More</p>
                        </div>
                        <div className='flex flex-col gap-[24px] '>
                            <img src='images/FAO.png' className='w-[380px] h-[378px]  sm:w-[343px] sm:h-[274px]' />
                            <p className='text-[Manrope] font-semibold leading-[150%] text-[28px] sm:text-[24px]  sm:pr-[96px] ' >Certified Great Expectations Lover</p>
                            <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B] sm:text-[12px]  sm:hidden '>BlockSpace - We built the first ever accurate model of <span className='text-[#FF6600]'>Read more.</span></p>
                            <p className='text-[Manrope] font-normal leading-[180%] text-[20px] text-[#5B5B5B] sm:text-[12px]  sm:pr-[16px] md:hidden   '>Certified Great Expectations Lover - To add value to An outstanding team can build a product in any industry</p>
                            <p className='text-[#FF6600] sm:w-[106px] sm:h-[22px] md:hidden'>Read More</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className=' mt-[132px] bg-[#2B2B2B]   sm:mt-[32px]'>
                    <div className='ml-[622px] pt-[56px] flex items-center  gap-4 sm:pt-[56px]  sm:ml-[90px] sm:mt-[35px]'>
                        <img className='w-[62px] h-[62px] sm:hidden  ' src='images/logo.jpg' />
                        <img className='w-[62px] h-[62px]  md:hidden' src='images/footer.png' />

                        <p className='text-[30px] leading-[41px] font-bold text-[Manrope] text-[#FFFFFF] sm:text-[30px]'>Excursy</p>
                    </div>
                    <div className='flex ml-[621px] mt-[43.36px] items-start gap-6 sm:mt-[38px]  sm:ml-[88px] sm:gap-0 sm:gap-x-[31px]'>
                        <img src='images/facebook.png' className='w-36px h-36px sm:w-[16px] sm:h-[30px]' />
                        <img src='images/twitch.png' className='w-36px h-36px sm:w-[27px] sm:h-[30px]' />

                        <img src='images/linkedin.png' className='w-36px h-36px  sm:w-[18px] sm:h-[29.5px]' />
                        <img src='images/github.png' className='w-36px h-36px sm:w-[29px] sm:h-[31px]' />


                    </div>
                    <div className='ml-[426px] py-[40px] sm:ml-0   sm:pb-[83px] '>
                        <ul className='flex gap-10 items-start sm:gap-0 sm:flex-wrap  sm:gap-x-[50px] sm:gap-y-[35px] mx-[55px] justify-center '>
                            <li className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800  sm:text-[12px]' >Home</li>
                            <li className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800  sm:text-[12px]'>About us</li>
                            <li className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800 sm:text-[12px]'>Our interests</li>
                            <li className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800 sm:text-[12px]'>Values</li>
                            <li className='text-[Manrope] font-normal text-lg leading-[25px] text-[#FFFFFF] hover:border-b-2 border-b-blue-800 sm:text-[12px]'>Current Projects</li>

                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Flexboxtask