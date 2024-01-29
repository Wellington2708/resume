import ExperienceCSS from './Experience.module.css'

function Experience({subtitle, period, task1, task2, task3, task4}){
    return(
        
        <div className={ExperienceCSS.professional}>
                <div className={ExperienceCSS.professional__experience}>
                    <h2>{subtitle}</h2>
                    <p className={ExperienceCSS.period}>{period}</p>
                </div>
                <ul>
                    <li className={ExperienceCSS.item}>{task1}</li>
                    <li className={ExperienceCSS.item}>{task2}</li>
                    <li className={ExperienceCSS.item}>{task3}</li>
                    <li className={ExperienceCSS.item}>{task4}</li>

                </ul>

        </div>
      
    )
}

export default Experience