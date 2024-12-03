import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="hidden  fixed top-0 left-0 w-full md:block my-4 text-grayText">
            <ul className="flex gap-5 w-full justify-center px-9 text-base">
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
            </ul>
        </nav>
    )
}

export default Navbar
