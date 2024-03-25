import Image from 'next/image'
import Link from 'next/link'
import facebook from '../../../public/Landing_Page_image/facebook.svg'
import github from '../../../public/Landing_Page_image/github.svg'
import google from '../../../public/Landing_Page_image/google.svg'
import hero_image from '../../../public/Landing_Page_image/hero.png'
import styles from './login.module.css'
export default function page() {
  return (
    <>
    <div className={`${styles.login_page}`} >
    <div className="login flex justify-center  w-9/12 mx-auto p" >

<div className={` ${styles.form} flex justify-center items-center relative mt-10`}>




  <div className="form_texts py-10" style={{ width: '300px' }}>
    <h1 className="text-white font-inter text-3xl font-normal mb-3"
      style={{ lineHeight: "normal" }}> Login</h1>
    <div className="email my-3">

      <p className="text-white font-inter text-l font-semibold "
        style={{ lineHeight: "normal" }}>Email</p>
      <input type="text" placeholder='username@gmail.com' className={`${styles.email}`} style={{
        color: 'black',
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        width: "300px",
        height: '36.972px',
        borderRadius: '10px',
        textAlign: 'left',
        paddingLeft: '10px',
        outline: "none"
      }} />
    </div>


    <div className="password my-3">

      <p className="text-white font-inter text-l font-semibold"
        style={{ lineHeight: "normal" }}>Password</p>
      <input type="password" placeholder='password' className={`${styles.password}`} style={{
        color: 'black',
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        width: "300px",
        height: '36.972px',
        borderRadius: '10px',
        textAlign: 'left',
        paddingLeft: '10px',
        outline: "none"
      }} />
    </div>

    <p className="text-white font-inter text-xs font-medium cursor-pointer"
      style={{ lineHeight: "normal" }}>Forget Password</p>

    <div className={`${styles.sign_in_btn} btn my-6 w-[300px] h-[36.972px] rounded-[10px]  flex justify-center items-center`}>
      <button className="text-white font-inter text-s font-bold"
        style={{ lineHeight: "normal" }}>Sign In</button>
    </div>

    <p className="text-white font-inter text-sm font-normal " 
      style={{ lineHeight: "normal",textAlign:'center' }}>or continue with</p>

    <div className="icons flex justify-between my-5">
      <div className="google w-[85px] h-[36.972px] rounded-[10px] border border-gray-300 bg-white flex justify-center items-center cursor-pointer">
        <Image src={google} alt='google' />
      </div>
      <div className="github w-[85px] h-[36.972px] rounded-[10px] border border-gray-300 bg-white flex justify-center items-center cursor-pointer">
        <Image src={github} alt='github' />
      </div>
      <div className="facebook w-[85px] h-[36.972px] rounded-[10px] border border-gray-300 bg-white flex justify-center items-center cursor-pointer">
        <Image src={facebook} alt='facebook' />
      </div>

      
    </div>

    <div className="last_text flex justify-between">
      <p className="text-white font-inter text-sm font-normal cursor-pointer" 
      style={{ lineHeight: "normal",textAlign:'center' }}>Don't have an account?</p>
      <Link href="/signup">
      <p className="text-white font-inter text-sm font-normal cursor-pointer" 
      style={{ lineHeight: "normal",textAlign:'center' }}>Register for free</p>
      </Link>
      
      </div>
  </div>
      <div className="image absolute" style={{top:'260px',left:'-280px',width:'350px'}}>
      <Image src={hero_image} alt='hero'/> 
      </div>
       

</div>
</div>
    </div>
      


    </>
  )
}
