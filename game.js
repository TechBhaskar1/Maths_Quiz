player1 = localStorage.getItem("Player_1");
player2 = localStorage.getItem("Player_2");

player1_score = 0;
player2_score = 0;

console.log(player1);
console.log(player2);

document.getElementById("player1_name").innerHTML = player1 + ":";
document.getElementById("player2_name").innerHTML = player2 + ":";

document.getElementById("question").innerHTML = "Question Turn : <br>" + player1;
document.getElementById("answer").innerHTML = "Answer Turn : <br>" + player2;

function send() {
     getno1 = document.getElementById("no1").value;
     getno2 = document.getElementById("no2").value;
     if (getno1 == "" || getno2 == "") {
          window.alert("Type Valid vlaue");
     } else {
          ans = getno1 * getno2;
          console.log(ans);

          head = "<h1 id='head2'>QUESTION</h1>"
          Question = "<h4 id='no_display'>"+"Q :"+ getno1 + " X " + getno2 + "</h4>";
          input_line = "<br><p id='p8'>Ans :<p><input id='user_ans' type='text' placeholder='Type you ans here'>";
          check_btn = "<br><br><button class='btn btn-info' id='check_btn' onclick='check()'>Check</button>";

          row = head + "<hr>" + Question + input_line + check_btn;

          document.getElementById("output").innerHTML = row;
          document.getElementById("no1").value = "";
          document.getElementById("no2").value = "";
     }
}
question_turn = "player1";
answer_turn = "player2";

function check() {
     getans = document.getElementById("user_ans").value;
     if (ans == getans) {
          if (answer_turn == "player1") {
               player1_score = player1_score + 1;
               document.getElementById("player1_name").innerHTML = player1 + ":" + player1_score;
          } else {
               player2_score = player2_score + 1;
               document.getElementById("player2_name").innerHTML = player2 + ":" + player2_score;
          }
     }
     if (question_turn == "player1") {
          question_turn = "player2"
          document.getElementById("question").innerHTML = "Question Turn : <br>" + player2;
     } else {
          question_turn = "player1"
          document.getElementById("question").innerHTML = "Question Turn : <br>" + player1;
     }
     if (answer_turn == "player1") {
          answer_turn = "player2"
          document.getElementById("answer").innerHTML = "Answer turn : <br>" + player2;
     } else {
          answer_turn = "player1"
          document.getElementById("answer").innerHTML = "Answer Turn : <br>" + player1;
     }
     document.getElementById("output").innerHTML = "";
}