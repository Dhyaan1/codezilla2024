import "./App.css";
// import { CardStackDemo } from "./components/AcernityUIDemos/CardStackDemo";
import PawDrawLine from "./components/customui/PawDrawLine/PawDrawLine";
import PawAdopt from "./components/customui/PawAdopt";
import PawDonate from "./components/customui/PawDonate";
import PawHarm from "./components/customui/PawHarm";
import PawHeader from "./components/customui/PawHeader";
import PawIntro from "./components/customui/PawIntro";
import PawProgress from "./components/customui/PawProgress";
import AnimalsGrid from "./components/customui/grid-skins/AnimalsGrid";
// import MySecondComponent from "./components/customui/MySecondComponent/MySecondComponent";

function App() {
  return (
    <>
      <PawProgress />
      <PawHeader />
      <div className="h-auto bg-[#f5f5f5] flex flex-col justify-center items-center font-prata">
        {/* Replace this with your component or just edit this one */}
        <PawIntro />
        <PawHarm />
        <PawDrawLine />
        <AnimalsGrid />
        <PawAdopt />
        <PawDonate />
        {/* A Second Component if you need it */}
        {/* <MySecondComponent /> */}
        {/* Demo for an Acernity UI component */}
        {/* <CardStackDemo /> */}
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-gray-50">
        <p className="text-xs text-gray-400">
          © 2024 Paws for a Cause. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Built by Dharmisht, Kusha, Hrishik and Dhyaan
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            CodeZilla 2024
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;
