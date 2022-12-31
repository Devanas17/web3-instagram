import Image from "next/image";
import { AiOutlineSearch, AiOutlineCloudUpload } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import { modalStyles } from "../utils/constant";
import UploadMedia from "./UploadMedia";

Modal.setAppElement("#__next");
const Header = () => {
  const router = useRouter();
  return (
    <header className="shadow-sm border-b bg-white top-0 z-50 sticky">
      <div>
        <ToastContainer />
      </div>
      <div className="flex justify-between items-center bg-white  max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className=" relative hidden lg:inline-grid h-14 w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>

        {/* Middel - Search input Field*/}
        <div className="max-w-xs ">
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <AiOutlineSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="outline-none bg-gray-100 p-1 block w-full pl-10 border-gray-300  focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end">
        <Link href="/?upload=1">
          <AiOutlineCloudUpload className="h-7 w-7 text-black cursor-pointer" />
          </Link>
          <button className="bg-blue-700 text-white w-[120px] h-[36px] text-sm">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="">
        <Modal
          isOpen={!!router.query.upload}
          onRequestClose={() => router.push("/")}
          style={modalStyles}
        >
          <UploadMedia />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
