export default function Home() {
    return (
      <div className="flex justify-around mt-5 text-white-500 ">
        <h1 className="text-3xl font-bold cursor-pointer  ">
        Personal Blog
      </h1>
      <ul className="flex">
        <li className="ml-8 font-bold cursor-pointer  p-1">Home</li>
        <li className="ml-8 font-bold cursor-pointer p-1">About Us</li>
        <li className="ml-8 font-bold cursor-pointer p-1">Services</li>
        <li className="ml-8 font-bold cursor-pointer p-1">Our Terms</li>
        <li className="ml-8 font-bold cursor-pointer p-1">Blog</li>
      </ul>

      </div>
    )
  }