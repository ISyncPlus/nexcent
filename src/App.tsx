import Clients from "./components/Clients";
import Community from "./components/Community";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-quicksand bg-[#F5F7FA] h-full px-5 md:px-10">
      <Navbar/>
      <Hero/>
      <Clients/>
      <Community/>
    </div>
  );
}