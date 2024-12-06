import './App.css';
import About from './component/about/About';
import Navbar from './component/navbar/Navbar';
import HireMe from './component/hireme/HireMe';
import Work from './component/work/Work';
import Contact from './component/contact/Contact';
import Wrapper from './util/Wrapper';
import Project from './component/project/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-mainContainner'>
        <div className='app-container1'>
          <Wrapper child={<About />}/>
          <Wrapper child={<HireMe />}/>
        </div>
        <div className='app-container2'>
          <div className='app-int2'>
            <Wrapper child={<Work />}/>
            <Wrapper child={<Project />} />
          </div>
          <div className='app-int3'>
            <Wrapper child={<Contact />}/>
            <HireMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
