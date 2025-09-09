const questions = [
  { question: "St. Joseph's is widely known for its strict, 'school-like' discipline. What is one area where this is enforced?", optionA: "Dress code", optionB: "Club activities", optionC: "Sports events", optionD: "Mess hall seating", answer: "A" },
  { question: "Which aspect of campus life is frequently mentioned positively by students?", optionA: "The freedom to use mobile phones anywhere on campus.", optionB: "A flexible attendance policy.", optionC: "The quality of the food in the mess hall.", optionD: "The low number of exams.", answer: "C" },
  { question: "The academic structure at SJIT is known for being rigorous. Which of the following is part of their approach?", optionA: "Multiple internal tests and assessments.", optionB: "Encouraging students to focus only on final exams.", optionC: "Offering very few practical lab sessions.", optionD: "Giving lenient pass percentages.", answer: "A" },
  { question: "What is the primary method of admission to undergraduate (B.Tech) courses for most students?", optionA: "Direct interviews with the college management.", optionB: "Through the TNEA counseling process based on HSC marks.", optionC: "The JEE Main entrance exam.", optionD: "An internal SJCE entrance test.", answer: "B" },
  { question: "Which statement accurately reflects the college's infrastructure?", optionA: "The campus has very limited Wi-Fi, even in labs and hostels.", optionB: "It offers state-of-the-art labs, a large library, and strong Wi-Fi.", optionC: "The classrooms are generally poorly maintained and lack modern equipment.", optionD: "There are no dedicated sports facilities on campus.", answer: "B" },
  { question: "How does SJIT typically handle student transportation?", optionA: "Students are encouraged to drive their personal cars to college.", optionB: "The college operates a large fleet of buses covering Chennai and surrounding areas.", optionC: "Public transport is the only option, with no college-provided service.", optionD: "Transport is only provided for hostel students.", answer: "B" },
  { question: "For technical courses like Computer Science Engineering (CSE), what is the typical placement trend?", optionA: "Low placement rates, with few companies visiting.", optionB: "Good placement rates with major IT companies actively recruiting.", optionC: "Placements are only available for postgraduate students.", optionD: "Most students are not placed and must find jobs on their own.", answer: "B" },
  { question: "How are the hostel and mess facilities generally reviewed by students?", optionA: "The hostels are poorly maintained and the food is low quality.", optionB: "The hostels are spacious and clean, and the food is considered hygienic and tasty.", optionC: "Students complain about a lack of safety and security.", optionD: "The food variety is very limited, and no non-vegetarian options are available.", answer: "B" },
  { question: "Based on student feedback, what kind of student might thrive at SJIT?", optionA: "Students who prefer a relaxed academic environment with minimal rules.", optionB: "Students who are self-disciplined and focused on academics.", optionC: "Students who prioritize a vibrant 'college life' with many parties.", optionD: "Students who dislike structured learning and frequent exams.", answer: "B" },
  { question: "Which of these are among the top recruiting companies at SJIT?", optionA: "Small, local businesses.", optionB: "Infosys, TCS, and Wipro.", optionC: "Fashion retail chains.", optionD: "Restaurants and cafes.", answer: "B" },
  { question: "What is the accreditation status of St. Joseph's Institute of Technology?", optionA: "Accredited with a 'B' grade by NAAC.", optionB: "Not yet accredited by any national body.", optionC: "Accredited with an 'A+' grade by NAAC.", optionD: "Accredited by a private, non-governmental body.", answer: "C" },
  { question: "Approximately how large is the campus of St. Joseph's Institute of Technology?", optionA: "10 acres", optionB: "25 acres", optionC: "50 acres", optionD: "100 acres", answer: "B" },
  { question: "Which phrase best describes the general academic atmosphere and approach at SJIT?", optionA: "A relaxed approach with infrequent assessments.", optionB: "A focus on extracurricular activities over studies.", optionC: "A rigorous approach involving extra classes and consistent monitoring.", optionD: "Allowing students to proceed at their own pace without supervision.", answer: "C" },
  { question: "In which year was St. Joseph's Institute of Technology established?", optionA: "1985", optionB: "1994", optionC: "2001", optionD: "2010", answer: "B" },
  { question: "How is the placement cell generally perceived by students?", optionA: "It is inactive and offers little support.", optionB: "It is well-organized and provides good support through training sessions.", optionC: "It is only available to final-year students.", optionD: "It mainly helps with finding internships, not full-time jobs.", answer: "B" },
];

const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultEl = document.getElementById('result');

questions.forEach((q, index) => {
  const div = document.createElement('div');
  div.classList.add('question-block');
  div.innerHTML = `
    <div class="question">${index + 1}. ${q.question}</div>
    <ul class="options">
      <li><label><input type="radio" name="q${index}" value="A"> ${q.optionA}</label></li>
      <li><label><input type="radio" name="q${index}" value="B"> ${q.optionB}</label></li>
      <li><label><input type="radio" name="q${index}" value="C"> ${q.optionC}</label></li>
      <li><label><input type="radio" name="q${index}" value="D"> ${q.optionD}</label></li>
    </ul>
  `;
  quizForm.appendChild(div);
});

submitBtn.addEventListener('click', () => {
  let score = 0;
  const total = questions.length;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const questionBlock = quizForm.children[index];
    questionBlock.querySelectorAll('label').forEach(l => l.classList.remove('correct','wrong'));

    if (selected) {
      if (selected.value === q.answer) {
        score++;
        selected.parentElement.classList.add('correct');
      } else {
        selected.parentElement.classList.add('wrong');
        const correctLabel = questionBlock.querySelector(`input[value="${q.answer}"]`).parentElement;
        correctLabel.classList.add('correct');
      }
    } else {
      const correctLabel = questionBlock.querySelector(`input[value="${q.answer}"]`).parentElement;
      correctLabel.classList.add('correct');
    }
  });

  resultEl.innerHTML = `
    <div class="score-banner">🎉 Congratulations! 🎉</div>
    <div class="score-text">You scored <strong>${score} / ${total}</strong></div>
  `;
  resultEl.scrollIntoView({behavior: "smooth"});
});
