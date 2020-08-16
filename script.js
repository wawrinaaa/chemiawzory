let inside1='<div id="formula1" class="formula" onclick="showformula(1, 1)">Moment dipolowy</div><div id="formula2" class="formula" onclick="showformula(1, 2)">Masa próbki wytr. w skutek elektrolizy</div><div id="formula3" class="formula" onclick="showformula(1, 3)">Równoważnik Elektrochemiczny</div><div id="formula4" class="formula" onclick="showformula(1, 4)">Siła ele. motoryczna ogniwa (EMF)</div>';

    let bf11='<span onmouseover="explanation(1, 1, 1);">&#181;</span>=<span onmouseover="explanation(1, 1, 2);">Q</span>*<span onmouseover="explanation(1, 1, 3);">r</span>';

    let bf12='<span onmouseover="explanation(1, 2, 1);">m</span>=<span onmouseover="explanation(1, 2, 2);">k</span>*<span onmouseover="explanation(1, 2, 3);">i</span>*<span onmouseover="explanation(1, 2, 4);">t</span>';

    let bf13='<span onmouseover="explanation(1, 3, 1);">k</span>=<span onmouseover="explanation(1, 3, 2);">M</span>/(<span onmouseover="explanation(1, 3, 3);">z</span>*<span onmouseover="explanation(1, 3, 4);">f</span>)';

    let bf14='<span onmouseover="explanation(1, 4, 1);">EMF</span>=<span onmouseover="explanation(1, 4, 2);">E<sub>k</sub></span>-<span onmouseover="explanation(1, 4, 3);">E<sub>a</sub></span>';

let inside2='<div id="formula1" class="formula" onclick="showformula(2, 1)">pH</div><div id="formula2" class="formula" onclick="showformula(2, 2)">pOH</div><div id="formula3" class="formula" onclick="showformula(2, 3)">przeliczenie<br>pOH na pH</div><div id="formula4" class="formula" onclick="showformula(2, 4)">Stała dysocjacji kwasu</div><div id="formula5" class="formula"  onclick="showformula(2, 5)">Stała dysocjacji zasady</div><div id="formula6" class="formula" onclick="showformula(2, 6)">Stopień dysocjacji<br>(pełny)</div><div id="formula7" class="formula" onclick="showformula(2, 7)">Zasada upraszczania wzoru &uarr;</div><div id="formula8" class="formula" onclick="showformula(2, 8)">Stopień dysocjacji<br>(uproszczony)</div>';

    let bf21='<span onmouseover="explanation(2, 1, 1);">pH</span>=<span onmouseover="explanation(2, 1, 2);">-log<sub>10</sub></span> <span onmouseover="explanation(2, 1, 3);">[H<sup>+</sup>]</span>';

    let bf22='<span onmouseover="explanation(2, 2, 1);">pOH</span>=<span onmouseover="explanation(2, 2, 2);">-log<sub>10</sub></span> <span onmouseover="explanation(2, 2, 3);">[OH<sup>-</sup>]</span>';
    
    let bf23='<span onmouseover="explanation(2, 3, 1);">pH</span>=<span onmouseover="explanation(2, 3, 2);">14</span>-<span onmouseover="explanation(2, 3, 3);">pOH</span>';
    
    let bf24='<span onmouseover="explanation(2, 4, 1);">K<sub>a</sub></span>=<span onmouseover="explanation(2, 4, 2);">[H<sup>+</sup>]</span>*<span onmouseover="explanatio(2, 4, 3);">[R<sup>-</sup>]</span>/<span onmouseover="explanation(2, 4, 4);">[HR]</span>';
    
    let bf25='<span onmouseover="explanation(2, 5, 1);">K<sub>b</sub></span>=<span onmouseover="explanation(2, 5, 2);">[OH<sup>-</sup>]</span>*<span onmouseover="explanation(2, 5, 3);">[M<sup>+</sup>]</span>/<span onmouseover="explanation(2, 5, 4);">[MOH]</span>';
    
    let bf26='<span onmouseover="explanation(2, 6, 1);">K</span>=<span onmouseover="explanation(2, 6, 2);">Cm</span>*<span onmouseover="explanation(2, 6, 3);">&#945;<sup>2</sup></span>/<span onmouseover="explanation(2, 6, 4);">(1-&#945;)</span>';
    
    let bf27='<span onmouseover="explanation(2, 7, 1);">&#945;</span><5% lub <span onmouseover="explanation(2, 7, 2);">Cm</span>/<span onmouseover="explanation(2, 7, 3);">K</sup></span>>400';
    
    let bf28='<span onmouseover="explanation(2, 8, 1);">K</span>=<span onmouseover="explanation(2, 8, 2);">Cm</span>*<span onmouseover="explanation(2, 8, 3);">&#945;<sup>2</sup></span>';

let inside3='<div id="formula1" class="formula" onclick="showformula(3, 1)">Iloczyn rozpuszcalności</div><div id="formula2" class="formula" onclick="showformula(3, 2)">Rozpuszczalnść</div><div id="formula3" class="formula" onclick="showformula(3, 3)">Iloczyn jonowy wody</div><div id="formula4" class="formula" onclick="showformula(3, 4)">pH buforu kwaśnego</div><div id="formula5" class="formula" onclick="showformula(3, 5)">pOH buforu zasadowego</div>';

    let bf31='<span onmouseover="explanation(3, 1, 1);">Kso</span>=<span onmouseover="explanation(3, 1, 2);">[M+]<sup>r</sup></span>*<span onmouseover="explanation(3, 1, 3);">[R-]<sup>m</sup></span>/<span onmouseover="explanation(3, 1, 4);">[MR]</span>';

    let bf32='<span onmouseover="explanation(3, 2, 1);">KSo</span>=<span onmouseover="explanation(3, 2, 2);">(rSo)<sup>r</sup></span>*<span onmouseover="explanation(3, 2, 3);">(nR)<sup>n</sup></span>';

    let bf33='<span onmouseover="explanation(3, 3, 1);">Kw</span>=10<sup>-14</sup>';

    let bf34='<span onmouseover="explanation(3, 4, 1);">pH</span>=<span onmouseover="explanation(3, 4, 2);">pKa</span>-log<sub>10</sub>(<span onmouseover="explanation(3, 4, 3);">C<sub>kw</sub></span>/<span onmouseover="explanation(3, 4, 4);">C<sub>s</sub></span>)';

    let bf35='<span onmouseover="explanation(3, 5, 1);">pOH</span>=<span onmouseover="explanation(3, 5, 2);">pKb</span>-log<sub>10</sub>(<span onmouseover="explanation(3, 5, 3);">C<sub>kw</sub></span>/<span onmouseover="explanation(3, 5, 4);">C<sub>s</sub></span>)';
    

let inside4='<div id="formula1" class="formula" onclick="showformula(4, 1)">Stężeniowa stała równowagi</div><div id="formula2" class="formula" onclick="showformula(4, 2)">Ciśnieniowa stała równowagi</div><div id="formula3" class="formula" onclick="showformula(4, 3)">Wydajność reakcji</div><div id="formula4" class="formula" onclick="showformula(4, 4)">Równanie Clapeyrona</div>'; 

    let bf41='<span onmouseover="explanation(4, 1, 1);">Kc</span>=<span onmouseover="explanation(4, 1, 2);">[C]<sup>c</sup></span>*<span onmouseover="explanation(4, 1, 3);">[D]<sup>d</sup></span>/(<span onmouseover="explanation(4, 1, 4);">[A]<sup>a</sup></span>*<span onmouseover="explanation(4, 1, 5);">[B]<sup>b</sup></span>)';

    let bf42='nie wiem JESZCZE'; /* FIXME: wzór na ciśnieniową stałą równowagi */

    let bf43='<span onmouseover="explanation(4, 3, 1);">W</span>=<span onmouseover="explanation(4, 3, 2);">m<sub>p</sub> o.</span>/<span onmouseover="explanation(4, 3, 3);">m<sub>p</sub> s.</span>*100%';

    let bf44='<span onmouseover="explanation(4, 4, 1);">p</span>*<span onmouseover="explanation(4, 4, 2);">V</span>=<span onmouseover="explanation(4, 4, 3);">n</span>*<span onmouseover="explanation(4, 4, 4);">R</span>*<span onmouseover="explanation(4, 4, 5);">T</span>';

let inside5='<div id="formula1" class="formula" onclick="showformula(5, 1)">Stężenie procentowe masowe</div><div id="formula2" class="formula" onclick="showformula(5, 2)">Stężenie procentowe molowe</div><div id="formula3" class="formula" onclick="showformula(5, 3)">Stężenie molowe</div><div id="formula4" class="formula" onclick="showformula(5, 4)">Stężenie molalne mol/m</div>';

    let bf51='';

    let bf52='';

    let bf53='';

    let bf54='';

let inside6='<div id="formula1" class="formula" onclick="showformula(6, 1)">Ilość wiązań<br>podwójnych/pierścieni</div><div id="formula2" class="formula" onclick="showformula(6, 2)">Skręcalność właściwa</div><div id="formula3" class="formula" onclick="showformula(6, 3)">Maksymalna ilość diastereoizomerów</div>';

    let bf61='';

    let bf62='';

    let bf63='';

let inside7='<div id="formula1" class="formula" onclick="showformula(7, 1)">Szybkość reakcji</div><div id="formula2" class="formula" onclick="showformula(7, 2)">Standartowa entalpia</div><div id="formula3" class="formula" onclick="showformula(7, 3)">Entalpia swobodna</div><div id="formula4" class="formula" onclick="showformula(7, 4)">Entropia</div><div id="formula5" class="formula" onclick="showformula(7, 5)">Równanie Arheniusa</div><div id="formula6" class="formula" onclick="showformula(7, 6)">Równanie kinetyczne 1szego stopnia</div><div id="formula7" class="formula" onclick="showformula(7, 7)">Równanie kinetyczne 2giego stopnia</div><div id="formula8" class="formula" onclick="showformula(7, 8)">Równanie kinetyczne 3ciego stopnia</div><div id="formula9" class="formula" onclick="showformula(7, 9)">Równanie kinetyczne 4tego stopnia</div>';

    let bf71='';

    let bf72='';

    let bf73='';

    let bf74='';

    let bf75='';

    let bf76='';

    let bf77='';

    let bf78='';

    let bf79='';

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