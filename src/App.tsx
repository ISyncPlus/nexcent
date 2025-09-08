import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-quicksand bg-[#F5F7FA] h-screen">
      <Navbar/>
      <Hero/>
    </div>
  );
}