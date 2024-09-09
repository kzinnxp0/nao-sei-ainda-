const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const respostaDiv = document.getElementById('resposta');

naoButton.addEventListener('click', () => {
  naoButton.style.position = 'absolute';
  naoButton.style.top = Math.random() * window.innerHeight + 'px';
  naoButton.style.left = Math.random() * window.innerWidth + 'px';
});

simButton.addEventListener('click', () => {
  respostaDiv.style.display = 'block';
  respostaDiv.textContent = 'Já sabia que você me ama! ❤️';
  naoButton.style.display = 'none'; // Esconde o botão "Não"

  // Redireciona para o YouTube em uma nova aba
  window.open('https://music.youtube.com/watch?v=ORrFJ63nlcA', '_blank');
});