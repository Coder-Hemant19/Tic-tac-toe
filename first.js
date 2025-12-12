let btns = document.querySelectorAll(".Btn");
let newBtn = document.querySelector(".New");
let Msg = document.querySelector(".msg");

//Player 0's turn
let turn0 = true;

//Winning pattern for tictaktoe game
// Stored in 2D array
let patterns = 
[[0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6]
];

// Looping through each buttons
btns.forEach((btn) => {
    // When one of the button is clicked
    btn.addEventListener(("click") , ()=> {
        // If it is the turn of player 1 then X is marked
        if(turn0)
        {
            btn.innerText = "X";
            turn0 = false;
        }
        // Otherwise O is marked for player 2
        else{
            btn.innerText = "O";
            turn0 = true;
        }
        // Disabling the buttons that has been clicked
        btn.disabled = true;
        checkWinner ();
        
        if (checkFull())
        {
            showMsg();
            Msg.innerText = "Nice Effort(Draw)";
        }
    });
});

// To check Winner
function checkWinner ()
{
    for (let pattern of patterns) {
        // Determining patterns in postions from row 1 to 3
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        // Checking whether the position is empty or not
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            // Checking whether the patterns are matched
            if(pos1 === pos2 && pos2 === pos3)
            {
                showMsg();
                Msg.innerText = `Congratulations For Winning Player ${pos1}`;
                return true;
            }
        }
    }
}

//Function that shows hidden message
function showMsg()
{
    let element = document.getElementById("show");
    element.classList.remove("msg");
}

//Function that hides thr message
function hideMsg ()
{
    let element = document.getElementById("show");
    element.classList.add("msg");
}

//Function that checks whether the buttons are full or not
function checkFull ()
{
   //Loops through the buttons and checks whether it is full or not
  for(let i = 0; i < btns.length; i++)
  {
    // Checks whether there is still winner in the last round
    if(checkWinner() === true)
    {
        // Immediately stops the function when a winner is spotted
        return;
    }
    if(btns[i].innerText === "")
    {
        return false;
    }
  }
  return true;
}

// Method implemented after clicking New Game
newBtn.addEventListener("click" , () =>{
    // Hiding the texts
    hideMsg();
    // Loops through the buttons and clears the text inside the buttons and makes it clickable
    for (i = 0; i < btns.length; i++)
    {
        btns[i].innerText = "";
        btns[i].disabled = false;
    }
    // Doesn't replaces the value contained inside the button
    btns.disabled = true;
});

