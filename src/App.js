import './App.css';
import About from './component/about/About';
import HireMe from './component/hireme/HireMe';
import Work from './component/work/Work';
import Contact from './component/contact/Contact';
import Wrapper from './util/Wrapper';
import Project from './component/project/Project';
import Tilt from 'react-parallax-tilt';
import Stats from './component/stats/Stats';
import Github from './component/github/Github';
import Tech from './component/tech/Tech';

function App() {
  return (
    <div className="App">
      <div className='app-container1'>
        <Tilt>
          <Wrapper child={<Work />} />
        </Tilt>
        <Tilt>
          <Wrapper child={<HireMe />} />
        </Tilt>
      </div>
      <div className='app-container2'>
        <div className='app-int2'>
          <Tilt>
            <Wrapper child={<About />} />
          </Tilt>
          <Tilt>
            <Wrapper child={<Project />} />
          </Tilt>
        </div>
        <div className='app-int3'>
          <Tilt>
            <Wrapper child={<Stats />} />
          </Tilt>
          <Tilt>
            <Wrapper child={<Github />} />
          </Tilt>
          <Tilt>
            <Wrapper child={<Contact />} />
          </Tilt>
        </div>
      </div>
      <div className='app-container3'>
        <Wrapper child={<Tech />} />
      </div>
    </div>
  );
}

export default App;
