import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';
import defaultProfilePhoto from '../../assets/images/default_profile_pic.jpg'

let HeaderTemplate = ({authUserID, rootEl, isOpened, onMenuClick, onLogOut, authUserData}) => {
    return (
        <header className={styles.wrapper}>
            <NavLink to={'/profile/' + authUserID} className={styles.logo} style={{'color': 'white'}}>ReactApp</NavLink>
            <div className={styles.menu} ref={rootEl} onClick={(e) => onMenuClick(e)}>
                <div className={styles.photo}><img src={authUserData.photos.small || defaultProfilePhoto} alt='' /></div>
                <div className={styles.name}>{authUserData.fullName}</div>
                <div className={styles.arrow}></div>
                <ul className={styles.dropDownMenu} style={ isOpened ? {'display': 'block'} : {'display': 'none'}}>
                    <li><NavLink to={'/profile/' + authUserID}>Profile</NavLink></li>
                    <li><NavLink to='/edit'>Edit Profile</NavLink></li>
                    <li><NavLink to='/users'>Manage Friends</NavLink></li>
                    <li><NavLink to='/login' onClick={(e) => onLogOut(e)}>Logout</NavLink></li>
                </ul>
            </div>
        </header>
    )
}
export default HeaderTemplate;