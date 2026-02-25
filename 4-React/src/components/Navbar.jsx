import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-md">
            <ul className="flex justify-center items-center gap-8 py-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-white text-lg font-medium hover:text-blue-400 transition px-3 py-1 rounded ${isActive ? "bg-red-500" : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `text-white text-lg px-2 py-2 rounded font-medium hover:text-blue-400 transition ${isActive ? "bg-red-500" : ""}`}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/contact"
                        className={({isActive})=>`text-white text-lg px-2 py-2 rounded font-medium hover:text-blue-400 transition ${isActive?"bg-red-500":""}`}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar
