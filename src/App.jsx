
import './Global.css';
import {Header} from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import { Aside } from './components/Aside/Aside';
import { Case } from './components/Case/Case';
import { Footer } from './components/Footer/Footer';
import Contact from './components/Contato/Contato';
import MyJobs from './components/MyJobs/MyJobs';
import Benefits from './components/Benefits/Benefits';

function App() {
  return (
    <div className="global">
      <Navigator />
     <Header/>
    <Aside />
    <Case />
    <MyJobs />
    <Benefits />
    <Contact />
    <Footer />
     
      

    
    </div>
  );
}

export default App;
