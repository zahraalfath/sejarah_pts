var quiztitle = "Quiz Sejarah";

var quiz = [
    {
        question: "Q1: Siapa gambar dibawah ini?",
        image:
          "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
        choices: [
          "Sir Isaac Newton",
          "Nicolaus Copernicus",
          "Albert Einstein",
          "Ralph Waldo Emmerson",
        ],
        correct: "Albert Einstein",
        explanation:
          "Albert Einstein drafted the special theory of relativity in 1905.",
      },
      {
        question:
          "Q2: Salah satu pemicu pertempuran 10 November di Surabaya adalah?",
        image: "",
        choices: [
          "Pembebasan tawanan perang tanpa persetujuan",
          "Tewasnya Brigjend T.E.D Kelly",
          "Tewasnya Jenderal Mallaby",
          "Belanda mengingkari hasil perundingan Renville",
        ],
        correct: "Tewasnya Jenderal Mallaby",
        explanation: "",
      },
      {
        question:
          "Q3: Pasukan sekutu yang datang ke Indonesia diboncengi tentara NICA. Tujuan kedatangan tentara NICA ke Indonesia adalah?",
        image: "",
        choices: [
          "Menangkap para pemimpin Jepang di Indonesia",
          "Melucuti tentara Jepang",
          "Ingin kembali menjajah Indonesia",
          "Ingin ikut terlibat dalam proses Proklamasi",
        ],
        correct: "Ingin kembali menjajah Indonesia",
        explanation: "",
      },
      {
        question:
          "Q4: Agresi Militer Belanda I memicu reaksi keras khususnya dua negara sahabat Indonesia. Mereka menyerukan agar masalah ini dibahas dalam pertemuan Dewan Keamanan PBB. Negara-negara itu adalah?",
        image: "",
        choices: [
          "India dan Pakistan",
          "Pakistan dan Filipina",
          "Birma dan India",
          "India dan Australia",
          "Pakistan dan Australia",
        ],
        correct: "India dan Australia",
        explanation: "",
      },
      {
        question:
          "Q5: Ketua delegasi Indonesia dalam perundingan Linggarjati adalah?",
        image: "",
        choices: [
          "Sutan Syahrir",
          "Amir Syarifuddin",
          "Moh. Roem",
          "Moh. Hatta",
          "Moh. Natsir",
        ],
        correct: "Sutan Syahrir",
        explanation: "",
      },
      {
        question:
          "Q6: Tokoh yang memprakarsai perundingan Linggarjati adalah?",
        image: "",
        choices: [
          "Van Mook",
          "Lord Killearn",
          "Paul van Zeeland",
          "Richard Kirby",
          "Frank Graham",
        ],
        correct: "Lord Killearn",
        explanation: "",
      },
      {
        question:
          "Q7: Alasan utama dari pembentukan Pemerintahan Darurat Republik Indonesia (PDRI) yang berkedudukan di Bukittinggi, Sumatera Barat adalah?",
        image: "",
        choices: [
          "Menyelamatkan kabinet yang memerintah saat itu",
          "Sebagai pemerintahan bayangan karena para pemimpin Indonesia diasingkan Belanda",
          "Mengisyaratkan bahwa basis perjuangan militer adalah Bukittinggi",
          "Yogyakarta dinilai tidak lagi aman untuk menjadi pusat pemerintahan Indonesia",
          "Mengelabui Belanda agar tidak menyerang pusat pemerintahan di Yogyakarta",
        ],
        correct:
          "Sebagai pemerintahan bayangan karena para pemimpin Indonesia diasingkan Belanda",
        explanation: "",
      },
      {
        question:
          "Q8: Pada akhirnya, Republik Indonesia mendapatkan pengakuan kedaulatan dari Belanda melalui perundingan?",
        image: "",
        choices: [
          "Renville",
          "Linggarjati",
          "Konferensi Meja Bundar",
          "Roem Royen",
          "Konferensi Inter Indonesia",
        ],
        correct: "Konferensi Meja Bundar",
        explanation: "",
      },
      {
        question:
          "Q9: Diinjak-injaknya lencana Merah Putih oleh anggota NICA di hotel di Jalan Bali menjadi sebab salah satu penyebab dari peristiwa?",
        image: "",
        choices: [
          "Pertempuran Medan Area",
          "Pertempuran Bandung Lautan Api",
          "Pertempuran Lima Hari di Semarang",
          "Pertempuran Ambarawa",
          "Pertempuran Puputan Margarana",
        ],
        correct: "Pertempuran Medan Area",
        explanation: "",
      },
      {
        question:
          "Q10: Rombongan besar pasukan AFNEI yang diboncengi NICA tiba di Medan dengan dipimpin oleh?",
        image: "",
        choices: [
          "Sir Philip Christison",
          "Letnan Boomerg",
          "Brigjen T.E.D Kelly",
          "Willem Drees",
          "Brigjen A.W.S Mallaby",
        ],
        correct: "Brigjen T.E.D Kelly",
        explanation: "",
      },
    ];

var currentquestion = 0,
    score = 0,
    submt = true,
    picked;

jQuery(document).ready(function ($) {
    function htmlEncode(value) {
        return $(document.createElement("div")).text(value).html();
      }

      /**
       * This will add the individual choices for each question to the ul#choice-block
       *
       * @param {choices} array The choices from each question
       */
      function addChoices(choices) {
        if (typeof choices !== "undefined" && $.type(choices) == "array") {
          $("#choice-block").empty();
          for (var i = 0; i < choices.length; i++) {
            $(document.createElement("li"))
              .addClass("choice choice-box")
              .attr("data-index", i)
              .text(choices[i])
              .appendTo("#choice-block");
          }
        }
      }
      function nextQuestion() {
        submt = true;
        $("#explanation").empty();
        $("#question").text(quiz[currentquestion]["question"]);
        $("#pager").text(
          "Question " + Number(currentquestion + 1) + " of " + quiz.length
        );
        if (
          quiz[currentquestion].hasOwnProperty("image") &&
          quiz[currentquestion]["image"] != ""
        ) {
          if ($("#question-image").length == 0) {
            $(document.createElement("img"))
              .addClass("question-image")
              .attr("id", "question-image")
              .attr("src", quiz[currentquestion]["image"])
              .attr("alt", htmlEncode(quiz[currentquestion]["question"]))
              .insertAfter("#question");
          } else {
            $("#question-image")
              .attr("src", quiz[currentquestion]["image"])
              .attr("alt", htmlEncode(quiz[currentquestion]["question"]));
          }
        } else {
          $("#question-image").remove();
        }
        addChoices(quiz[currentquestion]["choices"]);
        setupButtons();
      }

      /**
       * After a selection is submitted, checks if its the right answer
       *
       * @param {choice} number The li zero-based index of the choice picked
       */
      function processQuestion(choice) {
        if (
          quiz[currentquestion]["choices"][choice] ==
          quiz[currentquestion]["correct"]
        ) {
          $(".choice").eq(choice).css({ "background-color": "#50D943" });
          $("#explanation").html(
            "<strong>Correct!</strong> " +
              htmlEncode(quiz[currentquestion]["explanation"])
          );
          score++;
        } else {
          $(".choice").eq(choice).css({ "background-color": "#D92623" });
          $("#explanation").html(
            "<strong>Incorrect.</strong> " +
              htmlEncode(quiz[currentquestion]["explanation"])
          );
        }
        currentquestion++;
        $("#submitbutton")
          .html("NEXT QUESTION &raquo;")
          .on("click", function () {
            if (currentquestion == quiz.length) {
              endQuiz();
            } else {
              $(this)
                .text("Check Answer")
                .css({ color: "#222" })
                .off("click");
              nextQuestion();
            }
          });
      }

      function restartQuiz() {
        currentquestion = 0;
        score = 0;
        submt = true;
        picked = undefined;
        $("#frame").empty(); // Membersihkan konten frame
        init(); // Memulai ulang kuis
    }

      function setupButtons() {
        $(".choice").on("mouseover", function () {
          $(this).css({ "background-color": "#e1e1e1" });
        });
        $(".choice").on("mouseout", function () {
          $(this).css({ "background-color": "#fff" });
        });
        $(".choice").on("click", function () {
          picked = $(this).attr("data-index");
          $(".choice").removeAttr("style").off("mouseout mouseover");
          $(this).css({
            "border-color": "#222",
            "font-weight": 700,
            "background-color": "#c1c1c1",
          });
          if (submt) {
            submt = false;
            $("#submitbutton")
            .css({ color: "#000" })
            .on("click", function () {
              $(".choice").off("click");
              $(this).off("click");
              processQuestion(picked);
              if (currentquestion === quiz.length) {
                showResults();
              }
              });    
          }
        });
      }

      function showResults() {
        $("#submitbutton").remove();
        $("#question").text(
          "You got " + score + " out of " + quiz.length + " correct."
        );
        $(document.createElement("h2"))
          .css({ "text-align": "center", "font-size": "4em" })
          .text(Math.round((score / quiz.length) * 100) + "%")
          .insertAfter("#question");
    
        // Tambahkan tombol "Coba Lagi"
        $(document.createElement("div"))
          .addClass("choice-box")
          .attr("id", "retrybutton")
          .text("Coba Lagi")
          .css({ "font-weight": 700, color: "#222", padding: "30px 0", "background-color": "#D04848" })
          .on("click", function () {
            restartQuiz();
          })
          .appendTo("#frame");
      }

      function endQuiz() {
        $("#explanation").empty();
        $("#question").empty();
        $("#choice-block").empty();
        $("#submitbutton").remove();
        // Tampilkan hasil skor tanpa menambahkan soal
        showResults();
      }

      function init() {
        //add title
        if (
          typeof quiztitle !== "undefined" &&
          $.type(quiztitle) === "string"
        ) {
          $(document.createElement("h1")).text(quiztitle).appendTo("#frame");
        } else {
          $(document.createElement("h1")).text("Quiz").appendTo("#frame");
        }

        //add pager and questions
        if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
          //add pager
          $(document.createElement("p"))
            .addClass("pager")
            .attr("id", "pager")
            .text("Question 1 of " + quiz.length)
            .appendTo("#frame");
          //add first question
          $(document.createElement("h2"))
            .addClass("question")
            .attr("id", "question")
            .text(quiz[0]["question"])
            .appendTo("#frame");
          //add image if present
          if (quiz[0].hasOwnProperty("image") && quiz[0]["image"] != "") {
            $(document.createElement("img"))
              .addClass("question-image")
              .attr("id", "question-image")
              .attr("src", quiz[0]["image"])
              .attr("alt", htmlEncode(quiz[0]["question"]))
              .appendTo("#frame");
          }
          $(document.createElement("p"))
            .addClass("explanation")
            .attr("id", "explanation")
            .html("&nbsp;")
            .appendTo("#frame");

          //questions holder
          $(document.createElement("ul"))
            .attr("id", "choice-block")
            .appendTo("#frame");

          //add choices
          addChoices(quiz[0]["choices"]);

          //add submit button
          $(document.createElement("div"))
            .addClass("choice-box")
            .attr("id", "submitbutton")
            .text("Check Answer")
            .css({ "font-weight": 700, color: "#222", padding: "30px 0" })
            .appendTo("#frame");

          setupButtons();
        }
      }
      init();
});
