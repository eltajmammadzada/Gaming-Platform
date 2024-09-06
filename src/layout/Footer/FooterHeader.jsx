import Button from "../../common/Button";


export default function FooterHeader() {
  return (
    <>
    <div className="flex flex-col gap-6 mb-10">
        <h3 className="lg:text-3xl md:text-2xl text-xl font-medium">Lorem, ipsum.</h3>
        <p className="text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, neque?</p>
    </div>
    <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 bg-[#1C140F] rounded-2xl py-10 px-10 mb-10">
        <div>
            <h3 className="lg:text-3xl md:text-2xl text-xl font-medium space-y-2">Stay in the loop</h3>
            <p className="text-base font-normal">Subscribe to receive the latest news and updates about TDA.
            We promise not to spam you! </p>
        </div>
        <div className="flex lg:justify-end justify-center items-center">
        <div className="bg-white h-12 w-fit flex items-center justify-between pl-5 pr-1 rounded-lg">
            <input type="text" placeholder="Enter email adress" className="bg-transparent outline-none text-black" />
            <Button variant="footer">Continue</Button>
        </div>
        </div>
    </div>
    </>
  )
}
