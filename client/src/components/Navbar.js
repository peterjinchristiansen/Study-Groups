import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

const links = ['One', 'Two', 'Three']

const Navbar = () => {
    const [active, setActive] = useState(null)

    useEffect(() => {
        const pathName = window.location.pathname.split('/')[1]
        setActive(pathName)
    }, [])

    const getLink = (link) => {
        const path = link.toLowerCase()
        return(
            <Link
                key={link} 
                to={`/${path}`} 
                className={active === path ? style.active : style.inactive}
                onClick={() => setActive(path)}
            >
                {link}
            </Link>
        )
    }

    return(
        <div className={style.navbar}>
            <Link 
                to='/' 
                className={style.logo} 
                onClick={() => setActive(null)}
            >
                StudyGroups
            </Link>
            <div className={style.container}>
                {links.map(link => getLink(link))}
            </div>
        </div>
    )
}

export default Navbar