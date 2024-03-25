import Image from 'next/image';
import Line from '../public/Landing_Page_image/Line_between_icon_search_bar.svg';
import Section1_right from '../public/Landing_Page_image/Section1_right.png';
import Search from '../public/Landing_Page_image/search_icon.svg';
import Star from '../public/Landing_Page_image/star.svg';
import stripe_lines from '../public/Landing_Page_image/stripe_lines.png';
import Thumb from '../public/Landing_Page_image/thumb.svg';
import styles from './Section1.module.css';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
export default function Home() {
  return (
    <>
      {/* Section 1 start  */}
      <div className="section_1_parent " style={{ background: 'linear-gradient(90deg, #F5FCF4 0%, #E5F8E5 100%)',paddingBottom:'43px' }}>
        <div className="section1 mx-auto w-9/12 flex ">
          {/* Section 1 left start */}
          <div className="section1_left w-1/2" style={{ marginTop: '100px', position: 'relative' }}>
       
            <div className={` ${styles.section1_left_intro_text} intro_text `} >There are only Professionals</div>
          

         
            <div className={`${styles.section1_left_bold_text} bold_text`}>Hire An  Agent  On
              MIDDLE  Man</div>
            
           
            <div className={`${styles.section1_left_text_3} `}>Unlock cost-effective solutions with global talent.
            </div>

            <div className={`${styles.section1_left_text_3} `}>
              Empower your business while supporting growth in emerging economies.</div>

         

         
            <div className={`${styles.section1_left_search_bar} flex items-center mt-8 mb-16 pe-0`}>

              <Image src={Search} alt="Picture of the author" className={`${styles.search_icon} ms-3`} />
              <Image src={Line} alt="Picture of the author" className={`${styles.search_icon_line}`} />
              <input type="text" placeholder='Search for best agents' className={`${styles.search_input} outline-none`} />
              <button className={`${styles.search_button}`} style={{zIndex:'999'}}>Search</button>

            </div>
         

   
            <div className={`${styles.section1_left_ratings} flex items-center`}>

              <div className={`${styles.thumb_icon}  flex items-center justify-center me-3`}>
                <Image src={Thumb} alt="Picture of the author" />
              </div>
              <div className="text_4 ">
                <div className="text text-xs font-semibold">
                  We already have 100+ happy customers
                </div>

                <div className="star  flex ">
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                  <Image src={Star} alt="Stars" className='me-1' />
                </div>
              </div>
            </div>
          
       <div className="stripe_lines "style={{top: '56px', left: '360px', position: 'absolute' }} >
       <Image src={stripe_lines} alt="Your image" />
        </div>             
         
      
          </div>
    

          <div className="section1_right w-1/2 mt-10" >
            
            <Image
              src={Section1_right}
              alt="Picture of the author"
            />

          </div>
          {/* Section 1 right end */}
        </div>
        {/* Section 1 end  */}
      </div>



      {/* Section 2 start */}
      <Section2 />
      {/* Section 2 end  */}
      {/* Section 3 start  */}
      <Section3/>
      {/* Section 3 end  */}
       {/* Section 4 start  */}
       <Section4/>
      {/* Section 4 end  */}
      {/* Section 5 start  */}
      <Section5/>
      {/* Section 5 end  */}
      {/* Section 6 start  */}
      <Section6/>
      {/* Section 6 end  */}
      {/* Section 7 start  */}
      <Section7/>
      {/* Section 7 end  */}

    </>
  );
}
