import React, { useEffect, useState } from 'react'
import './faq.css'
import ImageFirst from '../../images/image1-2023-10-22-07-47-33-8080.png'
import ImageSecond from '../../images/image3-2024-01-22-05-48-54-6673.png'
import ImageThird from '../../images/image2-2023-10-22-07-47-33-1651.png'
import ImageFour from '../../images/image4-2024-01-22-05-51-26-7978.png'

import AOS from 'aos'
import 'aos/dist/aos.css'


const faqData = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
    },
    {
        id: 2,
        question: "How do I install React?",
        answer: "You can install React by using the create-react-app command or by adding it to an existing project using npm or yarn.",
    },

    {
        id: 3,
        question: "How do I install React?",
        answer: "You can install React by using the create-react-app command or by adding it to an existing project using npm or yarn.",
    },

    {
        id: 4,
        question: "How do I install React?",
        answer: "You can install React by using the create-react-app command or by adding it to an existing project using npm or yarn.",
    },
    // Add more FAQ items as needed
];


const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

   

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    


    return (
        <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={toggleAccordion}>
            <h3 className='question'>
                {question}
                <span className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </span>
            </h3>
            {isOpen && <p className='answer'>{answer}</p>}
        </div>
    );
};


function FAQ() {

    useEffect(()=>{

        AOS.init({duration: 1000})

    },[])
    

    return (
        <div className='faq' >
            <div className='left-part' data-aos='fade-left'>
                <div className='title'>
                    <h2>Foodie FAQ: Your Culinary Queries Answered</h2>

                </div>

                <div className="faq-container">
                    {faqData.map((item) => (
                        <FAQItem key={item.id} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
            <div className='right-part' data-aos='fade-up'>
                <div className='image-gallery'>

                    <div className='row'>
                        <div className='first'>
                            <img src={ImageFirst} />
                        </div>
                        <div className='second'>
                            <img src={ImageSecond} />
                            <div className='image-overlay'>
                                <span><span className='big'>235+</span> Success Event</span>
                            </div>

                        </div>

                    </div>  

                    <div className='row'>
                       <div className='third'>
                            <img src={ImageFour} />
                            <div className='image-overlay3'>
                                <span><span className='big'>365+</span> Success Event</span>
                            </div>

                        </div>

                        <div className='four'>
                            <img src={ImageThird} />
                        </div>
                      

                    </div>


                </div>

            </div>
        </div>
    )
}

export default FAQ