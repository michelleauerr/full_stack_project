
const mysign = document.querySelector(".mysign");
const day = document.querySelector('#day');
const month = document.querySelector('#month');

const Aries = "Your sun sign is Aries! Cardinal fire; ruled by Mars. Lots of willpower, impulsiveness, initiative, courage, energy, activity. Often throws himself headlong into things."
const Taurus= "Your Sun sign is Taurus! Fixed earth; ruled by Venus. Sensual, seeks pleasure, stability, and strives for security. Sees red when provoked for a long time."
const Gemini= "Your Sun sign is Gemini! Mutable air; ruled by Mercury. Mental, witty, communicative, won't sit still, takes pleasure in learning. Rarely makes contact."
const Cancer= "Your sun sign is Cancer! Cardinal water; ruled by the Moon. Emotional, stubborn, seeks security and closeness. A very family person."
const Leo= "Your sun sign is Leo! Fixed fire; ruled by the Sun. Glamour, generosity, likes to be the organizer and the center of attention."
const Virgo= "Your sun sign is Virgo! Mutable Earth; ruled by Mercury. Precise, knows the difference, does what is necessary and what is useful. A critical point of view."
const Libra= "Your sun sign is Libra! Cardinal air; ruled by Venus. Sense of beauty and proportion, has tact, seeks balance and harmony."
const Scorpio= "Your sun sign is Scorpio! Fixed water; ruled by Pluto. Corrosive, passionate, penetrating, sometimes finds themselves immersed in extreme situations. Frequently fights with the spirits they summon."
const Sagittarius= "Your Sun sign is Sagittarius! Mutable fire; ruled by Jupiter. Free-spirited and carefree, has a love for movement and is cheerful. Has a nomadic instinct, often seems to be somewhere else."
const Capricorn= "Your Sun sign is Capricorn! Cardinal earth; ruled by Saturn. Resilient, has a sense of purpose, very proud and ambitious."
const Aquarius= "Your Sun Sign is Aquarius! Fixed Air; ruled by Uranus. Communicative, humanitarian, progressive. Its a universal spirit with an occasional amazing stubbornness."
const Pisces= "Your sun sign is Pisces! Mutable water; ruled by Neptune. Sensitive, compassionate, helpful, sociable. Very adaptable and hard to label."


mysign.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(day.value,month.value);
        if (month.value == 1 && day.value >= 20 || month.value  == 2 && day.value <= 18) {const span = document.querySelector('#result') ; span.textContent = Aquarius; }
        if (month.value  == 1 && day.value > 31) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 2 && day.value >= 19 || month.value  == 3 && day.value <= 20) { const span = document.querySelector('#result') ; span.textContent = Pisces; }
        if (month.value  == 2 && day.value > 29) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 3 && day.value >= 21 || month.value  == 4 && day.value <= 19) { const span = document.querySelector('#result') ; span.textContent = Aries; }
        if (month.value  == 3 && day.value > 31) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 4 && day.value >= 20 || month.value  == 5 && day.value <= 20) { const span = document.querySelector('#result') ; span.textContent  = Taurus; }
        if (month.value  == 4 && day.value > 30) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 5 && day.value >= 21 || month.value  == 6 && day.value <= 21) { const span = document.querySelector('#result') ; span.textContent = Gemini; }
        if (month.value  == 5 && day.value > 31) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 6 && day.value >= 22 || month.value  == 7 && day.value <= 22) { const span = document.querySelector('#result') ; span.textContent = Cancer; }
        if (month.value  == 6 && day.value > 30) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 7 && day.value >= 23 || month.value  == 8 && day.value <= 22) { const span = document.querySelector('#result') ; span.textContent = Leo; }
        if (month.value  == 7 && day.value > 31) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 8 && day.value >= 23 || month.value  == 9 && day.value <= 22) { const span = document.querySelector('#result') ; span.textContent = Virgo; }
        if (month.value  == 8 && day.value > 31) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 9 && day.value >= 23 || month.value  == 10 && day.value <= 22) { const span = document.querySelector('#result') ; span.textContent = Libra; }
        if (month.value  == 9 && day.value > 30) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 10 && day.value >= 23 || month.value  == 11 && day.value <= 21) { const span = document.querySelector('#result') ; span.textContent = Scorpio; }
        if (month.value  == 10 && day.value > 31) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 11 && day.value >= 22 || month.value  == 12 && day.value <= 21) { const span = document.querySelector('#result') ; span.textContent = Sagittarius; }
        if (month.value  == 11 && day.value > 30) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
        if (month.value  == 12 && day.value >= 22 || month.value  == 1 && day.value <= 19) { const span = document.querySelector('#result') ; span.textContent = Capricorn; }
        if (month.value  == 12 && day.value > 31) { const span = document.querySelector('#result') ; span.textContent = 'Not a valid date'; }
    })



const formcontact = document.querySelector('.contact');

formcontact.addEventListener('submit', (formevent) => {
    formevent.preventDefault();
    const expression = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
if (!email.value.match(expression)) {
    const span = document.querySelector('#error'); span.textContent = 'Not a valid email'
} 
else {
    formcontact.submit()
    } 
})    