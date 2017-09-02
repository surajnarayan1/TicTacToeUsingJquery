$(document).ready(function(){
	startGame();
	$('.Box').click(function(){
		nextMove(this);
		cleanBox()
	});
	});
	
        function WinningCondition(move) {
            var result = false;
            if (checkforRow(1, 2, 3, move) ||
                checkforRow(4, 5, 6, move) ||
                checkforRow(7, 8, 9, move) ||
                checkforRow(1, 4, 7, move) ||
                checkforRow(2, 5, 8, move) ||
                checkforRow(3, 6, 9, move) ||
                checkforRow(1, 5, 9, move) ||
                checkforRow(3, 5, 7, move)) {
                result = true;
            }
            return result;
        }
        function checkforRow(a, b, c, move) {
            var result1 = false;//used var so that it will last in block
            if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
                result1 = true;
            }
            return result1;
        }
        function getBox(number) {
            //return document.getElementById("s" + number).innerText;
			return $('#s'+number).text();
        }

        function startGame() {
            for (var i = 1; i <= 9; i = i + 1) {
                cleanBox(i);
            }
            document.turn = "X";
            if (Math.random() < 0.5) {
                document.turn = "O";
            }
            document.winner = null;
            setMessage(document.turn + "start the game")

        }
        function setMessage(msg) {
            //document.getElementById("message").innerText = msg;
			$('#message').text(msg);
        }


        function cleanBox(number) {
            //document.getElementById("s" + number).innerText = "-";
			$('#s'+number).text("-");
        }


        function nextMove(Box) {
            if (document.winner != null) {
                setMessage(document.winner + "already won the game");
            }
            else
                //if (Box.innerText == "-") {
					if ($(Box).text() == "-") {
                    //Box.innerText = document.turn;
					$(Box).text(document.turn);
                    swithTurn();
                }
                else {
                    setMessage("Inavalid Move");
                }
        }


        function swithTurn() {
            if (WinningCondition(document.turn)) {
                setMessage("Congratulation " + document.turn + "!you win");
                document.winner = document.turn;
            }
            else

                if (document.turn == "X") {
                    document.turn = "O";
                    setMessage("Its    " + document.turn + "' turn s");
                }
                else {
                    document.turn = "X";
                    setMessage("Its " + document.turn + "' turn s");
                }

        }



