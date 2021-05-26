import React from "react";



export default function Project4() {
  return (
   
<div class="bg-gray">
 
  <div class="relative pb-24 bg-gray-800">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=BKMIUbtu0C&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt=""></img>
      <div class="absolute inset-0 bg-blue-400 mix-blend-multiply" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-22 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Game of Bones</h1>
      <p class="mt-6 max-w-3xl text-xl text-gray-300">This full stack app is a card collecting game for multiple players. This was a collaborative, team project.</p>
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
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-600 text-white">
              MySQL
            </span>
          </a>
        </div>
        <a href="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">
            MySQL + Sequelize ORM
          </p>
          <p class="mt-3 text-base text-gray-500">
            Utilizes a MySQL database with Sequelize for Object Relational Mapping to associate cards with decks of cards, owned by individual users. 
          </p>
        </a>
        
      </div>

      <div>
        <div>
          <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-400 text-white">
              Express Session
            </span>
          </a>
        </div>
        <a href="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">
            User Authentication
          </p>
          <p class="mt-3 text-base text-gray-500">
            Built on Express.js and using Express-Session and cookies users can sign up, sign in and have different views based on authentication. 
          </p>
        </a>
        
      </div>

      <div>
        <div>
            <span class="inline-flex items-center mb-3 px-3 py-0.5 rounded-full text-sm font-medium bg-green-200 text-gray">
              Handlebars
            </span>
        </div>
        
          <p class="text-xl font-semibold text-gray-900">
            Templating Engine
          </p>
          <p class="mt-3 text-base text-gray-500">
            The handlebars.js templating engine takes a JavaScript input object and dynamically renders content. 
          </p>
          <div className="mt-5"><a className="link" href="https://ancient-shelf-96067.herokuapp.com/" target="blank">View the app</a>.</div>
      </div>
      
      
    </div>
  </div>
</div>
  </div>
  </section>
</div>
  )
}
