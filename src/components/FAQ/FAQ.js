import React, { useState } from "react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "What is MECHATHLON 2026?",
    answer: "MECHATHLON 2026 is a national-level robotics competition where participants design, build, and compete with robots in exciting events like Roborace, Line Follower, Robo Soccer, Robo Sumo, and Full Throttle."
  },
  {
    question: "Who can participate?",
    answer: "Students from engineering colleges, polytechnics, and schools with an interest in robotics and innovation can participate individually or in teams."
  },
  {
    question: "What are the events in MECHATHLON?",
    answer: "The event includes Roborace, Line Follower, Robo Soccer, Robo Sumo, and Full Throttle — each testing speed, precision, control, and strategy."
  },
  {
    question: "Is prior robotics experience required?",
    answer: "No, beginners are welcome! However, basic knowledge of electronics, programming, or robotics will be helpful."
  },
  {
    question: "What should I bring for the event?",
    answer: "Participants must bring their robot, required components, tools, laptop, and college ID card for verification."
  },
  {
    question: "Are there prizes?",
    answer: "Yes! Each event has exciting cash prizes, certificates, and recognition for winners and top performers."
  },
  {
    question: "Where will the event be conducted?",
    answer: "MECHATHLON 2026 will be conducted onsite at the college campus with dedicated arenas for each competition."
  },
  {
    question: "How can I register?",
    answer: "You can register through the official event website or registration link provided by the organizers."
  },
  {
    question: "How are you",
    answer: "i am fine"
  }
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`

      .faq-container{
        background:#020617;
        padding:80px 20px;
        color:white;
      }

      .faq-item{
        border:1px solid rgba(34,211,238,0.3);
        border-radius:12px;
        margin-bottom:18px;
        padding:22px;
        cursor:pointer;
        background:#020617;
        transition:all 0.3s ease;
      }

      .faq-item:hover{
        border-color:#22d3ee;
      }

      .faq-question{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:20px;
        font-weight:600;
      }

      .faq-answer{
        margin-top:15px;
        color:#9ca3af;
        line-height:1.6;
      }

      .faq-arrow{
        font-size:18px;
        color:#22d3ee;
      }

      `}</style>

      <div className="faq-container">

        {faqs.map((faq,index)=>(
          
          <div 
            key={index}
            className="faq-item"
            onClick={()=>toggleFAQ(index)}
          >

            <div className="faq-question">
              {faq.question}
              <span className="faq-arrow">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>
    </>
  );
}

export default FAQ;