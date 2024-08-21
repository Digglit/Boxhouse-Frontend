import Link from "next/link";

const CaseStudyConsultFooter = () => {
  return (
    <div className='bg-[#00123B] grid my-[50px] shadow-xl-dark'>
      <h1 className='text-white text-center text-2xl md:text-4xl mt-[50px]'>Ready to get started?</h1>
      <Link href='/scheduleConsultation' className='mx-auto mt-[30px] mb-[50px]'>
        <button className='primaryButton'>Schedule a Consultation</button>
      </Link>
    </div>
  );
};

export default CaseStudyConsultFooter;