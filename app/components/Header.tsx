import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div
        className="max-w-7xl mx-auto px-6 py-4 flex 
      justify-between items-center"
      >
        {/*logo  */}
        <Link href="/">
         <Image 
         src="/logo.png"
         alt="Logo"
         width={40}
         height={40}
         className="cursor-pointer"
         />
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transtion"
          >
            About
          </Link>
          <Link href="/contact"
          className="text-gray-700 hover:text-blue-600 transtion">
          Contact</Link>
        </nav>
      </div>
    </header>
  );
}
