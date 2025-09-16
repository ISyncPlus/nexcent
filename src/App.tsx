import Clients from "./components/Clients";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-quicksand bg-[#F5F7FA] h-full">
      <main className="px-5 md:px-10">
        <Navbar/>
        <Hero/>
        <Clients/>
        <Community/>
      </main>
      <Footer/>
    </div>
  );
}