import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewHero from '../components/NewHero';
import Home from './Home';
import './permanentchef.css';

function Permanentchef(){
    return(
        <div className='permanentchef'>
           <Navbar />
           <Home />
           <NewHero />
           <Footer />
        </div>
    )
}

export default Permanentchef;

