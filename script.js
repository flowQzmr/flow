const text = document.getElementById('info')
const button = document.getElementById('btn-1')
const button2 = document.getElementById('btn-2')
const button3 = document.getElementById('btn-3')

button.onclick = function() {
  let text2 = 'Dracule "Hawk Eyes" Mihawk is a world-famous pirate who holds the title of "Strongest Swordsman in the World".[8] He is one of the founders of Cross Guild, and was formerly one of the Seven Warlords of the Sea (being the first revealed and formally introduced) until the groups dissolution'
  text.textContent = text2
}

button2.onclick = function() {
  let text2 = 'Mihawk possesses immense superhuman strength and speed, as well as incredible reflexes. He also possesses excellent vision, able to precisely aim slashes at Luffy from across an active battlefield. When using Yoru in battle, Mihawk is capable of slashing through massive ships or mountains of ice with ease.'
  text.textContent = text2
}

button3.onclick = function() {
  let text2 = 'Despite his reputation as a fearsome warrior, Mihawk is a stoic and reserved character. He rarely shows emotion and speaks only when necessary. He is also highly self-reliant, preferring to work alone rather than rely on others.'
  text.textContent = text2
}