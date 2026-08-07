"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavDropdown from "./NavDropdown";

import { Phone, Mail }  from "lucide-react";


// Flattened course list for search
const COURSES = [
  // Long Courses
  {
    name: "CHC33015 – Certificate III in Individual Support (Ageing and Disability)",
    path: "/courses/long-courses/CHC33015CoursePage",
  },
  {
    name: "CHC43015 – Certificate IV in Ageing Support",
    path: "/courses/long-courses/CHC43015CoursePage",
  },
  {
    name: "CHC43121 – Certificate IV in Disability Support",
    path: "/courses/long-courses/CHC43121CoursePage",
  },
  // Short Courses
  {
    name: "HLTAID009 – Provide Cardiopulmonary Resuscitation",
    path: "/courses/short-courses/HLTAID009CoursePage",
  },
  {
    name: "HLTAID011 – Provide First Aid",
    path: "/courses/short-courses/HLTAID011CoursePage",
  },
   { name: "Non-Accredited Short Course ", 
    path: "/courses/short-courses/Non-accredited" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 

  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowResults(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const navItemClass = (path: string) =>
    pathname === path
      ? "text-[#b42d72] font-semibold"
      : "text-gray-700 hover:text-[#c5720c] transition";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Courses",
      children: [
     
        {
          name: "✅ Short Courses",
          path: "#",
          children: [
            {
              name: "HLTAID009–Provide Cardiopulmonary Resuscitation",
              path: "/short-courses/HLTAID009CoursePage",
            },
            {
              name: "HLTAID011 Provide First Aid",
              path: "/short-courses/HLTAID011CoursePage",
            },
             
          ],
        },
           
      ],
      basePath: "/courses",
    },

   { name: "FAQ", path: "/faq" },
    // { name: "Career Hub", path: "/career-hub" },
    
    { name: "Corporate", path: "/corporate" },
     { name: "Contact", path: "/contact" },
    
  ];

  const filteredCourses = COURSES.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#043352] text-white text-base tracking-wide py-3 ">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
     <div className="flex items-center space-x-6">
  {/* Phone */}

              <a
  href="tel : +0285308337"
  className="flex items-center gap-1 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
>
  <Phone className="w-6 h-6 text-[#C4A15A]" />
  <span>02 8530 8337</span>
</a>
  

  {/* Email */}
  <div className="flex items-center gap-1 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
    <Mail className="w-6 h-6 text-[#C4A15A]" />
    <span>info@cardinalinstitute.edu.au</span>
  </div>
</div>


          <div className="flex space-x-4 text-base tracking-wide">
           <Link href="https://cardinalinstitute.rto.net.au/Account/Index" className="hover:underline transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Staff Portal
            </Link>
            <Link
  href="https://cardinalinstitute.rto.net.au/Form/Index?id=cardinalinstitute&formType=1"
  target="_blank"
  className="hover:underline transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
>
  Enrol Now
</Link> 
            
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white shadow-sm transition-all z-50 relative ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
       <div className="w-full px-10 flex justify-start items-center gap-10">
  
  {/* Logo */}
  <Link href="/" className="flex items-center">
    <img
      src="/logo.png"
      alt="Cardinal Institute Logo"
      className="h-16 w-auto"
    />
  </Link>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-6 text-lg font-semibold relative flex-1">

    {menuItems.map((item) =>
      item.children ? (
        <NavDropdown
          key={item.name}
          title={item.name}
          items={item.children}
          basePath={item.basePath}
        />
      ) : (
        <Link
          key={item.name}
          href={item.path}
          className={navItemClass(item.path)}
        >
          {item.name}
        </Link>
      )
    )}

   <Link
 href="https://cardinalinstitute.rto.net.au/Form/Index?id=cardinalinstitute&formType=1"
 
  className="ml-6 bg-[#C4A15A] text-white px-10 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
>
  Enrol Now
</Link>


  </div>

  {/* Mobile Menu Icon */}
  <button
    className="md:hidden ml-auto"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</div>


      </nav>

      {/* Mobile Menu */}
{/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden bg-white border-b shadow-lg px-4 py-4 space-y-4">

    {menuItems.map((item) =>
      item.children ? (
        <NavDropdown
          key={item.name}
          title={item.name}
          items={item.children}
          basePath={item.basePath}
          mobile
        />
      ) : (
        <Link
          key={item.name}
          href={item.path}
          onClick={() => setMobileMenuOpen(false)}
          className="block text-gray-700 py-2 text-lg hover:text-[#c5720c]"
        >
          {item.name}
        </Link>
      )
    )}

    <a
      href="https://cardinalinstitute.rto.net.au/Form/Index?id=cardinalinstitute&formType=1"
      className="block w-full text-center px-5 py-2 mt-3 bg-[#C4A15A] text-[#0B1F3A] rounded-lg"
    >
      Enrol Now
    </a>

  </div>
)}
    </header>
  );
}
