
 function Contact() {
    return (
        <section className="py-16 pt-24">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <div className="bg-[#00D8FF] text-black p-6 rounded-lg">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3CC]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3CC]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3CC]"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#00A3CC] text-white px-6 py-2 rounded hover:bg-[#80EBFF] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;