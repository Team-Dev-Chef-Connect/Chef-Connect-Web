import Footer from '../components/Footer';
import NewHero from '../components/NewHero';
import Home from './Home';
import './permanentchef.css';

function Permanentchef(){
    return(
        <div className='permanentchef'>
           <Home />
           <NewHero />
           <Footer />
        </div>
    )
}

export default Permanentchef;

