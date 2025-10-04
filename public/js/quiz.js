document.addEventListener("DOMContentLoaded", () => {
  const questionText = document.getElementById("questionText");
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const progressBar = document.getElementById("progressBar");

  let currentIndex = 0;
  let answers = [];

  function renderQuestion() {
    const q = questions[currentIndex];
    questionText.textContent = `${currentIndex + 1}. ${q.question}`;
    optionA.textContent = q.options[0].text;
    optionB.textContent = q.options[1].text;

    progressBar.style.width = `${(currentIndex / questions.length) * 100}%`;
  }

  function handleAnswer(value) {
    answers.push(value);
    currentIndex++;

    // 🧠 Gunakan >= agar pertanyaan terakhir tetap ter-submit
    if (currentIndex >= questions.length) {
      submitAnswers();
    } else {
      renderQuestion();
    }
  }

  function submitAnswers() {
    // 🧠 Debug log untuk memastikan submit terpanggil
    console.log("✅ Mengirim jawaban:", answers);

    fetch("/result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    })
      .then((res) => {
        if (res.redirected) {
          window.location.href = res.url;
        } else {
          return res.json().then((data) => {
            console.log("Hasil:", data);
          });
        }
      })
      .catch((err) => console.error("❌ Gagal kirim ke server:", err));
  }

  optionA.addEventListener("click", () =>
    handleAnswer(questions[currentIndex].options[0].value)
  );
  optionB.addEventListener("click", () =>
    handleAnswer(questions[currentIndex].options[1].value)
  );

  renderQuestion();
});
