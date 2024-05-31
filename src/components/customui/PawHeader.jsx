import pawLogo from "../../assets/pawLogo.png";

export default function PawHeader() {
  return (
    <>
      <header
        className="px-4 lg:px-6 h-[100px] flex items-center bg-white z-10"
        style={{
          position: "sticky",
          top: 0,
          // borderRadius: "50px",
          // background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
          boxShadow: "5px 5px 20px #bebebe, -5px -5px 20px #ffffff",
        }}
      >
        <a className="flex items-center justify-center" href="#">
          {/* <PawPrintIcon className="h-6 w-6" /> */}
          <img className="pt-10" src={pawLogo} width="100px" />
          <p className="sr-only text-black">Paws for a Cause</p>
        </a>

        {/* <h1>Paws For A Cause</h1> */}
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#learn"
          >
            Learn
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#adopt"
          >
            Adopt
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#donate"
          >
            Donate
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </a>
        </nav>
      </header>
    </>
  );
}
