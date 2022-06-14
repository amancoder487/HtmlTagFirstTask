import React from 'react'

const Gridtask = () => {
  return (

       <div>
        <header className=' bg-slate-500 text-center text-2xl text-red-800 p-8' >Header</header>
        <div className='  grid   '>
            <aside className='bg-[blue]  '  >Sidebar</aside>
            <main className='bg-[red] grid grid-cols-4   '>
                <div className='border-2 border-[black] bg-amber-400 col-span-2   text-justify'>
                    <h1 className='text-[black] text-lg'>Box1</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate totam fuga distinctio id eos cum delectus soluta vitae amet ab. Nemo explicabo sequi enim aliquid obcaecati mollitia pariatur impedit voluptas.</p>

                </div>
                <div className='border-2 border-[black] bg-amber-400 row-span-2   text-justify'>
                    <h1 className='text-[black] text-lg'>Box2</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate totam fuga distinctio id eos cum delectus soluta vitae amet ab. Nemo explicabo sequi enim aliquid obcaecati mollitia pariatur impedit voluptas.</p>

                </div>
                <div className='border-2 border-[black] bg-blue-400 row-span-2  text-justify'>
                    <h1 className='text-[black] text-lg row-span-2'>Box3</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate totam fuga distinctio id eos cum delectus soluta vitae amet ab. Nemo explicabo sequi enim aliquid obcaecati mollitia pariatur impedit voluptas.</p>

                </div>
                <div className='border-2 border-[black] bg-green-400  row-span-2 text-justify'>
                    <h1 className='text-[black] text-lg'>Box4</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate totam fuga distinctio id eos cum delectus soluta vitae amet ab. Nemo explicabo sequi enim aliquid obcaecati mollitia pariatur impedit voluptas.</p>

                </div>
                <div className='border-2 border-[black] bg-amber-400   text-justify'>
                    <h1 className='text-[black] text-lg'>Box5</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate totam fuga distinctio id eos cum delectus soluta vitae amet ab. Nemo explicabo sequi enim aliquid obcaecati mollitia pariatur impedit voluptas.</p>

                </div>
                <div className='border-2 border-[black] bg-amber-400  col-span-3 text-justify'>
                    <h1 className='text-[black] text-lg'>Box6</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate totam fuga distinctio id eos cum delectus soluta vitae amet ab. Nemo explicabo sequi enim aliquid obcaecati mollitia pariatur impedit voluptas.</p>

                </div>
            
            
            
            
            </main>
           
        </div>
        <footer>Footer</footer>   

        </div>
    
  )
}

export default Gridtask