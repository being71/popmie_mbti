const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const questions = require("./utils/questions.json");
const calculateMBTI = require("./utils/mbti-scoring");

const app = express();

// EJS & static
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Halaman utama
app.get("/", (req, res) => {
  res.render("index");
});

// Halaman kuis
app.get("/quiz", (req, res) => {
  res.render("quiz", { questions });
});

// Hasil kuis
app.post("/result", (req, res) => {
  let { answers } = req.body;
  console.log("📩 Jawaban diterima (raw):", answers);

  // ✅ Pastikan answers jadi array
  if (typeof answers === "string") {
    answers = answers.split(",");
  }

  console.log("📩 Jawaban array:", answers);

  // ✅ calculateMBTI sekarang mengembalikan objek result lengkap
  const resultData = calculateMBTI(answers);
  console.log("✅ Hasil MBTI:", resultData);

  res.render("result", { result: resultData });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`✅ Server berjalan di http://localhost:${PORT}`)
);
