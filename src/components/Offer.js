import React from 'react';
import '../App.css';

import mark from '../images/mark.png';

import gifA from '../images/A-icon.png';
import gifB from '../images/K-icon.png';
import gifC from '../images/Ot-icon.png';
import gifD from '../images/Op.png';



export default function Offer() {
    return (
        <div className='offer'>
            <div className="offer-info">
                <p>W dzisiejszych czasach nie wystarczy tylko administrować co jest czynnością stosunkowo łatwą, ale trzeba Zarządzać ogromnym majątkiem ludzi, którzy powierzyli nam swoje nieruchomości.
                    Robić to w sposób świadomy, odpowiedzialny , potrafić przewidywać sytuacje nietypowe, analizować rynek nieruchomości i w odpowiednim czasie reagować na zmiany tego rynku.
                    <br />
                    <br />
                    Nasza spółka jest odpowiedzią na Państwa potrzeby.
                    „Dom” sp. z o.o. powstała w oparciu o długoletnie doświadczenie zawodowe.
                    Dzięki zdobytej wiedzy , doświadczeniu oraz  utworzonym kontaktom i współpracy z profesjonalnymi partnerami , nasza firma jest w stanie sprostać Państwa oczekiwaniom.</p>
            </div>
            <h3>W ramach szeroko pojętej współpracy oferujemy Państwu poniższy pakiet usług:</h3>
            {/* <img className='a-background' src={gifA} alt="" />
            <img className='b-background' src={gifB} alt="" /> */}
            <div className="offer-section">
                <div className="flex">
                    <img className='a-gif-1' src={gifA} alt="" />
                    <h2><span>A</span>dministracja</h2>
                </div>

                <ul>
                    <li>
                        <img src={mark} alt="" />
                        <p>Stały nadzór nad funkcjonowaniem nieruchomości: cykliczne obchody, wizytacje obiektu</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Reprezentacja właścicieli, współwłaścicieli, wspólnot mieszkaniowych na zewnątrz przed organami administracji państwowej i samorządowej oraz w stosunkach pomiędzy właścicielami</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Zawieranie, wprowadzanie zmian i rozwiązywanie umów ubezpieczenia budynku</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Nadzór nad utrzymaniem porządku i czystości w budynku i obrębie posesji na podstawie zawartych umów</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Kontraktowanie podwykonawców: posiadamy zasób sprawdzonych i rzetelnych podmiotów obsługujących nieruchomości (firmy sprzątające, ochrona, konserwatorzy, serwisy techniczne i branżowe, wykonawcy remontów)</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Bieżący kontakt z właścicielami we wszelkich sprawach związanych z nieruchomością wspólną</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Wsparcie mieszkańców w codziennych sprawach: wydawanie zaświadczeń, udzielanie informacji, dorabianie pilotów, kluczy do klatek schodowych, kodów domofonowych, etc</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Inwentaryzacja całości dokumentacji</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Przeprowadzamy działania zmierzające do pozyskania dla <span>Wspólnoty mieszkaniowej</span> dodatkowe pożytki przez wynajęcie wolnych lokali oraz określonych części nieruchomości wspólnej, w tym na potrzeby reklam</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Przygotowanie, organizacja i przeprowadzanie zebrań wspólnot mieszkaniowych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Zbieranie głosów pod uchwałami wspólnot (zapewniamy możliwość głosowania on-line)</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Reprezentacja wspólnoty mieszkaniowej w kontaktach z deweloperem, podmiotami zewnętrznymi, dostawcami mediów, organami administracji publicznej</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Wszelkie inne czynności konieczne do prawidłowego sprawowania funkcji zarządcy dopasowane do specyfiki wspólnoty mieszkaniowej i nieruchomości</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Prowadzenie (zawieranie, przechowywanie i aktualizowanie) umów najmu, w tym na lokale użytkowe, powierzchnie dachowe, powierzchnie ścian pod reklamy itp.</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Organizowanie zawieranie umów na dostawę energii elektrycznej, usuwania nieczystości stałych, dostawy energii cieplnej, dostaw zimnej wody i odprowadzenia ścieków</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Ubezpieczenie budynku od ognia i innych zdarzeń losowych oraz Zleceniodawcy od odpowiedzialności cywilnej z tytułu zdarzeń, związanych z zarządzaną nieruchomością</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Otwarcie rachunku bankowego dla nieruchomości i dokonywanie rozliczeń przez ten rachunek</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Reprezentowanie Zleceniodawcy w sprawach przed sądami i urzędem skarbowym</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Organizowanie zebrań wspólnoty mieszkaniowej, przygotowywanie projektów uchwał</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Przygotowywanie projektów planów gospodarczych i planów remontów wraz z wstępnym kosztorysowaniem niezbędnych do wykonania prac remontowych lub modernizacyjnych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Reprezentowanie właściciela na zebraniach <span>Wspólnot mieszkaniowych</span></p>
                    </li>
                </ul>

            </div>

            <div className="offer-section">
                <div className="flex">
                    <img className='a-gif-1' src={gifB} alt="" />
                    <h2><span>K</span>sięgowość</h2>
                </div>

                <ul>
                    <li>
                        <img src={mark} alt="" />
                        <p>Prowadzenie ewidencji księgowej przychodów i kosztów: przyjmowanie wpłat czynszowych i zaliczek oraz pożytków nieruchomości, ewidencjonowanie i opłacanie dokumentów kosztowych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Prowadzenie rozliczeń z dostawcami mediów</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Prowadzenie ewidencji księgowej kosztów zarządu nieruchomością wspólną</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Opracowywanie regulaminów dotyczących sposobu rozliczeń za dostawę mediów</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Rozliczanie wpłacanych przez właścicieli opłat z tytułu zaliczek na koszty utrzymania nieruchomości wspólnej i fundusz remontowy</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Prowadzenie rozliczeń części lokalowej, a także odrębnej księgowości obejmującej kompletną ewidencję przychodów części lokalowej i jej wydatków, indywidualne rozliczanie właścicieli w rocznym okresie rozliczeniowym</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Przygotowywanie projektów planu gospodarczego</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Bieżąca kontrola zmian stawek za media oraz regulacja opłat i rozliczeń z tym związanych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Sporządzanie rocznych sprawozdań finansowych Wspólnot oraz okresowych na życzenie klientów</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Udostępnianie właścicielom danych o rozrachunkach i saldzie wpłat przypisanych do lokalu poprzez portal "E-kartoteka"</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Sporządzanie na rzecz wspólnot mieszkaniowych deklaracji podatkowych</p>
                    </li>
                </ul>

            </div>

            <div className="offer-section">
                <div className="flex">
                    <img className='a-gif-1' src={gifC} alt="" />
                    <h2><span>O</span>bsługa techniczna</h2>
                </div>

                <ul>
                    <li>
                        <img src={mark} alt="" />
                        <p>Prowadzenie (przechowywanie i aktualizowanie) dokumentacji technicznej, dotyczącej administrowanych nieruchomości</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Prowadzenie a w razie braku zakładanie książek obiektów budowlanych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Analiza protokołów przeglądowych, zlecanie prac i napraw oraz zaleceń poprzeglądowych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Pozyskiwanie ofert na prace remontowe i modernizacyjne, opiniowanie wycen i projektów</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Zlecanie nadzorów nad pracami naprawczymi i remontowymi</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Dokonywanie wizji lokalnych w związku z usterkami nieruchomości wspólnej</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Reprezentacja wspólnoty w kwestiach technicznych przed gwarantami nieruchomości, podmiotami zewnętrznymi, dostawcami mediów, organami administracji publicznej</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Dokonywanie okresowej oceny stanu technicznego obiektów i składanie udokumentowanych wniosków o potrzebie wykonania remontów średnich lub kapitalnych poszczególnych obiektów i instalacji</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Ogłaszanie i prowadzenie przetargów na prace remontowe (remonty średnie i kapitalne)</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Zapewnienie ochrony technicznej oraz sprawnego działania urządzeń technicznych przeznaczonych do wspólnego użytku w nieruchomości</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Dokonywanie bieżących napraw, konserwacji i remontów</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Utrzymywanie należytego stanu sanitarno-porządkowego</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Przeprowadzanie okresowych kontroli kominiarskich,gazowych, elektrycznych oraz ogólnobudowlanych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Współpracujemy z wieloma firmami , które zapewniają szybkie reagowanie na potrzeby związane z usuwaniem awarii i konserwacją (pogotowie 24h)</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Zlecanie wszelkich bieżących napraw i  konserwacji niezbędnych do właściwego funkcjonowania nieruchomości</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Większe remonty wykonywane są pod nadzorem Zarządów Wspólnot</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Wykonawcy wyłaniani są w drodze konkursu ofert</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Zlecanie i kontrola bieżących napraw i konserwacji budynku</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Przygotowywanie planów remontowych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Nadzór nad pracą firm wykonujących remonty i modernizacje - odbiór tych prac</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Wyszukiwanie wykonawców robót budowlanych</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Weryfikacja wiarygodności wykonawców oraz przedstawianie Zarządom zebranych ofert do zatwierdzenia i wyboru</p>
                    </li>
                </ul>

            </div>

            <div className="offer-section">
                <div className="flex">
                    <img className='a-gif-1' src={gifD} alt="" />
                    <h2><span>O</span>bsługa prawna</h2>
                </div>

                <ul>
                    <li>
                        <img src={mark} alt="" />
                        <p>Windykacja należności</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Opiniowanie kwestii prawnych związanych ze wspólnotą mieszkaniową i nieruchomością</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Opiniowanie projektów uchwał, regulaminów wspólnot, umów zawieranych przez wspólnotę</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>reprezentacja wspólnoty mieszkaniowej w postępowaniach z tytułu gwarancji i rękojmi budynku</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Wsparcie w procesie przejmowania w zarządzanie nieruchomości od dotychczasowego administratora, analiza otrzymanej dokumentacji</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Reprezentacja właścicieli, Wspólnot przed sądami i organami egzekucyjnymi</p>
                    </li>
                    <li>
                        <img src={mark} alt="" />
                        <p>Opracowywanie uchwał i innych aktów prawnych (regulaminów, statutów, rejestracja Regonu, NIP-u)</p>
                    </li>
                </ul>

            </div>

        </div>
    )
}
