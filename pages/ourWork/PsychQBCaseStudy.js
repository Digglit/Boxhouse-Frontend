{/* eslint-disable @next/next/no-img-element */}
import CaseStudyImageText from '../../components/CaseStudyImageText';
import PsychQBImage from '../../public/PsychQB-Mockup.png'
import OverviewMockup from '../../public/PsychQBOverviewMockup.png'
import GradingMockup from '../../public/PsychQBGradingMockup.png'
import Link from 'next/link';
import CaseStudyConsultFooter from '../../components/CaseStudyConsultFooter';

const PsychQBCaseStudy = (props, ref) => {
  return (
    <div className='overflow-hidden'>
      <img
        src={PsychQBImage.src}
        alt="CCS Cases Case Study"
        className="w-[100%] h-[200px] md:h-[250px] object-cover shadow-inner"
      />

      {/* Case Study Body */}
      <div className='px-[5%] md:px-[10%] m-auto'>
        <Link href='/ourWork'>
          <button className='primaryButton my-[30px]'>Back To Case Studies</button>
        </Link>
        <h1 className='text-3xl md:text-4xl'>Case Study - PsychQB</h1>
        <h4 className='mb-3'>Web Application</h4>
        <CaseStudyImageText
          image={OverviewMockup.src}
          title='Project Overview'
          body={<p className='text-sm whitespace-pre-line'>PsychQB is a product used to help prepare psychiatry students for the PRITE and ABPN exams. The application enables users to create exams across a variety of categories with tools to help them narrow down their studying to the questions they need most.<br/><br/>After completing an exam, users receive feedback on their performance, including an overall grade on their exam as well as a breakdown of what they got right and wrong. </p>}
          imagePosition='right'
        />
        <CaseStudyImageText
          title='Initial State of the Project'
          body={<p className='text-sm whitespace-pre-line'>Upon getting started on this project, there was some groundwork laid but ultimately the initial attempt to get the project going had failed. Boxhouse was tasked with taking the current code, designing a user interface for the application, and building out the product through to completion.</p>}
          className='!my-[80px]'
        />
        <CaseStudyImageText
          image={OverviewMockup.src}
          title='Exam Creator'
          body={<p className='text-sm whitespace-pre-line'>Users were enabled with a variety of tools to create the exams that they needed to study most. We included various categories, allowing students to curate their exam more towards their desired curriculum.<br /><br />We also introduced a practice mode feature, which allows students to view answers to their question immediately after submitting them, as opposed to waiting until the final grading page.</p>}
          imagePosition='right'
        />
        <CaseStudyImageText
          image={GradingMockup.src}
          title='Exam Grade'
          body={<p className='text-sm whitespace-pre-line'>Every exam is graded individually and the user is given feedback elaborating on what they selected correctly or incorrectly, as well as some information as to why the correct answer is in fact correct.</p>}
          imagePosition='left'
        />
        <CaseStudyImageText
          title='Final Thoughts'
          body={<p className='text-sm whitespace-pre-line'>PsychQB has been an insightful application for us to work on here at Boxhouse. It was an opportunity for us to refine our skillset, and work on pivoting off some already established code. Ultimately, we&apos;re grateful for the opportunity to have built and shipped PsychQB.<br/><br/>If you&apos;d like to learn more about developing your own web-based applications, give us a call today at xxx-xxx-xxxx or schedule a free consultation through our online consultation scheduler! If you&apos;d like to view the software live for yourself, you can do so by visiting <a className='text-[#004BFA] underline' target="_blank" rel="noreferrer" href="https://app.psychqb.com">app.psychqb.com</a> and creating a demo account from there.</p>}
        />
        <CaseStudyConsultFooter />
        <Link href='/ourWork'>
          <button className='secondaryButton mb-[30px]'>Back To Case Studies</button>
        </Link>
      </div>

    </div>
  );
}

export default PsychQBCaseStudy;