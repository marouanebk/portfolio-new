// import Link from "next/link"

// const Navbar = () => {
//     return (
//         <nav className="hidden fixed top-0 left-0 w-full md:block my-4 text-grayText">
//             <ul className="flex gap-5 w-full justify-center px-9 text-base">
//                 <li>
//                     <Link href="/" className="text-white">
//                         Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/">About</Link>
//                 </li>
//                 <li>
//                     <Link href="/">Contact</Link>
//                 </li>
//             </ul>
            
//         </nav>
//     )
// }

// export default Navbar
// import { useState, useEffect } from "react";
// import Link from "next/link";

// const Navbar = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
//         if (isDarkMode) {
//             document.documentElement.classList.add("dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//         }
//     }, [isDarkMode]);

//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     return (
//         <nav className="fixed top-0 left-0 w-full my-4 text-grayText">
//             <ul className="flex gap-5 w-full justify-center px-9 text-base">
//                 <li>
//                     <Link href="/" className="text-white">
//                         Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/">About</Link>
//                 </li>
//                 <li>
//                     <Link href="/">Contact</Link>
//                 </li>
//                 <li>
//                     <label className="switch">
//                         <input
//                             type="checkbox"
//                             checked={isDarkMode}
//                             onChange={toggleTheme}
//                         />
//                         <span className="slider round"></span>
//                     </label>
//                 </li>
//             </ul>
//             <style jsx>{`
//                 .switch {
//                     position: relative;
//                     display: inline-block;
//                     width: 34px;
//                     height: 20px;
//                 }

//                 .switch input {
//                     opacity: 0;
//                     width: 0;
//                     height: 0;
//                 }

//                 .slider {
//                     position: absolute;
//                     cursor: pointer;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background-color: #ccc;
//                     transition: 0.4s;
//                     border-radius: 34px;
//                 }

//                 .slider:before {
//                     position: absolute;
//                     content: "";
//                     height: 14px;
//                     width: 14px;
//                     left: 3px;
//                     bottom: 3px;
//                     background-color: white;
//                     transition: 0.4s;
//                     border-radius: 50%;
//                 }

//                 input:checked + .slider {
//                     background-color: #2196f3;
//                 }

//                 input:checked + .slider:before {
//                     transform: translateX(14px);
//                 }

//                 /* Dark mode styles */
//                 .dark {
//                     background-color: black;
//                     color: white;
//                 }

//                 .dark .text-grayText {
//                     color: white;
//                 }

//                 .dark .text-white {
//                     color: black;
//                 }
//             `}</style>
//         </nav>
//     );
// };

// export default Navbar;

// import { useState, useEffect } from "react"
// import Link from "next/link"

// const Navbar = () => {
//     // State for dark mode
//     const [isDarkMode, setIsDarkMode] = useState(false)

//     // Toggle between dark and light modes
//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode)
//     }

//     // Set background color based on the theme
//     useEffect(() => {
//         if (isDarkMode) {
//             document.body.classList.add("bg-purple-500") // Add purple background in dark mode
//             document.body.classList.remove("bg-white")  // Remove white background
//         } else {
//             document.body.classList.add("bg-white") // Add white background in light mode
//             document.body.classList.remove("bg-purple-500") // Remove purple background
//         }
//     }, [isDarkMode])

//     return (
//         <nav className={`fixed top-0 left-0 w-full my-4 text-grayText ${isDarkMode ? 'bg-purple-500' : 'bg-white'}`}>
//             <ul className="flex gap-5 w-full justify-center px-9 text-base">
//                 <li>
//                     <Link href="/" className="text-white">
//                         Home
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/">About</Link>
//                 </li>
//                 <li>
//                     <Link href="/">Contact</Link>
//                 </li>
//                 <li>
//                 <div className="absolute right-4 top-4 flex items-center">
//                 <label htmlFor="theme-toggle" className="text-white mr-2">
//                     {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//                 </label>
//                 <input
//                     type="checkbox"
//                     id="theme-toggle"
//                     checked={isDarkMode}
//                     onChange={toggleTheme}
//                     className="toggle-switch"
//                 />
//             </div>
//                 </li>
//             </ul>

//             {/* Toggle switch */}
//             {/* <div className="absolute right-4 top-4 flex items-center">
//                 <label htmlFor="theme-toggle" className="text-white mr-2">
//                     {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//                 </label>
//                 <input
//                     type="checkbox"
//                     id="theme-toggle"
//                     checked={isDarkMode}
//                     onChange={toggleTheme}
//                     className="toggle-switch"
//                 />
//             </div> */}

//             <style jsx>{`
//                 .toggle-switch {
//                     width: 40px;
//                     height: 20px;
//                     background-color: ${isDarkMode ? '#4c1d95' : '#e5e7eb'};
//                     border-radius: 9999px;
//                     position: relative;
//                     appearance: none;
//                     cursor: pointer;
//                     transition: background-color 0.3s ease;
//                 }

//                 .toggle-switch:before {
//                     content: '';
//                     position: absolute;
//                     top: 2px;
//                     left: 2px;
//                     width: 16px;
//                     height: 16px;
//                     background-color: white;
//                     border-radius: 50%;
//                     transition: transform 0.3s ease;
//                     transform: ${isDarkMode ? 'translateX(20px)' : 'translateX(0)'};
//                 }
//             `}</style>
//         </nav>
//     )
// }

// export default Navbar

import { useState, useEffect } from "react"
import Link from "next/link"

const Navbar = () => {
    // State for dark mode
    const [isDarkMode, setIsDarkMode] = useState(true)

    // Toggle between dark and light modes
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    // Set background color based on the theme
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("bg-purple-500") // Add purple background in dark mode
            document.body.classList.remove("bg-white")  // Remove white background
        } else {
            document.body.classList.add("bg-white") // Add white background in light mode
            document.body.classList.remove("bg-purple-500") // Remove purple background
        }
    }, [isDarkMode])

    return (
        <nav className={`fixed top-0 left-0 w-full my-4 text-grayText ${isDarkMode ? 'bg-purple-500' : 'bg-white'}`}>
            <ul className="flex gap-5 w-full justify-center px-9 text-base items-center">
                <li>
                    <Link href="/" className="text-white">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>

                {/* Toggle switch */}
                <li className="flex items-center">

                    <input
                        type="checkbox"
                        id="theme-toggle"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                        className="toggle-switch"
                    />
                </li>
            </ul>

            <style jsx>{`
                .toggle-switch {
                    width: 40px;
                    height: 20px;
                    background-color: ${isDarkMode ? '#4c1d95' : '#e5e7eb'};
                    border-radius: 9999px;
                    position: relative;
                    appearance: none;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .toggle-switch:before {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    width: 16px;
                    height: 16px;
                    background-color: white;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                    transform: ${isDarkMode ? 'translateX(20px)' : 'translateX(0)'};
                }
            `}</style>
        </nav>
    )
}

export default Navbar
