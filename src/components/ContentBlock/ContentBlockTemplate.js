import styles from './ContentBlock.module.sass'
import facebook from '../../assets/images/socials/facebook.svg'
import github from '../../assets/images/socials/github.svg'
import instagram from '../../assets/images/socials/instagram.svg'
import mainLink from '../../assets/images/socials/mainLink.svg'
import twitter from '../../assets/images/socials/twitter.svg'
import vk from '../../assets/images/socials/vk.svg'
import website from '../../assets/images/socials/website.svg'
import youtube from '../../assets/images/socials/youtube.svg'

function ContentBlockTemplate({ type, aboutMe, jobHuntingStatus, specialSkills, contacts }) {

    let socials = { facebook, github, instagram, mainLink, twitter, vk, website, youtube}

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.heading}>{type}</div>
                <div className={styles.body}>
                    {type === 'about' &&
                        <ul>
                            <li>
                                <div className={styles.title}>Job-hunting status</div>
                                <div className={styles.description}>{jobHuntingStatus ? 'Looking for a job' : 'Not interested in a new job'}</div>
                            </li>
                            <li>
                                <div className={styles.title}>Special skills</div>
                                <div className={styles.description}>{specialSkills}</div>
                            </li>
                            <li>
                                <div className={styles.title}>About me</div>
                                <div className={styles.description}>{aboutMe}</div>
                            </li>
                            <li>
                                <div className={styles.title}>Contacts</div>
                                <div className={styles.description}>
                                    {Object.keys(contacts).map((key) => {
                                        return contacts[key] != null ? <a key={key} className={styles.contactItem} href={contacts[key]} target='_blank' rel="noreferrer"><img src={socials[key]} alt='' /></a> : ""
                                    })}
                                </div>
                            </li>
                        </ul>

                    }

                    {type === 'friends' &&
                        'lorem ipsum'
                    }

                </div>
            </div>
        </div>
    )
}

export default ContentBlockTemplate