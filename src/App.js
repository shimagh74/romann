import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../src/assets/css/main.css'
import 'antd/dist/antd.css'
import Home from './page/home/home';
import Contact from './page/contact/contact';
import AboutUs from './page/aboutUs/aboutUs';
import Buy from './page/buy/buy';
import Mag from './page/mag/mag';
import {StoreProvider} from './context/auth-context';
import DetailCard from './page/detailCard/detailCard';
import DetailMag from './page/detailMag/detailMag';



function App() {
    return (
        <StoreProvider store={{name:""}}> 
        <BrowserRouter>
            <Switch>
                  <Route exact path="/" component={Home}/> 
                  {/* <Route  path="/detailCard/DetailCard" component={DetailCard}/>  */}
                  <Route  path="/detailMag/DetailMag" component={DetailMag}/> 
                <Route exact path="/mag/Mag" component={Mag}/> 
                 <Route exact path="/buy/Buy" component={Buy}/>
                 <Route exact path="/contact/Contact" component={Contact}/>
                 <Route exact path="/aboutUs/AboutUs" component={AboutUs}/> 
            </Switch>
        </BrowserRouter>
        </StoreProvider>

    );
}

export default App;
