import React from 'react'

const Gallary = () => {
  return (
    <div className={"container pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2"}>
        <img src="images/A.jpeg" alt="College" className={"w-full  h-56 p"}/>
        <img src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/92a112431e1259bcb8d3e41f/pexels-linkedin-sales-navigator-2182977.jpg" alt="College" className={"w-full  h-56 p"}/>
        <img src="images/A.jpeg" alt="College" className={"w-full  h-56 p"}/>
        <img src="images/A.jpeg" alt="College" className={"w-full h-56 p"}/>
        <img src="images/A.jpeg" alt="College" className={"w-full  h-56 p"}/>
        <img src="images/A.jpeg" alt="College" className={"w-full  h-56 p"}/>

    </div>
  )
}

export default Gallary