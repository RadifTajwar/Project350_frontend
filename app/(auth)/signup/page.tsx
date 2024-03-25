import Image from 'next/image'
import Link from 'next/link'
import hero from '../../../public/Landing_Page_image/Section1_right.png'
import facebook from '../../../public/Landing_Page_image/facebook.svg'
import github from '../../../public/Landing_Page_image/github.svg'
import google from '../../../public/Landing_Page_image/google.svg'
import styles from './signup.module.css'
export default function page() {
  return (
    <>
      <div className={`${styles.signup_page} flex justify-center `} >
        <div className="signUp_section w-9/12  flex mt-10 justify-between">
          <div className="left w-7/12">
            <Image src={hero} alt='hero' width={600} />
          </div>
          <div className="right w-5/12">
            <div className={` ${styles.form} flex justify-center items-center relative `}>




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
                    style={{ lineHeight: "normal" }}>Sign Up</button>
                </div>

                <p className="text-white font-inter text-sm font-normal "
                  style={{ lineHeight: "normal", textAlign: 'center' }}>or continue with</p>

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
                    style={{ lineHeight: "normal", textAlign: 'center' }}>Already have an account?</p>
                  <Link href="/login">
                    <p className="text-white font-inter text-sm font-normal cursor-pointer"
                      style={{ lineHeight: "normal", textAlign: 'center' }}>Log in here</p>
                  </Link>

                </div>
              </div>
          


            </div>
          </div>
        </div>
      </div>
    </>
  )
}
