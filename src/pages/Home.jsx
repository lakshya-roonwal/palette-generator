import Tile from "@/components/home/Tile";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-full relative bg-neutral-950">
      {/* Grid background */}
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="pointer-events-none absolute w-full h-screen inset-0 flex flex-col items-center justify-between z-10">
        <motion.header
          className="px-4 w-full lg:px-6 h-14 flex items-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Link className="flex items-center justify-center text-white" to="#">
            Logo
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              to="#"
              className="text-sm text-white font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              to="#"
              className="text-sm text-white font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="text-sm text-white font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-sm text-white font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <SignedIn>
            <Button
              className="mx-2 pointer-events-auto bg-white text-black hover:bg-gray-300"
              asChild={true}
            >
              <Link to={"/dashboard"}>Dashboard</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton
              className="mx-2"
              mode="modal"
              redirectUrl="/dashboard"
            >
              <Button className="pointer-events-auto bg-white text-black hover:bg-gray-300">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </motion.header>
        <main className="flex-1">
          <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-800"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Color Generator
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  Generate beautiful color palettes with a single click.
                </motion.p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2"></div>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
};

export default Home;

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
