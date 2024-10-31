const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git', 'Python', 'SQL']

export default function Home() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="relative">
                <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="John Doe"
                    className="rounded-full border-4 border-[#00D8FF] w-48 h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-2 border-[#80EBFF] rounded-full animate-spin-slow"></div>
                </div>
                {skills.map((skill, index) => (
                    <div
                        key={skill}
                        className="absolute text-[#80EBFF] text-sm"
                        style={{
                            transform: `rotate(${index * (360 / skills.length)}deg) translateY(-120px) rotate(-${index * (360 / skills.length)
                                }deg)`,
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
            <h2 className="mt-8 text-2xl font-bold text-[#00D8FF]">Full Stack Developer</h2>
        </section>
    )
}