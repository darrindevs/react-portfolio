import React from "react";



export default function Project3() {
  return (
   
<div class="bg-gray">
 
  <div class="relative pb-24 bg-gray-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=BKMIUbtu0C&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt=""></img>
      <div class="absolute inset-0 bg-yellow-300 mix-blend-multiply" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-22 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Clicky Game</h1>
      <p class="mt-6 max-w-3xl text-xl text-white">Click on each robot only once to master this React game and become master of the galaxy!</p>
    </div>
  </div>
  <section class="-mt-32 max-w-7xl mx-auto relative  px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">

  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-18 lg:px-8 rounded">
  <div class="relative max-w-lg mx-auto divide-gray-200 lg:max-w-7xl">
    <div class="grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      <div>
        <div>
          <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-400 text-white">
              React
            </span>
          </a>
        </div>
        <a href="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">
            Tracking State
          </p>
          <p class="mt-3 text-base text-gray-500">
            React tracks which robots have been clicked to update the state and track the score.
          </p>
        </a>
        <div className="mt-5">
          <a href="https://darrindevs.github.io/clicky/" target="blank">View the app</a>.
        </div>
        
      </div>

      <div>
        <div>
          <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-600 text-white">
              React Render
            </span>
          </a>
        </div>
        <a href="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">
            Dynamic Content Rendering
          </p>
          <p class="mt-3 text-base text-gray-500">
            React tracks the state of the clicked cards to dynamically render new cards from the Robots JSON object.
          </p>
        </a>
        
      </div>

      <div>
        <div>
            <span class="inline-flex items-center mb-3 px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-400 text-white">
              JavaScript
            </span>
        </div>
        
          <p class="text-xl font-semibold text-gray-900">
            Content Shuffling
          </p>
          <p class="mt-3 text-base text-gray-500">
            Each time a card is clicked Math.random() shuffles the remaining cards randomly.
          </p>
          <div className="mt-5">
            <a className="link" href="https://darrindevs.github.io/clicky/" target="blank">View the app</a>
          </div>
      </div>
    </div>
  </div>
</div>
  </div>
  </section>
</div>
  )
}
