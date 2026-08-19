const frasesMotivacionais = [
  "Se você não gosta do seu destino, não o aceite. Tenha a coragem de mudá-lo do jeito que você quer. — Naruto Uzumaki (Naruto)",
  "Trabalho duro é inútil para aqueles que não acreditam em si mesmos. — Naruto Uzumaki (Naruto)",
  "Se você não tentar, nunca saberá do que é capaz. — Saitama (One Punch Man)",
  "Aqueles que não conseguem abandonar nada, não podem mudar nada. — Armin Arlert (Attack on Titan)",
  "O medo não é mau. Ele lhe mostra qual é a sua fraqueza. E quando você conhece sua fraqueza, você pode se tornar mais forte e mais gentil. — Gildarts Clive (Fairy Tail)",
  "Se você só fizer o que sabe fazer, nunca será mais do que você é agora. — Mestre Shifu (Kung Fu Panda / Vibe de Anime)",
  "Não importa o quão difícil ou impossível seja, nunca perca de vista o seu objetivo. — Monkey D. Luffy (One Piece)",
  "Esqueça o passado, crie o seu próprio futuro. — Edward Elric (Fullmetal Alchemist)",
  "Você é humano. Tem o direito de cometer erros, cair e se levantar de novo. — Erza Scarlet (Fairy Tail)",
  "Levante a cabeça e siga em frente. Você tem pernas para caminhar. — Edward Elric (Fullmetal Alchemist)"
]

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");


function mostrarFrase(){
    const indice = Math.floor(Math.random() * frasesMotivacionais.length);
    fraseTexto.textContent = frasesMotivacionais[indice];
}

btnFrase.addEventListener("click", function() {
    mostrarFrase();
});