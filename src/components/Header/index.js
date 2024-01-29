import HeaderCSS from './Header.module.css'

function Header({image, GithubImage}){
    return(
        <header className={HeaderCSS.header}>

        <div className={HeaderCSS.image}>
            <img src={image} alt={GithubImage} className={HeaderCSS.profile__picture} />
        </div>

        <div id={HeaderCSS.datas}>
            <button className={HeaderCSS.button}>My datas</button>
        </div>
    </header>
    )
}

export default Header