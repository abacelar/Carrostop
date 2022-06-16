import SearchButton from 'components/SearchButton';
import ProductCard from '../../components/ProductCard';
import './styles.css'

const Catalog = () => {
  return (
    <>
      <div className="page-container">
        <div className="base-card search-container">
          <div className="search-card"><input type="text" placeholder="Digite sua busca"></input></div>
          <div className="btn-container"><SearchButton /></div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-lg-4 card-container">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 card-container">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 card-container">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 card-container">
            <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 card-container">
            <ProductCard />
            </div>
        </div>

      </div>
    </>
  );
};

export default Catalog;
