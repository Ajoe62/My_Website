import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 bg-black p-4 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="bg-[#00D8FF] text-black px-6 py-2 rounded-full">
                    <h1 className="text-xl font-bold">Joseph Akharume</h1>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="fixed top-16 right-4 bg-[#00A3CC] p-4 rounded-lg shadow-lg">
                    <ul className="space-y-2">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'My Works', path: '/my-works' },
                            { name: 'Contact', path: '/contact' },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className="block px-4 py-2 hover:bg-[#80EBFF] hover:text-black rounded transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}