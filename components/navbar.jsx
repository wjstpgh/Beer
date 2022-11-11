import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto px-20 py-20 grid grid-cols-6 gap-4 text-3xl">
      <Link href='/' className="col-start-1 col-span-1">
        <span className="px-9 py-4 font-serif italic text-orange-400 bg-gradient-to-r from-black via-gray-500 to-gray-600 hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-500 hover:to-gray-100 rounded-xl">Home</span>
      </Link>
      <Link href='/listpage' className="col-start-5 col-span-1">
        <span className="px-9 py-4 font-serif italic text-orange-500 bg-gradient-to-r from-black via-gray-500 to-gray-600 hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-500 hover:to-gray-100 rounded-xl">List</span>
      </Link>
      <Link href='/wishpage' className="col-start-6 col-span-1">
        <span className="px-9 py-4 font-serif italic text-orange-600 bg-gradient-to-r from-black via-gray-500 to-gray-600 hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-500 hover:to-gray-100 rounded-xl">Wish</span>
      </Link>
    </div>
  );
}

export default Navbar;