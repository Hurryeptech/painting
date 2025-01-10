import React from 'react'

const Hero = () => {
  return (
    <div className="md:flex lg:px-8 lg:py-8 py-8 px-4 overflow-hidden">
      <div className="md:w-1/2 w-full flex  flex-col justify-center items-start lg:ps-32 ps-4">
          {" "}
          <h1 className='lg:text-3xl md:text-xl text-lg text-gold font-bold font-aclonica'>Discover Our Panting Collection</h1>
          <p className='lg:py-8 py-6 text-gold '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
            ipsum senectus aenean tellus lectus risus id. Enim elit feugiat nunc
            ac faucibus nibh elit massa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio placeat quos consequuntur natus voluptatem vel, maiores illo neque soluta consectetur. Pariatur corrupti voluptas libero voluptatem voluptates, rerum earum beatae.
          </p>
          <button className="bg-gold text-white font-bold py-2 px-4 text-sm font-aclonica md:text-base rounded-full">
            Shop Now
          </button>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <img src="/assets/hero-img.png" alt="" className='lg:[100%] md:w-[60%] sm:w-[80%] md:flex hidden'/>
      </div>
    </div>
  );
}

export default Hero