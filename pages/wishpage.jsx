import BeerWish from "../components/beer-wish";
import Navbar from "../components/navbar";

const Wishpage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-12 py-6 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        <div className="grid grid-cols-4 gap-2">
          <BeerWish />
          <BeerWish />
          <BeerWish />
          <BeerWish />
          <BeerWish />
          <BeerWish />
        </div>
      </div>
    </div>
  );
}

export default Wishpage;