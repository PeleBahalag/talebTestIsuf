const quizData = {
    popupText: 'חייל/ת יקר/ה, להלן בוחן הדרכה בנושא תו תקן לאיכות בהכשרה. הבוחן הינו אישי ומטרתו הינה להעריך את בקיאותך בנהלי תו התקן והבנתך בתהליכי הדרכה. הינך רשאי/ת להשתמש בכל חומר עזר. אין הגבלת זמן על השאלות. הציון העובר במבחן הינו 80. בשאלות רב ברירה ינתן ניקוד רק על תשובה נכונה מלאה. בהצלחה!',

    questions: [
      {
        q: "מהו מצב מבחן?",
        answers: ["תרגיל אינטגרטיבי הכולל מספר מטלות עם הקשר ותרחיש",
          "כלי המשקף רמת כשירות החניך בכל אחד ממרכיבי תפקידיו בסוף ההכשרה",
          "תרגיל מרכזי בהכשרה אשר מתרגל את החניך בביצוע משימה על כל שלביה",
          "כלי למדידה או תהליך הנועד לבחון בתחום מסוים"],
        correct: 3
      },
      {
        q: "חניך בקורס נכשל ב-3 מבחנים, מה עלינו לעשות?",
        answers: ["להעיף אותו מהקורס",
          "לתת לו לעשות עוד מבחן",
          "לתת לו להיבחן עם חומר פתוח",
          "לפתוח לו נוהל חניך מתקשה"],
        correct: 4
      },
      {
        q: "איך מבחנים על המפקד לבצע על מנת לפתוח מחזור הכשרה?",
        answers: ['מבחן רובאות עיוני הכולל קליעה, שדאות, כש"ק ורפואה',
          'מבחן רמה, בטיחות, רובאות עיוני, קליעה מעשי ובוחן תו תקן',
          'מבחן רמה, כש"ג מעשי, קליעה מעשי, ובוחן תו תקן',
          'מבחן מודיעיני, בוחן תו תקן, כש"ג מעשי'], 
        correct: 3
      },
      {
        q: "כמה מופעי חניכה הנך מחויב לעבור על ידי מפקדך הישיר?",
        answers: ["1 בכל התקופה",
          '1 בתקה"ד',
          '2 בתקה"ד',
          "3 בכל התקופה"],
        correct: 2
      },
      {
        q: 'מה מאפיין את תוכנית החניכה לאיש סגל? סמן את כל התשובות הנכונות',
        answers: ['מתעדכנת אחד למחזור',
          'רלוונטית לכל מרכיבי התפקיד - מקצועי הדרכתית פיקודי וערכי',
          'לא חשופה לאיש הסגל - רק למפקדיו',
          'נבנית בהתאם לחוזקות ולחולשות של איש הסגל',
          'רלוונטית למשה"ד בלבד'],
        correct: [1, 2, 4]
      },
      {
        q: "חניך מתקשה הינו חניך שמאותר אצלו פער בעמידה בהיגשים הנדרשים בהכשרה ונדרש לבנות לו תוכנית אישית. סמן מה לא צריך שהתוכנית תכלול",
        answers: ['פירוט תחומי הקושי',
          'פירוט דרכי פעולה לקידום החניך',
          'הגדרת יעדים עבור החניך לטווח הקצר',
          'הגדרת השיבוץ החזוי לחניך'],
        correct: 4
      },
      {
        q: "מה דרכי הפעולה העומדות בפני מפקד לסיוע לחניך מתקשה? סמן את כל התשובות הנכונות",
        answers: ['שעות תגבור פרטניות',
          'שימוש בחומר פתוח',
          "התאמות למבחנים - הארכות זמן, הקרות מבחן בעל פה וכו'",
          'הצמדת חונך מקצועי- לדוגמה מש"ק עברית'],
        correct: [1, 3, 4]
      },
      {
        q: "בסוף ההכשרה... מהם הנושאים שיש להעביר כפקודה בהעברת מקל? סמן את כל התשובות הנכונות",
        answers: ["פרטים אישיים על החניך",
          "מידע מקוצעי- הישגים, נקודות חוזקה/חולשה",
          "התייחסות החניך למידע הנאמר עליו בהעברת מקל",
          "מידע אודות נורמות וערכי החניך"],
        correct: [1, 2, 4]
      },
      {
        q: "תיק מדריך נכתב לכל לבנה מקצועית בהכרשה?",
        answers: ['תיעוד של נתוני החניך בהכשרה לרבות מבחנים, משובים ודפי הערכה- נכון', 'תיעוד של נתוני החניך בהכשרה לרבות מבחנים, משובים ודפי הערכה- לא נכון', 'תיעוד של נתוני החניך בהכשרה לרבות מבחנים, משובים ודפי הערכה- נכון', 'תיעוד של נתוני החניך בהכשרה לרבות מבחנים, משובים ודפי הערכה'],
        correct: 1
      },
      {
        q: "החניך יהיה מודע על המידע המועבר עליו טרם ביצוע העברת המקל?",
        answers: ["לא נכון",
          "נכון"],
        correct: 2
      },
      {
        q: 'מהו תל"ב?',
        answers: ["רישיון כשיר להכשיר", "מסמך המייצר אחידות בתהליכי הדרכה", "מסמך שמרכז את המענה הפיקודי", "מסמך המרכז את הנהלים למענה פיקודי בהכשרה"],
        correct: 2
      },
      {
        q: "איזה מידע נדרש לנהל בקמפוס הדיגיטלי? סמן את כל התשובות הנכונות",
        answers: ["תיעוד של נתוני החניך בהכשרה לרבטת מבחנים, משובים ודפי הערכה",
          "ניהול מאגרי התוכן המקצועי של ההכשרה",
          "ראיונות ושיחות אישיות",
          "תיעוד סטטוס סיום קורס של החניך וציון סופי"],
        correct: [1, 2, 4]
      },
      {
        q: "מהו עץ הערכה?",
        answers: ['כלי המאגד את רשימת הכשירויות בהכשרות',
          'כלי המסביר על כל סוגי המבחנים וההתנסויות הנערכים לחניכים בהכשרה',
          'כלי המשקף את רמת הכשירות של החניכים בכל אחד ממרכיבי התפקיד אליו הם מוסמכים',
          'כלי באמצעותו ממשב המפקד את חניכיו בהתנסויות והמבחנים השונים'],
        correct: 2
      },
       {
        q: "לפני שאתה מעביר שיעור, מה עליך לעשות?",
        answers: ['לעבור על התיק מדריך (תיק תוכן)',
          'לעבור על המצגת (לקחת מהמסך מארזי הדרכה)',
          'לקחת את הפק"לונים / חוברות שיש לחלק לחניכים',
          'כל התשובות נכונות'],
        correct: 4
      },
    ]
}

const dropdown = document.getElementById("roleDropdown");
setupDropdown("roleDropdown");
setupDropdown("branchDropdown");

function setupDropdown(dropdownId) {

    const dropdown = document.getElementById(dropdownId);

    if (!dropdown) return;

    const selected = dropdown.querySelector(".dropdownSelected");

    const list = dropdown.querySelector(".dropdownList");

    const items = dropdown.querySelectorAll(".dropdownItem");

    selected.onclick = () => {

        list.style.display =
            list.style.display === "block"
            ? "none"
            : "block";
    };

    items.forEach(item => {

        item.onclick = () => {

            selected.innerText = item.innerText;

            list.style.display = "none";
        };
    });

    document.addEventListener("click", (e) => {

        if (!dropdown.contains(e.target)) {

            list.style.display = "none";
        }
    });
}

function submitForm() {

    const role =
        document.querySelector("#roleDropdown .dropdownSelected")
        ?.innerText;

    const branch =
        document.querySelector("#branchDropdown .dropdownSelected")
        ?.innerText;

    if (role === "תפקיד" || branch === "ענף") {

        alert("יש לבחור תפקיד וענף");

        return;
    }

    const userData = {
        role: role.trim(),
        branch: branch.trim(),
        fullName: document.getElementById("fullName").value,
        personalNumber: document.getElementById("personalNumber").value
    };

    localStorage.setItem(
        "userData",
        JSON.stringify(userData)
    );

    window.location.href = "test.html";
}


let currentIndex = 0;
let score = 0;

function openPopup(text) {
    document.getElementById("popupText").innerText = text;

    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

/* ---------------- QUIZ ---------------- */

console.log(questions[0]);
const questionText = document.getElementById("questionText");

const answersContainer = document.getElementById("answersContainer");

const currentQuestionSpan = document.getElementById("currentQuestion");

const totalQuestionsSpan = document.getElementById("totalQuestions");

let currentQuestionIndex = 0;

let quizScore = 0;

/* בדיקה שאנחנו באמת ב-test.html */
if (window.location.pathname.includes("test.html")) {

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {

        const role = userData.role;

        // const quiz = quizData[role];
        const quiz = quizData;

        if (quiz) {

            totalQuestionsSpan.innerText = quiz.questions.length;

            showQuestion();
        }
    }
}

function showQuestion() {

    const userData = JSON.parse(localStorage.getItem("userData"));

    // const role = userData.role;

    const quiz = quizData;

    const currentQuestion = quiz.questions[currentQuestionIndex];

    questionText.innerText = currentQuestion.q;

    if (currentQuestion.q.length > 55) {
        questionText.classList.add("smallQuestion");
    } else {
        questionText.classList.remove("smallQuestion");
    }

    currentQuestionSpan.innerText = currentQuestionIndex + 1;

    answersContainer.innerHTML = "";

    const isMultiple = Array.isArray(currentQuestion.correct);

    currentQuestion.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.classList.add("answerBtn");

        button.innerText = answer;

        if (isMultiple) {

            button.onclick = () => {
                button.classList.toggle("selected");
            };

        } else {

            button.onclick = () => {
                checkAnswer(index);
            };
        }

        answersContainer.appendChild(button);
    });

    if (isMultiple) {

        const submitBtn = document.createElement("button");

        submitBtn.innerText = "בדיקה";

        submitBtn.classList.add("checkBtn");

        submitBtn.onclick = checkMultipleAnswers;

        answersContainer.appendChild(submitBtn);
    }
}

function checkAnswer(selectedIndex) {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const role = userData.role;

    const quiz = quizData;

    const currentQuestion = quiz.questions[currentQuestionIndex];

    const allButtons = document.querySelectorAll(".answerBtn");

    allButtons.forEach(button => {
        button.classList.add("disabled");
    });

    /* נכון */
    if (selectedIndex === currentQuestion.correct) {

        allButtons[selectedIndex].classList.add("correct");

        quizScore += 5;
    }

    /* לא נכון */
    else {

        allButtons[selectedIndex].classList.add("wrong");

        allButtons[currentQuestion.correct].classList.add("correct");
    }

    sessionStorage.setItem("quizScore", quizScore);

    /* מעבר אוטומטי לשאלה הבאה */
    setTimeout(() => {

        nextQuestion();

    }, 1500);
}
function nextQuestion() {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const role = userData.role;

    const quiz = quizData[role];

    currentQuestionIndex++;

    if (currentQuestionIndex >= quiz.questions.length) {

        showFinalPopup();

        return;
    }

    showQuestion();
}

function checkMultipleAnswers() {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const role = userData.role;

    const quiz = quizData[role];

    const currentQuestion = quiz.questions[currentQuestionIndex];

    const correctAnswers = currentQuestion.correct;

    const allButtons = document.querySelectorAll(".answerBtn");

    let selectedIndexes = [];

    allButtons.forEach((button, index) => {

        if (button.classList.contains("selected")) {
            selectedIndexes.push(index);
        }

        button.classList.add("disabled");
    });

    let isCorrect =
        selectedIndexes.length === correctAnswers.length &&
        selectedIndexes.every(index => correctAnswers.includes(index));

    allButtons.forEach((button, index) => {

        if (correctAnswers.includes(index)) {
            button.classList.add("correct");
        }

        else if (button.classList.contains("selected")) {
            button.classList.add("wrong");
        }
    });

    if (isCorrect) {
        quizScore += 5;
    }

    sessionStorage.setItem("quizScore", quizScore);

    /* מעבר אוטומטי לשאלה הבאה */
    setTimeout(() => {

        nextQuestion();

    }, 1500);
}

function showFinalPopup() {

    const userData = JSON.parse(localStorage.getItem("userData"));

    const role = userData.role;

    const branch = userData.branch;

    let targetEmail = "";

    switch(branch) {

        case "חשיפה תקיפה":
            targetEmail = "guyleeneuman@gmail.com";
            break;

        case "רק\"ם מתקדם":
            targetEmail = "guyleeneuman@gmail.com";
            break;

        default:
            targetEmail = "guyleeneuman@gmail.com";
    }

    const quiz = quizData[role];

    const totalQuestions = quiz.questions.length;

    const correctAnswersCount = quizScore / 5;

    /* חישוב אחוזים */
    const percent = Math.round(
        (quizScore / (totalQuestions * 5)) * 100
    );

    /* צבע לפי ציון */
    const percentColor =
        percent >= 80
        ? "rgba(3, 90, 16, 1)"
        : "rgba(163, 11, 13, 1)";

    /* הודעת נכשל */
    const failedMessage =
        percent < 80
        ? `<p class="retryText">
                יש לבצע את המבחן פעם נוספת
           </p>`
        : "";

    document.getElementById("overlay").style.display = "block";

    const endPopup = document.createElement("div");

    endPopup.classList.add("popup");

    endPopup.innerHTML = `
    
        <img class="popUpbg" src="assets/elements/endPopUp.png">

        <p class="popUpTextEnd endText">

            ענית נכון על 

            <span>${correctAnswersCount}</span>
            מתוך <span>${totalQuestions}</span>

            <br>

            ציון סופי:

            <span style="color:${percentColor}">
                ${percent}%
            </span>

        </p>

        ${failedMessage}

        <img 
            class="popUpClose"
            src="assets/buttons/toHomeBtn.png"
            onclick="goBackToLearning()"
        >
    `;

    document.body.appendChild(endPopup);

    /* EMAILJS */

    emailjs.send(
        "service_2ufvwvi",
        "template_v99t2wf",
        {
            to_email: targetEmail,

            role: role,

            branch: branch,

            full_name: userData.fullName,

            personal_number: userData.personalNumber,

            score: `${correctAnswersCount}/${totalQuestions}`,

            percent: `${percent}%`
        }
    )
    .then(() => {

        console.log("email sent");

    })
    .catch((error) => {

        console.log("email error", error);
    });
}

/* מעבר חזרה */
function goBackToLearning() {
    window.location.href = "index.html";
}