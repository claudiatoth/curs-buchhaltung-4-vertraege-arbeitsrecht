// ============================================
// FLASHCARDS - Buchhaltung Teil 4: Verträge & Arbeitsrecht (B1)
// Claudia Toth · 32 carduri cu TTS · substantive Sg·Pl
// ============================================

const flashcardsData = [
    { de: "der Arbeitsvertrag · die Arbeitsverträge", ro: "contractul de muncă · ... (Umlaut a→ä)" },
    { de: "die Probezeit · die Probezeiten", ro: "perioada de probă · ..." },
    { de: "die Kündigung · die Kündigungen", ro: "desfacerea contractului · ..." },
    { de: "die Kündigungsfrist · die Kündigungsfristen", ro: "termenul de preaviz · ..." },
    { de: "der Urlaub · die Urlaube", ro: "concediul · ... (de obicei Sg.)" },
    { de: "der Urlaubsanspruch · die Urlaubsansprüche", ro: "dreptul la concediu · ... (Umlaut u→ü)" },
    { de: "der Urlaubstag · die Urlaubstage", ro: "ziua de concediu · zilele de concediu" },
    { de: "die Arbeitszeit · die Arbeitszeiten", ro: "programul de lucru · ..." },
    { de: "die Vollzeit", ro: "norma întreagă / full-time (de obicei Sg.)" },
    { de: "die Teilzeit", ro: "norma parțială / part-time (de obicei Sg.)" },
    { de: "die Befristung · die Befristungen", ro: "limitarea în timp a contractului · ..." },
    { de: "die Verlängerung · die Verlängerungen", ro: "prelungirea · prelungirile" },
    { de: "das Arbeitszeugnis · die Arbeitszeugnisse", ro: "adeverința de muncă · ..." },
    { de: "die Krankmeldung · die Krankmeldungen", ro: "concediul medical (anunțul de boală) · ..." },
    { de: "der Betriebsrat · die Betriebsräte", ro: "consiliul angajaților · ... (Umlaut a→ä)" },
    { de: "der Tarifvertrag · die Tarifverträge", ro: "contractul colectiv · ... (Umlaut a→ä)" },
    { de: "die Lohnfortzahlung · die Lohnfortzahlungen", ro: "plata salariului în boală · ..." },
    { de: "die Festanstellung · die Festanstellungen", ro: "angajarea permanentă · ..." },
    { de: "die Unterschrift · die Unterschriften", ro: "semnătura · semnăturile" },
    { de: "der Arbeitgeber · die Arbeitgeber", ro: "angajatorul · angajatorii" },
    { de: "der Arbeitnehmer · die Arbeitnehmer", ro: "angajatul · angajații (f: die Arbeitnehmerin)" },
    { de: "befristet / unbefristet", ro: "pe perioadă determinată / nedeterminată" },
    { de: "schriftlich", ro: "în scris" },
    { de: "unterschreiben", ro: "a semna" },
    { de: "einstellen", ro: "a angaja" },
    { de: "kündigen", ro: "a desface contractul (a demisiona/concedia)" },
    { de: "beantragen", ro: "a solicita / a cere (oficial)" },
    { de: "verlängern", ro: "a prelungi" },
    { de: "die Frist einhalten", ro: "a respecta termenul" },
    { de: "Urlaub beantragen", ro: "a cere concediu" },
    { de: "Ist der Vertrag befristet?", ro: "Contractul e pe perioadă determinată?" },
    { de: "Wo unterschreibe ich?", ro: "Unde semnez?" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabularul contractelor și al dreptului muncii.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
