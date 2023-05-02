// import logo from './logo.svg';
import './App.css';
import OddEvenPrimeChart from './components/OddEvenPrimeChart';
import Numbermap from './components/Numbermap';
import Skills from './components/Skills';
import Countries from './components/Countries';


function App() {
  const arrayNumber = [2,3,4,6,7];
  const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
  ];

  const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
  ];

  return (  
    <div className="App">
        <h1>this is array mapping</h1>

        <Numbermap arr={arrayNumber} />
      <br/>
    <h4>skills</h4>
        <Skills skills={skills} />
    <br/>
    <h4>objectmapping</h4>
    <Countries countries={countries} />


    {/* ================odd even prime chart ===================== */}
    <h1>the odd even prime chart </h1>

    <div className='chartBoxcontainer'>
       <OddEvenPrimeChart  num={31}/>
    </div>


    
    </div>
  );
}

export default App;
