function calculateMBTI(answers) {
  if (typeof answers === "string") {
    answers = answers.split(",");
  }

  let counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach((ans) => {
    counts[ans]++;
  });

  const mbti =
    (counts.E > counts.I ? "E" : "I") +
    (counts.S > counts.N ? "S" : "N") +
    (counts.T > counts.F ? "T" : "F") +
    (counts.J > counts.P ? "J" : "P");

  const results = {
    ISTJ: {
      type: "ISTJ",
      popmieName: "Pop Mie Ayam Bawang 🧄\n(Si Penjaga Tradisi)",
      popmieImage: "RAB.png",
      description:
        "Kamu tipe yang tenang, bertanggung jawab, dan selalu memastikan segala sesuatu berjalan sesuai aturan. Seperti Pop Mie Ayam Bawang — klasik, sederhana, dan selalu bisa diandalkan kapan pun dibutuhkan. Rasanya tidak pernah mengecewakan, seperti kamu yang jadi fondasi kuat bagi orang-orang di sekitarmu.",
    },
    ISFJ: {
      type: "ISFJ",
      popmieName: "Pop Mie Ayam 🍗\n(Si Perawat Kenyamanan)",
      popmieImage: "RA.png",
      description:
        "Hidupmu dipenuhi dedikasi dan kepedulian. Kamu menemukan kebahagiaan saat membuat orang lain merasa nyaman. Seperti Pop Mie Ayam yang hangat dan familiar, kamu selalu hadir menemani dari hari-hari sibuk sampai malam hujan yang sunyi.",
    },
    INFJ: {
      type: "INFJ",
      popmieName: "Pop Mie Soto Ayam 🍋\n(Si Pemimpi Tenang)",
      popmieImage: "RSA.png",
      description:
        "Kamu punya visi besar dan selalu berpikir mendalam tentang arti hidup. Meski terlihat tenang di luar, kamu penuh makna di dalam. Pop Mie Soto Ayam menggambarkanmu: hangat, beraroma khas, dan memberi ketenangan di setiap suapan — seperti nasihatmu yang selalu menenangkan hati.",
    },
    INTJ: {
      type: "INTJ",
      popmieName: "Pop Mie Korean Fiery Chikin 🔥\n(Si Strategis Visioner)",
      popmieImage: "RKFC.png",
      description:
        "Pikiranmu tajam, penuh rencana, dan selalu selangkah lebih maju. Kamu bukan pengikut tren — kamu yang menciptakannya. Seperti Pop Mie Korean Fiery Chikin: intens, berani, dan punya karakter kuat. Tak semua orang cocok, tapi yang mengerti akan selalu kembali.",
    },
    ISTP: {
      type: "ISTP",
      popmieName: "Pop Mie Baso 🥩\n(Si Problem Solver)",
      popmieImage: "RB.png",
      description:
        "Kamu logis, adaptif, dan cepat mengambil tindakan. Seperti Pop Mie Baso yang “berisi” dan kaya rasa, kamu selalu punya solusi konkret di saat dibutuhkan. Kamu mungkin tak banyak bicara, tapi aksi dan hasilmu selalu berbicara lebih keras.",
    },
    ISFP: {
      type: "ISFP",
      popmieName: "Pop Mie Tori Miso Ramen 🍲\n(Si Petualang Tenang)",
      popmieImage: "RTMR.png",
      description:
        "Kamu hidup untuk momen-momen kecil yang berarti, menyukai keindahan, dan spontan dalam cara yang lembut. Seperti Pop Mie Tori Miso Ramen yang punya rasa lembut namun berkarakter, kamu menghadirkan warna tanpa perlu jadi pusat perhatian.",
    },
    INFP: {
      type: "INFP",
      popmieName: "Pop Mie Ayam 🍜\n(Si Pemimpi Lembut)",
      popmieImage: "RA.png",
      description:
        "Kamu idealis dan percaya bahwa hal kecil bisa membawa perubahan besar. Seperti Pop Mie Ayam yang sederhana namun penuh makna, kamu membawa kehangatan emosional bagi setiap orang yang dekat denganmu.",
    },
    INTP: {
      type: "INTP",
      popmieName: "Pop Mie Ayam Bawang 🧪\n(Si Pemikir Unik)",
      popmieImage: "RAB.png",
      description:
        "Kamu selalu bertanya “mengapa” dan “bagaimana”. Pikiranmu tak pernah berhenti memecahkan teka-teki dunia. Pop Mie Ayam Bawang cocok untukmu: rasa klasik yang terlihat biasa, tapi penuh detail yang membuat penasaran lagi dan lagi.",
    },
    ESTP: {
      type: "ESTP",
      popmieName: "Pop Mie Kuah Pedes Dower 🔥\n(Si Aksi Cepat)",
      popmieImage: "RKPD.png",
      description:
        "Kamu hidup untuk tantangan, spontanitas, dan adrenalin. Seperti Pop Mie Kuah Pedes Dower yang mengguncang lidah, kamu selalu membawa energi ke mana pun pergi. Hidup bagimu adalah petualangan, dan setiap langkah harus terasa luar biasa.",
    },
    ESFP: {
      type: "ESFP",
      popmieName: "Pop Mie Spicy Ramyeon 🌶️\n(Si Bintang Panggung)",
      popmieImage: "RSR.png",
      description:
        "Kamu penuh kehidupan, suka jadi pusat perhatian, dan membawa kebahagiaan ke sekitarmu. Pop Mie Spicy Ramyeon yang berani dan membara mencerminkan dirimu: selalu tampil mencolok dan bikin orang ketagihan akan kehadiranmu.",
    },
    ENFP: {
      type: "ENFP",
      popmieName: "Pop Mie Kari Ayam 🍛\n(Si Penjelajah Ide)",
      popmieImage: "RKA.png",
      description:
        "Kamu spontan, penuh imajinasi, dan selalu siap mencoba hal baru. Seperti Pop Mie Kari Ayam yang kaya rempah dan penuh kejutan rasa, kamu membawa semangat baru di setiap langkah hidupmu.",
    },
    ENTP: {
      type: "ENTP",
      popmieName: "Pop Mie Goreng Pedes Gledek ⚡\n(Si Debater Kreatif)",
      popmieImage: "RGPG.png",
      description:
        "Kamu suka menantang status quo dan bermain dengan ide-ide gila. Pop Mie Goreng Pedes Gledek mewakilimu: berani, tidak biasa, dan kadang bikin orang takjub atau terintimidasi. Tapi di balik itu semua, kamu selalu membawa perspektif segar.",
    },
    ESTJ: {
      type: "ESTJ",
      popmieName:
        "Pop Mie Kuah Pedas Dower Pangsit Jontor 🥟\n(Si Pemimpin Tegas)",
      popmieImage: "RKPDPJ.png",
      description:
        "Kamu terstruktur, efisien, dan tahu bagaimana membuat sesuatu berjalan. Seperti Pop Mie Pangsit Jontor yang mengenyangkan dan penuh kekuatan, kamu membawa kepastian dan hasil nyata dalam setiap proyek yang kamu pimpin.",
    },
    ESFJ: {
      type: "ESFJ",
      popmieName: "Pop Mie Mi Goreng Spesial 🍜\n(Si Penjaga Kehangatan)",
      popmieImage: "RMGS.png",
      description:
        "Kamu peduli pada orang lain dan senang membuat semua orang merasa diterima. Pop Mie Mi Goreng Spesial yang kaya rasa dan disukai semua orang adalah cerminanmu — kamu adalah “zona nyaman” dalam bentuk manusia.",
    },
    ENFJ: {
      type: "ENFJ",
      popmieName: "Pop Mie Tori Kara Ramen 🥢\n(Si Inspirator)",
      popmieImage: "RTKR.png",
      description:
        "Kamu karismatik dan selalu menginspirasi orang lain untuk jadi versi terbaiknya. Pop Mie Tori Kara Ramen mencerminkan kepribadianmu: kuat, penuh energi, dan selalu memberi dorongan baru bagi siapa pun yang merasakannya.",
    },
    ENTJ: {
      type: "ENTJ",
      popmieName: "Pop Mie Indomie Goreng 👑\n(Si Komandan)",
      popmieImage: "RIG.png",
      description:
        "Kamu lahir sebagai pemimpin. Tegas, berani mengambil keputusan, dan tidak takut risiko. Pop Mie Indomie Goreng yang legendaris dan penuh karakter mencerminkan ambisimu — kuat, intens, dan selalu meninggalkan kesan mendalam.",
    },
  };

  return results[mbti];
}

module.exports = calculateMBTI;
