// This funtion fires every second to create a countdonw
function countDown(secs, elem) {
   var element = document.querySelector("#status");
   element.innerHTML = secs;
   secs--;
   var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000)
	window.timer = timer;
	// This function pulls up the next question after time has expired
   if (secs <= -1) {
      clearTimeout(timer);
         wrongAnswers++;
         countDown(20, "status");
         var newNumb = parseInt(eval(switcher + 1));
         console.log(newNumb);
         displayVals(allDisplays[newNumb]);
      }
   }

		function displayer(question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3, gif) {
			this.question = question;
			this.righAnswer = rightAnswer;
			this.wrongAnswer1 = wrongAnswer1;
			this.wrongAnswer2 = wrongAnswer2;
			this.wrongAnswer3 = wrongAnswer3
			this.gif = gif;
		}
		var display1 = new displayer("Which one of the following is the only player to be unanimously voted MVP?", "Michael Jordan", "Magic Johnson", "Steph Curry", "Lebron James", '<img src="assets/images/curryface.gif" />');
		var display2 = new displayer("Who has scored the most 3 pointers in NBA history?", "Ray Allen", " Reggie Miller", "Steve Kerr", "Steph Curry", '<img src="assets/images/raygame6.gif" />');
		var display3 = new displayer("Who holds the record for most 3 pointers in a single NBA game?", "Ray Allen", " Reggie Miller", " Kobe Bryant", "Steph Curry", '<img src="assets/images/stephla.gif" />');
		var display4 = new displayer("Which player holds the record for most points in an NBA quater?", "Michael Jordan", "Kobe Bryant", "Klay Thompson", "Steph Curry", '<img src="assets/images/klay.gif" />');
		var display5 = new displayer("Which player has never lost in the NBA finals?", "Tim Duncan", "Michael Jordan", " Wilt Charmberlain", "Kareem Abdul Jabbar", '<img src="assets/images/mj.gif" />');
		var display6 = new displayer("Which team holds the record for most wins in the regular season?", "Los Angeles Lakers", "Golden State Warriors", "Boston Celtics", "Chicago Bulls", '<img src="assets/images/stephandKlay.gif" />');
		var display7 = new displayer("Who has scored the most points in NBA history?", "Karl Malone", "Kareem Abdul Jabbar", "Michael Jordan", "Lebron James", '<img src="assets/images/kareem.gif" />');
		var display8 = new displayer("Which player has had the most points in an overtime period?", "Penny Hardaway", "Dirk Nowitzki", "Kobe Bryant", "Gilbert Arenas", '<img src="assets/images/arenas.gif" />');
		var display9 = new displayer("Who is the NBA all-time leader in assist?", "Magic Johnson", "Steve Nash", " Rajon Rondo", "John Stockton", '<img src="assets/images/stockton.gif" />');
		var display10 = new displayer("Which player had 4 consecutive 40 point games as a rookie?", "Wilt Chamberlain", "Allen Iverson", "Michael Jordan", "Charles Barkley", '<img src="assets/images/ai-mj.gif" />');
		var allDisplays = [display1,display2,display3,display4,display5,display6,display7,display8,display9,display10];
		var rightAnswer = 0;
		var wrongAnswers = 0;
		var switcher = 0;
		$(document).ready(function () {
			//Start of jQuery////////////////////////////////////////////////////////////////////////////
			// Displays questions and answers on the screen
			// Displays count of right and wrong answers and hides previous giphy
			window.displayVals = function (page) {
				window.page = page;
            switcher++;
				$("#answers").show();
				$(".right").html("Right Answers: " + rightAnswer);
				$(".wrong").html("Wrong Answers: " + wrongAnswers);
				$(".gif-spot").hide();
				$("h4").remove();
				
				$.each(page, function (key, value) {
					if (key == "question") {
						$("#question").html("<h3>" + value + "</h3>");
					} else if (key !== "gif") {
                  $("#answers").append("<h4>" + value + "</h4>");
					} 
				});
			}

			// Starts the trivia game
			$("#starter-btn").on("click", function () {
				countDown(20, "status");
				displayVals(display1);
				$("#starter-btn").hide();
			})

         // restarts the game and resets variables
			$("#restart-btn").on("click", function () {
				rightAnswer = 0;
				wrongAnswers = 0;
				switcher = 0;
				$("#restart-btn").hide();
				$("#question").show();
				$(".final").hide();
				displayVals(display1);
				countDown(20, "status");
			})

			document.querySelector("#problem").addEventListener("click", (e) => {
				$(".gif-spot").show();
				$("#answers").hide();
				var hitTarget = e.target.innerHTML;
				//right answer handler
				function qRight (firstDisplayNumb,secondDisplayNumb,gifDuration){
					rightAnswer++
					$(".gif-spot").html(firstDisplayNumb.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(secondDisplayNumb,);
						countDown(18, "status");
					}, gifDuration)
				}
				// wrong answer handler
				function qWrong(correctAns,theGif,secondDisplayNumb, gifDuration) {
					wrongAnswers++;
					$(".correct").html("<h1>"+correctAns+"</h1>").show();
					$(".gif-spot").html(theGif);
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(secondDisplayNumb);
						countDown(18, "status");
					}, gifDuration)
				}

				//Handles users response
				if (switcher == 1 && hitTarget == "Steph Curry") {
					qRight(display1,display2,2600);
				} else if (switcher == 1 && hitTarget !== "Steph Curry") {
					qWrong("The correct answer is Stephen Curry", '<img src="assets/images/jamesh.gif" />',display2,1800);
				}

				if (switcher == 2 && hitTarget == "Ray Allen") {
					qRight(display2, display3, 5000);
				} else if (switcher == 2 && hitTarget !== "Ray Allen") {
					qWrong("The correct answer is Ray Allen", '<img src="assets/images/rondoshock.gif" />', display3, 3000);
				}

				if (switcher == 3 && hitTarget == "Steph Curry") {
					qRight(display3, display4, 5800);
				} else if (switcher == 3 && hitTarget !== "Steph Curry") {
					qWrong("The correct answer is Stephen Curry", '<img src="assets/images/westbrookface.gif" />', display4, 2200);
				}


				if (switcher == 4 && hitTarget == "Klay Thompson") {
					qRight(display4, display5, 5800);
				} else if (switcher == 4 && hitTarget !== "Klay Thompson") {
					qWrong("The correct answer is Klay Thompson", '<img src="assets/images/kalyNah.gif"  />', display5, 3000);
				}


				if (switcher == 5 && hitTarget == "Michael Jordan") {
					qRight(display5, display6, 4900);
				} else if (switcher == 5 && hitTarget !== "Michael Jordan") {
					qWrong("The correct answer is Michael Jordan", '<img src="assets/images/jimmyb.gif"  />', display6, 4000);
				}

				if (switcher == 6 && hitTarget == "Golden State Warriors") {
					qRight(display6, display7, 3000);
				} else if (switcher == 6 && hitTarget !== "Golden State Warriors") {
					qWrong("Golden State Warriors silly", '<img src="assets/images/BlakeShock.gif"  />', display7, 2800);
				}

				if (switcher == 7 && hitTarget == "Kareem Abdul Jabbar") {
					qRight(display7, display8, 3000);
				} else if (switcher == 7 && hitTarget !== "Kareem Abdul Jabbar") {
					qWrong("The correct answer is Kareem Abdul Jabbar", '<img src="assets/images/rondoshock.gif" />', display8, 3000);
				}

				if (switcher == 8 && hitTarget == "Gilbert Arenas") {
					qRight(display8, display9, 4000);
				} else if (switcher == 8 && hitTarget !== "Gilbert Arenas") {
					qWrong("The correct answer is Gilbert Arenas", '<img src="assets/images/westbrookface.gif" />', display9, 2200);
				}

				if (switcher == 9 && hitTarget == "John Stockton") {
					qRight(display9, display10, 5000);
					rightAnswer++;
				} else if (switcher == 9 && hitTarget !== "John Stockton") {
					qWrong("The correct answer is John Stockton", '<img src="assets/images/kobe.gif" />', display10, 2800);
				}
				
				if (switcher == 10 && hitTarget == "Allen Iverson") {
					rightAnswer++;
					$(".gif-spot").html(display10.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayScore();
						$("#question").hide();
						$(".correct").hide();
						$(".gif-spot").hide();
					}, 4300)
				} else if (switcher == 10 && hitTarget !== "Allen Iverson") {
					wrongAnswers++;
					console.log("im here");
					$(".correct").html("<h1>The correct answer is Allen Iverson</h1>").show();
					$(".gif-spot").html('<img src="assets/images//mikiw.jpg" />');
					clearTimeout(timer);
					setTimeout(function () {
						displayScore();
						$("#question").hide();
						$(".correct").hide();
						$(".gif-spot").hide();
						
					}, 3000)

				}
				function displayScore() {
						$("#answers").hide();
						$("#question").hide();
						$(".final").show();

						if (rightAnswer > 7) {
							$(".final").html("Congratulations you had " + rightAnswer + " correct answers. Ball must really be life");
							$("#restart-btn").show();
						} else if (5 < rightAnswer && rightAnswer < 7) {
							$(".final").html("OK! you had " + rightAnswer + " correct answers. But there is room for improvement");
							$("#restart-btn").show();
						} else if (rightAnswer < 5) {
							$(".final").html("Wow you had " + wrongAnswers + " wrong answers. You know nothing John Snow");
							$("#restart-btn").show();
						}
					}
			})
			// End of jQuery/////////////////////////////////////////////////////////////////////////////////
		})