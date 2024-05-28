import icon_sun from '../public/img/icon-sun.svg'
import icon_moon from '../public/img/icon-moon.svg'

const Header = (props) => {

    return (
        <header className={props.darkMode ? 'dark-theme' : 'light-theme'}>
            <div className='main_container'>
                <h1>TODO</h1>
                <img src={props.darkMode ? icon_sun : icon_moon} onClick={props.switchMode} className='switch-design-icn'></img>
            </div>
        </header>
    )
}

export default Header;