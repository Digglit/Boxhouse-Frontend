{/* eslint-disable @next/next/no-img-element */}
import CaseStudyImageText from '../../components/CaseStudyImageText';
import CCSCasesImage from '../../public/CCS-Mockup.png'
import CaseListMockup from '../../public/CCS-Cases-Case-List-Device-Mockup.png'
import ReportCardMockup from '../../public/CCS-Cases-Report-Card-Device-Mockup.png'
import GradingFeedbackMockup from '../../public/CCS-Cases-Grading-Feedback-Device-Mockup.png'
import AccountSettingsMockup from '../../public/CCS-Cases-AccountSettings-Device-Mockup.png'
import OldCaseList from '../../public/Old-Case-List.png'
import OldGrading from '../../public/Old-Grading.png'
import Link from 'next/link';

const CCSCasesCaseStudy = (props, ref) => {
  return (
    <div className='overflow-hidden'>
      <img
        src={CCSCasesImage.src}
        alt="CCS Cases Case Study"
        className="w-[100%] h-[200px] md:h-[250px] object-cover shadow-inner"
      />

      {/* Case Study Body */}
      <div className='px-[5%] md:px-[10%] m-auto'>
        <Link href='/ourWork'>
          <button className='primaryButton my-[30px]'>Back To Case Studies</button>
        </Link>
        <h1 className='text-3xl md:text-4xl'>Case Study - CCS Cases</h1>
        <h4 className=''>Web Application</h4>
        <CaseStudyImageText
          image={CaseListMockup.src}
          title='Project Overview'
          body='CCS Cases is a medical education platform used to prepare doctoral residents for the CCS portion of the USMLE step 3 exam. This exam is considered a right of passage for doctors entering the field, as passing the exam results in the individual receiving their medical license and ability to practice medicine independently.\n\nOur client first approached us for this project with the goal of moving their java-based service to a web-based platform. In this project, our client handled backend development, DNS configuration and hosting internally. Boxhouse was hired to lead the front-end buildout and further design of the user interface and user experience.'
          imagePosition='right'
        />
        <CaseStudyImageText
          image={[OldCaseList, OldGrading]}
          title='Initial State of the Project'
          body="When starting this project, the basic UI design of the project had already been laid out. However, it lacked many of the essential functional requirements necessary to facilitate the move to the web based platform. To kick things off, we worked to address the technical limitations of the present implementation and alleviate problems with responsiveness for supporting mobile platforms.\n\nAfter carrying out our plan, our client successfully shipped the product and began encouraging users to transition from the java platform onto the new web platform. The product was well received, and was quickly preferred over the java-based platform."
          className='md:mt-[50px] md:mb-[50px]'
        />
        <CaseStudyImageText
          image={ReportCardMockup.src}
          title='Report Card'
          body='In order to give users more insight into their performance and how they compared to other users, we worked with our client to introduce the report card feature. This feature gives users a more comprehensive overview of their performance when compared to the individual case grading page.'
          imagePosition='right'
        />
        <CaseStudyImageText
          title='Overhauling the UI'
          body="After the initial success of the project, our client was interested in improving users' experiences on the platform with a more intuitive and inviting UI. Boxhouse was asked to produce design mockups detailing how the interface could be improved across desktop and mobile platforms.\n\nThe core of the application, being the exam, was designed to resemble the real exam as closely as possible. So, this was off limits for design overhauls. However, the case selector, account settings and grading feedback pages were in need of a cohesive design upgrade that better reflected the brand of the platform.\n\nWe made several key decisions in the process of redesigning the software, putting together a design system and color scheme that could be used for a consistent visual experience across the platform. Read on to learn more about the changes we made."
          className='mt-[50px]  md:mt-[75px] mb-[50px] md:mb-[75px]'
        />
        <CaseStudyImageText
          image={CaseListMockup.src}
          title='The Case List'
          body='The case list is used for users to select the case they would like to practice. Each case represents a different scenario for the user to practice their diagnostic proficiency to reach the correct diagnosis for the case.\n\nWith the case list redesign, we sought to improve the visibility of cases that users wanted to practice. By introducing a variety of filtering and sorting mechanisms, we nailed down that objective in a visually appealing and intuitive way.'
          imagePosition='right'
        />
        <CaseStudyImageText
          image={GradingFeedbackMockup.src}
          title='Grading Feedback'
          body='After completing a particular case, the user receives feedback elaborating on what was done correctly and what could be improved upon. During this redesign we worked with our client to introduce the Action Log Timeline. The goal was to allow users to see the decisions they made chronologically, helping them to better understand how they could improve.'
          imagePosition='left'
        />
        <CaseStudyImageText
          image={AccountSettingsMockup.src}
          title='Account Settings'
          body='Last to update in this project was the account settings page. In this overhaul, we strove to give users the ability to customize their experience to better meet their needs. This included many configuration toggles and theme options'
          imagePosition='right'
        />
        <CaseStudyImageText
          title='Final Words'
          body="Our experience working on CCS Cases was one of many challenges and even more successes. Having the opportunity to impact the future of tens of thousands of doctors all over the world has given us a great appreciation for the rigorous difficulty of their studies. If you'd like to learn more about how the team here at Boxhouse can bring your vision to life, reach out today by giving us a call at xxx-xxx-xxxx or scheduling a consultation with our online consultation scheduler.\n\nIf you'd like to view the software live for yourself, you can do so by visiting app.ccscases.com and creating a demo account from there."
        />
        <div className='bg-[#00123B] grid my-[50px] shadow-xl-dark'>
          <h1 className='text-white text-center text-2xl md:text-4xl mt-[50px]'>Ready to get started?</h1>
          <Link href='/scheduleConsultation' className='mx-auto mt-[30px] mb-[50px]'>
            <button className='primaryButton'>Schedule a Consultation</button>
          </Link>
        </div>
        <Link href='/ourWork'>
          <button className='secondaryButton mb-[30px]'>Back To Case Studies</button>
        </Link>
      </div>

    </div>
  );
}

export default CCSCasesCaseStudy;