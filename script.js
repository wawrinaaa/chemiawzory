function execute_formulas(subject) {
    switch (subject) {
        case 1:
            {

                document.getElementById("formulas").innerHTML = inside1;
                break;
            }
        case 2:
            {

                document.getElementById("formulas").innerHTML = inside2;
                break;
            }
        case 3:
            {

                document.getElementById("formulas").innerHTML = inside3;
                break;
            }
        case 4:
            {
                document.getElementById("formulas").innerHTML = inside4;
                break;
            }
        case 5:
            {
                document.getElementById("formulas").innerHTML = inside5;
                break;
            }
        case 6:
            {
                document.getElementById("formulas").innerHTML = inside6;
                break;
            }
        case 7:
            {
                document.getElementById("formulas").innerHTML = inside7;
                break;
            }
    }
}

function showformula(group, place) {
    document.getElementById("bigformula").style.fontSize = "3em";
    switch (group) {
        case 1:
            {
                switch (place) {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML = bf11;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML = bf12;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML = bf13;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML = bf14;
                            break;
                        }
                }
                break;
            }
        case 2:
            {
                switch (place) {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML = bf21;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML = bf22;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML = bf23;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML = bf24;
                            break;
                        }
                    case 5:
                        {
                            document.getElementById("bigformula").innerHTML = bf25;
                            break;
                        }
                    case 6:
                        {
                            document.getElementById("bigformula").innerHTML = bf26;
                            break;
                        }
                    case 7:
                        {
                            document.getElementById("bigformula").innerHTML = bf27;
                            break;
                        }
                    case 8:
                        {
                            document.getElementById("bigformula").innerHTML = bf28;
                            break;
                        }
                }
                break;
            }
        case 3:
            {
                switch (place) {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML = bf31;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML = bf32;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML = bf33;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML = bf34;
                            break;
                        }
                    case 5:
                        {
                            document.getElementById("bigformula").innerHTML = bf35;
                            break;
                        }
                }
                break;
            }
        case 4:
            {
                switch (place) {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML = bf41;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML = bf42;
                            document.getElementById("bigformula").style.fontSize = "1.75em";
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML = bf43;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML = bf44;
                            break;
                        }
                }
                break;
            }
        case 5:
            {
                switch (place) {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML = bf51;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML = bf52;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML = bf53;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML = bf54;
                            break;
                        }
                }
                break;
            }
        case 6:
            {
                switch (place) {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML = bf61;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML = bf62;
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML = bf63;
                            document.getElementById("bigformula").style.fontSize = "2.5em";
                            break;
                        }
                }
                break;
            }
        case 7:
            {
                switch (place) {
                    case 1:
                        {
                            document.getElementById("bigformula").innerHTML = bf71;
                            break;
                        }
                    case 2:
                        {
                            document.getElementById("bigformula").innerHTML = bf72;
                            document.getElementById("bigformula").style.fontSize = "2.5em";
                            break;
                        }
                    case 3:
                        {
                            document.getElementById("bigformula").innerHTML = bf73;
                            break;
                        }
                    case 4:
                        {
                            document.getElementById("bigformula").innerHTML = bf74;
                            break;
                        }
                    case 5:
                        {
                            document.getElementById("bigformula").innerHTML = bf75;
                            break;
                        }
                    case 6:
                        {
                            document.getElementById("bigformula").innerHTML = bf76;
                            break;
                        }
                    case 7:
                        {
                            document.getElementById("bigformula").innerHTML = bf77;
                            break;
                        }
                    case 8:
                        {
                            document.getElementById("bigformula").innerHTML = bf78;
                            break;
                        }
                    case 9:
                        {
                            document.getElementById("bigformula").innerHTML = bf79;
                            break;
                        }
                }
                break;
            }
    }
}

function explanation(group, formulanr, letter) {
    switch (group) {
        case 1:
            {
                switch (formulanr) {
                    case 1:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex111;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex112;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex113;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 2:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex121;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex122;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex123;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex124;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 3:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex131;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex132;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex133;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex134;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 4:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex141;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex142;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex143;
                                        break;
                                    }
                            }
                        }
                        break;
                }
                break;
            }
        case 2:
            {
                switch (formulanr) {
                    case 1:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex211;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex212;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 2:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex221;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex222;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 3:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex231;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex232;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 4:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex241;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex242;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex243;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex244;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 5:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex251;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex252;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex253;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex254;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 6:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex261;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex262;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex263;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 7:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex271;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex272;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex273;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 8:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex281;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex282;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex283;
                                        break;
                                    }
                            }
                        }
                        break;
                }
                break;
            }
        case 3:
            {
                switch (formulanr) {
                    case 1:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex311;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex312;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex313;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex314;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 2:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex321;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex322;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex323;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 3:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex331;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 4:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex341;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex342;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex343;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex344;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 5:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex351;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex352;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex353;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex354;
                                        break;
                                    }
                            }
                        }
                        break;

                }
                break;
            }
        case 4:
            {
                switch (formulanr) {
                    case 1:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex411;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex412;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex413;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex414;
                                        break;
                                    }
                                case 5:
                                    {
                                        document.getElementById("explanation").innerHTML = ex415;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 2:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex421;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex422;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex423;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex424;
                                        break;
                                    }
                                case 5:
                                    {
                                        document.getElementById("explanation").innerHTML = ex425;
                                        break;
                                    }
                                case 6:
                                    {
                                        document.getElementById("explanation").innerHTML = ex425;
                                        break;
                                    }

                            }
                        }
                        break;
                    case 3:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex431;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex432;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex433;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 4:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex441;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex442;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex443;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex444;
                                        break;
                                    }
                                case 5:
                                    {
                                        document.getElementById("explanation").innerHTML = ex445;
                                        break;
                                    }
                            }
                        }
                        break;
                }

            }
            break;

        case 5:
            {
                switch (formulanr) {
                    case 1:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex511;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex512;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex513;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 2:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex521;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex522;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex523;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 3:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex531;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex532;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex533;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 4:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex541;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex542;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex543;
                                        break;
                                    }
                            }
                        }
                        break;
                }

                break;
            }
        case 6:
            {
                switch (formulanr) {
                    case 1:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex611;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex612;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex613;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex614;
                                        break;
                                    }
                                case 5:
                                    {
                                        document.getElementById("explanation").innerHTML = ex615;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 2:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex621;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex622;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex623;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex624;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 3:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex631;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex632;
                                        break;
                                    }
                            }
                        }
                        break;
                }

                break;
            }
        case 7:
            {
                switch (formulanr) {
                    case 1:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex711;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex712;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex713;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 2:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex721;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex722;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = e723;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 3:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex731;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex732;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex733;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex734;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 4:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex741;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex742;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex743;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex744;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 5:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex751;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex752;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex753;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex754;
                                        break;
                                    }
                                case 5:
                                    {
                                        document.getElementById("explanation").innerHTML = ex755;
                                        break;
                                    }
                                case 6:
                                    {
                                        document.getElementById("explanation").innerHTML = ex756;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 6:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex761;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex762;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex763;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex764;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 7:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex761;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex762;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex763;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex764;
                                        break;
                                    }
                            }
                        }
                        break;
                    case 8:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex761;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex762;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex763;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex764;
                                        break;
                                    }
                            }
                        }
                    case 9:
                        {
                            switch (letter) {
                                case 1:
                                    {
                                        document.getElementById("explanation").innerHTML = ex761;
                                        break;
                                    }
                                case 2:
                                    {
                                        document.getElementById("explanation").innerHTML = ex762;
                                        break;
                                    }
                                case 3:
                                    {
                                        document.getElementById("explanation").innerHTML = ex763;
                                        break;
                                    }
                                case 4:
                                    {
                                        document.getElementById("explanation").innerHTML = ex764;
                                        break;
                                    }
                            }
                        }
                        break;
                }
                break;
            }
    }
}