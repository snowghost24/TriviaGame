// Timer Function
function countDown(secs, elem) {
   var element = document.querySelector("#status");
   element.innerHTML = secs;
   secs--;
   var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000)
   window.timer = timer;
   if (secs <= -1) {
      clearTimeout(timer);
      function onQuestion(received) {
         wrongAnswers++;
         countDown(20, "status");
         var newNumb = parseInt(eval(switcher + 1));
         console.log(newNumb);
         displayVals(allDisplays[newNumb]);
      }
      onQuestion(page.question);
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

			// Displays question on the screen and answers schreen
			window.displayVals = function (page) {
            switcher++;
            console.log(page);
				$("#answers").show();
				$(".right").html("Right Answers: " + rightAnswer).fadeIn()
				$(".wrong").html("Wrong Answers: " + wrongAnswers).fadeIn()
				$(".gif-spot").hide();
				$("h4").remove();
				$.each(page, function (key, value) {
					if (key == "question") {
						$("#question").html("<h3>" + value + "</h3>");
						// console.log(display1["righAnswer"]);
					} else if (key !== "gif") {
                  $("#answers").append("<h4>" + value + "</h4>");
					} 
				});
				window.page = page;
			}


			// This call starts the trivia game
			$("#starter-btn").on("click", function () {
				countDown(20, "status");
				displayVals(display1);
				$("#starter-btn").hide();
			})

         // restarts the game
			$("#restart-btn").on("click", function () {
				$("#restart-btn").hide();
				rightAnswer = 0;
				wrongAnswers = 0;
				switcher = 0;
				countDown(20, "status");
				$("#question").show();
					$(".final").hide();
				displayVals(display1);
			})



			document.querySelector("#problem").addEventListener("click", (e) => {
				$(".gif-spot").show();
				$("#answers").hide();
				var hitTarget = e.target.innerHTML;
				if (switcher == 1 && hitTarget == "Steph Curry") {
					rightAnswer++
					
					$(".gif-spot").html(display1.gif).animate({ bottom: '250px' }).fadeIn()
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(display2);
						countDown(18, "status");
					}, 2600)
				} else if (switcher == 1 && hitTarget !== "Steph Curry") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Stephen Curry</h1>").show();
					$(".gif-spot").html('<img src="assets/images/jamesh.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display2);
						countDown(18, "status");
					}, 1800)
				}

				if (switcher == 2 && hitTarget == "Ray Allen") {
					rightAnswer++;
					$(".gif-spot").html(display2.gif);
					clearTimeout(timer);
					setTimeout(function () {
						countDown(18, "status");
						displayVals(display3);
					}, 5000)
				} else if (switcher == 2 && hitTarget !== "Ray Allen") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Ray Allen</h1>").show();
					$(".gif-spot").html('<img src="assets/images/rondoshock.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display3);
						countDown(18, "status");
					}, 3000)
				}

				if (switcher == 3 && hitTarget == "Steph Curry") {
					rightAnswer++;
					$(".gif-spot").html(display3.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(display4);
						countDown(18, "status");
					}, 5800)
				} else if (switcher == 3 && hitTarget !== "Steph Curry") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Steph Curry</h1>").show();
					$(".gif-spot").html('<img src="assets/images/westbrookface.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display4);
						countDown(18, "status");
					}, 2200)
				}


				if (switcher == 4 && hitTarget == "Klay Thompson") {
					rightAnswer++;
					$(".gif-spot").html(display4.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(display5);
						countDown(18, "status");
					}, 5800)
				} else if (switcher == 4 && hitTarget !== "Klay Thompson") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Klay Thompson</h1>").show();
					$(".gif-spot").html('<img src="assets/images/kalyNah.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display5);
						countDown(18, "status");
					}, 3000)
				}


				if (switcher == 5 && hitTarget == "Michael Jordan") {
					rightAnswer++;
					$(".gif-spot").html(display5.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(display6);
						countDown(18, "status");
					}, 4900)
				} else if (switcher == 5 && hitTarget !== "Michael Jordan") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Michael Jordan</h1>").show();
					$(".gif-spot").html('<img src="assets/images/jimmyb.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display6);
						countDown(18, "status");
					}, 4000)
				}

				if (switcher == 6 && hitTarget == "Golden State Warriors") {
					rightAnswer++;
					$(".gif-spot").html(display6.gif);
					clearTimeout(timer);
					setTimeout(function () {

						displayVals(display7);
						countDown(18, "status");
					}, 3000)
				} else if (switcher == 6 && hitTarget !== "Golden State Warriors") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Golden State Warriors</h1>").show();
					$(".gif-spot").html('<img src="assets/images/BlakeShock.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display7);
						countDown(18, "status");
					}, 2800)
				}

				if (switcher == 7 && hitTarget == "Kareem Abdul Jabbar") {
					rightAnswer++;
					$(".gif-spot").html(display7.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(display8);
						countDown(18, "status");
					}, 5800)
				} else if (switcher == 7 && hitTarget !== "Kareem Abdul Jabbar") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Kareem Abdul Jabbar</h1>").show();
					$(".gif-spot").html('<img src="assets/images/rondoshock.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display8);
						countDown(18, "status");
					}, 3000)
				}

				if (switcher == 8 && hitTarget == "Gilbert Arenas") {
					rightAnswer++;
					$(".gif-spot").html(display8.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(display9);
						countDown(18, "status");
					}, 4000)
				} else if (switcher == 8 && hitTarget !== "Gilbert Arenas") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is Gilbert Arenas</h1>").show();
					$(".gif-spot").html('<img src="assets/images/westbrookface.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display9);
						countDown(18, "status");
					}, 2200)
				}

				if (switcher == 9 && hitTarget == "John Stockton") {
					rightAnswer++;
					$(".gif-spot").html(display9.gif);
					clearTimeout(timer);
					setTimeout(function () {
						displayVals(display10);
						countDown(18, "status");
					}, 5000)
				} else if (switcher == 9 && hitTarget !== "John Stockton") {
					wrongAnswers++;
					$(".correct").html("<h1>The correct answer is John Stockton</h1>").show();
					$(".gif-spot").html('<img src="assets/images/kobe.gif" />');
					clearTimeout(timer);
					setTimeout(function () {
						$(".correct").hide();
						displayVals(display10);
						countDown(18, "status");
					}, 2800)
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