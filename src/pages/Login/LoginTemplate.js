import { useForm } from 'react-hook-form';
import styles from './Login.module.sass'

function LoginTemplate({onSubmit, captchaURL, errorMessage}) {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onSubmit' });

    return (
       <div className={styles.wrapper}>
           <div className={styles.loginForm}>
            <h1 className={styles.heading}>Account Access</h1>
            <form className={styles.form} onSubmit={handleSubmit(data => onSubmit(data))}>
                <div className={styles.inputWrapper}>
                    <input id='email' className={'input'} placeholder='Username' {...register('email', { required: true })} />
                    {errors.email && <div className={styles.error}>The field is required</div>}
                </div>
                <div className={styles.inputWrapper}>
                    <input id='password' type='password' placeholder='Enter your password' className={'input'} {...register('password', { required: true, minLength: 6 })} />
                    {errors.password && <div className={styles.error}>The password should contain at least 6 symbols</div>}
                </div>
                <div className={styles.inputWrapper + ' ' + styles.rememberMe}>
                    <input id='rememberMe' className={styles.checkbox} {...register('rememberMe')} type='checkbox' />
                    <label htmlFor='rememberMe' className={styles.label +  ' checkbox'} >remember me</label>
                </div>
                {captchaURL &&
                    <div className={styles.inputWrapper}>
                        <div className={styles.captcha}><img src={captchaURL} alt='' /></div>
                        <input id='captcha' placeholder='Enter your captcha' className={'input'} {...register('captcha', { required: true })} />
                    </div>
                }
                <div>{errorMessage}</div>
                
                {errors.password || errors.email ? <button className={'btn ' + styles.btn} disabled >Login</button> : <button className={'btn btn-primary ' + styles.btn} >Login</button>}
                
            </form>
           </div>
       </div> 
    );

}

export default LoginTemplate