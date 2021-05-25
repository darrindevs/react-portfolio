/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import { Link, useLocation } from "react-router-dom";



export default function List3() {
  const location = useLocation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">{/* Content goes here */}
            <div className="bg-grey border-b-2 overflow-hidden mb-5">{/* Project 1 */}
                <Link to="/project1" className={location.pathname === "/project1" ? "nav-link active" : "nav-link"}>
                    <div className="px-4 py-4 sm:px-6 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="project-name">React Portfolio</h2>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="">
                                A professional portfolio built with React. 
                                </p>
                            
                            </div>
                        <div className="mt-2 flex items-center sm:mt-0">
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-yellow-600" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                        </div>
                        </div>
                    </div>
            </Link>
        </div>
        <div className="bg-grey border-b-2 overflow-hidden mb-5">{/* Project 2 */}
                <Link to="/project2" className={location.pathname === "/project2" ? "nav-link active" : "nav-link"}>
                    <div className="px-4 py-4 sm:px-6 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="project-name">Employee Directory</h2>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="">
                                A React app for searching an employee directory.
                                </p>
                            
                            </div>
                        <div className="mt-2 flex items-center sm:mt-0">
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                        </div>
                        </div>
                    </div>
            </Link>
    </div>
    <div className="bg-grey border-b-2 overflow-hidden mb-5">{/* Project 3 */}
                <Link to="/project3" className={location.pathname === "/project3" ? "nav-link active" : "nav-link"}>
                    <div className="px-4 py-4 sm:px-6 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="project-name">Clicky</h2>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="">
                                A memory game built with React. 
                                </p>
                            
                            </div>
                        <div className="mt-2 flex items-center sm:mt-0">
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                        </div>
                        </div>
                    </div>
            </Link>
    </div>
    <div className="bg-grey border-b-2 overflow-hidden mb-5">{/* Project 4 */}
                <Link to="/project4" className={location.pathname === "/project4" ? "nav-link active" : "nav-link"}>
                    <div className="px-4 py-4 sm:px-6 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="project-name">Game of Bones</h2>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="">
                                A card collecting game. 
                                </p>
                            
                            </div>
                        <div className="mt-2 flex items-center sm:mt-0">
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                        </div>
                        </div>
                    </div>
            </Link>
    </div>
    <div className="bg-grey border-b-2 overflow-hidden mb-5">{/* Project 5 */}
                <Link to="/project5" className={location.pathname === "/project5" ? "nav-link active" : "nav-link"}>
                    <div className="px-4 py-4 sm:px-6 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="project-name">Workout Tracker</h2>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="">
                                A workout app built on Express and Mongoose. 
                                </p>
                            
                            </div>
                        <div className="mt-2 flex items-center sm:mt-0">
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                        </div>
                        </div>
                    </div>
            </Link>
    </div>
    <div className="bg-grey border-b-2 overflow-hidden mb-5">{/* Project 6 */}
                <Link to="/project6" className={location.pathname === "/project6" ? "nav-link active" : "nav-link"}>
                    <div className="px-4 py-4 sm:px-6 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="project-name">Portfolio Three</h2>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                                <p className="">
                                 A portfolio with a fun typewriter effect. 
                                </p>
                            
                            </div>
                        <div className="mt-2 flex items-center sm:mt-0">
                            <svg className="-ml-1 mr-1.5 h-4 w-4 text-indigo-100" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx={4} cy={4} r={3} />
                            </svg>
                        </div>
                        </div>
                    </div>
            </Link>
    </div>
    </div>
  </div>
    
  )
}
