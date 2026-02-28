import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "About", href: "#about"},
    { name: "Education", href: "#education"},
    { name: "Achievements & Certificates", href: "#achievements"},
    { name: "Projects", href: "#projects"},
    { name: "Skills", href: "#skills"},
    { name: "Hobbies", href: "#hobbies"},
    { name: "Contact", href: "#contact"},
  ]

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b1120]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-xl font-bold">
            Anushka Sarkar<span className="text-primary">.</span>
          </h1>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className=" text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#0b1120] z-40 transform transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
          <h1 className="text-xl font-bold">
            Anushka Sarkar<span className="text-primary">.</span>
          </h1>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-8 mt-12 px-8 text-lg">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar