import React from 'react'
import bannerImage from '../assets/logos/Frame.png'
import Button from './Button'
import '.././index'
const Banner = () => {
  const style = {
    border: {},
  }

  return (
    <div className=" flex items-center banner  px-3 justify-center">
      {/* container  */}
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center ">
        <div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-3xl md:text-5xl md:w-3/5">
              Let's Grow Your Brand To The Next Level
            </h1>
            <p className="font-normal md:w-3/5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              odio, soluta explicabo veniam ea similique! Sunt, totam optio
              blanditiis fugiat ea id quam vitae repellendus nisi labore,
              voluptatem odio.
            </p>

            <div>
              <Button text={'Hire us'}></Button>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImage} alt="banner frame" />
        </div>
      </div>
    </div>
  )
}

export default Banner
