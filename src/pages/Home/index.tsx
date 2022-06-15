import Navbar from '../../components/Navbar';
import './styles.css';
import Maincar from '../../assets/images/maincar2.png';
import ButtonIcon from '../../components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="card-container">
          <div className="bg-info home-main-container">
            <div className="home-content-container">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>

            <div className="home-image-container">
            <img src={Maincar} alt="car" />
            </div>
          </div>

            <div className="base-card botton-container">
              <p>Comece a navegar agora</p>
              <ButtonIcon />
            </div>

        </div>
      </div>
    </>
  );
};

export default Home;
