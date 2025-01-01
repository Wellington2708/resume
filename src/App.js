import AppCSS from "./App.module.css";
import Header from "./components/Header";
import HeaderCss from "../src/components/Header/Header.module.css";
import ExperienceCSS from "./components/Experience/Experience.module.css";
import Experience from "./components/Experience";
import EducationCSS from './components/Education/EducationComponent.module.css';
import Course from "./components/Education";

function App() {
  return (
    <>
      <div className={AppCSS}>
        <div>
        <Header
          image={"http://github.com/Wellington2708.png"}
          GithubImage={"Github perfil image"} />
         <hr className={HeaderCss.endFirstPart}></hr>
        </div>

        <div className={AppCSS.container}>
          <section className={ExperienceCSS.professional}>
            <h1 className={ExperienceCSS.experience}>Professional Experience</h1>
            <Experience />
          </section>
          <section className={EducationCSS.education}>
            <h1 className={EducationCSS.studyTitle}>Education and training</h1>
            <Course />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
