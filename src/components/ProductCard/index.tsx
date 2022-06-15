import './styles.css';

import Cardcar from '../../assets/images/cardcar.png';
import CardButtonIcon from '../CardButton';


const ProductCard = () => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src= {Cardcar} alt="cardcar" />
            </div>
            <div className="card-botton-container">
                <h5>Audi Supra TT</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <CardButtonIcon />

            </div>
        </div>
    );
}

export default ProductCard