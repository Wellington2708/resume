import './App.css';
import Header from './components/Header';
import HeaderCss from '../src/components/Header/Header.module.css'
import Experience from './components/Experience';
import ExperienceCSS from './components/Experience/Experience.module.css'


function App() {
  return (
    <div className="App">
        <Header  image={"http://github.com/Wellington2708.png"} GithubImage={"Github perfil image"}/>
        <hr className={HeaderCss.endFirstPart}></hr>
        <section className={ExperienceCSS.professional}>
          <h1 className={ExperienceCSS.experience}>Professional Experience</h1>
          <Experience 
          subtitle="Dispatch  - Natuflores - Goiânia - BR"
          period="Date: 2021-02-16 to 2022-03-01 "
          task1="Responsible for picking and sending orders to customers."
          task2="Logistics control."
          task3="Production assistant."
          task4="Stock organization."
          />
          <Experience 
          subtitle="Front attendant/Supplier - GALP TROFA - Portugal"
          period="Date: 2019-01-01 to 2019-06-15"
          task1="Responsible for fueling customer vehicles."
          task2="Washing and drying."
          task3="Inventory supply."
          task4="Stock organization and cleaner."
          />
          <Experience 
          subtitle="Production Assistant - DECOR - Goiânia - BR"
          period="Date: 01-10-2012 to 01-07-2013 - Goiânia - BR"
          task1="Production of construction parts and materials."
          task2="Inventory control, sending orders to the customer."
          task3="Production operator."
          task4="Stock organization."
          />
          <Experience 
          subtitle="Administrative Assistant – Nuclear CDI - Goiânia"
          period="Date: 01-10-2013 to 09-07-2016 - Goiânia - BR"
          task1="Responsible for charging for services provided."
          task2="Contract renewal negotiation."
          task3="Typist."
          task4="Accounts payable control."
          />
          <Experience 
          subtitle="Administrative Assistant – CEBRAMEN - Goiânia - BR"
          period="Date: 08-03-2018 to 07-07-2019 - Goiânia - BR "
          task1="Responsible for charging for services provided."
          task2="Invoice Control."
          task3="Typist."
          task4="Accounts payable control"
          />
      </section>
    </div>
  );
}

export default App;
