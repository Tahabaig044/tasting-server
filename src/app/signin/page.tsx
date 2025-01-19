import Image from "next/image";
import Link from "next/link";
import { SlEnvolope } from "react-icons/sl";
import { IoIosCheckbox } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import Header from "@/components/Header";
export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
     <Header/>

      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">404 Error</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › 404
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 ">Sign In</h3>
          <form>
            <div className="mb-4">
              <h1
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 flex gap-2"><SlEnvolope className="text-xl"/> Email</h1>
            </div>
            <div className="mb-4">
              <h1 className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300 flex gap-2"><MdLockOutline  className="text-xl"/> Password</h1>
            </div>
            <div className="flex items-center mb-4">
            <IoIosCheckbox className="text-bordercoloryello text-xl"/>
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 "
            >
              Sign In 
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-gray-500 flex justify-end">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/google.png" alt="Google" className="h-6 mr-2" width={20} height={20} />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/apple.png" alt="Apple" className="h-6 mr-2" width={20} height={20} />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto py-10 px-6 grid grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p>
              Corporate clients and leisure travelers rely on FoodTuck for dependable service.
            </p>
            <p className="mt-2">Opening Hours: Mon-Sat 9:00 AM - 6:00 PM</p>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-bold mb-2">Useful Links</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h4 className="font-bold mb-2">Help</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/support-policy">Support Policy</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
          {/* Recent Posts */}
          <div>
            <h4 className="font-bold mb-2">Recent Posts</h4>
            <ul>
              <li>Is fast food good for your body? - Feb 20, 2022</li>
              <li>Change your food habit - Feb 18, 2022</li>
              <li>Do you like fast food? - Feb 15, 2022</li>
            </ul>
          </div>
        </div>
        <p className="text-center py-4">
          © 2024 FoodTuck. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
