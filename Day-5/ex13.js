/*3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/

function janken(hand) {
    let str = ["rock", "paper", "scissor"];
    let npc = str[Math.floor(Math.random() * str.length)]; //math floor rounds down to nearest integer. math random gets the value based on the array length. This value is usually float, so the math floor will round it down to make sure that it gives the correct index. tldr, math random will give from 0.000000...1 to 2.99999999999...9 and math floor will round it down to 0, 1, and 2. yay

    console.log(`\nPlayer chose ${hand} and NPC chose ${npc}\n`)

    if (hand == npc) {
        return "Draw!!"
    } else if ((hand == "scissor" && npc == "paper") || (hand == "paper" && npc == "rock") || (hand == "rock" && npc == "scissor")) {
        return "Player Wins!!"
    } else { return "NPC Wins!!" }

}

console.log(janken("scissor"));