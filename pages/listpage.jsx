import Beer from "../components/beer";
import Navbar from "../components/navbar";

const ListPage = () => {
  return (
    <div>
      <Navbar />
      <div>

      <Beer /><Beer /><Beer /><Beer />
      </div>
    </div>
  );
}

export default ListPage;