import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import brand from "../public/brand.png";
import facebook from '../public/facebook.svg'
import insta from '../public/insta.svg'
import twitter from '../public/twitter.svg'
import pattern2 from '../public/pattern2.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="flex justify-between w-11/12">
          <Image src={brand} alt="brand" width={350} height={200} />
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row">
              <div className="border-t-2 border-blue w-8 h-1 my-auto mx-2"></div>
              <p className="text-blue text-sm">
              Hello We Are
              </p>
              </div>
            <p className="text-green text-4xl">Coming Soon...</p>
            </div>
            <div className="flex border-l-4 border-blue border-t border-b">
              <input type="email" className="placeholder:text-blue pl-4 text-blue outline-none" placeholder="Email" />
              <button className="bg-blue text-white w-12 h-8 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-between items-end w-full absolute bottom-0 pb-2">
        <div className="flex flex-col space-y-8 pl-12 pb-4">
       <div className="flex justify-evenly">
         <Image className="ml-4" src={facebook} alt="facebook"/>
         <Image className="ml-4" src={twitter} alt="twitter"/>
         <Image className="ml-4" src={insta} alt="instagram"/>
       </div>
       <p className="text-black/50 text-xs">&copy; 2022 AFAK TANZANIA COMPANY LTD</p>
        </div>
        <Image src={pattern2} alt="pattern" width={150} height={220} />
      </footer>
    </div>
  );
};

export default Home;
