import "./App.css";
import Header from "./components/Header";
import HeaderCss from "../src/components/Header/Header.module.css";
import ExperienceCSS from "./components/Experience/Experience.module.css";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <div className="App">
        <Header
          image={"http://github.com/Wellington2708.png"}
          GithubImage={"Github perfil image"}
        />
        <hr className={HeaderCss.endFirstPart}></hr>
        <section className={ExperienceCSS.professional}>
          <h1 className={ExperienceCSS.experience}>Professional Experience</h1>
          <div>
            <Experience />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
