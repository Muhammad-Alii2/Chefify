import Herosection from "./components/Herosection";
import FeaturedRecipes from "./components/ui/FeaturedRecipes";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
   
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
        <h1 className="text-2xl text-center"></h1>
 <Herosection />
 <FeaturedRecipes />
 <Footer />
       </main>


  );
}
