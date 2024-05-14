import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";

const Faq = () => {
    const datas = [
            {
                "title": "How does Tomomoni ensure job quality and legitimacy?",
                "description": "We have a thorough vetting process in place to authenticate both job postings and applicants. Additionally, we encourage user feedback to swiftly address any concerns regarding job quality or legitimacy."
            },
            {
                "title": "Can I post jobs from anywhere in the world on Tomomoni?",
                "description": "Yes, Tomomoni accepts job postings from all geographic locations. Whether you're looking to hire on-site, remote, part-time, or hybrid positions, you can easily post your job openings on our platform."
            },
            {
                "title": "How does Tomomoni ensure equal opportunities for all applicants?",
                "description": "We are committed to fostering a diverse and inclusive job-seeking environment. We do not tolerate discrimination of any kind and offer features to anonymize applications to promote fair evaluations based solely on qualifications and experience."
            },
            {
                "title": "What features does Tomomoni offer to streamline the hiring process?",
                "description": "Tomomoni provides a range of tools to simplify the hiring process, including applicant tracking, customizable job postings, interview scheduling, and communication features to facilitate seamless interactions between employers and candidates."
            },
            {
                "title": "How does Tomomoni protect user privacy and data security?",
                "description": "We take user privacy and data security very seriously. Our platform adheres to stringent data protection measures and encryption protocols to safeguard all user information. Additionally, we provide users with full control over their data and adhere to industry best practices to prevent unauthorized access or misuse."
            }
        
    ];
    const [isOpen, setIsOpen] = useState(0);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    return (
        <div className="container mx-auto px-20 pt-28 flex flex-col md:flex-row items-center justify-center">
            <div>
                <h2 className="text-6xl text-zinc-400 font-bold font-briem text-center"><span className="text-8xl font-briem">Do</span> you have any queries?</h2>
            </div>
          <div className=" bg-[#18181B] rounded-lg mx-4 lg:mx-8 border border-white">
            {/* title part  */}
            {datas.map((data, idx) => (
                <div key={idx}>
                    <div onClick={() => handleToggle(idx)} className={`${idx === data.length - 1 ? 'border-none' : 'border-b border-gray-400/10'} p-6  flex items-center gap-4`}>
                        <div className="flex-1">
                        
                            <p className="font-medium text-lg text-white flex gap-4 items-center"><PiStarFourFill />{data?.title}</p>
                            <p className="text-gray-400">
                                {data?.subTitle} {/*give color based on condition */}
                                <span className={`${idx === 2 ? 'text-[#0095FF]' : 'text-gray-500'}`}>{data.coloredText}</span>
                            </p>
                        </div>
                        <div className={`duration-300 ease-in-out ${isOpen === idx ? '-rotate-90 ' : ''}`}>
                            <svg width={25} className="rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M10 7L15 12L10 17" stroke="#a8a8a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className={`bg-zinc-800 p-6 text-gray-400 `}>{data?.description}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>  
        </div>
    );
};

export default Faq;