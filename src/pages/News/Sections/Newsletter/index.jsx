const Newsletter = () => {
 return (
  <section className="bg-black p-6 rounded-md text-center my-8 flex flex-row items-center  justify-around">
   <div className="mb-4">
    <h2 className="text-2xl font-bold">Stay in the loop</h2>
    <p className="text-gray-400 mt-2">
     Subscribe to receive the latest news and updates.
    </p>
   </div>
   <div className="flex items-center justify-center mt-4">
    <input
     type="email"
     placeholder="Enter your email"
     className="p-2 rounded-md outline-none mr-2 bg-white"
    />
    <button className="bg-yellow-500 text-black p-2 rounded-md">
     continue
    </button>
   </div>
  </section>
 )
}

export default Newsletter
