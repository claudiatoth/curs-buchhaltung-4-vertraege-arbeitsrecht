// ============================================
// TEORIE - Buchhaltung Teil 4: Verträge & Arbeitsrecht (B1)
// Claudia Toth · germană pentru contracte de muncă și drept al muncii
// Sursă: extindere PONS-verified pe seria Buchhaltung & Finanzen
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Contracte și drept al muncii (Verträge & Arbeitsrecht)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Azi învățăm să citim un <strong>contract de muncă</strong> german (Arbeitsvertrag): ce e perioada de probă (Probezeit), termenul de preaviz (Kündigungsfrist), dreptul la concediu (Urlaub) și diferența dintre contractul pe perioadă determinată și nedeterminată. La final ascult un dialog real cu Herr Berger, șeful de Resurse Umane, înainte să-mi semnez contractul.</div>
                </div>
            </div>
            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>✍️ Notă despre diacritice (ä, ö, ü, ß)</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>der Arbeitsvertrag, die Kündigung, der Betriebsrat</em>) sau cu varianta de înlocuire (<em>Kuendigung, Betriebsrat</em>). Ambele sunt acceptate. La fel, punctul de la finalul propoziției e opțional.</p>
            </div>
        </div>
    </div>

    <!-- 1: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📄 2. Vocabular: contractul de muncă (Grundwortschatz)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#fef3c7;border-color:#f59e0b;">
                <h4>🚨 Substantivele se învață ÎNTOTDEAUNA cu pluralul</h4>
                <p>În germană pluralul e imprevizibil (-e, -en, Umlaut sau identic). De aceea fiecare substantiv apare aici la <strong>singular · plural</strong>. Învață-le împreună, ca pe o pereche.</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Arbeitsvertrag</td><td class="verb">die Arbeitsverträge</td><td>contractul de muncă · ... (Umlaut a→ä)</td><td><em>Ich unterschreibe heute meinen Arbeitsvertrag.</em></td></tr>
                    <tr><td class="verb">die Probezeit</td><td class="verb">die Probezeiten</td><td>perioada de probă · ...</td><td><em>Die Probezeit dauert sechs Monate.</em></td></tr>
                    <tr><td class="verb">die Kündigung</td><td class="verb">die Kündigungen</td><td>desfacerea contractului (demisie/concediere) · ...</td><td><em>Ich reiche meine Kündigung schriftlich ein.</em></td></tr>
                    <tr><td class="verb">die Kündigungsfrist</td><td class="verb">die Kündigungsfristen</td><td>termenul de preaviz · ...</td><td><em>Die Kündigungsfrist ist vier Wochen.</em></td></tr>
                    <tr><td class="verb">der Urlaub</td><td class="verb">die Urlaube</td><td>concediul (de obicei Sg.) · ...</td><td><em>Ich habe 30 Tage Urlaub im Jahr.</em></td></tr>
                    <tr><td class="verb">der Urlaubsanspruch</td><td class="verb">die Urlaubsansprüche</td><td>dreptul la concediu · ... (Umlaut u→ü)</td><td><em>Mein Urlaubsanspruch steht im Vertrag.</em></td></tr>
                    <tr><td class="verb">die Arbeitszeit</td><td class="verb">die Arbeitszeiten</td><td>programul de lucru · ...</td><td><em>Meine Arbeitszeit ist 40 Stunden pro Woche.</em></td></tr>
                    <tr><td class="verb">die Vollzeit</td><td class="verb">— (de obicei Sg.)</td><td>norma întreagă (full-time)</td><td><em>Ich arbeite in Vollzeit.</em></td></tr>
                    <tr><td class="verb">die Teilzeit</td><td class="verb">— (de obicei Sg.)</td><td>norma parțială (part-time)</td><td><em>Sie arbeitet in Teilzeit, 20 Stunden.</em></td></tr>
                    <tr><td class="verb">die Befristung</td><td class="verb">die Befristungen</td><td>limitarea în timp a contractului · ...</td><td><em>Der Vertrag hat eine Befristung von einem Jahr.</em></td></tr>
                    <tr><td class="verb">das Arbeitszeugnis</td><td class="verb">die Arbeitszeugnisse</td><td>adeverința / recomandarea de muncă · ...</td><td><em>Nach der Kündigung bekomme ich ein Arbeitszeugnis.</em></td></tr>
                    <tr><td class="verb">die Krankmeldung</td><td class="verb">die Krankmeldungen</td><td>anunțul de boală (concediul medical) · ...</td><td><em>Die Krankmeldung muss am ersten Tag kommen.</em></td></tr>
                    <tr><td class="verb">der Betriebsrat</td><td class="verb">die Betriebsräte</td><td>consiliul angajaților · ... (Umlaut a→ä)</td><td><em>Der Betriebsrat hilft bei Problemen.</em></td></tr>
                    <tr><td class="verb">der Tarifvertrag</td><td class="verb">die Tarifverträge</td><td>contractul colectiv de muncă · ... (Umlaut a→ä)</td><td><em>Unser Lohn steht im Tarifvertrag.</em></td></tr>
                    <tr><td class="verb">die Lohnfortzahlung</td><td class="verb">die Lohnfortzahlungen</td><td>plata salariului în caz de boală · ...</td><td><em>Im Krankheitsfall gibt es Lohnfortzahlung.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: Befristet vs Unbefristet -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📋 3. Befristet vs. unbefristet — ce tip de contract ai</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-befristet.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#f0fdf4;">
                <h4>💡 Cele două tipuri de contract</h4>
                <p><strong>befristet</strong> = pe perioadă DETERMINATĂ. Are o dată de sfârșit (Enddatum). Se termină singur la final.<br>
                <strong>unbefristet</strong> = pe perioadă NEDETERMINATĂ. Nu are dată de sfârșit. Durează până când una dintre părți dă Kündigung (preaviz).</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Termen (DE)</th><th>Ce înseamnă (RO)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">befristeter Vertrag</td><td>contract pe perioadă determinată (cu dată de sfârșit)</td></tr>
                    <tr><td class="verb">unbefristeter Vertrag</td><td>contract pe perioadă nedeterminată (fără dată de sfârșit)</td></tr>
                    <tr><td class="verb">die Probezeit</td><td>perioada de probă (de obicei max. 6 luni)</td></tr>
                    <tr><td class="verb">die Kündigungsfrist</td><td>termenul de preaviz (cât timp anunți înainte)</td></tr>
                    <tr><td class="verb">die Verlängerung</td><td>prelungirea contractului</td></tr>
                    <tr><td class="verb">die Festanstellung</td><td>angajarea permanentă (post fix)</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Mulți români din Germania primesc întâi un contract <strong>befristet</strong> (de ex. 1 an). E normal. Dacă angajatorul e mulțumit, contractul poate fi prelungit (Verlängerung) sau transformat în <strong>unbefristet</strong>. Atenție la <strong>Probezeit</strong>: în perioada de probă preavizul e mai scurt (de obicei 2 săptămâni), deci ambele părți pot pleca repede.</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Situații practice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎭 4. Situații practice (contract & birou HR)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-situatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box"><h4>✒️ Înainte de a semna — Vor der Unterschrift</h4>
                <p class="de"><em>„Bevor ich unterschreibe: Ist der Vertrag befristet oder unbefristet?" — „Er ist zunächst auf ein Jahr befristet."</em></p>
                <p class="ro">Expresii: <strong>befristet / unbefristet</strong> (determinat / nedeterminat) · <strong>unterschreiben</strong> (a semna) · <strong>zunächst</strong> (deocamdată)</p>
            </div>
            <div class="theory-box"><h4>🕒 Perioada de probă — Die Probezeit</h4>
                <p class="de"><em>„Wie lange dauert die Probezeit?" — „Sechs Monate. In dieser Zeit ist die Kündigungsfrist nur zwei Wochen."</em></p>
                <p class="ro">Expresii: <strong>die Probezeit dauert ...</strong> (perioada de probă durează ...) · <strong>in dieser Zeit</strong> (în acest timp) · <strong>die Kündigungsfrist</strong> (termenul de preaviz)</p>
            </div>
            <div class="theory-box"><h4>🌴 Concediul — Den Urlaub beantragen</h4>
                <p class="de"><em>„Wie viele Urlaubstage habe ich?" — „30 Tage im Jahr. Den Urlaub beantragen Sie bitte schriftlich beim Chef."</em></p>
                <p class="ro">Expresii: <strong>der Urlaubstag / die Urlaubstage</strong> (ziua de concediu) · <strong>Urlaub beantragen</strong> (a cere/solicita concediu) · <strong>schriftlich</strong> (în scris)</p>
            </div>
            <div class="theory-box"><h4>🤒 Când ești bolnav — Die Krankmeldung</h4>
                <p class="de"><em>„Wenn ich krank bin, was muss ich tun?" — „Sie rufen sofort an und schicken eine Krankmeldung vom Arzt."</em></p>
                <p class="ro">Expresii: <strong>krank sein</strong> (a fi bolnav) · <strong>die Krankmeldung</strong> (concediul medical) · <strong>die Lohnfortzahlung</strong> (plata salariului în boală, de regulă 6 săptămâni)</p>
            </div>
            <div class="theory-box"><h4>📝 A da preaviz — Kündigen</h4>
                <p class="de"><em>„Ich möchte kündigen. Wie mache ich das richtig?" — „Schriftlich, mit Unterschrift, und Sie halten die Kündigungsfrist ein."</em></p>
                <p class="ro">Expresii: <strong>kündigen</strong> (a desface contractul) · <strong>schriftlich mit Unterschrift</strong> (în scris, cu semnătură) · <strong>die Frist einhalten</strong> (a respecta termenul)</p>
            </div>
        </div>
    </div>

    <!-- 4: Expresii utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💬 5. Expresii utile (la HR și la semnarea contractului)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-expresii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Expresie (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Ist der Vertrag befristet oder unbefristet?</td><td>Contractul e pe perioadă determinată sau nedeterminată?</td></tr>
                    <tr><td class="verb">Wie lange dauert die Probezeit?</td><td>Cât durează perioada de probă?</td></tr>
                    <tr><td class="verb">Wie viele Urlaubstage habe ich?</td><td>Câte zile de concediu am?</td></tr>
                    <tr><td class="verb">Wie lang ist die Kündigungsfrist?</td><td>Cât este termenul de preaviz?</td></tr>
                    <tr><td class="verb">Ich möchte Urlaub beantragen.</td><td>Aș vrea să cer concediu.</td></tr>
                    <tr><td class="verb">Kann der Vertrag verlängert werden?</td><td>Poate fi prelungit contractul?</td></tr>
                    <tr><td class="verb">Was muss ich tun, wenn ich krank bin?</td><td>Ce trebuie să fac dacă sunt bolnav(ă)?</td></tr>
                    <tr><td class="verb">Wo unterschreibe ich?</td><td>Unde semnez?</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Nu semna niciodată un contract pe care nu îl înțelegi! „Bevor ich unterschreibe, habe ich noch eine Frage" (Înainte să semnez, mai am o întrebare) e o frază perfect normală și politicoasă. Acum ascultă dialogul cu Herr Berger de la Resurse Umane, chiar înainte de semnătură. 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
