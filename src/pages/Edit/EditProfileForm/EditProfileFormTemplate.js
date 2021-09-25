import { useForm } from 'react-hook-form';
import styles from './EditProfileForm.module.sass'

function EditProfileFormTemplate({onSubmit, lookingForAJob, lookingForAJobDescription, fullName, aboutMe, contacts, errorMessage}) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onSubmit' });
    return (
        <form className={styles.form} onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className={styles.inputWrapper}>
                <label htmlFor='lookingForAJob' className={styles.label + ' ' + styles.col} >Are you looking for a job?</label>
                <select id='lookingForAJob' className='input' defaultValue={lookingForAJob}{...register('lookingForAJob')}> 
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor='lookingForAJobDescription' className={styles.label + ' ' + styles.col} >Special skills:</label>
                <input id='lookingForAJobDescription' className='input' {...register('lookingForAJobDescription', { required: true })} defaultValue={lookingForAJobDescription || undefined} />
                {errors.lookingForAJobDescription && <span className='error'>The field is required</span>}
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor='fullName' className={styles.label + ' ' + styles.col} >Full name:</label>
                <input id='fullName' className='input' {...register('fullName', { required: true })} defaultValue={fullName || undefined} />
                {errors.fullName && <span className='error'>The field is required</span>}
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor='aboutMe' className={styles.label + ' ' + styles.col} >About me:</label>
                <input id='aboutMe' className='input' {...register('aboutMe', { required: true })} defaultValue={aboutMe || undefined} />
                {errors.aboutMe && <span className='error'>The field is required</span>}
            </div>
            <div className={styles.inputWrapper}>
                <div className={styles.col}>Contacts:</div>
                <div className={styles.contacts}>

                    {Object.keys(contacts).map(key => {
                        return <div key={key}>
                            <label htmlFor={key} className={styles.label} >{key}:</label>
                            <input id={key} className='input' {...register(`contacts.${key}`)} defaultValue={contacts[key]} />
                        </div>
                    })}
                </div>
            </div>
            <button className='btn btn-primary' >Submit</button>
            <div>{errorMessage}</div>
        </form>
    )
}

export default EditProfileFormTemplate