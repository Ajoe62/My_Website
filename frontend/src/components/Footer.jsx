import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4 flex justify-center space-x-6">
                <a href="#" className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors">
                    <Github size={24} />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors">
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors">
                    <Mail size={24} />
                    <span className="sr-only">Email</span>
                </a>
            </div>
        </footer>
    )
}