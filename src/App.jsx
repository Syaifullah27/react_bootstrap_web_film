import './App.css';
import Navigasi from './components/Navigasi'
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';


import "./style/landingPage.css"

const App = () => {
  return (
   <div>
    {/* intro section */}
    <div className='myBG border'>
      <Navigasi/>
      <Intro />
    </div>
    {/* end intro */}
    
    {/* trending section */}
    <div className='trending'>
      <Trending />
    </div>
    {/* trending end */}
    
    {/* superhero section */}
    <div className='superhero'>
      <Superhero />
    </div>
    {/* superhero end */}

   </div>
  )
}

export default App;
