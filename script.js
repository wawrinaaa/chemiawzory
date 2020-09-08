let inside1='<div id="formula1" class="formula" onclick="showformula(1, 1)">Moment dipolowy</div><div id="formula2" class="formula" onclick="showformula(1, 2)">Masa próbki wytr. w skutek elektrolizy</div><div id="formula3" class="formula" onclick="showformula(1, 3)">Równoważnik Elektrochemiczny</div><div id="formula4" class="formula" onclick="showformula(1, 4)">Siła ele. motoryczna ogniwa (EMF)</div>';

    let bf11='<span onmouseover="explanation(1, 1, 1);">&#181;</span>=<span onmouseover="explanation(1, 1, 2);">Q</span>*<span onmouseover="explanation(1, 1, 3);">r</span>';

    let bf12='<span onmouseover="explanation(1, 2, 1);">m</span>=<span onmouseover="explanation(1, 2, 2);">k</span>*<span onmouseover="explanation(1, 2, 3);">I</span>*<span onmouseover="explanation(1, 2, 4);">t</span>';

    let bf13='<span onmouseover="explanation(1, 3, 1);">k</span>=<span onmouseover="explanation(1, 3, 2);">M</span>/(<span onmouseover="explanation(1, 3, 3);">z</span>*<span onmouseover="explanation(1, 3, 4);">F</span>)';

    let bf14='<span onmouseover="explanation(1, 4, 1);">EMF</span>=<span onmouseover="explanation(1, 4, 2);">E<sub>k</sub></span>-<span onmouseover="explanation(1, 4, 3);">E<sub>a</sub></span>';

let inside2='<div id="formula1" class="formula" onclick="showformula(2, 1)">pH</div><div id="formula2" class="formula" onclick="showformula(2, 2)">pOH</div><div id="formula3" class="formula" onclick="showformula(2, 3)">przeliczenie<br>pOH na pH</div><div id="formula4" class="formula" onclick="showformula(2, 4)">Stała dysocjacji kwasu</div><div id="formula5" class="formula"  onclick="showformula(2, 5)">Stała dysocjacji zasady</div><div id="formula6" class="formula" onclick="showformula(2, 6)">Stopień dysocjacji<br>(pełny)</div><div id="formula7" class="formula" onclick="showformula(2, 7)">Zasada upraszczania wzoru &uarr;</div><div id="formula8" class="formula" onclick="showformula(2, 8)">Stopień dysocjacji<br>(uproszczony)</div>';

    let bf21='<span onmouseover="explanation(2, 1, 1);">pH</span>=-log<sub>10</sub> <span onmouseover="explanation(2, 1, 2);">[H<sup>+</sup>]</span>';

    let bf22='<span onmouseover="explanation(2, 2, 1);">pOH</span>=-log<sub>10</sub> <span onmouseover="explanation(2, 2, 2);">[OH<sup>-</sup>]</span>';
    
    let bf23='<span onmouseover="explanation(2, 3, 1);">pH</span>=14-<span onmouseover="explanation(2, 3, 2);">pOH</span>';
    
    let bf24='<span onmouseover="explanation(2, 4, 1);">K<sub>a</sub></span>=<span onmouseover="explanation(2, 4, 2);">[H<sup>+</sup>]</span>*<span onmouseover="explanation(2, 4, 3);">[R<sup>-</sup>]</span>/<span onmouseover="explanation(2, 4, 4);">[HR]</span>';
    
    let bf25='<span onmouseover="explanation(2, 5, 1);">K<sub>b</sub></span>=<span onmouseover="explanation(2, 5, 2);">[OH<sup>-</sup>]</span>*<span onmouseover="explanation(2, 5, 3);">[M<sup>+</sup>]</span>/<span onmouseover="explanation(2, 5, 4);">[MOH]</span>';
    
    let bf26='<span onmouseover="explanation(2, 6, 1);">K</span>=<span onmouseover="explanation(2, 6, 2);">Cm</span>*<span onmouseover="explanation(2, 6, 3);">&#945;<sup>2</sup></span>/<span onmouseover="explanation(2, 6, 3);">(1-&#945;)</span>';
    
    let bf27='<span onmouseover="explanation(2, 7, 1);">&#945;</span><5% lub <span onmouseover="explanation(2, 7, 2);">Cm</span>/<span onmouseover="explanation(2, 7, 3);">K</sup></span>>400';
    
    let bf28='<span onmouseover="explanation(2, 8, 1);">K</span>=<span onmouseover="explanation(2, 8, 2);">Cm</span>*<span onmouseover="explanation(2, 8, 3);">&#945;<sup>2</sup></span>';

let inside3='<div id="formula1" class="formula" onclick="showformula(3, 1)">Iloczyn rozpuszcalności</div><div id="formula2" class="formula" onclick="showformula(3, 2)">Rozpuszczalnść</div><div id="formula3" class="formula" onclick="showformula(3, 3)">Iloczyn jonowy wody</div><div id="formula4" class="formula" onclick="showformula(3, 4)">pH buforu kwaśnego</div><div id="formula5" class="formula" onclick="showformula(3, 5)">pOH buforu zasadowego</div>';

    let bf31='<span onmouseover="explanation(3, 1, 1);">Kso</span>=<span onmouseover="explanation(3, 1, 2);">[M+]<sup>r</sup></span>*<span onmouseover="explanation(3, 1, 3);">[R-]<sup>m</sup></span>/<span onmouseover="explanation(3, 1, 4);">[MR]</span>';

    let bf32='<span onmouseover="explanation(3, 2, 1);">So</span>=<span onmouseover="explanation(3, 2, 2);">(rM)<sup>r</sup></span>*<span onmouseover="explanation(3, 2, 3);">(nR)<sup>n</sup></span>';

    let bf33='<span onmouseover="explanation(3, 3, 1);">Kw</span>=10<sup>-14</sup>';

    let bf34='<span onmouseover="explanation(3, 4, 1);">pH</span>=<span onmouseover="explanation(3, 4, 2);">pKa</span>-log<sub>10</sub>(<span onmouseover="explanation(3, 4, 3);">C<sub>kw</sub></span>/<span onmouseover="explanation(3, 4, 4);">C<sub>s</sub></span>)';

    let bf35='<span onmouseover="explanation(3, 5, 1);">pOH</span>=<span onmouseover="explanation(3, 5, 2);">pKb</span>-log<sub>10</sub>(<span onmouseover="explanation(3, 5, 3);">C<sub>za</sub></span>/<span onmouseover="explanation(3, 5, 4);">C<sub>s</sub></span>)';
    

let inside4='<div id="formula1" class="formula" onclick="showformula(4, 1)">Stężeniowa stała równowagi</div><div id="formula2" class="formula" onclick="showformula(4, 2)">Ciśnieniowa stała równowagi</div><div id="formula3" class="formula" onclick="showformula(4, 3)">Wydajność reakcji</div><div id="formula4" class="formula" onclick="showformula(4, 4)">Równanie Clapeyrona</div>'; 

    let bf41='<span onmouseover="explanation(4, 1, 1);">Kc</span>=<span onmouseover="explanation(4, 1, 2);">[C]<sup>c</sup></span>*<span onmouseover="explanation(4, 1, 3);">[D]<sup>d</sup></span>/(<span onmouseover="explanation(4, 1, 4);">[A]<sup>a</sup></span>*<span onmouseover="explanation(4, 1, 5);">[B]<sup>b</sup></span>)';

    let bf42='<span onmouseover="explanation(4, 2, 1);">Kp</span>=[(<span onmouseover="explanation(4, 2, 2);">{pC}<sup>c</sup></span>/<span onmouseover="explanation(4, 2, 3);">p0</span>)*(<span onmouseover="explanation(4, 2, 4);">{pD}<sup>d</sup></span>/<span onmouseover="explanation(4, 2, 3);">p0</span>)]/[(<span onmouseover="explanation(4, 2, 5);">{pA}<sup>a</sup></span>/<span onmouseover="explanation(4, 2, 3);">p0</span>)*(<span onmouseover="explanation(4, 2, 6);">{pB}<sup>b</sup></span>/<span onmouseover="explanation(4, 2, 3);">p0</span>})]';

    let bf43='<span onmouseover="explanation(4, 3, 1);">W</span>=<span onmouseover="explanation(4, 3, 2);">m<sub>p</sub> o.</span>/<span onmouseover="explanation(4, 3, 3);">m<sub>p</sub> s.</span>*100%';

    let bf44='<span onmouseover="explanation(4, 4, 1);">p</span>*<span onmouseover="explanation(4, 4, 2);">V</span>=<span onmouseover="explanation(4, 4, 3);">n</span>*<span onmouseover="explanation(4, 4, 4);">R</span>*<span onmouseover="explanation(4, 4, 5);">T</span>';

let inside5='<div id="formula1" class="formula" onclick="showformula(5, 1)">Stężenie procentowe masowe</div><div id="formula2" class="formula" onclick="showformula(5, 2)">Stężenie procentowe molowe</div><div id="formula3" class="formula" onclick="showformula(5, 3)">Stężenie molowe</div><div id="formula4" class="formula" onclick="showformula(5, 4)">Stężenie molalne mol/m</div>';

    let bf51='<span onmouseover="explanation(5, 1, 1);">Cp</span>=<span onmouseover="explanation(5, 1, 2);">m<sub>s</sub></span>/<span onmouseover="explanation(5, 1, 3);">m<sub>r</sub></span> *<span onmouseover="explanation(5, 1, 4);">100%</span>';

    let bf52='<span onmouseover="explanation(5, 2, 1);">Cp<sub>m</sub></span>=<span onmouseover="explanation(5, 2, 2);">n<sub>s1</sub></span>/<span onmouseover="explanation(5, 2, 3);">n<sub>s2</sub></span> *<span onmouseover="explanation(5, 2, 4);">100%</span>';

    let bf53='<span onmouseover="explanation(5, 3, 1);">Cm</span>=<span onmouseover="explanation(5, 3, 2);">n<sub>s</sub></span>/<span onmouseover="explanation(5, 3, 3);">V</span>';

    let bf54='<span onmouseover="explanation(5, 4, 1);">C<sub>molalne</sub></span>=<span onmouseover="explanation(5, 4, 2);">n<sub>s</sub></span>/<span onmouseover="explanation(5, 4, 3);">m<sub>rozp.</sub></span>';

let inside6='<div id="formula1" class="formula" onclick="showformula(6, 1)">Stopień nienasycenia</div><div id="formula2" class="formula" onclick="showformula(6, 2)">Skręcalność właściwa</div><div id="formula3" class="formula" onclick="showformula(6, 3)">Maksymalna ilość diastereoizomerów</div>';

    let bf61='<span onmouseover="explanation(6, 1, 1);">&#945;</span>=(2*<span onmouseover="explanation(6, 1, 2);">n<sub>C</sub></span>+2-<span onmouseover="explanation(6, 1, 3);">n<sub>H</sub></span>-<span onmouseover="explanation(6, 1, 4);">n<sub>X</sub></span>+<span onmouseover="explanation(6, 1, 5);">n<sub>N</sub></span>)/2';

    let bf62='<span onmouseover="explanation(6, 2, 1);">[&#945;]<sub>D</sub></span>=<span onmouseover="explanation(6, 2, 2);">&#945;</span>/(l*<span onmouseover="explanation(6, 2, 3);">c</span>)';

    let bf63='<span onmouseover="explanation(6, 3, 1);">Max. ilość</span>=<br>2<span onmouseover="explanation(6, 3, 2);"><sup>ilość centów chiralności</sup></span>';

let inside7='<div id="formula1" class="formula" onclick="showformula(7, 1)">Szybkość reakcji</div><div id="formula2" class="formula" onclick="showformula(7, 2)">Standartowa entalpia</div><div id="formula3" class="formula" onclick="showformula(7, 3)">Entalpia swobodna</div><div id="formula4" class="formula" onclick="showformula(7, 4)">Entropia</div><div id="formula5" class="formula" onclick="showformula(7, 5)">Równanie Arheniusa</div><div id="formula6" class="formula" onclick="showformula(7, 6)">Równanie kinetyczne 1szego stopnia</div><div id="formula7" class="formula" onclick="showformula(7, 7)">Równanie kinetyczne 2giego stopnia</div><div id="formula8" class="formula" onclick="showformula(7, 8)">Równanie kinetyczne 3ciego stopnia</div><div id="formula9" class="formula" onclick="showformula(7, 9)">Równanie kinetyczne 4tego stopnia</div>';

    let bf71='<span onmouseover="explanation(7, 1, 1);">v</span>=<span onmouseover="explanation(7, 1, 2);">&#916;n<sub>s</sub></span>/<span onmouseover="explanation(7, 1, 3);">t</span>';

    let bf72='<span onmouseover="explanation(7, 2, 1);">&#916;H<sup>0</sup></span>=<span onmouseover="explanation(7, 2, 2);">&#931;&#916;H<sup>0</sup><sub>produktów</sub></span>-<span onmouseover="explanation(7, 2, 3);">&#931;&#916;H<sup>0</sup><sub>substratów</sub></span>';

    let bf73='<span onmouseover="explanation(7, 3, 1);">&#916;G<sup>0</sup></span>=<span onmouseover="explanation(7, 3, 2);">&#916;H<sup>0</sup></span>-<span onmouseover="explanation(7, 3, 3);">T</span>*<span onmouseover="explanation(7, 3, 4);">&#916;S<sup>0</sup></span>';

    let bf74='<span onmouseover="explanation(7, 4, 1);">&#916;S<sup>0</sup></span>=(<span onmouseover="explanation(7, 4, 2);">&#916;G<sup>0</sup></span>-<span onmouseover="explanation(7, 4, 3);">&#916;H<sup>0</sup></span>)/<span onmouseover="explanation(7, 4, 4);">-T</span>';

    let bf75='<span onmouseover="explanation(7, 5, 1);">K</span>=<span onmouseover="explanation(7, 5, 2);">A</span>*<span onmouseover="explanation(7, 5, 3);">e</span><sup>-<span onmouseover="explanation(7, 5, 4);">Ea</span>/(<span onmouseover="explanation(7, 5, 5);">R</span>*<span onmouseover="explanation(7, 5, 6);">T</span>)</sup>';

    let bf76='<span onmouseover="explanation(7, 6, 1);">Ck</span>=<span onmouseover="explanation(7, 6, 2);">Co</span>-<span onmouseover="explanation(7, 6, 3);">k</span>*<span onmouseover="explanation(7, 6, 4);">t</span>';

    let bf77='<span onmouseover="explanation(7, 7, 1);">ln<sub>Ck</sub></span>=<span onmouseover="explanation(7, 7, 2);">ln<sub>Co</sub></span>-<span onmouseover="explanation(7, 7, 3);">k</span>*<span onmouseover="explanation(7, 7, 4);">t</span>';

    let bf78='<span onmouseover="explanation(7, 8, 1);">1/Ck</span>=<span onmouseover="explanation(7, 8, 2);">1/Co</span>+<span onmouseover="explanation(7, 8, 3);">k</span>*<span onmouseover="explanation(7, 8, 4);">t</span>';

    let bf79='<span onmouseover="explanation(7, 9, 1);">1/Ck<sup>2</sup></span>=<span onmouseover="explanation(7, 9, 2);">1/Co<sup>2</sup></span>+2*<span onmouseover="explanation(7, 9, 3);">k</span>*<span onmouseover="explanation(7, 9, 4);">t</span>';

//zmienne wyjaśniające litery we wzorach

let ex111='&#181; (czyt. "mi"). - litera z greckiego alfabetu. W chemii &#181; oznacza moment dipolowy i podaje się ją w C*m (culombach * metr) , a czasami przelicza się na D (debaje)';
let ex112='Q - określa ładunek elektryczny, który powoduje występowanie momentu dipolowego. Podaje się go w culombach (C)';
let ex113='r - długość wiązania podawana w metrach';

let ex121='m - masa substancji podawana w gramach';
let ex122='k - równoważnik elektrolizy liczony ze wzoru poniżej. Jego jednostka to C*mol*g<sup>-1</sup>';
let ex123='I - natężenie prądu użytego do elektrolizy podawane w amperach (A)';
let ex124='t - czas elektrolizy podany w sekundach';

let ex131='k - równoważnik elektrolizy używany we wzorze powyżej. Jego jednostka to C*mol*g<sup>-1</sup>';
let ex132='M - masa molowa substacji poddawanej elektrolizie';
let ex133='Z - ilość elektronów biorąca udział w utlenieniu/redukcji. Wartość ta nie ma swojej jednostki';
let ex134='F - stała Faradaya. Wynosi 96500 C/mol. Jest to ładunek jednego mola elektronów';

let ex141='EMF - siła elektromotoryczna ogniwa podawana w woltach (V)';
let ex142='E<sub>k</sub> - potencjał elektryczny katody. Można sprawdzić w szeregu napięciowym metali';
let ex143='E<sub>a</sub> - potencjał elektryczny anody. Można sprawdzić w szeregu napięciowym metali';

let ex211='pH - wartość liczbowa. Im mniejsze tym środowisko bardziej kwaśne, im większe tym bardziej alkaiczne. Jeśli pH=7 środowisko jest obojętne';
let ex212='[H<sup>+</sup>] - stężenie jonów H<sup>+</sup> podawane w mol/dm<sup>3</sup>';

let ex221='pOH - wartość liczbowa. Im mniejsze tym środowisko bardziej aalkaiczne, im większe tym bardziej kwaśne. Jeśli pOH=7 środowisko jest obojętne';
let ex222='[OH<sup>-</sup>] - stężenie jonów OH<sup>-</sup> podawane w mol/dm<sup>3</sup>';

let ex231='pH - wartość liczbowa. Im mniejsze tym środowisko bardziej kwaśne, im większe tym bardziej alkaiczne. Jeśli pH=7 środowisko jest obojętne';
let ex232='pOH - wartość liczbowa. Im mniejsze tym środowisko bardziej aalkaiczne, im większe tym bardziej kwaśne. Jeśli pOH=7 środowisko jest obojętne';

let ex241='Ka - stała dysocjacji. Można znaleźć w tablicach chemicznych. Kwasy wieloprotonowe mają kilka tych stałych';
let ex242='[H<sup>+</sup>] - stężenie jonów H<sup>+</sup> podawane w mol/dm<sup>3</sup>';
let ex243='[R<sup>-</sup>] - stężenie anionów reszty kwasowej podawane w mol/dm<sup>3</sup>';
let ex244='[HR] - stężenie niezdysocjowanego kwasu podawane w mol/dm<sup>3</sup>';

let ex251='Kb - stała dysocjacji. Można znaleźć w tablicach chemicznych. Zasady wielohydroksylowe mają kilka tych stałych';
let ex252='[OH<sup>-</sup>] - stężenie jonów OH<sup>-</sup> podawane w mol/dm<sup>3</sup>';
let ex253='[M<sup>+</sup>] - stężenie kationów metalu podawane w mol/dm<sup>3</sup>';
let ex254='[MOH] - stężenie niezdysocjowanej zasady podawane w mol/dm<sup>3</sup>';

let ex261='K - stała dysocjacji. Można znaleźć w tablicach chemicznych.';
let ex262='Cm - stężenie molowe';
let ex263='&#945; (czyt. alfa) - stopień dysocjacji. Podawany w procentach, lecz podstawiany do wzoru w postaci liczby.';

let ex271='&#945; (czyt. alfa) - stopień dysocjacji. Podawany w procentach, lecz podstawiany do wzoru w postaci liczby.';
let ex272='Cm - stężenie molowe';
let ex273='K - stała dysocjacji. Można znaleźć w tablicach chemicznych.';

let ex281='K - stała dysocjacji. Można znaleźć w tablicach chemicznych.';
let ex282='Cm - stężenie molowe';
let ex283='&#945; (czyt. alfa) - stopień dysocjacji. Podawany w procentach, lecz podstawiany do wzoru w postaci liczby.';

let ex311='Kso - iloczyn rozpuszczalości soli. Można również się spotkać z oznaczeniem Ir. Za jego pomocą można obliczyć rozpuszczalność soli';
let ex312='[M<sup>+</sup>] - stężenie kationów metalu soli podawane w mol/dm<sup>3</sup>';
let ex313='[R<sup>-</sup>] - stężenie anionów reszty kwasowej soli podawane w mol/dm<sup>3</sup>';
let ex314='[MR] - stężenie niezdysocjowanej części soli podawane w mol/dm<sup>3</sup>';

let ex321='So - rozpuszczalność soli';
let ex322='(rM)<sup>r</sup> - stężenie kationów metali razy wartościowość reszty kwasowej (r) podniesione do potęgi r';
let ex323='(nR)<sup>n</sup> - stężenie anionów reszty kwasowej razy wartościowość metalu (n) podniesione do potęgi n';

let ex331='Kw - iloczyn jonowy wody';

let ex341='pH - wartość liczbowa. Im mniejsze tym środowisko bardziej kwaśne, im większe tym bardziej alkaiczne. Jeśli pH=7 środowisko jest obojętne';
let ex342='pKa - ujemny logarytm dziesiętny ze stałej dysocjacji kwasu. Można znaleźć w tablicach chemicznych';
let ex343='Ckw - stężenie kwasu';
let ex344='Cs - stężenie soli';

let ex351='pOH - wartość liczbowa. Im mniejsze tym środowisko bardziej aalkaiczne, im większe tym bardziej kwaśne. Jeśli pOH=7 środowisko jest obojętne';
let ex352='pKb - ujemny logarytm dziesiętny ze stałej dysocjacji zasady. Można znaleźć w tablicach chemicznych';
let ex353='Cza - stężenie zasady';
let ex354='Cs - stężenie soli';

let ex411='Kc - stężeniowa stała równowagi. Jeśli Kc>1 to reakcja biegnie w prawą stronę, a jak Kc<1 reakcja biegnie w lewo.';
let ex412='[C]<sup>c</sup> - Stężenie pierwszego produktu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';
let ex413='[D]<sup>d</sup> - Stężenie drugiego produktu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';
let ex414='[A]<sup>a</sup> - Stężenie pierwszego substratu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';
let ex415='[B]<sup>b</sup> - Stężenie drugiego substratu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';

let ex421='Kp - ciśnieniowa stała równowagi. Jeśli Kp>1 to reakcja biegnie w prawą stronę, a jak Kp<1 reakcja biegnie w lewo.';
let ex422='pC<sup>c</sup> - Ciśnienie pierwszego produktu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';
let ex423='p0 - Ciśnienie standartowe. Może wynosić np. 1atm, 1013hPa lub 1bar.';
let ex424='pD<sup>c</sup> - Ciśnienie drugiego produktu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';
let ex425='pA<sup>c</sup> - Ciśnienie pierwszego substratu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';
let ex426='pB<sup>c</sup> - Ciśnienie drugiego substratu do potęgi jego wykładnika stechiomtrycznego <br> Dla reakcji biegnącej wedle scematu: aA + bB &#8644; cC + dD';

let ex431='W - Wydajność reakcji podawana w procentach';
let ex432='mp o. - masa produktu otrzymanego';
let ex433='mp s. - masa produktu spodziewana wedle stechiometrii.';

let ex441='p - ciśnienie gazu (gazów) najczęściej podawane w hPa lub w Pa';
let ex442='V - objętość gazu (gazów) najczęściej podawana w dm<sup>3</sup> lub m<sup>3</sup>';
let ex443='n - łączna liczba moli gazu (gazów)';
let ex444='R - uniwersalna stała gazowa. Dla [p]=1hPa i [V]=1dm<sup>3</sup> R=83,14. Dla [p]=1Pa i [V]=1m<sup>3</sup> R=8,314.';
let ex445='T - temperatura podawana w Kelvinach (K)';

let ex511='Cp - stężenie procentowe masowe';
let ex512='ms - masa substancji rozpuszczonej';
let ex513='mr - masa roztworu';

let ex521='Cp<sub>m</sup> - stężenie procentowe molowe';
let ex522='ns<sub>1</sub> - liczba moli pierwszej substancji';
let ex523='ns<sub>2</sub> - liczba moli drugiej substancji';

let ex531='Cm - stężenie molowe';
let ex532='ns - liczba moli substancji';
let ex533='V - objętość roztworu';

let ex541='C<sub>molalne</sub> - rzadko używany sposób wyrażaniaa stężenia substancji';
let ex542='ns - liczba moli substancji';
let ex543='m<sub>rozp.</sub> - masa rozpuszczalnika wyrażona w kilogramach';

let ex611 = '&#945; - NIEOFICJALNE. Określa stopień nienasycenia. Jego wielkość określa ilość wiązań podwójnych/pierścieni';
let ex612 = 'n<sub>C</sub> - ilość atomów węgla w cząsteczce';
let ex613 = 'n<sub>H</sub> - ilość atomów wodoru w cząsteczce';
let ex614 = 'n<sub>X</sub> - ilość atomów halogenków (F, Cl, Br, I) w cząsteczce';
let ex615 = 'n<sub>N</sub> - ilość atomów azotu w cząsteczce';

let ex621 = '[&#945;]<sub>D</sub> - skręcalność właściwa wspólna dla obu enancjomerów. Brak jednostki.';
let ex622 = '&#945; - stopień skręcenia światła. Wyrażany w stopniach (&#176;)';
let ex623 = 'C - stężenie procentowe enencjomeru'; //TODO: jakie stężenie

let ex631 = 'Maksymalna ilość. Nie muszą występować wszystkie jeśli pojawią się diastereoizomery mezo';
let ex632 = 'Diastereoizomery - izomery optyczne (Konfiguracje R,S lub D,L)';

let ex711 = 'v - szybkość reakcji, czyli szybkość przybywania produktów i ubywania substratów. Podawana w mol/s.';
let ex712 = '&#916;n<sub>s</sub> - zmiala liczby moli jednego z reagentu.';
let ex713 = 't - czas reakcji (zmiany liczby moli reagentów)';

let ex721 = '&#916;H<sup>0</sup> - standartowa entalpia reakcji. Podawana w kJ/mol. Jeśli entalpia jest większa od 0, reakcja jest endoenergetyczna, a jeśli mniejsza, to reakcja jest egzoenergetyczna.';
let ex722 = '&#931;&#916;H<sup>0</sup><sub>p</sub> - suma standartowych entalpii tworzenia wszystkich produktów';
let ex723 = '>&#931;&#916;H<sup>0</sup><sub>s</sub> - suma standartowych entalpii tworzenia wszystkich substratów';

let ex731 = '&#916;G<sup>0</sup> - standartowa entalpia swobodna reakcji. Podawana w kJ/mol. Jeśli entalpia jest większa od 0, reakcja jest endotermiczna, a jeśli mniejsza, to reakcja jest egzotermiczna.';
let ex732 = '&#916;H<sup>0</sup> - standartowa entalpia reakcji. Podawana w kJ/mol.';
let ex733 = 'T - temperatura, w której prowadzona jest reakcja. Podawana w kelvinach (K). Żeby przeliczyć stopnie Celsjusza na Kelviny należy dodać do ilości stopni Celsjusza 273.';
let ex734 = '&#916;S<sup>0</sup> - standartowa entropia reakcji. Podawana w kJ/mol*K. Entropia jest miarą stopnia nieuporządkowania układu i rozproszenia energii. Zazwyczaj entropia jest mniej ważna od entalpii w celu ustalenia entalpii swobodnej.';

let ex741 = '&#916;S<sup>0</sup> - standartowa entropia reakcji. Podawana w kJ/mol*K. Entropia jest miarą stopnia nieuporządkowania układu i rozproszenia energii.';
let ex742 = '&#916;G<sup>0</sup> - standartowa entalpia swobodna reakcji. Podawana w kJ/mol. Jeśli entalpia jest większa od 0, reakcja jest endotermiczna, a jeśli mniejsza, to reakcja jest egzotermiczna.';
let ex743 = '&#916;H<sup>0</sup> - standartowa entalpia reakcji. Podawana w kJ/mol. Jeśli entalpia jest większa od 0, reakcja jest endoenergetyczna, a jeśli mniejsza, to reakcja jest egzoenergetyczna.';
let ex744 = 'T - temperatura, w której prowadzona jest reakcja. Podawana w kelvinach (K). Żeby przeliczyć stopnie Celsjusza na Kelviny należy dodać do ilości stopni Celsjusza 273.';

let ex751 = 'k - stała szybkości reakcji. Używana w równianiach kinetycznych.';
let ex752 = 'A - liczba Arrheniusa używana w obliczeniach.';
let ex753 = 'e - liczba Eulera. Niewymierna wartość wynosząca ~2,718';
let ex754 = 'Ea - Energia aktywacji. Energia wymagana do zainicjowania reakcji.';
let ex755 = 'R - uniwersalna stała gazowa. Wynosi 83,14';
let ex756 = 'T - temperatura, w której prowadzona jest reakcja. Podawana w kelvinach (K). Żeby przeliczyć stopnie Celsjusza na Kelviny należy dodać do ilości stopni Celsjusza 273.';

let ex761='';
//część właściwa po zmiennych

function execute_formulas(subject)
{
    switch(subject)
    {
        case 1:
            {
                
                document.getElementById("formulas").innerHTML=inside1;
                break;
            }
        case 2:
            {
                
                document.getElementById("formulas").innerHTML=inside2;
                break;
            }
        case 3:
            {
                
                document.getElementById("formulas").innerHTML=inside3;
                break;
            }
        case 4:
            {
                document.getElementById("formulas").innerHTML=inside4;
                break;
            }
        case 5:
            {
                document.getElementById("formulas").innerHTML=inside5;
                break;
            }
        case 6:
            {
                document.getElementById("formulas").innerHTML=inside6;
                break;
            }
        case 7:
            {
                document.getElementById("formulas").innerHTML=inside7;
                break;
            }
    }
}

function showformula(group, place)
{
    document.getElementById("bigformula").style.fontSize="3em";
    switch(group)
    {
        case 1:
            {
                switch(place)
                {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML=bf11;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML=bf12;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML=bf13;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML=bf14;
                            break;
                        }
                }
            break;
            }
        case 2:
            {
                switch(place)
                {    case 1:
                        {
                            document.getElementById("bigformula").innerHTML=bf21;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML=bf22;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML=bf23;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML=bf24;
                            break;
                        }
                    case 5:
                        {
                            document.getElementById("bigformula").innerHTML=bf25;
                            break;
                        }
                    case 6:
                        {
                            document.getElementById("bigformula").innerHTML=bf26;
                            break;
                        }
                    case 7:
                        {
                            document.getElementById("bigformula").innerHTML=bf27;
                            break;
                        }
                    case 8:
                        {
                            document.getElementById("bigformula").innerHTML=bf28;
                            break;
                        }
                }
                break;
            }
            case 3:
            {
                switch(place)
                {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML=bf31;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML=bf32;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML=bf33;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML=bf34;
                            break;
                        }
                    case 5:
                        {
                            document.getElementById("bigformula").innerHTML=bf35;
                            break;
                        }
                }
            break;
            }
            case 4:
            {
                switch(place)
                {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML=bf41;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML=bf42;
                            document.getElementById("bigformula").style.fontSize="1em";
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML=bf43;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML=bf44;
                            break;
                        }
                }
            break;
            }
            case 5:
            {
                switch(place)
                {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML=bf51;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML=bf52;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML=bf53;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML=bf54;
                            break;
                        }
                }
            break;
            }
            case 6: 
            {
                switch(place)
                {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML=bf61;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML=bf62;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML=bf63;
                            document.getElementById("bigformula").style.fontSize="2em";
                            break;
                        }
                }
            break;
            }
            case 7:
            {
                switch(place)
                {    case 1:
                        {
                            document.getElementById("bigformula").innerHTML=bf71;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML=bf72;
                            document.getElementById("bigformula").style.fontSize="2em";
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML=bf73;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML=bf74;
                            break;
                        }
                    case 5:
                        {
                            document.getElementById("bigformula").innerHTML=bf75;
                            break;
                        }
                    case 6:
                        {
                            document.getElementById("bigformula").innerHTML=bf76;
                            break;
                        }
                    case 7:
                        {
                            document.getElementById("bigformula").innerHTML=bf77;
                            break;
                        }
                    case 8:
                        {
                            document.getElementById("bigformula").innerHTML=bf78;
                            break;
                        }
                    case 9:
                        {
                            document.getElementById("bigformula").innerHTML=bf79;
                            break;
                        }
                }
                break;
            }
    }
}
function explanation(group, formulanr, letter)
{
    switch(group)
    {
        case 1:
            {
                switch(formulanr)
                {
                    case 1: 
                    {
                       switch(letter)
                       {
                            case 1:
                                {
                                    document.getElementById("explanation").innerHTML=ex111;
                                    break;
                                }
                            case 2:
                                {
                                    document.getElementById("explanation").innerHTML=ex112;
                                    break;
                                }
                            case 3:
                                {
                                    document.getElementById("explanation").innerHTML=ex113;
                                    break;
                                }
                       } 
                    }break;
                    case 2: 
                    {
                       switch(letter)
                       {
                            case 1:
                                {
                                    document.getElementById("explanation").innerHTML=ex121;
                                    break;
                                }
                            case 2:
                                {
                                    document.getElementById("explanation").innerHTML=ex122;
                                    break;
                                }
                            case 3:
                                {
                                    document.getElementById("explanation").innerHTML=ex123;
                                    break;
                                }
                            case 4:
                                {
                                    document.getElementById("explanation").innerHTML=ex124;
                                    break;
                                }
                       } 
                    }break;
                    case 3: 
                    {
                       switch(letter)
                       {
                            case 1:
                                {
                                    document.getElementById("explanation").innerHTML=ex131;
                                    break;
                                }
                            case 2:
                                {
                                    document.getElementById("explanation").innerHTML=ex132;
                                    break;
                                }
                            case 3:
                                {
                                    document.getElementById("explanation").innerHTML=ex133;
                                    break;
                                }
                            case 4:
                                {
                                    document.getElementById("explanation").innerHTML=ex134;
                                    break;
                                }
                       } 
                    }break;
                    case 4: 
                    {
                       switch(letter)
                       {
                            case 1:
                                {
                                    document.getElementById("explanation").innerHTML=ex141;
                                    break;
                                }
                            case 2:
                                {
                                    document.getElementById("explanation").innerHTML=ex142;
                                    break;
                                }
                            case 3:
                                {
                                    document.getElementById("explanation").innerHTML=ex143;
                                    break;
                                }
                       } 
                    }break;
                }break;
            }
            case 2:
                {
                    switch(formulanr)
                    {
                        case 1: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex211;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex212;
                                        break;
                                    }
                           } 
                        }break;
                        case 2: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex221;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex222;
                                        break;
                                    }
                           } 
                        }break;
                        case 3: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex231;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex232;
                                        break;
                                    }
                           } 
                        }break;
                        case 4: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex241;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex242;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex243;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML=ex244;
                                        break;
                                    }
                           } 
                        }break;
                        case 5: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex251;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex252;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex253;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML=ex254;
                                        break;
                                    }
                           } 
                        }break;
                        case 6: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex261;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex262;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex263;
                                        break;
                                    }
                           } 
                        }break;
                        case 7: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex271;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex272;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex273;
                                        break;
                                    }
                           } 
                        }break;
                        case 8: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex281;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex282;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex283;
                                        break;
                                    }
                           } 
                        }break;
                    }break;
                }
            case 3:
                {
                    switch(formulanr)
                        {
                        case 1: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex311;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex312;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex313;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML=ex314;
                                        break;
                                    }
                           } 
                        }break;
                        case 2: 
                        {
                               switch(letter)
                            {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex321;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex322;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex323;
                                        break;
                                    }
                           } 
                        }break;
                        case 3: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex331;
                                        break;
                                    }
                           } 
                        }break;
                        case 4: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex341;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex342;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex343;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML=ex344;
                                        break;
                                    }
                           } 
                        }break;
                        case 5: 
                        {
                            switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex351;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex352;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex353;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML=ex354;
                                        break;
                                    }
                           } 
                        }break;
                
                    }break;
                }
                case 4:
                    {
                        switch(formulanr)
                            {
                            case 1: 
                            {
                               switch(letter)
                               {
                                    case 1:
                                        {
                                            document.getElementById("explanation").innerHTML=ex411;
                                            break;
                                        }
                                    case 2:
                                        {
                                            document.getElementById("explanation").innerHTML=ex412;
                                            break;
                                        }
                                    case 3:
                                        {
                                            document.getElementById("explanation").innerHTML=ex413;
                                            break;
                                        }
                                    case 4:
                                        {
                                            document.getElementById("explanation").innerHTML=ex414;
                                            break;
                                        }
                                    case 5:
                                        {
                                            document.getElementById("explanation").innerHTML=ex415;
                                            break;
                                        }
                               } 
                            }break;
                            case 2: 
                            {
                                   switch(letter)
                                {
                                    case 1:
                                        {
                                            document.getElementById("explanation").innerHTML=ex421;
                                            break;
                                        }
                                    case 2:
                                        {
                                            document.getElementById("explanation").innerHTML=ex422;
                                            break;
                                        }
                                    case 3:
                                        {
                                            document.getElementById("explanation").innerHTML=ex423;
                                            break;
                                        }
                                    case 4:
                                        {
                                            document.getElementById("explanation").innerHTML=ex424;
                                            break;
                                        }
                                    case 5:
                                        {
                                            document.getElementById("explanation").innerHTML=ex425;
                                            break;
                                        }
                                    case 6:
                                        {
                                            document.getElementById("explanation").innerHTML=ex425;
                                            break;
                                        }
                                        
                               } 
                            }break;
                            case 3: 
                            {
                               switch(letter)
                               {
                                    case 1:
                                        {
                                            document.getElementById("explanation").innerHTML=ex431;
                                            break;
                                        }
                                    case 2:
                                        {
                                            document.getElementById("explanation").innerHTML=ex432;
                                            break;
                                        }
                                    case 3:
                                        {
                                            document.getElementById("explanation").innerHTML=ex433;
                                            break;
                                        }
                               } 
                            }break;
                            case 4: 
                            {
                               switch(letter)
                               {
                                    case 1:
                                        {
                                            document.getElementById("explanation").innerHTML=ex441;
                                            break;
                                        }
                                    case 2:
                                        {
                                            document.getElementById("explanation").innerHTML=ex442;
                                            break;
                                        }
                                    case 3:
                                        {
                                            document.getElementById("explanation").innerHTML=ex443;
                                            break;
                                        }
                                    case 4:
                                        {
                                            document.getElementById("explanation").innerHTML=ex444;
                                            break;
                                        }
                                    case 5:
                                        {
                                            document.getElementById("explanation").innerHTML=ex445;
                                            break;
                                        }
                               } 
                            } break;
                            }
                    
                        }break;

                        case 5:
                {
                    switch(formulanr)
                        {
                        case 1: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex511;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex512;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex513;
                                        break;
                                    }
                           } 
                        }break;
                        case 2: 
                        {
                               switch(letter)
                            {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex521;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex522;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex523;
                                        break;
                                    }
                           } 
                        }break;
                        case 3: 
                        {
                            switch(letter)
                            {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex531;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex532;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex533;
                                        break;
                                    }
                           } 
                        }break;
                        case 4: 
                        {
                           switch(letter)
                           {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML=ex541;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML=ex542;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML=ex543;
                                        break;
                                    }
                           } 
                        }break;
                    }
        
    break;}
    case 6:
        {
            switch(formulanr)
                {
                case 1: 
                {
                   switch(letter)
                   {
                        case 1:
                            {
                                document.getElementById("explanation").innerHTML=ex611;
                                break;
                            }
                        case 2:
                            {
                                document.getElementById("explanation").innerHTML=ex612;
                                break;
                            }
                        case 3:
                            {
                                document.getElementById("explanation").innerHTML=ex613;
                                break;
                            }
                            case 4:
                            {
                                document.getElementById("explanation").innerHTML=ex614;
                                break;
                            }
                            case 5:
                            {
                                document.getElementById("explanation").innerHTML=ex615;
                                break;
                            }
                   } 
                }break;
                case 2: 
                {
                       switch(letter)
                    {
                        case 1:
                            {
                                document.getElementById("explanation").innerHTML=ex621;
                                break;
                            }
                        case 2:
                            {
                                document.getElementById("explanation").innerHTML=ex622;
                                break;
                            }
                        case 3:
                            {
                                document.getElementById("explanation").innerHTML=ex623;
                                break;
                            }
                   } 
                }break;
                case 3: 
                {
                    switch(letter)
                    {
                        case 1:
                            {
                                document.getElementById("explanation").innerHTML=ex631;
                                break;
                            }
                        case 2:
                            {
                                document.getElementById("explanation").innerHTML=ex632;
                                break;
                            }
                   } 
                }break;
            }

break;}
case 8:
    {
        switch(formulanr)
        {
            case 1: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex711;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex712;
                            break;
                        }
                        case 3:
                        {
                            document.getElementById("explanation").innerHTML=ex713;
                            break;
                        }
               } 
            }break;
            case 2: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex721;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex722;
                            break;
                        }
                        case 3:
                        {
                            document.getElementById("explanation").innerHTML=e723;
                            break;
                        }
               } 
            }break;
            case 3: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex731;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex732;
                            break;
                        }
                        case 3:
                            {
                                document.getElementById("explanation").innerHTML=ex733;
                                break;
                            }
                        case 4:
                            {
                                document.getElementById("explanation").innerHTML=ex734;
                                break;
                            }
               } 
            }break;
            case 4: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex741;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex742;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("explanation").innerHTML=ex743;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("explanation").innerHTML=ex744;
                            break;
                        }
               } 
            }break;
            case 5: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex751;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex752;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("explanation").innerHTML=ex753;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("explanation").innerHTML=ex754;
                            break;
                        }
                        case 5:
                        {
                            document.getElementById("explanation").innerHTML=ex755;
                            break;
                        }
                    case 6:
                        {
                            document.getElementById("explanation").innerHTML=ex756;
                            break;
                        }
               } 
            }break;
            case 6: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex761;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex762;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("explanation").innerHTML=ex763;
                            break;
                        }
                        case 4:
                        {
                            document.getElementById("explanation").innerHTML=ex764;
                            break;
                        }
               } 
            }break;
            case 7: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex771;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex772;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("explanation").innerHTML=ex773;
                            break;
                        }
                        case 4:
                        {
                            document.getElementById("explanation").innerHTML=ex774;
                            break;
                        }
               } 
            }break;
            case 8: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex781;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex782;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("explanation").innerHTML=ex783;
                            break;
                        }
                        case 4:
                        {
                            document.getElementById("explanation").innerHTML=ex784;
                            break;
                        }
               } 
            }
            case 9: 
            {
               switch(letter)
               {
                    case 1:
                        {
                            document.getElementById("explanation").innerHTML=ex798;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("explanation").innerHTML=ex792;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("explanation").innerHTML=ex793;
                            break;
                        }
                        case 4:
                        {
                            document.getElementById("explanation").innerHTML=ex794;
                            break;
                        }
               } 
            }break;
        }break;
    }
    }}
