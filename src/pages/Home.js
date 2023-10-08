import Layout from "../components/Layout/Layout";
import ProductCard from "../components/ProductCard/ProductCard";
import numbers from "../assets/numbers.png";
import Maskchicago from "../assets/Maskchicago.png";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
    return (
        <Layout>
            <Navigation/>
            <div className="container">
                <div className="cards">
                    <ProductCard empty={false} name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button="Купить" />
                    <ProductCard empty={true} name="Маска для мафии «Чикаго»" price="590 ₽" img={Maskchicago} button="Купить" />
                    <ProductCard empty={false} name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button="Купить" />
                    <ProductCard empty={true} name="Маска для мафии «Чикаго»" price="590 ₽" img={Maskchicago} button="Купить" />
                </div>
            </div>
        </Layout>
    )
}

export default Home;