import EducationCSS from '../Education/EducationComponent.module.css';

function EducationComponent({subtitle, period, task}){
    return(
        <div className={EducationCSS.education__experience}>
            <h2>{subtitle}</h2>
            <p className={EducationCSS.period}>{period}</p>
            <ul>
            {task.map((task, index) => (
                <li key={index} className={EducationCSS.item}>{task}</li>
            ))}
    
            </ul>
        </div> )
    };

export default EducationComponent;
