import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
        <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-950 sm:text-center ">© 2023  All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-950  sm:mt-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
