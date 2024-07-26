import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'></div>
     <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">DOCUMENTS,</div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[15vw] leading-none tracking-tighter">
        DOCS
      </h1>
      </>
  );
}

export default Background;