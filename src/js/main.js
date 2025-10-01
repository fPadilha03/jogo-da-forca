const words = [
  "AFEGANISTAO","AFRICA DO SUL","ALBANIA","ALEMANHA","ANDORRA","ANGOLA",
  "ANTIGUA E BARBUDA","ARABIA SAUDITA","ARGELIA","ARGENTINA","ARMENIA","AUSTRALIA",
  "AUSTRIA","AZERBAIJAO","BAHAMAS","BAHREIN","BANGLADESH","BARBADOS",
  "BELGICA","BELIZE","BENIM","BOLIVIA","BOSNIA E HERZEGOVINA","BOTSUANA",
  "BRASIL","BRUNEI","BULGARIA","BURKINA FASO","BURUNDI","BUTAO",
  "CABO VERDE","CAMAROES","CAMBOJA","CANADA","CATAR","CHILE",
  "CHINA","CHIPRE","COLOMBIA","COMORES","CONGO","COREIA DO NORTE",
  "COREIA DO SUL","COSTA DO MARFIM","COSTA RICA","CROACIA","CUBA","DINAMARCA",
  "DJIBUTI","DOMINICA","EGITO","EL SALVADOR","EMIRADOS ARABES UNIDOS","EQUADOR",
  "ERITREIA","ESLOVAQUIA","ESLOVENIA","ESPANHA","ESTADOS UNIDOS","ESTONIA",
  "ETIOPIA","FIJI","FILIPINAS","FINLANDIA","FRANCA","GABAO",
  "GAMBIA","GANA","GEORGIA","GRECIA","GUATEMALA","GUINE",
  "GUINE-BISSAU","GUYANA","HAITI","HONDURAS","HUNGRIA","IEMEN",
  "INDIA","INDONESIA","IRAQUE","IRA","IRLANDA","ISLANDIA",
  "ISRAEL","ITALIA","JAMAICA","JAPAO","JORDANIA","KUAITE",
  "LAOS","LESOTO","LETONIA","LIBANO","LIBERIA","LIBIA",
  "LIECHTENSTEIN","LITUANIA","LUXEMBURGO","MACEDONIA DO NORTE","MADAGASCAR","MALASIA",
  "MALAVI","MALDIVAS","MALI","MALTA","MARROCOS","MAURICIOS",
  "MAURITANIA","MEXICO","MICRONESIA","MOCAMBIQUE","MOLDAVIA","MONACO",
  "MONGOLIA","MONTENEGRO","MYANMAR","NAMIBIA","NAURU","NEPAL",
  "NICARAGUA","NIGER","NIGERIA","NOVA ZELANDIA","NORUEGA","OMA",
  "PAQUISTAO","PANAMA","PAPUA NOVA GUINE","PARAGUAI","PERU","POLONIA",
  "PORTUGAL","QUENIA","QUIRGUISTAO","REINO UNIDO","REPUBLICA CENTRO-AFRICANA","REPUBLICA DOMINICANA",
  "REPUBLICA TCHECA","ROMENIA","RUANDA","RUSSIA","SAMOA","SAN MARINO",
  "SANTA LUCIA","SAO CRISTOVAO E NEVIS","SAO TOME E PRINCIPE","SAO VICENTE E GRANADINAS","SEICHELES","SENEGAL",
  "SERBIA","SIRIA","SINGAPURA","SOMALIA","SRI LANKA","SUAZILANDIA",
  "SUDAO","SUECIA","SUICA","SURINAME","TAILANDIA","TANZANIA",
  "TIMOR LESTE","TOGO","TONGA","TRINIDAD E TOBAGO","TUNISIA","TURCOMENISTAO",
  "TURQUIA","TUVALU","UCRANIA","UGANDA","URUGUAI","UZBEQUISTAO",
  "VANUATU","VENEZUELA","VIETNA","ZAMBIA","ZIMBABUE"
];
let answer = words[Math.floor(Math.random() * words.length)]

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


const wordDiv = document.getElementById('word')
const buttonsDiv = document.getElementById('letters')
const statusDiv = document.getElementById('status')
const reloadBtn = document.getElementById('reload-btn')

const maxErrors = 6
let errors = 0
let corrects = [' ', '-']

function showWord() {
    wordDiv.textContent = answer
    .split('')
    .map(letter => {
        if (corrects.includes(letter)) {
            return letter
        } else if (letter === ' '){
            return ' '
        } else if (letter === '-') {
            return '-'
        } else {
            return '_'
        }
    })
    .join('')
}

function guessLetter(letter, btn) {
    btn.disabled = true

    if (answer.includes(letter)) {
        corrects.push(letter)
    } else {
        errors++
    }
    showWord()
    checkEnd()
    drawDummy(errors)
}

function showButtons() {
    const letters = alphabet.split('')
    letters.forEach(letter => {
        const newButton = document.createElement('button')
        newButton.textContent = letter
        newButton.onclick = () => guessLetter(letter, newButton)
        buttonsDiv.appendChild(newButton)
    })
}

function checkEnd() {
    if (errors == maxErrors) {
        statusDiv.textContent = `Você perdeu! A palavra era ${answer}`
        statusDiv.style.color = 'red'
        block()
    } else if (answer.split('').every(letter => corrects.includes(letter))) {
        statusDiv.textContent = 'Parabéns, você acertou!'
        statusDiv.style.color = 'green'
        block()
    }
}

function block() {
    const allButtons = buttonsDiv.querySelectorAll('button')
    allButtons.forEach(btn => btn.disabled = true)
}

function unblock() {
    const allButtons = buttonsDiv.querySelectorAll('button')
    allButtons.forEach(btn => btn.disabled = false)
}

function refresh() {
    reloadBtn.classList.remove('reload-btn-clicked')
    reloadBtn.offsetWidth
    reloadBtn.classList.add('reload-btn-clicked')

    answer = words[Math.floor(Math.random() * words.length)]
    errors = 0
    corrects = [' ', '-']
    statusDiv.textContent = ''
    unblock()
    showWord()
    drawDummy(errors)
}

showButtons()
showWord()
drawBase()