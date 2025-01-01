import EducationComponent from '../EducationComponent';
function Course() {
    const alura = {
        subtitle: "Front-end developer - Alura Course - BR",
        period: "Date: 2022-05-01 to Currently",
        task: [
            "HTML",
            "CSS",
            "Javascript",   
            "React",
            "Typescript",
            "Programming logic",
            "Git",
            "GitHub",
            "Bootstrap",
            "Node.js",
            "Networks",
            "Database"

        ]
    };

    const fasam = {
        subtitle: "People Management - FASAM - Faculdade Sul Americana - BR",
        period: "Date: 2011-01-02 to 2011-12-20",
        task: [
            "Recruitment and selection",
            "Personal Department",
            "Quality",
            "Psychology",
            "Math",
            "Psychology",
            "Occupational hygiene and safety"
        ]
    };

    const language = {
        subtitle: "Alura - Duolinguo - Mario Vergara Course",
        period: "Undefined Date",
        task: [
            "Portuguese : Native",
            "English * Listening: A2, Speaking: A2, Writing A2",
            "Spanish * Listening: B1, Speaking: B1, Writing B1"
        ]
    };


    return (
        <>
            <EducationComponent {...alura} />
            <EducationComponent {...fasam} />
            <EducationComponent {...language} />

        </>
    );
}

export default Course;