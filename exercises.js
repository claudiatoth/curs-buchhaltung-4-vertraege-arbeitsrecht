// ============================================
// EXERCIȚII - Buchhaltung Teil 4: Verträge & Arbeitsrecht (B1)
// Claudia Toth · 5 exerciții interactive
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}

// ============================================
// EX1: Lückentext
// ============================================
const ex1Items = [
    { id: 'a', before: 'Ich unterschreibe heute meinen', after: '. (contractul de muncă)', answer: 'Arbeitsvertrag' },
    { id: 'b', before: 'Die', after: 'dauert sechs Monate. (perioada de probă)', answer: 'Probezeit' },
    { id: 'c', before: 'Die', after: 'ist vier Wochen. (termenul de preaviz)', answer: 'Kündigungsfrist', accept: ['Kuendigungsfrist'] },
    { id: 'd', before: 'Ich habe 30 Tage', after: 'im Jahr. (concediu)', answer: 'Urlaub' },
    { id: 'e', before: 'Ein Vertrag mit Enddatum ist', after: '. (pe perioadă determinată)', answer: 'befristet' },
    { id: 'f', before: 'Ein Vertrag ohne Enddatum ist', after: '. (pe perioadă nedeterminată)', answer: 'unbefristet' },
    { id: 'g', before: 'Wenn ich krank bin, schicke ich eine', after: '. (concediu medical)', answer: 'Krankmeldung' },
    { id: 'h', before: 'Den Urlaub muss ich', after: 'beantragen. (în scris)', answer: 'schriftlich' },
    { id: 'i', before: 'Nach einem Jahr kann man den Vertrag', after: '. (a prelungi)', answer: 'verlängern', accept: ['verlaengern'] },
    { id: 'j', before: 'Der', after: 'hilft den Arbeitnehmern bei Problemen. (consiliul angajaților)', answer: 'Betriebsrat' }
];
function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>Arbeitsvertrag · Probezeit · Kündigungsfrist · Urlaub · befristet · unbefristet · Krankmeldung · schriftlich · verlängern · Betriebsrat</em></div>`;
    ex1Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex1-${item.id}" placeholder="..." style="width:160px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx1() { return checkTextItems(ex1Items, 'ex1'); }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Multiple Choice
// ============================================
const ex2Items = [
    { id: 'a', q: 'Was ist „die Probezeit"?', options: ['termenul de preaviz', 'perioada de probă la început', 'concediul anual'], correct: 1, explanation: 'die Probezeit = perioada de probă, de obicei max. 6 luni.' },
    { id: 'b', q: 'Ein „befristeter Vertrag" hat:', options: ['o dată de sfârșit', 'salariu mai mare', 'mai mult concediu'], correct: 0, explanation: 'befristet = pe perioadă determinată, cu Enddatum (dată de sfârșit).' },
    { id: 'c', q: 'Was ist „die Kündigungsfrist"?', options: ['perioada de probă', 'cât timp anunți înainte de plecare', 'dreptul la concediu'], correct: 1, explanation: 'die Kündigungsfrist = termenul de preaviz, cât anunți înainte.' },
    { id: 'd', q: 'Wenn man krank ist, braucht man:', options: ['eine Verlängerung', 'eine Krankmeldung', 'einen Tarifvertrag'], correct: 1, explanation: 'die Krankmeldung (de la medic) anunță boala angajatorului.' },
    { id: 'e', q: 'Ein Vertrag OHNE Enddatum ist:', options: ['befristet', 'unbefristet', 'in Teilzeit'], correct: 1, explanation: 'unbefristet = pe perioadă nedeterminată, fără dată de sfârșit.' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🎯 Alege varianta corectă.</strong>'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Match vocabular DE ↔ RO
// ============================================
const ex3Pairs = [
    { de: 'der Arbeitsvertrag', ro: 'contractul de muncă' },
    { de: 'die Probezeit', ro: 'perioada de probă' },
    { de: 'die Kündigung', ro: 'desfacerea contractului' },
    { de: 'die Kündigungsfrist', ro: 'termenul de preaviz' },
    { de: 'der Urlaubsanspruch', ro: 'dreptul la concediu' },
    { de: 'die Befristung', ro: 'limitarea în timp' },
    { de: 'das Arbeitszeugnis', ro: 'adeverința de muncă' },
    { de: 'die Krankmeldung', ro: 'concediul medical' },
    { de: 'der Betriebsrat', ro: 'consiliul angajaților' },
    { de: 'die Lohnfortzahlung', ro: 'plata salariului în boală' }
];
function buildEx3() { buildClickMatch('ex3', ex3Pairs, '<strong>🔗 Potrivește termenul cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Begriff', '🇷🇴 Traducere'); }
function checkEx3() { const s = dmState['ex3']; return { correct: Object.keys(s.matched).length, total: ex3Pairs.length }; }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Traduceri RO → DE
// ============================================
const ex4Items = [
    { id: 'a', q: 'Contractul e pe perioadă determinată sau nedeterminată?', answer: 'Ist der Vertrag befristet oder unbefristet?' },
    { id: 'b', q: 'Cât durează perioada de probă?', answer: 'Wie lange dauert die Probezeit?' },
    { id: 'c', q: 'Câte zile de concediu am?', answer: 'Wie viele Urlaubstage habe ich?' },
    { id: 'd', q: 'Aș vrea să cer concediu.', answer: 'Ich möchte Urlaub beantragen.', accept: ['Ich moechte Urlaub beantragen.'] },
    { id: 'e', q: 'Cât este termenul de preaviz?', answer: 'Wie lang ist die Kündigungsfrist?', accept: ['Wie lang ist die Kuendigungsfrist?', 'Wie lange ist die Kündigungsfrist?', 'Wie lange ist die Kuendigungsfrist?'] },
    { id: 'f', q: 'Unde semnez?', answer: 'Wo unterschreibe ich?' },
    { id: 'g', q: 'Poate fi prelungit contractul?', answer: 'Kann der Vertrag verlängert werden?', accept: ['Kann der Vertrag verlaengert werden?'] },
    { id: 'h', q: 'Ce trebuie să fac dacă sunt bolnav?', answer: 'Was muss ich tun, wenn ich krank bin?' }
];
function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>🇷🇴→🇩🇪 Tradu în germană.</strong><br>Scrie propoziția în germană. (Diferențele mici de topică/articol sunt acceptate; punctul final e opțional — compară cu varianta-model.)</div>`;
    ex4Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>🇷🇴 ${item.q}</label><input type="text" id="ex4-${item.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex4-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx4() { return checkTextItems(ex4Items, 'ex4'); }
function resetEx4() { buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

// ============================================
// EX5: Potrivește situația cu expresia-cheie
// ============================================
const ex5Pairs = [
    { de: 'Ist der Vertrag befristet oder unbefristet?', ro: 'Vrei să știi ce tip de contract ai' },
    { de: 'Wie lange dauert die Probezeit?', ro: 'Întrebi despre perioada de probă' },
    { de: 'Ich möchte Urlaub beantragen.', ro: 'Ceri concediu' },
    { de: 'Ich schicke eine Krankmeldung.', ro: 'Ești bolnav și anunți' },
    { de: 'Wo unterschreibe ich?', ro: 'Ești gata să semnezi' }
];
function buildEx5() { buildClickMatch('ex5', ex5Pairs, '<strong>🎭 Potrivește expresia cu situația.</strong><br>Click pe expresia germană, apoi pe situația potrivită.', '🇩🇪 Expresie', '👔 Situație'); }
function checkEx5() { const s = dmState['ex5']; return { correct: Object.keys(s.matched).length, total: ex5Pairs.length }; }
function resetEx5() { buildEx5(); const s = document.getElementById('score-5'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); });
