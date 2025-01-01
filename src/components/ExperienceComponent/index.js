import ExperienceCSS from '../Experience/Experience.module.css'

function ExperienceComponent({ subtitle, period, tasks }) {
    return(
    <div className={ExperienceCSS.professional__experience}>
        <h2>{subtitle}</h2>
        <p className={ExperienceCSS.period}>{period}</p>
        <ul>
        {tasks.map((task, index) => (
            <li key={index} className={ExperienceCSS.item}>{task}</li>
        ))}

        </ul>
    </div> )
};

export default ExperienceComponent;