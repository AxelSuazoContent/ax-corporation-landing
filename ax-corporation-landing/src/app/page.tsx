import Narvar from "./Components/Narvar";
// import Body from "@/components/Body";
import Footer from "./Components/Foooter";
import Armado from "./Components/Armado-Body/Armado";

import { Merriweather_Sans } from "next/font/google";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <Narvar />

      {/* BODY */}
      
      <Armado />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
