function start() {
    player1_name = document.getElementById("player1_input").value;
    player2_name = document.getElementById("player2_input").value;
    if (player1_name == "" || player2_name == "" || player1_name == " " || player2_name == " ") {
        window.alert("Enter a Valid name");
    } 
    else{
        localStorage.setItem("Player_1", player1_name);
        localStorage.setItem("Player_2", player2_name);
        window.location = "Game.html";
    }
}