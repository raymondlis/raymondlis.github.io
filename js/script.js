document.addEventListener("DOMContentLoaded", function () {

    var botao1 = document.querySelector('#joinbutton button');
    var membersCount = document.querySelector('.num-membros');
    
    var members = 1678;
    botao1.style.backgroundColor = "hsl(57, 50%, 91%)"

    botao1.addEventListener('click', function () {
        if(botao1.innerHTML === "Join") { 
            botao1.innerHTML = "Joined";
            members++;

            membersCount.textContent = members + ' membros';

         } else {
            botao1.innerHTML = "Join";
            members --;
            membersCount.textContent = members + ' membros'
         }
    }); 

})
