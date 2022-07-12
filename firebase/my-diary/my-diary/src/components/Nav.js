import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
import { useLogout } from '../hooks/useLogout'

export default function Nav() {
    const { logout } = useLogout();

    return (
        <nav className={styles.nav}>
            <h1 className={styles.tit}>My Diary</h1>
            <ul className={styles.list_nav}>
                <li><Link to="/login">로그인</Link></li>
                <li><Link to="/signup">가입하기</Link></li>
                <li><button type="button" onClick={logout}>로그아웃</button></li>
            </ul>
        </nav>
    )
}