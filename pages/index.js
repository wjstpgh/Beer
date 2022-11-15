import Navbar from "../components/navbar"

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-20 py-8 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        지갑 연동 페이지
      </div>
    </>
  );
}

export default Homepage;