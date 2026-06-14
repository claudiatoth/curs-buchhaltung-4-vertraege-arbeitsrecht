// ============================================
// VERB-KONJUGATION - Buchhaltung Teil 4 (B1)
// Claudia Toth · verbe pentru contracte/drept al muncii · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit.
// ============================================

const verbsData = [
    {
        infinitiv: 'unterschreiben', ro: 'a semna', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'unterschreibe', ro: 'semnez' },
            { p: 'du', f: 'unterschreibst', ro: 'semnezi' },
            { p: 'er/sie/es', f: 'unterschreibt', ro: 'semnează' },
            { p: 'wir', f: 'unterschreiben', ro: 'semnăm' },
            { p: 'ihr', f: 'unterschreibt', ro: 'semnați' },
            { p: 'sie/Sie', f: 'unterschreiben', ro: 'semnează / semnați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'unterschrieb', ro: 'semnam' },
            { p: 'du', f: 'unterschriebst', ro: 'semnai' },
            { p: 'er/sie/es', f: 'unterschrieb', ro: 'semna' },
            { p: 'wir', f: 'unterschrieben', ro: 'semnam (noi)' },
            { p: 'ihr', f: 'unterschriebt', ro: 'semnați' },
            { p: 'sie/Sie', f: 'unterschrieben', ro: 'semnau' }
        ],
        perfekt: 'ich habe den Vertrag unterschrieben', perfektRo: 'am semnat contractul',
        notes: 'Verb tare cu prefix NEseparabil unter- → Perfekt FĂRĂ „ge-": unterschrieben. NU se desparte (ich unterschreibe den Vertrag, nu „schreibe ... unter").'
    },
    {
        infinitiv: 'einstellen', ro: 'a angaja', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'stelle ... ein', ro: 'angajez' },
            { p: 'du', f: 'stellst ... ein', ro: 'angajezi' },
            { p: 'er/sie/es', f: 'stellt ... ein', ro: 'angajează' },
            { p: 'wir', f: 'stellen ... ein', ro: 'angajăm' },
            { p: 'ihr', f: 'stellt ... ein', ro: 'angajați' },
            { p: 'sie/Sie', f: 'stellen ... ein', ro: 'angajează / angajați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'stellte ... ein', ro: 'angajam' },
            { p: 'du', f: 'stelltest ... ein', ro: 'angajai' },
            { p: 'er/sie/es', f: 'stellte ... ein', ro: 'angaja' },
            { p: 'wir', f: 'stellten ... ein', ro: 'angajam (noi)' },
            { p: 'ihr', f: 'stelltet ... ein', ro: 'angajați' },
            { p: 'sie/Sie', f: 'stellten ... ein', ro: 'angajau' }
        ],
        perfekt: 'die Firma hat mich eingestellt', perfektRo: 'firma m-a angajat',
        notes: 'Verb regulat SEPARABIL (ein-): prefixul pleacă la sfârșit (Die Firma stellt mich ein). Perfekt cu „-ge-": ein-ge-stellt.'
    },
    {
        infinitiv: 'kündigen', ro: 'a desface contractul (+ Dativ)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'kündige', ro: 'desfac contractul' },
            { p: 'du', f: 'kündigst', ro: 'desfaci contractul' },
            { p: 'er/sie/es', f: 'kündigt', ro: 'desface contractul' },
            { p: 'wir', f: 'kündigen', ro: 'desfacem contractul' },
            { p: 'ihr', f: 'kündigt', ro: 'desfaceți contractul' },
            { p: 'sie/Sie', f: 'kündigen', ro: 'desfac / desfaceți contractul' }
        ],
        praeteritum: [
            { p: 'ich', f: 'kündigte', ro: 'desfăceam contractul' },
            { p: 'du', f: 'kündigtest', ro: 'desfăceai contractul' },
            { p: 'er/sie/es', f: 'kündigte', ro: 'desfăcea contractul' },
            { p: 'wir', f: 'kündigten', ro: 'desfăceam (noi)' },
            { p: 'ihr', f: 'kündigtet', ro: 'desfăceați contractul' },
            { p: 'sie/Sie', f: 'kündigten', ro: 'desfăceau contractul' }
        ],
        perfekt: 'ich habe (dem Chef) gekündigt', perfektRo: 'mi-am dat demisia (i-am dat preaviz șefului)',
        notes: 'Verb regulat → Perfekt cu „ge-": gekündigt. Persoana căreia îi dai preaviz e la DATIV: „Ich kündige DEM ARBEITGEBER." Angajatorul te concediază: „Der Chef kündigt MIR."'
    },
    {
        infinitiv: 'beantragen', ro: 'a solicita / a cere (oficial)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'beantrage', ro: 'solicit' },
            { p: 'du', f: 'beantragst', ro: 'soliciți' },
            { p: 'er/sie/es', f: 'beantragt', ro: 'solicită' },
            { p: 'wir', f: 'beantragen', ro: 'solicităm' },
            { p: 'ihr', f: 'beantragt', ro: 'solicitați' },
            { p: 'sie/Sie', f: 'beantragen', ro: 'solicită / solicitați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'beantragte', ro: 'solicitam' },
            { p: 'du', f: 'beantragtest', ro: 'solicitai' },
            { p: 'er/sie/es', f: 'beantragte', ro: 'solicita' },
            { p: 'wir', f: 'beantragten', ro: 'solicitam (noi)' },
            { p: 'ihr', f: 'beantragtet', ro: 'solicitați' },
            { p: 'sie/Sie', f: 'beantragten', ro: 'solicitau' }
        ],
        perfekt: 'ich habe Urlaub beantragt', perfektRo: 'am cerut concediu',
        notes: 'Verb regulat cu prefix NEseparabil be- → Perfekt FĂRĂ „ge-": beantragt. „Urlaub / einen Termin beantragen" = a cere oficial concediu / o programare.'
    },
    {
        infinitiv: 'verlängern', ro: 'a prelungi', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'verlängere', ro: 'prelungesc' },
            { p: 'du', f: 'verlängerst', ro: 'prelungești' },
            { p: 'er/sie/es', f: 'verlängert', ro: 'prelungește' },
            { p: 'wir', f: 'verlängern', ro: 'prelungim' },
            { p: 'ihr', f: 'verlängert', ro: 'prelungiți' },
            { p: 'sie/Sie', f: 'verlängern', ro: 'prelungesc / prelungiți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'verlängerte', ro: 'prelungeam' },
            { p: 'du', f: 'verlängertest', ro: 'prelungeai' },
            { p: 'er/sie/es', f: 'verlängerte', ro: 'prelungea' },
            { p: 'wir', f: 'verlängerten', ro: 'prelungeam (noi)' },
            { p: 'ihr', f: 'verlängertet', ro: 'prelungeați' },
            { p: 'sie/Sie', f: 'verlängerten', ro: 'prelungeau' }
        ],
        perfekt: 'die Firma hat meinen Vertrag verlängert', perfektRo: 'firma mi-a prelungit contractul',
        notes: 'Verb regulat cu prefix NEseparabil ver- → Perfekt FĂRĂ „ge-": verlängert. Opusul: „den Vertrag nicht verlängern" = a nu prelungi contractul (se termină la final).'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574">
            <h4>📌 Verbe pentru contracte și drept al muncii</h4>
            <p>Atenție la prefixe: <strong>unterschreiben</strong>, <strong>beantragen</strong> și <strong>verlängern</strong> au prefix neseparabil (unter-, be-, ver-) → Perfekt FĂRĂ „ge-". <strong>einstellen</strong> e separabil → „-ge-" la mijloc. <strong>kündigen</strong> e regulat și cere persoana la DATIV.</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (semna, prelungea). Perfekt = perfect compus (a semnat).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#3b82f6' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#FBF7EF"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
