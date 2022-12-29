import styles from '../styles/OurWork.module.css'
import CCSCasesImage from '../public/CCS-Mockup.png'
import MCQCDMImage from '../public/MCQCDM-Mockup.png'
import BigMImage from '../public/BigM-Mockup.png'
import UltrasoundCardsImage from '../public/UltrasoundCards-Mockup.png'
import USCMarketingImage from '../public/USC-Marketing-Mockup.png'

const OurWork = () => {
  return (
    <>
      <div className='pageHeaderContainer'>
        <h1>Our Work</h1>
      </div>
      <div className={styles.workSectionContainer}>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={styles.workSectionTitle}>CCS Cases</h1>
          <p className={styles.workSectionText}>CCS Cases is an industry-leading software platform used to prepare med school students for the CCS Cases portion of the step 3 exam. This exam is considered a right of passage for doctors as they work to complete their residency programs. After completing the step 3 USMLE exam, students are eligible to obtain their medical license.<br /><br />The software we helped to develop allows students to prepare for their exam by simulating a variety of different cases. These cases are medical environments in which students must order the correct exams and medications to successfully treat the patient. After completing the simulation, students receive feedback and a case grade which they can use to evaluate their performance.</p>
          <button className={styles.workSectionButton}>Case Study Coming Soon...</button>
        </div>
        <img className={styles.workSectionImage} src={CCSCasesImage.src}/>
      </div>
      <div className={styles.workSectionContainer}>
        <img className={styles.workSectionImage} src={MCQCDMImage.src}/>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={styles.workSectionTitle}>MCQCDM</h1>
          <p className={styles.workSectionText}>MCQCDM is an application used by med school students to study for the Clinical Decision Making (CDM) portion of the COMLEX exam.<br /><br />The software we helped build allows students to track and monitor their progress while preparing for the exam. They are shown metrics of their overall performance in addition to receiving feedback on every practice test.</p>
          <button className={styles.workSectionButton}>Case Study Coming Soon...</button>
        </div>
      </div>
      <div className={styles.workSectionContainer}>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={styles.workSectionTitle}>BigM Pizza</h1>
          <p className={styles.workSectionText}>BigM Pizza was looking for a custom delivery solution for their soon to open restaurant. Boxhouse was hired to build the new website that our client was able to modify through the custom CMS panel we built for them. Included in this software was a bar-portal tablet application to display incoming orders, as well as a mobile driver application to distribute orders to delivery drivers.<br /><br />Our custom CMS solution gave our client full control over all aspects of this process. This included the ability to modify the menu and pricing, change delivery availability, create and schedule events, and even curate customer profiles to gain insight into consumer behaviors.</p>
          <button className={styles.workSectionButton}>Case Study Coming Soon...</button>
        </div>
        <img className={styles.workSectionImage} src={BigMImage.src}/>
      </div>
      <div className={styles.workSectionContainer}>
        <img className={styles.workSectionImage} src={UltrasoundCardsImage.src}/>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={styles.workSectionTitle}>UltrasoundCards</h1>
          <p className={styles.workSectionText}>UltrasoundCards is a flashcard application used by ultrasonography students to study for the ARDMS exams. ARDMS is a medical board who offers a broad classification of standardized exams in ultrasonography. These exams are for different specializations including everything from prenatal to adult ultrasound techniques.<br /><br />UltrasoundCards is a progressive web app, allowing users to study the information they need anytime, anywhere. As an extra touch to allow users to personalize their application, they can select their primary color of choice in addition to light or dark mode.</p>
          <button className={styles.workSectionButton}>Case Study Coming Soon...</button>
        </div>
      </div>
      <div className={styles.workSectionContainer}>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={styles.workSectionTitle}>UltrasoundCards Marketing</h1>
          <p className={styles.workSectionText}>In addition to the UltrasoundCards application, Boxhouse was responsible for developing the marketing application. There are a few key features to this site, it includes a blog, modifiable through a CMS by our client, a FAQ page, also modifiable through the CMS, and multiple payment gateways.<br /><br />This site is a JAMSTACK site, which means it’s crazy fast. Not only does this help users find the information they need with minimal frustration, it also breaks down barriers that increase conversion.</p>
          <button className={styles.workSectionButton}>Case Study Coming Soon...</button>
        </div>
        <img className={styles.workSectionImage} src={USCMarketingImage.src}/>
      </div>
    </>
  )
}

export default OurWork