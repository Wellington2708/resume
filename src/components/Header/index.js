import HeaderCSS from './Header.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header({image, GithubImage}) {
    const datas = {
        name: "Wellington",
        lastName: "Luis",
        birth: "1988-08-27",
        age: 36,
        prefix: "+351",
        number: "938204083",
        city: "Aveiro",
        country: "Portugal",
        email: 'wellingtonjunior1027@gmail.com'

    };
    // Estado que armazena os dados de contato
    const [openDatas, setOpenDatas] = useState(false);

    const toggleDatas = () => {
        setOpenDatas(!openDatas);
    }



    return (
        <>
            <header className={HeaderCSS.header}>
                <div className={HeaderCSS.image}>
                    <img src={image} alt={GithubImage} className={HeaderCSS.profile__picture} />
                </div>
                <div id='datas' className={HeaderCSS.contact__datas}>
                 <button className={HeaderCSS.button}  onClick={toggleDatas} id='button'>
                    {openDatas ? 'Close Datas' : 'Open Datas'}
                 </button>
                </div>
                           
            {openDatas && (
                <ul className={HeaderCSS.header__list__contacts}>
                    <li className={HeaderCSS.name}>Name: {datas.name} {datas.lastName}</li>
                    <li className={HeaderCSS.item}>Date of birth: {datas.birth}</li>
                    <li className={HeaderCSS.item}>Age: {datas.age}</li>
                    <li className={HeaderCSS.item}>Phone Number: ({datas.prefix}) {datas.number}</li>
                    <li className={HeaderCSS.item}>City: {datas.city}</li>
                    <li className={HeaderCSS.item}>Country: {datas.country}</li>
                    <li className={HeaderCSS.item}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href={`mailto:${datas.email}`} target='_blank' rel="noopener noreferrer" className={HeaderCSS.email}>Email</a>
                    </li>
                    <li className={HeaderCSS.link__color}>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <a className={HeaderCSS.linkedin} href="https://www.linkedin.com/in/wellington-luis-41513874/" target='_blank' rel="noopener noreferrer">Linkedin</a>
                    </li>  
                    <li className={HeaderCSS.link__color}>
                        <FontAwesomeIcon icon={faGithub} className={HeaderCSS.githubIcon} />
                        <a className={HeaderCSS.gitHub} href="https://github.com/Wellington2708" target='_blank' rel="noopener noreferrer">GitHub</a>
                    </li>
                </ul>
            )}
       
            </header>

        </>
    );
}

export default Header;
