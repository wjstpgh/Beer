import Beer from "../components/beer";
import Navbar from "../components/navbar";

const ListPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-20 py-8 backdrop-blur-sm bg-stone-50/30 rounded-xl">
        <table className="container table-auto">
          <thead>
            <tr className="grid grid-cols-6">
              <th className="col-span-4">Beer name</th>
              <th className="col-span-1">abv</th>
              <th className="col-span-1">add to cart</th>
            </tr>
          </thead>
          <tbody>
            <Beer /><Beer /><Beer /><Beer />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;