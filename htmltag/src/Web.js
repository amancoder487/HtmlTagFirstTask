import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";


const Web = () => {
    return (
        <div className={"container mx-auto bg-slate-200 w-[90%]"}>
            <header>
                <div className={"p-[10px] grid grid-cols-3 justify-between"}>

                    <div className={'ml-[49px]'} >
                        <h1 className={' text-xl '}>SECUREM4</h1>
                    </div>
                    <nav className={' bg-yellow w-full '} >
                        <ul className={"flex justify-center space-x-5"}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Feature</li>
                            <li>+1(234)45 644 </li>

                        </ul>
                    </nav>


                    <div className={'flex space-x-3'}>
                        <span className={"text-[44px] bg-[aliceblue] p-[5px] rounded-[50%] "}><MdOutlineFacebook /></span>
                        <span className={"text-[44px] bg-[aliceblue] p-[5px] rounded-[50%] "}><BsTwitter /></span>
                        <span className={"text-[44px] bg-[aliceblue] p-[5px] rounded-[50%] "}><AiFillInstagram /></span>
                    </div>


                </div>

            </header>
            <section>
                <div className={"grid grid-cols-2 w-[80%] ml-[95px]"}>
                    <div className={' mt-[77px] '}>
                        <p className={'mb-2 text-bold'}>Security Company</p>
                        <p className={'text-2xl text-blue-700 border-r-[2px] h-[98px] border-solid border-blue-700 mr-[124px]	'}>Smart Home<br /> Security</p>
                    </div>


                    <div className={'mt-[77px] '}>
                        <p className={'text-xs mt-[33px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Ratione accusamus exercitationem at nostrum iure fugit animi, aut incidunt hic. Sapiente<br /> nemo eos suscipit quos earum maxime quisquam aliquam doloremque aliquid?</p>

                    </div>

                </div>
            </section>
            <section>
                <div className='mt-[79px] w-[80%] mx-auto ' >
                    <div >
                        <h1 className={'text-2xl text-center text-[3rem] p-[24px] text-[#36187d]'}>Our Features</h1>
                        <p className={'text-center text-xs'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className={'grid grid-cols-3 gap-y-1 mt-[22px] place-items-center'}>
                            <div className={'rounded-[20px] p-[17px]  bg-white border-1 h-[180px]  border-black'}>
                                <div className='mx-auto max-w-max text-[43px]'>
                                    <IoMdHome />
                                </div>
                                <h1>Smart Home Security</h1>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>
                            <div className={'rounded-[20px] p-[17px]  bg-white border- 1 h-[180px]  border-black'}>
                                <div className='mx-auto max-w-max text-[43px] '>
                                    <FaGitAlt />
                                </div>
                                <h1>Cyber Security</h1>
                                <p>Lorem ipsum dolor sit amet </p>
                            </div>
                            <div className={'rounded-[20px] p-[17px]  bg-white border-1 h-[180px]  border-black'}>
                                <div className='mx-auto max-w-max text-[43px]'>
                                    <BsFillCameraVideoFill />
                                </div  >
                                <h1>CCTV Camera</h1>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className={'grid grid-cols-2 w-[80%] '}>
                    <div className='ml-[99px] mt-[80px]'>
                        <h1 className='text-[22px] text-[slateblue]'>About Company</h1>
                        <p>The safety our coustome priority</p>
                    </div>
                    <div className='mt-[80px]  ml-[111px]'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, unde in! Harum, repellendus explicabo incidunt eos, quia veniam ea aperiam mo</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1 className={"max-w-max m-auto text-[45px] text-[slateblue]"}>Our Products</h1>
                    <div className={"grid grid-cols-2 gap-3 ml-[76px]"}>
                        <div className={"border-1 w-[80%]  border-black rounded-3xl bg-white"}>
                            <div className={'mb-[7px] p-[9px]'} >
                                <div className={"flex justify-between"}>
                                    <h1 className='text-[slateblue]'>Smart Home Security</h1>
                                    <p>$139</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur  <br /> Omnis quam odit tempore? Deserunt tenetur<br /> cum id nihil commodi, nemo, nequ</p>
                            </div>

                        </div>
                        <div className={"border-1 w-[80%]  border-black rounded-3xl bg-white"}>
                            <div className={'mb-[7px] p-[9px]'} >
                                <div className={"flex justify-between"}>
                                    <h1 className='text-[slateblue]'>Smart Home Security</h1>
                                    <p>$139</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur  <br /> Omnis quam odit tempore? Deserunt tenetur<br /> cum id nihil commodi, nemo, nequ</p>
                            </div>

                        </div>
                        <div className={"border-1 w-[80%]  border-black rounded-3xl bg-white"}>
                            <div className={'mb-[7px] p-[9px]'} >
                                <div className={"flex justify-between"}>
                                    <h1 className='text-[slateblue]'>Smart Home Security</h1>
                                    <p>$139</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur  <br /> Omnis quam odit tempore? Deserunt tenetur<br /> cum id nihil commodi, nemo, nequ</p>
                            </div>

                        </div>
                        <div className={"border-1 w-[80%]  border-black rounded-3xl bg-white"}>
                            <div className={'mb-[7px] p-[9px]'} >
                                <div className={"flex justify-between"}>
                                    <h1 className='text-[slateblue]'>Smart Home Security</h1>
                                    <p>$139</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur  <br /> Omnis quam odit tempore? Deserunt tenetur<br /> cum id nihil commodi, nemo, nequ</p>
                            </div>

                        </div>
                        <div className={"border-1 w-[80%]  border-black rounded-3xl bg-white"}>
                            <div className={'mb-[7px] p-[9px]'} >
                                <div className={"flex justify-between"}>
                                    <h1 className='text-[slateblue]'>Smart Home Security</h1>
                                    <p>$139</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur  <br /> Omnis quam odit tempore? Deserunt tenetur<br /> cum id nihil commodi, nemo, nequ</p>
                            </div>

                        </div>
                        <div className={"border-1 w-[80%]  border-black rounded-3xl bg-white"}>
                            <div className={'mb-[7px] p-[9px]'} >
                                <div className={"flex justify-between"}>
                                    <h1 className='text-[slateblue]'>Smart Home Security</h1>
                                    <p>$139</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet consectetur  <br /> Omnis quam odit tempore? Deserunt tenetur<br /> cum id nihil commodi, nemo, nequ</p>
                            </div>

                        </div>






                    </div>
                </div>

            </section>
            <section>
                <div>
                    <h1 className='max-w-max m-auto text-[45px] text-[slateblue]'>Our Upcoming Envent</h1>
                    <div className={"flex gap-x-4   "}>
                        <div className={" max-w-max mt-[17px] border-1 bg-white border-black rounded-3xl ml-[70px] "}>
                            <img className='w-[210px]' src='data:image/jpeg;base64,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' />
                            <div className='pl-[16px]'>
                                <h1>Cyber Security</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum facilis voluptatum velit corrupti! Animi </p>
                                <p className='text-[slateblue]'>Read More</p>

                            </div>
                        </div>

                        <div className='" mr-[70px] mt-[17px] max-w-max bg-white border-1  border-black rounded-3xl "'>

                            <img className='w-[216px]' src='data:image/jpeg;base64,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' />
                            <div className='pl-[16px]'>
                                <h1>Smart Home Security</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum facilis voluptatum velit corrupti! Animi </p>
                                <p className='text-[slateblue]'>Read More</p>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className='pt-2 Pl-[67px] '>
                    <h1 className={"text-2xl ml-[62px]"}>OUR Team</h1>
                    <div className='flex justify-between bg-white border-1 border-black  h-[140px] rounded-[38px] w-[729px] ml-[76px] mt-[10px]'>
                        <div className='flex p-[17px] '>
                            <img className='pr-2 w-[115px] rounded-[69px]' src='https://www.best4geeks.com/wp-content/uploads/2018/08/47-lovely-girl-profilw-picture-1024x778.jpg' />
                            <p className={'text-black'}>James Ford <span className='flex flex-col'>General Director</span></p>
                        </div>
                        <div className='p-[17px] text-[56px] text-[turquoise]'><FiArrowRight /></div>


                    </div>
                    <div className='flex justify-between bg-white border-1 border-black  h-[140px] rounded-[38px] w-[729px] ml-[76px] mt-[10px]'>
                        <div className='flex p-[17px] '>
                            <img className='pr-2 rounded-[69px] w-[115px]' src='https://images.creativemarket.com/0.1.0/ps/694819/1360/2037/m1/fpnw/wm1/veijuri50eljfb58pdrkoxwydmn7t001fozvf7ivvhtcu78iluxiijvrgfjk8exh-.jpg?1444048761&s=239cf003bbcb985b310625a508da7bf7' />
                            <p className={'text-black'}>James Ford <span className='flex flex-col'>General Director</span></p>
                        </div>
                        <div className='p-[17px] text-[56px] text-[turquoise]'><FiArrowRight /></div>


                    </div>
                    <div className='flex justify-between bg-white border-1 border-black  h-[140px] rounded-[38px] w-[729px] ml-[76px] mt-[10px]'>
                        <div className='flex p-[17px] '>
                            <img className='pr-2 w-[115px] rounded-[69px]' src='https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg' />
                            <p className={'text-black'}>James Ford <span className='flex flex-col'>General Director</span></p>
                        </div>
                        <div className='p-[17px] text-[56px] text-[turquoise]'><FiArrowRight /></div>


                    </div>
                </div>
            </section>
            <section>
                <div className='flex mt-10'>
                    <div className='w-[50%] ml-[65px] '>
                        <h1 >About Us</h1>
                        <p className='text-2xl text-[blue] mb-1'>Secure Features</p>
                        <p>Lorem ipsum, dolor sit amet consectetur .<br /> Expedita ut suscipit omnis doloribus </p>
                    </div>
                    <div className='w-[50%]  '>
                        <div className='mb-[35px]'>
                            <div className='flex '>
                                <h1 className=' text-[10px]'>Smart Home Security</h1>
                                <p className='ml-[184px] text-[10px]'>92</p>
                            </div>
                            <div className=" bg-gray-400 rounded-full mr-[108px]">
                                <div className="bg-blue-600 w-[308px] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full " value="92" max="100" > 92%</div>
                            </div>
                        </div>

                        <div className='mb-[35px]'>
                            <div className='flex'>
                                <h1 className=' text-[10px]'>Syber Security</h1>
                                <p className='ml-[184px] text-[10px]'>71</p>
                            </div>
                            <div className=" bg-gray-400 rounded-full mr-[108px]">
                                <div className="bg-blue-600 text-xs w-[71%] font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full " value="71" max="100" > 71%</div>
                            </div>

                        </div>
                        <div className='mb-[35px]'>
                            <div className='flex'>
                                <h1 className=' text-[10px]'>Cctv Camera</h1>
                                <p className='ml-[184px] text-[10px]'>53</p>
                            </div>
                            <div className=" bg-gray-400 rounded-full mr-[108px]">
                                <div className="bg-blue-600 text-xs font-medium w-[53%] text-blue-100 text-center p-0.5 leading-none rounded-l-full " value="53" max="100" > 53%</div>
                            </div>

                        </div>



                    </div>

                </div>
            </section>
            <section>
                <div className='flex gap-x-3 mt-[83px] m-auto max-w-max'>
                    <div>
                        <img className='w-[398px] rounded-[77px]' src='https://th.bing.com/th/id/OIP.VjLEOTMvHn0vwNm7UohnHAHaEK?pid=ImgDet&rs=1' />
                        <p className='m-auto max-w-max'>Cyber Security</p>
                    </div>
                    <div>
                        <img className='w-[398px] h-[224px] rounded-[77px]' src='https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' />
                        <p className='m-auto max-w-max'>Home securoty page</p>
                    </div>
                </div>

            </section>

            <section>
                <div className='mt-[57px]  '>
                    <h1 className='max-w-max mx-auto mb-8'>Accordian FAQ</h1>
                    <div>
                        <div className='flex justify-between mb-[29px] h-[77px] w-[760px] ml-[122px] p-[21px] rounded-[87px] bg-white'>
                            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div>
                            <div className={"text-[44px] bg-[aliceblue] p-[5px] rounded-[50%] "}><GoChevronDown /></div>
                        </div>
                        <div className='flex justify-between h-[77px] mb-[29px] w-[760px] ml-[122px] p-[21px] rounded-[87px] bg-white'>
                            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div>
                            <div className={"text-[44px] bg-[aliceblue] p-[5px] rounded-[50%] "}><GoChevronDown /></div>
                        </div>
                        <div className='flex justify-between h-[77px] w-[760px] mb-[29px] ml-[122px] p-[21px] rounded-[87px] bg-white'>
                            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div>
                            <div className={"text-[44px] bg-[aliceblue] p-[5px] rounded-[50%] "}><GoChevronDown /></div>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <h1 className='text-2xl text-blue-600 max-w-max mx-auto'>Our Client</h1>
                <div className='flex items-center h-[117px] w-[760px] rounded-[87px] bg-slate-300 ml-[125px] mt-5 gap-x-2'>
                    <img className='w-[115px] ml-[13px]  pl-5 border-1  rounded-[87px]  bg-white my-3' src='https://3.bp.blogspot.com/-fUzMQC1zmR0/XOQlCX9jttI/AAAAAAABT2M/fMcxCh-LruMDCdVeHtwZNjfnUKgOQ568gCK4BGAYYCw/s1600/Ferrisariato.png' />
                    <img className='w-[115px]  pl-5 border-1 rounded-[87px] my-3  bg-white' src='https://3.bp.blogspot.com/-fUzMQC1zmR0/XOQlCX9jttI/AAAAAAABT2M/fMcxCh-LruMDCdVeHtwZNjfnUKgOQ568gCK4BGAYYCw/s1600/Ferrisariato.png' />
                    <img className='w-[115px]  pl-5 border-1  rounded-[87px] my-3  bg-white' src='https://3.bp.blogspot.com/-fUzMQC1zmR0/XOQlCX9jttI/AAAAAAABT2M/fMcxCh-LruMDCdVeHtwZNjfnUKgOQ568gCK4BGAYYCw/s1600/Ferrisariato.png' />
                    <img className='w-[115px]  pl-5 border-1  rounded-[87px] my-3  bg-white' src='https://3.bp.blogspot.com/-fUzMQC1zmR0/XOQlCX9jttI/AAAAAAABT2M/fMcxCh-LruMDCdVeHtwZNjfnUKgOQ568gCK4BGAYYCw/s1600/Ferrisariato.png' />
                    <img className='w-[115px]  pl-5 border-1 rounded-[87px] my-3  bg-white' src='https://3.bp.blogspot.com/-fUzMQC1zmR0/XOQlCX9jttI/AAAAAAABT2M/fMcxCh-LruMDCdVeHtwZNjfnUKgOQ568gCK4BGAYYCw/s1600/Ferrisariato.png' />
                    <img className='w-[115px]  pl-5 border-1  rounded-[87px] my-3  bg-white' src='https://3.bp.blogspot.com/-fUzMQC1zmR0/XOQlCX9jttI/AAAAAAABT2M/fMcxCh-LruMDCdVeHtwZNjfnUKgOQ568gCK4BGAYYCw/s1600/Ferrisariato.png' />

                </div>
            </section>

            <section>
                <h1 className='max-w-max mx-auto mt-[59px] text-2xl text-blue-600'>Testiminol</h1>

                <div className='flex gap-x-5 mt-5 mx-auto max-w-max'>
                    <div className={'w-[50%] max-w-max rounded-[44px] border-1 bg-white border-black'}>

                        <p className='mb-3 text-[11px] p-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Rem hic alias voluptatum, molestias minus natus <br />  cum officiis reprehenderit, molestiae illum blanditiis <br />iste provident sed itaque.</p>


                        <div className='flex ml-[22px]'>
                            <img className=' h-[47px] w-[50px] rounded-[151px]' src='https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg' />
                            <p className='text-[11px]'>Malin Smith <span className='flex flex-col mt-2'>Client</span></p>
                        </div>
                    </div>
                    <div className={'w-[50%] max-w-max rounded-[44px] border-1 bg-white border-black'}>

                        <p className='mb-3 text-[11px] p-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Rem hic alias voluptatum, molestias minus natus <br />  cum officiis reprehenderit, molestiae illum blanditiis <br />iste provident sed itaque.</p>


                        <div className='flex ml-[22px]'>
                            <img className=' h-[47px] w-[50px] rounded-[151px]' src='https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg' />
                            <p className='text-[11px]'>Malin Smith <span className='flex flex-col mt-2'>Client</span></p>
                        </div>
                    </div>


                </div>

            </section>

            <section>
                <div>
                    <div className='max-w-max mx-auto mt-[30px]'>
                        <h1 className='text-2xl text-blue-400 mx-[40%]'>Contacts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className='flex gap-x-3 ml-[217px] mt-[18px] pt-[20px]'>
                        <div className='w-[20%] h-[147px]  rounded-[44px] border-1 bg-white border-black'>
                            <HiOutlineMail className='text-blue-400 text-[62px] mx-auto' />
                            <div className='mx-auto max-w-max'>
                                <h1 className='text-center'>Email</h1>
                                <p className='text-[11px]'>emailyaho@.com</p>

                            </div>

                        </div>
                        <div className='w-[20%] h-[147px] pt-[20px]  rounded-[44px] border-1 bg-white border-black'>
                            <GoLocation className='text-blue-400 text-[62px] mx-auto' />
                            <div className='mx-auto max-w-max'>
                                <h1 className='text-center'>Office</h1>
                                <p className='text-[11px]'>south india street </p>

                            </div>

                        </div>
                        <div className='w-[20%] h-[147px] pt-[20px]  rounded-[44px] border-1 bg-white border-black'>
                            <BsFillTelephoneFill className='text-blue-400 text-[62px] mx-auto' />
                            <div className='mx-auto max-w-max'>
                                <h1 className='text-center'>Phone</h1>
                                <p className='text-[11px]'>+233 43334 34</p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='max-w-max mx-auto mt-[50px] '>
                    <h1 className='text-2xl text-blue-400 text-center'>Subscrible</h1>
                    <p className=' text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Tenetur rem sunt, illum consectetur, inventore eveniet quos rerum q</p>
                </div>
                <div className='flex mx-auto max-w-max mt-[21px] '>
                    <div className='w-[333px] p-[15px] bg-slate-50 rounded-[44px]'>Email</div>
                    <div className='w-[108px] p-[15px] rounded-[44px] bg-blue-800'>Subscrible</div>
                </div>

            </section>
            <section>
                <h1 className='text-center text-3xl text-bold mt-[35px]'>Our Location</h1>
                <div className='gap-x-3 flex mx-auto max-w-max mt-2'>
                    <div>
                        <img src='https://i.ytimg.com/vi/zVgZ0PGPhzU/maxresdefault.jpg' className='w-[370px]' />
                    </div>
                    <div>
                        <img src='https://i.ytimg.com/vi/zVgZ0PGPhzU/maxresdefault.jpg' className='w-[370px]' />
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Web