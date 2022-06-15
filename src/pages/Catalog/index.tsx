import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="row">
            <div className="col-sm-6 col-lg-4">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
            <ProductCard />
            </div>
        </div>

      </div>
    </>
  );
};

export default Catalog;