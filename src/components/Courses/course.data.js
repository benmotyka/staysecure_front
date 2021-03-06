import SqlInteractive from "./sqlInjection/parts/SqlInteractive"
import HighlightSqlCode from './sqlInjection/parts/HighlightSqlCode'
import HighlightHtml from "./sqlInjection/parts/HighlightHtml"
import Introduction from "./sqlInjection/parts/Introduction"
import WhatIsProxy from "./sqlInjection/parts/WhatIsProxy"
import SqlApiAbstractionLayers from './sqlInjection/parts/SqlApiAbstractionLayers'
import SqlPrevention from './sqlInjection/parts/SqlPrevention'

import RansomwareDownload from "./ransomware/parts/RansomwareDownload"
import RansomwareFilterEmail from "./ransomware/parts/RansomwareFilterEmail"
import RansomwareRun from "./ransomware/parts/RansomwareRun"
import RansomwareEncrypted from "./ransomware/parts/RansomwareEncrypted"
import RansomwareInfection from './ransomware/parts/RansomwareInfection'
import RansomwareAsymetricKey from './ransomware/parts/RansomwareAsymetricKey'
import RansomwareProtectMethods from './ransomware/parts/RansomwareProtectMethods'

import PhishingTypes from './phishing/parts/PhishingTypes'
import WebScrapping from './phishing/parts/WebScrapping'
import PhishingEnterSimulation from './phishing/parts/PhishingEnterSimulation'
import PhishingProtection from './phishing/parts/PhishingProtection'
import U2FKeys from "./phishing/parts/U2FKeys"
import PhishingSendDataSimulation from "./phishing/parts/PhishingSendDataSimulation"

import KeyloggerProtectionMethods from './keylogger/parts/KeyloggerProtectionMethods'
import WhatIsKeylogger from './keylogger/parts/WhatIsKeylogger'
import KeyloggerTypes from './keylogger/parts/KeyloggerTypes'
import KeylogggerMaliciousFlow from './keylogger/parts/KeylogggerMaliciousFlow'
import KeyloggerInfectionMethods from './keylogger/parts/KeyloggerInfectionMethods'
import KeyloggerRemoving from './keylogger/parts/KeyloggerRemoving'
import KeyloggerDetection from './keylogger/parts/KeyloggerDetection'

import WhatIsDdos from './ddos/parts/WhatIsDdos'
import DosVsDdos from './ddos/parts/DosVsDdos'
import DdosAi from './ddos/parts/DdosAi'
import HowWebServersWork from './ddos/parts/HowWebServersWork'
import DdosTypes from './ddos/parts/DdosTypes'
import DdosProtection from './ddos/parts/DdosProtection'

import XssTypes from './xss/parts/XssTypes'
import XssInteractiveIntroduction from './xss/parts/XssInteractiveIntroduction'
import XssInteractiveEnterHtml from './xss/parts/XssInteractiveEnterHtml'
import XssInteractiveEnterScript from './xss/parts/XssInteractiveEnterScript'
import XssConsequences from './xss/parts/XssConsequences'
import XssWhatIs from "./xss/parts/XssWhatIs"
import XssProtection from "./xss/parts/XssProtection"

const content = [
    {
        course: "sql-injection",
        name: "SQL Injection",
        description: "Wstrzykni??cie SQL to podatno???? aplikacji webowych polegaj??ca na zmodyfikowaniu kwerendy bazodanowej wysy??anej do relacyjnej bazy danych. Celem tego ataku mo??e by?? uzyskanie informacji, do kt??rych w zwyczajnych okoliczno??ciach nie powinno si?? mie?? dost??pu: danych personalnych innych u??ytkownik??w, ich hase?? lub numer??w kart kredytowych.",
        language: "pl",
        content: [
            {
                header: "Scenariusz kursu",
                text: "W przegl??darce uruchomiona jest prosta strona sklepu internetowego. Podstawow?? jej funkcjonalno??ci?? jest wyszukanie produktu, aby nast??pnie przegl??da?? produkty zwi??zane z wpisan?? fraz??.<br/><br/>Pierwszym krokiem kt??ry podejmuje atakuj??cy jest dok??adne zbadanie i analiza kodu ??rod??owego strony internetowej. Dzi??ki temu mo??e przegl??da?? kod strony w poszukiwaniu potencjalnych podatno??ci i luk bezpiecze??stwa. ",
                level: "basic",
                slide: <Introduction/>,
            },
            {
                header: "Analiza kodu strony internetowej",
                text: "Jak wida?? na za????czonym fragmencie kodu ??r??d??owego, aplikacja sklepu zawiera si?? z cia??a (rozpoczynaj??cego si?? znacznikiem <b>&lt;body&gt;</b>), w kt??rym to znajduje si?? struktura strony, oraz skryptu (rozpoczynaj??cego si?? znacznikiem <b>&lt;script&gt;</b>), kt??ry jest wykonywany po wyst??pieniu okre??lonych okoliczno??ci. W tym wypadku po naci??ni??ciu przycisku, znajduj??cego si?? w tagu <b>&lt;button&gt;</b>, zostanie wywo??ana funkcja <i>search</i>. Zadaniem funkcji jest wys??anie ????dania HTTP typu GET do adresu url https://api/search z cia??em w postaci obiektu. W obiekcie tym znajduje si?? para klucz-warto????, okre??laj??ca ci??g znak??w szukany przez u??ytkownika.<br/><br/><b>W tym interaktywnym ??wiczeniu postaraj si????zaznaczy?? kursorem funkcj?? znajduj??c?? si?? w kodzie, kt??ra odpowiada za przes??anie formularza.</b>",
                level: "basic",
                slide: <HighlightHtml/>,
                interactive: true,
            },
            {
                header: "Przechwycenie i modyfikacja ????dania",
                text: "Pola formularzy zazwyczaj walidowane s?? pod k??tem wyst??powania znak??w specjalnych, kt??re, zgodnie z za??o??eniami tw??rc??w aplikacji, nie powinny zosta?? wysy??ane do aplikacji dzia??aj??cej po stronie serwera.<br/><br/>Aby omin???? walidacj?? warto??ci formularza po stronie klienta, atakuj??cy mo??e u??y?? <b>serwera proxy</b>, najcz????ciej uruchomionego na tej samej maszynie, z kt??rej dokonywany jest atak. Pozwala on na przechwycenie ca??ego ????dania i zmodyfikowanie go w dowolny spos??b. W tym przyk??adzie zosta??a zmodyfikowana warto???? pola 'value'. Takie ????danie nie powinno by?? mo??liwe do wys??ania, ze wzgl??du na dzia??aj??c?? walidacj?? pola formularza. Na podstawie zwracanych kod??w b????du, atakuj??cy jest w stanie stwierdzi??, czy to miejsce jest podatne na atak Wstrzykni??cia SQL.",
                slide: <WhatIsProxy/>,
                level: "advanced",
            },
            {
                header: "Analiza kodu API",
                text: "Warto???? wys??ana z aplikacji internetowej zostaje przekazana do aplikacji serwerowej, celem jej przetworzenia i zwr??cenia odpowiednich informacji. W poni??szym kodzie ??r??d??owym przedstawiony jest fragment aplikacji dzia??aj??cej po stronie serwera wykonanej w ??rodowisku Node.js, odpowiadaj??cy pobraniu zawarto??ci ????dania, a nast??pnie bezpo??rednie przekazanie go do zapytania bazodanowego. <br/><br/>W zwyczajnych okoliczno??ciach atakuj??cy nie ma mo??liwo??ci wgl??du w kod aplikacji serwerowej, jednak poprzez eksperymentowanie z warto??ciami wys??anych danych jest on w stanie okre??li?? jej podatno???? na atak typu SQL Injection.<br/><br/><b>W tym interaktywnym ??wiczeniu zaznacz fragment kodu, w kt??rym znajduje si????parametr przesy??any do aplikacji z formularza.</b>",
                slide: <HighlightSqlCode/>,
                level: "basic",
                interactive: true,
            },
            {
                header: "Symulacja kodu API po otrzymaniu ????dania",
                text: "Atakuj??cy, przesy??aj???? r????ne warto??ci w formularzu, i analizuj??c kody b????d??w, jest w stanie okre??li??, czy dana aplikacja dzia??aj??ca po stronie serwera jest podatna na atak SQL Injection.<br/><br/>Odbywa si?? to poprzez dodawanie do szukanej warto??ci nietypowych znak??w, np: <strong>'</strong>, <strong>\"</strong>, <strong>-</strong>... Je??li warto???? przekazywana do zapytania SQL nie jest w ??aden spos??b czyszczona, dodatkowe znaki mog?? przedosta?? si?? do zapytania i ca??kowicie je zmodyfikowa??. Zauwa??y?? mo??na, ??e poprzez dodanie <strong>'</strong> na pocz??tku wyrazu, mo??na zamkn???? apostrof znajduj??cy si?? w zapytaniu w aplikacji serwerowej, i doda?? w??asn?? cz?????? zapytania, kt??ra poprzednio si?? tam nie znajdowa??a.<br/><br/><strong>W tym interaktywnym ??wiczeniu, postaraj si?? samodzielnie wykona?? atak SQL Injection. Wykorzystaj znak apostrofu, dowolnej prawdziwej warto??ci (np. 1=1) i komentarza.</strong>",
                level: "basic",
                interactive: true,
                slide: <SqlInteractive/>,
            },
            {
                header: "Komunikacja z baz?? danych w API",
                text: "Projektuj??c aplikacj?? dzia??aj??c?? po stronie serwera, programi??ci musz?? si?? zdecydowa??, na jakiej warstwie abstrakcji aplikacja b??dzie komunikowa??a si?? z baz?? danych.<br/><br/>Co do zasady im wy??szy poziom abstrakcji, tym ni??sza podatno???? na atak SQL Injection, b????dy programist??w i zazwyczaj bardziej przyjazna sk??adnia. Ka??dy wy??szy poziom abstrakcji komunikacji z baz?? w aplikacji, zazwyczaj wspiera elementy w ni??szym poziomie, przyk??adowo u??ywaj??c konstruktor??w kwerend czy ORM, mo??na posi??kowa?? si?? czystym SQL.<br/><br/>Jednak??e im wy??sza warstwa abstrakcji, tym wi??ksza szansa, ??e zapytania do bazy nie b??d?? dostatecznie dobrze zoptymalizowane, przez co czas na otrzymanie odpowiedzi mo??e by????d??u??szy. ",
                slide: <SqlApiAbstractionLayers/>,
                level: "advanced"
            },
            {
                header: "Przeciwdzia??anie SQL Injection",
                text: "Ze wzgl??du na ??atwo???? wykonania i potecjalne korzy??ci dla atakuj??cego (mo??liwo???? zdobycia wra??liwych danych, modyfikacja bazy), ataki SQL Injection s?? ci??gle powszechnie wykonywane, a same podatno??ci nadal spotykane w kodach ??r??d??owych aplikacji.<br/><br/> Kwestia odporno??ci aplikacji na podatno???? SQL Injection zazwyczaj le??y po stronie zespo??u programist??w, bowiem to oni maj?? bezpo??redni wp??yw na jako???? wykonanego oprogramowania.<br/><br/>Tworz??c aplkacj?? nale??y pami??ta?? o tym, aby miejsca najbardziej wra??liwe na atak, przyk??adowo takie, kt??re bezpo??rednio komunikuj?? si?? z relacyjn?? baz?? danych, odpowiednio <strong>walidowa?? i oczyszcza??</strong>. Ca??a logika uodporniaj??ca aplikacj?? powinna dzia?? si????jedynie po stronie serwera, a nie po stronie przegl??darki, ze wzgl??du na mo??liwo???? wykorzystania serwer??w proxy.",
                slide: <SqlPrevention/>,
                level: "basic"
            }
        ]
    },
    {
        course: "sql-injection",
        name: "SQL Injection",
        description: "SQL injection is a web application vulnerability that involves modifying a database query sent to a relational database. The aim of this attack may be to obtain information that should not normally be accessed: other users' personal data, passwords or credit card numbers.",
        language: "en",
        content: [
            {
                header: "Course scenario",
                text: "A simple web shop page is launched in the browser. Its basic functionality is to search for a product and then browse products related to the entered phrase. <br/><br/>The first step an attacker takes is to carefully examine and analyse the source code of the website. This allows him to review the website's code for potential vulnerabilities and security holes. ",
                level: "basic",
                slide: <Introduction/>,
            },
            {
                header: "Website code analysis",
                text: "As you can see in the attached source code snippet, the shop application consists of a body (starting with a <b>&lt;body&gt;</b> tag), which contains the page structure, and a script (starting with a <b>&lt;script&gt;</b> tag), which is executed when certain circumstances occur. In this case, a function is called when the button, located in the <b>&lt;button&gt;</b> tag is pressed. The task of the function is to send an HTTP request of GET type to the https://api/search with the body as an object. This object contains a key-value pair specifying the string the user is searching for.<br/><br/><b>In this interactive exercise, try to highlight the function in the code that is responsible for submitting the form.</b>",
                level: "basic",
                slide: <HighlightHtml/>,
                interactive: true,
            },
            {
                header: "Interception and modification of the request",
                text: "Form fields are usually validated for special characters, which, according to application developers, should not be sent to the server-side application.<br/><br/>In order to bypass the validation of form values on the client side, an attacker can use a  <b>proxy server</b>, usually running on the same machine from which the attack is launched. It allows to intercept the whole request and modify it in any way. In this example, a field 'value' was modified. Such request should not be possible to send, due to the form field validation being in place. Based on the error codes returned, the attacker is able to determine if this site is vulnerable to an SQL Injection attack.",
                slide: <WhatIsProxy/>,
                level: "advanced",
            },
            {
                header: "API code analysis",
                text: "The value sent from the web application is passed to the server-side application for processing and returning the relevant information. The source code below shows a fragment of a server-side application executed in the Node.js environment, corresponding to retrieving the content of a request and then passing it directly to a database query. <br/><br/>Under normal circumstances, an attacker has no way of viewing the server-side application code, but by experimenting with the values of the data sent, they are able to determine its vulnerability to an SQL Injection attack.<br/><br/><b>In this interactive exercise, select a piece of code that contains a parameter sent to the application from a form.</b>",
                slide: <HighlightSqlCode/>,
                level: "basic",
                interactive: true,
            },
            {
                header: "API code simulation upon receiving request",
                text: "An attacker, by submitting various values in a form, and analyzing the error codes, is able to determine if a particular server-side application is vulnerable to an SQL Injection attack.<br/><br/>This is done by adding unusual characters to the value being searched for, e.g. <strong>'</strong>, <strong>\"</strong>, <strong>-</strong>... Should the value passed to the SQL query is not sanitized in any way, the extra characters can get into the query and completely modify it. You will notice that by adding <strong>'</strong> at the beginning of a word, you can close the apostrophe found in the query in the server application, and add your own part of the query that was not previously there.<br/><br/><strong>In this interactive exercise, try to perform a SQL Injection attack yourself. Use the apostrophe character, any real value (e.g. 1=1) and a comment.</strong>",
                level: "basic",
                interactive: true,
                slide: <SqlInteractive/>,
            },
            {
                header: "Database communication in",
                text: "When designing a server-side application, developers must decide on which abstraction layer the application will communicate with the database.<br/><br/>As a rule of thumb, the higher the level of abstraction, the lower the susceptibility to SQL Injection attacks, programmer errors and usually a more friendly syntax. Any higher level of abstraction of database communication in an application will usually support elements in the lower level, for example using query builders or ORM allows developers to fetch for data using pure SQL.<br/><br/>However, the higher the abstraction layer, the greater the chance that queries to the database will not be optimised well enough, so that response times may be longer.",
                slide: <SqlApiAbstractionLayers/>,
                level: "advanced"
            },
            {
                header: "Protection against SQL Injection",
                text: "Due to the ease of execution and the potential benefits for the attacker (possibility to gain sensitive data, modify the database), SQL Injection attacks are still commonly executed, and the vulnerabilities themselves are still found in the source codes of applications.<br/><br/> The issue of application resistance to SQL Injection usually lies with the development team, as they have a direct impact on the quality of the developed software.<br/><br/>While creating an application, one should remember to properly <strong> validate and sanitize</strong> the places that are most vulnerable to the attack, for example those that directly communicate with a relational database. The whole logic making the application resistant should take place only on the server side, and not on the browser side, because of the possibility of using proxy servers.",
                slide: <SqlPrevention/>,
                level: "basic"
            }
        ]
    },
    {
        course: "phishing",
        name: "Phishing",
        description: "Phishing jest pewn?? form?? socjotechniki, w kt??rej to atakuj??cy, poprzez podszywanie si?? pod zaufane osoby lub instytucje, pr??buje dokona?? nieuczciwego przej??cia poufnych informacji od ofiary.",
        language: "pl",
        content: [
            {
                header: "Rodzaje atak??w phishingowych",
                text: "Zagadnienie phishingu jest bardzo obszerne - zawiera w sobie wiele rodzaj??w i sposob??w phishingu, jednak w wi??kszo??ci przypadk??w sprowadza si?? do oszukania, z??udzenia ofiary.<br/><br/>Atakuj??cy mo??e u??ywa?? phishingu samego w sobie do zdobycia poufnych danych, jednak jest on cz??sto wykorzystywany jako element po??rednicz??cy dla innego ataku.<br/><br/>Przyk??adowo, aby rozes??a?? wirusa ransomware, atakuj??cy mo??e spreparowa?? i wykorzysta?? <strong>maile phishingowe</strong>. Kolejnym przyk??adem mo??e by?? instalacja Keyloggera na urz??dzeniu mobilnym, poprzez <strong>phishing telefoniczny</strong>.<br/><br/>Ofiarami atak??w phishingowych mog?? by?? zar??wno pracownicy firm, jak i zwykli u??ytkownicy internetu, kt??rych adresy email lub numery telefon??w zosta??y ujawnione, przyk??adowo w wyniku wycieku bazy danych.",
                slide: <PhishingTypes/>,
                level: "basic"
            },
            {
                header: "Web Scrapping",
                text: "Atakuj??cy obieraj??c sobie za cel phishingu firm??, mo??e chcie?? zebra?? jak najwi??cej adres??w email b??d?? numer??w telefonu cz??onk??w danej firmy. Wydawa?? si?? mo??e to pracoch??onnym zadaniem, dlatego cz??stym sposobem pozyskiwania danych potencjalnych ofiar, s?? narz??dzia zwane <strong>Web Scrapperami</strong>.<br/><br/>S?? to w pe??ni zautomatyzowane narz??dzia, kt??re pozwalaj?? na pobranie ca??ej zawarto??ci strony internetowej, odnalezieniu w niej pewnych wzorc??w, na przyk??ad adres??w email, a nast??pnie zapisaniu ich.<br/><br/>Web scrappery mog?? by?? r??wnie?? wyposa??one w mechanizm odwiedzania witryn powi??zanych z pierwotn?? stron??, celem pobierania jeszcze wi??kszej ilo??ci danych. Zebrane i przygotowane dane mog?? by?? bezpo??rednio u??yte do atak??w phishingowych na du???? skal??.",
                level: "advanced",
                slide: <WebScrapping/>
            },
            {
                header: "Otrzymanie SMS phishingowego",
                text: "Za??????my, ??e Tw??j numer telefonu znalaz?? si?? na li??cie ofiar ataku phishingu telefonicznego. Atak ma na celu z??udzi?? ofiary do wej??cia na stron?? internetow?? w wiadomo??ci, aby op??aci?? dodatkowe koszty przesy??ki.<br/><br/>Z pozoru SMS wygl??da rzetelnie: nadawc?? jest 'Poczta Polska', a sama tre???? wiadomo??ci nie wydaje si?? podejrzana.<br/><br/>Atakuj??cy, u??ywaj??c specjalnych serwis??w, mog?? podszywa?? si?? pod dowolnego nadawc??, a samo hiper????cze, nie musi przenosi?? u??ytkownika na stron??, z kt??r?? rzekomo jest powi??zane.<br/><br/><strong>W tym interaktywnym ??wiczeniu, przejd?? do otrzymanej wiadomo??ci SMS, przeanalizuj jej zawarto????, a nast??pnie kliknij podejrzany link.</strong>",
                level: "basic",
                slide: <PhishingEnterSimulation/>,
                interactive: true,
            },
            {
                header: "Skutki wizyty strony",
                text: "Po wej??ciu na stron?? zauwa??y?? mo??na cztery podstawowe elementy, ??wiadcz??ce o tym, ??e witryna mo??e pr??bowa?? wy??udzi?? dane:<br/>- kwota do zap??aty znacz??co r????ni si?? od tej zadeklarowanej w SMS<br/>- adres URL strony ma w sobie b????d<br/>- odbiorc?? przelewu nie jest Poczta Polska, a podejrzany ci??g znak??w<br/>- strona nie u??ywa certyfikatu SSL (HTTPS)<br/><br/>Osoba, kt??ra b??dzie polega??a jedynie na informacjach w SMS i nie przeanalizuje miejsca, na kt??rym dokona zap??aty, mo??e pa???? ofiar?? wykradni??cia danych. Dzieje si?? tak, poniewa?? jest to fa??szywa strona, kt??rej zadaniem jest przekazanie danych do logowania atakuj??cemu, zapewniaj??c mu tym samym dost??p do konta bankowego ofiary.<br/><br/><strong>W tym interaktywnym ??wiczeniu, wejd?? do wybranej metody p??atno??ci, i podaj dowolne dane logowania.</strong>",
                level: "basic",
                interactive: true,
                slide: <PhishingSendDataSimulation/>
            },
            {
                header: "Metody ochrony",
                text: "Ataki phishingowe w g????wnej mierze polegaj?? na zmanipulowaniu ofiary, u??ywaj??c odpowiednich narz??dzi in??ynierii spo??ecznej, do wej??cia w podejrzany adres URL, op??acenia zam??wienia itp.<br/><br/>Najbardziej podatnym elementem jest tutaj cz??owiek - je??li atakuj??cemu uda si?? stworzy?? odpowiednie z??udzenie, na przyk??ad poprzez staranne odwzorowane wiadomo??ci email czy strony internetowej, istnieje szansa, ??e ofiara b??dzie my??la??a, ??e odwiedza prawdziwy serwis internetowy.<br/><br/>Pe??na ochrona przed atakami phishingowymi jest praktycznie nie mo??liwa - dlatego nale??y stosowa?? dodatkowe zasady, kt??re uchroni?? ofiar?? przed eskalacj?? skutk??w ataku, takie jak <strong>stosowanie odpowiedniej polityki hase??</strong>.<br/><br/>Najwa??niejszym elementem ochrony jest jednak zachowanie uwagi przy dokonywaniu wra??liwych czynno??ci (wykonywania przelewu, logowania si?? do ulubionego serwisu).",
                level: "basic",
                slide: <PhishingProtection/>
            },
            {
                header: "Zaawansowane metody ochrony",
                text: "Do bardziej zaawansowanych metod ochrony przed atakami phishingowymi zaliczy?? mo??na <strong>klucze U2F</strong>. S?? to urz??dzenia no??niki danych, kt??re ????cz?? si?? z urz??dzeniem u??ytkownika poprzez port USB.<br/><br/>Dzia??aj?? na bazie kryptografii asymetrycznej i pozwalaj?? na stosowanie ich jako uwierzytelnienia dwusk??adnikowego. Dzi??ki temu nawet je??li atakuj??cemu przy pr??bie logowania uda si?? ukra???? kod SMS, stanowi??cy uwierzytelnienie dwusk??adnikowe, pr??ba finalnie si?? nie powiedzie, gdy?? nie b??dzie posiada?? on fizycznego dost??pu do klucza U2F.<br/><br/>Klucze U2F to powszechne i bezpieczne rozwi??zanie, wspierane nie tylko przez systemy operacyjnych Windows, macOS i Linux, ale r??wnie?? przez najwi??ksze portale spo??eczno??ciowe. Mog?? by????r??wnie?? stosowane przy urz??dzeniach mobilnych, ????cza?? si?? z urz??dzeniem poprzez protoko??y NFC.",
                level: "basic",
                slide: <U2FKeys/>
            },
        ]
    },
    {
        course: "phishing",
        name: "Phishing",
        description: "Phishing is a form of social engineering in which an attacker, by impersonating trusted individuals or institutions, attempts to fraudulently acquire confidential information from a victim.",
        language: "en",
        content: [
            {
                header: "Phishing attack types",
                text: "The topic of phishing is very broad - it includes many types and methods of phishing, but in most cases it boils down to deceiving, deluding the victim.<br/><br/>An attacker can use phishing in itself to gain sensitive data, but it is often used as an intermediary element for another attack.<br/><br/>For example, to spread a ransomware virus, an attacker may craft and use <strong>phishing emails</strong>. Another example could be the installation of a Keylogger on a mobile device, via <strong>telephone phishing</strong>. <br/><br/>Victims of phishing attacks can be both company employees and ordinary internet users, whose email addresses or phone numbers have been revealed, for example as a result of a database leak.",
                slide: <PhishingTypes/>,
                level: "basic"
            },
            {
                header: "Web Scrapping",
                text: "When targeting a company for phishing, an attacker may want to collect as many email addresses or phone numbers of company members as possible. This may seem like a laborious task, therefore tools called <strong>Web Scrapers</strong> are a common way of acquiring data of potential victims.<br/><br/>These are fully automated tools that allow you to download the entire content of a website, find certain patterns in it, such as email addresses, and then save them.<br/><br/>Web scrapers can also be equipped with a mechanism for visiting sites linked to the original page in order to download even more data. The data collected and prepared can be used directly for large-scale phishing attacks.",
                level: "advanced",
                slide: <WebScrapping/>
            },
            {
                header: "Receiving phishing SMS",
                text: "Let's assume that your phone number has been listed as a victim of a phone phishing attack. The attack aims to trick victims into going to a website in order to pay for additional postage costs.<br/><br/>On the surface, the SMS looks reliable: the sender is 'Poczta Polska' and the content of the message itself does not seem suspicious.<br/><br/>Attackers, using special services, can impersonate any sender, and the hyperlink itself, does not necessarily take the user to the website it is supposedly linked to.<br/><br/><strong>In this interactive exercise, go to the SMS you received, analyse its content, and then click on the suspicious link.</strong>",
                level: "basic",
                slide: <PhishingEnterSimulation/>,
                interactive: true,
            },
            {
                header: "Visiting phishing site",
                text: "When you enter the website, you will notice four basic elements that indicate that the website may be trying to scam you:<br/><br/>- the amount is significantly different from that declared in the SMS<br/>- the URL of the page has an error in it<br/>- the recipient of the transfer is not Poczta Polska, but a suspicious string of characters <br/>- the website does not use an SSL certificate (HTTPS)<br/><br/>A person who will rely only on the information in the SMS and will not analyse the site on which he will make a payment may fall victim to data theft. This is because it is a fake site designed to pass the login details to an attacker, thus providing them with access to the victim's bank account. <br/><br/><strong>In this interactive exercise, go to the payment method of your choice, and enter any login details.</strong>",
                level: "basic",
                interactive: true,
                slide: <PhishingSendDataSimulation/>
            },
            {
                header: "Protection against phishing",
                text: "Phishing attacks primarily involve manipulating the victim, using appropriate social engineering tools, into entering a suspicious URL, paying for an order, etc.<br/><br/>The most vulnerable element here is the human - if the attacker manages to create the right illusion, for example by carefully mapping an email or website, there is a chance that the victim will think they are visiting a real website.<br/><br/>Full protection against phishing attacks is virtually impossible - so additional rules should be applied to protect the victim from the escalating effects of the attack, such as the use of a suitable <strong>password policy.</strong>.<br/><br/>However, the most important element of protection is to pay attention when performing sensitive actions (transferring money, logging into a favourite service).",
                level: "basic",
                slide: <PhishingProtection/>
            },
            {
                header: "Advanced protection methods",
                text: "More advanced methods of protection against phishing attacks include <strong>U2F keys</strong>. These are data storage devices that connect to the user's device via a USB port.<br/><br/>They work on the basis of asymmetrical cryptography and can be used as two-factor authentication. This ensures that even if an attacker manages to steal the SMS code that constitutes two-factor authentication during a login attempt, the attempt will ultimately fail because the attacker will not have physical access to the U2F key.<br/><br/>U2F keys are a common and secure solution, supported not only by Windows, macOS and Linux operating systems, but also by major social networks. They can also be used with mobile devices, connecting to the device via NFC protocols.",
                level: "basic",
                slide: <U2FKeys/>
            },
        ]
    },
    {
        course: "ransomware",
        name: "Ransomware",
        description: "Ransomware to typ z??o??liwego oprogramowania (ang. malware), kt??rego celem jest zablokowanie dost??pu do komputera osobistego poprzez zaszyfrowanie wszystkich mo??liwych plik??w. Ten rodzaj szkodliwego oprogramowania jest szczeg??lnie niebezpieczny dla przedsi??biorstw, gdy?? utrata wa??nych dokument??w czy danych finansowych, mo??e si?? wi??za?? z powa??nymi konsekwencjami, lub brakiem mo??liwo??ci reakcji na czas (np. z??o??eniu oferty w terminie).",
        language: "pl",
        content: [
            {
                header: "Metody infekcji",
                text: "Ransomware, podobnie jak ka??dy inny rodzaj z??o??liwego oprogramowania, mo??e dosta?? si?? do urz??dzenia ko??cowego r????nymi sposobami. Najpopularniejszymi wektorami ataku s?? <b>zdalny dost??p</b>, <b>maile phishingowe</b> lub <b>zdalne wykonanie kodu</b><br/><br/>Ka??dy z wy??ej wymienionych sposob??w sprowadza si?? do jednego - zainstalowania na urz??dzeniu ofiary z??o??liwego oprogramowania (wirusa).<br/><br/>G????wnym celem ransomware jest <strong>zaszyfrowanie danych</strong> znajduj??cych si?? na urz??dzeniu ko??cowym, celem za????dania okupu za ich odszyfrowanie.",
                level: "basic",
                slide: <RansomwareInfection/>,
            },
            {
                header: "Wygenerowanie kluczy dost??pu",
                text: "Atakuj??cy generuje par?? kluczy: publiczny i prywatny. Kryptografia asymetryczna dzia??a w ten spos??b, ??e cokolwiek zaszyfrowane kluczem publicznym, mo??na odszyfrowa?? <strong>tylko</strong> kluczem prywatnym.<br/><br/>Wirus, kt??ry zostanie rozsy??any przez atakuj??cego, zaszyfruje pliki <strong>kluczem publicznym</strong>. Je??li ofiara wywi????e si?? z narzuconego okupu, mo??e jej zosta?? dostarczony klucz prywatny, kt??ry jest jedynym sposobem na odszyfrowanie danych. W zdecydowanej wi??kszo??ci przypadk??w tak si?? nie stanie - je??li padniemy ofiar?? ransomware, z??ym pomys??em jest sp??acenie okupu. Najcz????ciej atakuj??cemu nie b??dzie ju?? zale??a??o na dostarczeniu ofierze klucza, celem odszyfrowaniu danych.<br/><br/> ",
                level: "basic",
                slide: <RansomwareAsymetricKey/>,
            },
            {
                header: "Filtry antyspamowe",
                text: "Powszechn?? praktyk?? stosowan?? u wi??kszo??ci dostawc??w skrzynek pocztowych jest funkcjonalno???? <strong>filtr??w za????cznik??w</strong>.<br/><br/>Mog?? one analizowa?? tre???? za????czonych plik??w, bez wzgl??du na ich typ. Nast??pnie, tre???? plik??w por??wnywana jest z baz?? zawieraj??c?? ka??de znane z??o??liwe oprogramowanie - w tym przypadku ransomware - co pozwala na oszacowanie prawdopodobie??stwa, ??e analizowany za????cznik jest wirusem typu ransomware.<br/><br/>Wiadomo???? mailowa, kt??ra oka??e bardzo podobna do wirusa, nie zostanie dostarczona do odbiorcy, tym samym chroni??c potencjalne ofiary przed infekcj??.<br/><br/>Warto jednak pami??ta??, ??e nawet filtry pope??niaj?? czasem b????dy. Nie rzadko zdarzy im si?? przepu??ci?? z??o??liwy za????cznik lub odrzuci?? standardow?? wiadomo????, ze wzgl??du na b????dne przekonanie o jej podejrzanej tre??ci.",
                slide: <RansomwareFilterEmail/>,
                level: "advanced"
            },
            {
                header: "Pobranie wirusa",
                text: "Za??????my, ??e wirus ransomware zosta?? rozes??any do ofiar w postaci <strong>maili phishingowych</strong>. <br/><br/>Dobrze spreparowana wiadomo???? b??dzie zach??ca??a odbiorc?? do niezw??ocznego pobrania i uruchomienia pliku, bez wcze??niejszego zweryfikowania nadawcy ani typu za????cznika. Na pierwszy rzut oka nadawca i plik wygl??daj?? prawid??owo, jednak po dalszej analizie, zauwa??y?? mo??na wzbudzaj??cy w??tpliwo??ci adres mailowy, oraz typ (rozszerzenie) pobranego pliku.<br/><br/>Je??li ofiara da si?? przekona?? wiadomo??ci, najprawdopodobniej natychmiast pobierze i uruchomi za????cznik. <br/><br/><strong>W tym interaktywnym ??wiczeniu wykonaj symulacj?? pobrania z??o??liwego za????cznika.</strong>",
                level: "basic",
                slide: <RansomwareDownload/>,
                interactive: true
            },
            {
                header: "Uruchomienie ransomware",
                text: "Uruchomienie wirusa nie b??dzie skutkowa??o natychmiastowym zablokowaniem dost??pu do danych na urz??dzeniu, gdy?? musi min???? pewien czas, w ci??gu kt??rego ransomware zaszyfruje wszystkie pliki.<br/><br/>Aby wzbudzi?? zaufanie ofiary i tym samym da?? wirusowi wi??cej czasu na wykonanie swojego zadania, cz??sto po uruchomieniu pliku mo??e wy??wietli?? si?? oczekiwana tre???? - w tym przypadku b??dzie to rachunek bankowy.<br/><br/>Po dok??adniejszej analizie zauwa??y?? mo??na jednak, i?? nie jest on zgodny z rzeczywisto??ci??. Na tym etapie zazwyczaj jest ju?? za p????no na podj??cie akcji.<br/><br/><strong>W tym interaktywnym ??wiczeniu postaraj si?? uruchomi?? wcze??niej pobrany plik.</strong>",
                level: "basic",
                slide: <RansomwareRun/>,
                interactive: true
            },
            {
                header: "Sytuacja po uruchomieniu wirusa",
                text: "Kiedy ransomware zako??czy swoj?? prac??, u??ytkownik ko??cowy <strong>traci dost??p do wszystkich danych na urz??dzeniu</strong>. W zale??no??ci od typu ransomware, zazwyczaj jedynym sposobem na odszyfrowanie danych jest u??ycie szyfruj??cego klucza prywatnego, w kt??rego posiadaniu jest atakuj??cy.<br/><br/>Uzyskanie tego klucza nie jest jednak trywialnym zadaniem - towarzyszy temu op??ata pieni????na, wykonana jak najbardziej anonimowym sposobem. Dodatkowo celem przy??pieszenia procesu uzyskania zap??aty, atakuj??cy cz??sto zagra??a ofiarze zniszczeniem klucza, kt??ry jest jedynym sposobem na uzyskanie dost??pu do zaszyfrowanych danych.<br/><br/> <strong>W tym interaktywnym ??wiczeniu postaraj si?? uruchomi?? nowo powsta??y plik, a nast??pnie przeanalizuj jego zawarto????.</strong>",
                level: "basic",
                slide: <RansomwareEncrypted/>,
                interactive: true
            },
            {
                header: "Metody ochrony przed ransomware",
                text: "Przed atakiem typu ransomware ci????ko si?? w pe??ni ochroni??. Mo??na jednak podj???? akcje, kt??re pomog?? zniwelowa?? jego skutki.<br/><br/>Najwa??niejszym elementem jest <strong>zasada ograniczonego zaufania</strong> i dok??adnego analizowania otrzymanych maili, pobranych plik??w.<br/><br/>Kolejnym ze sposob??w na ochron?? jest cz??ste wykonywanie kopii zapasowych, jednak istnieje mo??liwo????, ??e ransomware zaszyfruje tak??e wszystkie kopie zapasowe, przez co stan?? si?? one bezu??yteczne.",
                level: "basic",
                slide: <RansomwareProtectMethods/>,
            },
        ]
    },
    {
        course: "ransomware",
        name: "Ransomware",
        description: "Ransomware is a type of malicious software (malware) that aims to block access to a personal computer by encrypting all possible files. This type of malware is particularly dangerous for businesses, as the loss of important documents or financial data can have serious consequences, or the inability to respond in a timely manner (e.g. submitting a bid on time).",
        language: "en",
        content: [
            {
                header: "Methods of infection",
                text: "Ransomware, like any other type of malware, can get into an endpoint device by various means. The most common attack vectors are <strong>remote access</strong>, <strong>phishing emails</strong> or <strong>remote code execution</strong>.<br/><br/> Each of the above-mentioned methods boils down to one thing - installing malicious software (a virus) on the victim's device. <br/><br/>The main goal of ransomware is to encrypt data on the end device in order to demand a ransom for its decryption.",
                level: "basic",
                slide: <RansomwareInfection/>,
            },
            {
                header: "Creating keys",
                text: "The attacker generates a pair of keys: public and private. Asymmetric cryptography works in such a way that anything encrypted with the public key can <strong>only</strong> be decrypted with the private key.<br/><br/>A virus that is spread by an attacker will encrypt files with the <strong>public key</strong>. If the victim complies with the imposed ransom, they may be provided with a private key, which is the only way to decrypt the data. In the vast majority of cases, this will not happen - if you fall victim to ransomware, it is a bad idea to pay off the ransom. Most often the attacker will no longer care about providing the victim with the key to decrypt the data. ",
                level: "basic",
                slide: <RansomwareAsymetricKey/>,
            },
            {
                header: "Spam filters",
                text: "A common practice with most mailbox providers is the functionality of <strong>attachment filters</strong>.<br/><br/>These can analyse the content of attached files, regardless of their type. The content of the files is then compared against a database containing every known malware - in this case ransomware - to estimate the likelihood that the analysed attachment is a ransomware virus.<br/><br/>An email message that turns out to be very similar to a virus will not be delivered to the recipient, thus protecting potential victims from infection.<br/><br/>However, it is worth remembering that even filters sometimes make mistakes. It is not uncommon for them to let a malicious attachment pass or to reject a standard message due to the mistaken belief that its content is suspicious.",
                slide: <RansomwareFilterEmail/>,
                level: "advanced"
            },
            {
                header: "Downloading the virus",
                text: "Let us assume that a ransomware virus has been sent to victims in the form of <strong>phishing emails</strong>.<br/><br/> A well crafted message will encourage the recipient to immediately download and run the file, without first verifying the sender or type of attachment. At first glance, the sender and file look correct, but upon further examination, a questionable email address and type (extension) of the downloaded file can be spotted. <br/><br/>If the victim is persuaded by the message, they are likely to immediately download and run the attachment. <br/><br/><strong>In this interactive exercise, simulate downloading a malicious attachment.</strong>",
                level: "basic",
                slide: <RansomwareDownload/>,
                interactive: true
            },
            {
                header: "Running ransomware",
                text: "Launching the virus will not immediately block access to data on the device, as a certain amount of time must pass during which the ransomware will encrypt all files.<br/><br/>In order to inspire trust in the victim and thus give the virus more time to complete its task, often the expected content may be displayed after the file is launched - in this case, it will be a bank account.<br/><br/>However, on closer inspection, it may appear to be wrong. At this stage, it is usually too late to take action.<br/><br/><strong>In this interactive exercise, try to run the previously downloaded file.</strong>",
                level: "basic",
                slide: <RansomwareRun/>,
                interactive: true
            },
            {
                header: "Encrypted files",
                text: "Once the ransomware completes its work, the end user <strong>loses access to all data on the device</strong>. Depending on the type of ransomware, usually the only way to decrypt data is to use an encryption private key in the attacker's possession.<br/><br/>Obtaining this key, however, is not a trivial task - it is accompanied by a monetary payment, made in the most anonymous way possible. In addition, to speed up the process of obtaining the payment, the attacker often threatens the victim with the destruction of the key, which is the only way to gain access to the encrypted data.<br/><br/><strong>In this interactive exercise, try to run a newly created file and then analyse its contents.</strong>",
                level: "basic",
                slide: <RansomwareEncrypted/>,
                interactive: true
            },
            {
                header: "Ransomware protection methods",
                text: "It is difficult to fully protect yourself from a ransomware attack. However, you can take actions which will help to neutralise its effects.<br/><br/>The most important element is <strong>the principle of limited trust</strong> and thorough analysis of e-mails received and files downloaded.<br/><br/>Another way to protect yourself is to make frequent backups, but it is possible that ransomware will also encrypt all backups, rendering them useless.",
                level: "basic",
                slide: <RansomwareProtectMethods/>,
            },
        ]
    },
    {
        course: "keylogger",
        name: "Keylogger",
        description: "Keylogger to ca??kowicie legalne narz??dzie rejestruj??ce zdarzenia zwi??zane z obs??ug?? klawiatury systemu operacyjnego, na kt??rym si?? znajduje, zazwyczaj bez wiedzy u??ytkownika. Pierwsze keyloggery powsta??y w latach 70 XX wieku i mia??y s??u??y?? s??u??bom specjalnym do przechwytywania informacji na maszynach do pisania w publicznych miejscach. Wraz z biegiem czasu, zacz??to nadu??ywa?? to narz??dzie, stosuj??c je do z??o??liwych cel??w. Obecnie, cz??stym zastosowaniem keylogger??w jest infekcja, a wykradanie wra??liwych danych, takich jak dane bankowe, kart kredytowych czy loginy i has??a.",
        language: "pl",
        content: [
            {
                header: "Czym jest i jak dzia??a keylogger?",
                text: "Keylogger to ca??kowicie legalne narz??dzie rejestruj??ce zdarzenia zwi??zane z obs??ug?? klawiatury systemu operacyjnego, na kt??rym si????znajduje, zazwyczaj bez wiedzy u??ytkownika. Pierwsze keyloggery powsta??y w latach 70 XX wieku i mia??y s??u??y?? s??u??bom specjalnym do przechwytywania informacji na maszynach do pisania w publicznych miejscach.<br/><br/>To narz??dzie mo??e by?? wykorzystywane w miejscach pracy do badania aktywno??ci pracownik??w, jako rodzaj kontroli rodzicielskiej lub przez oszust??w pr??buj??cych wykra???? wra??liwe dane ofiary.<br/><br/>Ich celem jest zazwyczaj zarejestrowanie aktywno??ci klawiatury u??ytkownika i przechwycenie tych informacji, celem wydobycia takich danych jak dane uwierzytelniaj??ce czy numery kart kredytowych.",
                level: "basic",
                slide: <WhatIsKeylogger/>
            },
            {
                header: "Rodzaje keylogger??w",
                text: "Og??lnie rzecz bior??c keyloggery dziel?? si?? na sprz??towe (hardware) i programowe (software).<br/><br/><strong>Keyloggery sprz??towe</strong> zazwyczaj wygl??dem przypominaj?? pami??ci przeno??ne USB (pendrive). Pod????czane s?? do jednostki poprzez interfejs USB, jednak mog?? wyst??powa?? jako urz??dzenie po??rednicz??ce pomi??dzy klawiatur?? a z????czem USB komputera. Ich zalet?? jest obszar dzia??ania - potrafi?? rejestrowa?? aktywno????, nawet je??li u??ytkownik nie uruchomi?? systemu operacyjnego i co do zasady potrafi????by?? ci????sze w detekcji dla antywirusa. W rzadkich przypadkach mog?? by?? r??wnie?? fizycznie zamontowane wewn??trz urz??dzenia.<br/><br/><strong>Keyloggery programowe</strong> s?? form?? oprogramowania dzia??aj??cego w tle. Dostaj?? si?? na urz??dzenie ko??cowe poprzez zainstalowanie programu. W zale??no??ci od celu keyloggera (miejsce pracy, kontrola rodzicielska, wirus), mo??e on maskowa?? swoj?? obecno????, utrudniaj??c tym samym detekcj??.",
                level: "basic",
                slide: <KeyloggerTypes/>
            },
            {
                header: "U??ywanie keyloggera w z??o??liwych celach",
                text: "Wraz z biegiem czasu, zacz??to nadu??ywa?? to narz??dzie, stosuj??c je do z??o??liwych cel??w. Obecnie, cz??stym zastosowaniem keylogger??w jest infekcja niczego niespodziewaj??cych si????ofiar, a nast??pnie <strong>wykradanie wra??liwych danych</strong>, takich jak dane bankowe, kart kredytowych czy loginy i has??a. <br/><br/>Do bardziej zaawansowanych funkcji keyloggera mo??e nale??e?? przechwytywanie ekranu zainfekowanej ofiary, poprzez tworzenie zrzut??w ekranu, lub przechwytywanie skopiowanych informacji.<br/><br/>Keyloggery stanowi?? wyj??tkowe zagro??enie dla przedsi??biorstw - wykradzione dane mog?? zapewni?? dost??p atakuj??cemu do najbardziej wra??liwych element??w przedsi??biorstwa lub wyjawi?? konfidencjonalne plany firmy.",
                level: "basic",
                slide: <KeylogggerMaliciousFlow/>
            },
            {
                header: "Sposoby infekcji keyloggerem",
                text: "Urz??dzenie mo??e zosta????zainfekowane keyloggerem na wiele sposob??w, kt??re r????ni?? si?? w zale??no??ci od rodzaju tego narz??dzia.<br/><br/>Keyloggery sprz??towe, jak sama nazwa wskazuje, zazwyczaj wymagaj?? fizycznej obecno??ci atakuj??cego przy sprz??cie ofiary, celem pod????czenia keyloggera do urz??dzenia. W zwi??zku z tym stanowi?? one mniejsze zagro??enie dla zwyk??ych u??ytkownik??w ni?? keyloggery programowe.<br/><br/>Infekcja keyloggerem programowym jest znacznie prostsza, przez co og??lnie rzecz bior??c stanowi on wi??ksze zagro??enie, szczeg??lnie je??li urz??dzenie nie jest chronione antywirusem. Najcz??stsz?? form?? instalacji tego rodzaju z??o??liwego oprogramowania jest pobranie i uruchomienie podejrzanego za????cznika z sieci lub z wiadomo??ci phishingowych.",
                level: "basic",
                slide: <KeyloggerInfectionMethods/>
            },
            {
                header: "Detekcja keyloggera",
                text: "Keyloggery typu hardware s?? zazwyczaj prostsze do rozpoznania. Wymaga to jedynie dok??adnego przeanalizowania sprz??tu, kt??rego u??ywamy, pod k??tem wyst??powania podejrzanych urz??dze??. <br/><br/>Keyloggery typu software, dzia??aj??c w tle, b??d?? pr??bowa??y maskowa?? swoj?? obecno????, podszywaj??c si?? pod inny program. W systemie operacyjnym Windows, dobrym pomys??em jest okresowe sprawdzanie proces??w w Mened??erze Zada??. Je??li napotkany zostanie proces o podejrzanej nazwie, dobrym pomys??em b??dzie wyszukanie informacji na temat tego procesu w przegl??darce internetowej.<br/><br/><strong>W tym interaktywnym ??wiczeniu uruchom mened??era zada?? i postaraj si?? zlokalizowa??, a nast??pnie klikn???? podejrzany proces.</strong>",
                level: "basic",
                interactive: true,
                slide: <KeyloggerDetection/>
            },
            {
                header: "Pozbycie si?? keyloggera",
                text: "Dla keylogger??w sprz??towych, proces usuni??cia polega zazwyczaj na odpi??ciu urz??dzenia, po wcze??niejszym jego zlokalizowaniu. Jednak w przypadku keylogger??w wbudowanych w urz??dzenie, nie b??d?? one mo??liwe do usuni??cia w tak ??atwy spos??b dla osoby niezaznajomionej z architektur?? i budow?? komputera.<br/><br/>Ca??kowite usuni??cie keylogger??w programowych z kolei jest trudnym wyzwaniem, nawet dla bardziej zaawansowanych u??ytkownik??w. Zazwyczaj wydawa?? by si?? mog??o, ??e usuni??cie procesu lub ewentualne odinstalowanie podejrzanego programu mo??e rozwi??za?? problem na dobre. W rzeczywisto??ci jednak zazwyczaj nie przyniesie to oczekiwanych efekt??w, gdy?? prawdopodobnie keylogger zdo??a?? si?? zreplikowa?? jako inny program, serwis lub proces, dlatego najbezpieczniejsz?? form?? pozbycia si?? keyloggera programowego b??dzie sformatowanie urz??dzenia do ustawie?? pocz??tkowych. ",
                level: "basic",
                slide: <KeyloggerRemoving/>
            },
            {
                header: "Metody ochrony przed keyloggerami",
                text: "Sposoby ochrony przed keyloggerami programowymi nie r????ni????si????zasadniczo od sposob??w ochrony przed podobnymi typami z??o??liwego oprogramowania. Przede wszystkim nale??y zwraca?? szczeg??ln?? uwag?? na za????czniki lub programy, kt??re si?? uruchamia. Ten prosty i skuteczny krok pozwoli na omini??cie nieprzyjemno??ci zwi??zanych z utrat?? danych bankowych czy danych uwierzytelniania do serwis??w webowych. Warto tak??e pami??ta?? o u??ywaniu antywirusa i stosowaniu odpowiedniej polityki hase?? - mened??era hase?? i kod??w 2FA, do uwierzytelniania si?? wra??liwymi danymi.<br/><br/>Nale??y r??wnie?? mie?? na uwadze pod????czone urz??dzenia do komputera - je??li do komputera pracowniczego podpi??te jest nieznane wcze??niej urz??dzenie, mo??e to wzbudzi?? w??tpliwo??ci i podejrzenia pod k??tem infekcji keyloggerem sprz??towym. ",
                level: "basic",
                slide: <KeyloggerProtectionMethods/>
            }
        ]
    },
    {
        course: "keylogger",
        name: "Keylogger",
        description: "Keylogger is a completely legal tool that records keyboard events of the operating system it is on, usually without the user's knowledge. The first keyloggers were created in the 1970s and were intended to be used by the secret service to capture information on typewriters in public places. As time passed, they began to abuse this tool, using it for malicious purposes. Today, a common use of keyloggers is to infect, and steal sensitive data such as bank details, credit cards, and logins and passwords.",
        language: "en",
        content: [
            {
                header: "What a keylogger is and how it works?",
                text: "A keylogger is a completely legal tool that records keyboard events of the operating system it is on, usually without the user's knowledge. The first keyloggers were created in the 1970s and were intended to be used by the secret service to capture information on typewriters in public places.<br/><br/>This tool can be used in workplaces to investigate employee activity, as a type of parental control or by fraudsters trying to steal a victim's sensitive data.<br/><br/>Their goal is usually to record a user's keyboard activity and capture this information to extract data such as credentials or credit card numbers.",
                level: "basic",
                slide: <WhatIsKeylogger/>
            },
            {
                header: "Keylogger types",
                text: "In general, keyloggers are divided into hardware and software. <br/><br/><strong>Hardware keyloggers</strong> usually look like USB flash drives. They are connected to the unit via USB interface, but can also act as an intermediary device between the keyboard and the USB connector of the computer. Their advantage is the area of operation - they can record activity even if the user has not started the operating system and, as a rule, they can be harder to detect for antivirus. In rare cases they can also be physically mounted inside the device. <br/><br/><strong>Software keyloggers</strong> are a form of software running in the background. They get onto the end device by installing a program. Depending on the purpose of the keylogger (workplace, parental control, virus), it may mask its presence, making its detection more difficult.",
                level: "basic",
                slide: <KeyloggerTypes/>
            },
            {
                header: "Using a keylogger for malicious purposes",
                text: "Over time, this tool began to be misused for malicious purposes. Today, a common use for keyloggers is to infect unsuspecting victims and then <strong>stealing sensitive data</strong>, such as bank details, credit card details or logins and passwords. <br/><br/>More advanced keylogger functions may include capturing the infected victim's screen, by creating screenshots, or capturing copied information. <br/><br/>Keyloggers pose a unique threat to businesses - stolen data can provide an attacker with access to the most sensitive parts of a company or reveal a company's secretive plans.",
                level: "basic",
                slide: <KeylogggerMaliciousFlow/>
            },
            {
                header: "Keylogger infection methods",
                text: "A device can be infected by a keylogger in a number of ways, which vary depending on the type of this tool. <br/><br/>Hardware keyloggers, as the name suggests, usually require the attacker's physical presence at the victim's hardware to connect the keylogger to the victim's device. This makes them less of a threat to ordinary users than software keyloggers. <br/><br/>Infection with a software keylogger is much simpler, making it generally a greater threat, especially if the device is not protected with an anti-virus. The most common way to install this type of malware is to download and run a suspicious attachment from the web or phishing emails.",
                level: "basic",
                slide: <KeyloggerInfectionMethods/>
            },
            {
                header: "Keylogger detection",
                text: "Hardware type keyloggers are usually simpler to identify. This only requires a thorough examination of the hardware you're using for suspicious devices. <br/><br/>Software keyloggers, running in the background, will try to mask their presence by impersonating another program. In the Windows operating system, it's a good idea to periodically check processes in the Task Manager. If a process with a suspicious name is encountered, it's a good idea to look up information about that process in your web browser. <br/><br/><strong>In this interactive exercise, launch the Task Manager and try to locate and then click on the suspicious process.</strong>",
                level: "basic",
                interactive: true,
                slide: <KeyloggerDetection/>
            },
            {
                header: "Getting rid of the keylogger",
                text: "For hardware keyloggers, the removal process usually involves unplugging the device, after first locating it. However, for keyloggers built into the device, they will not be so easy to remove for someone not familiar with the architecture and construction of the computer.<br/><br/>Completely removing software keyloggers, on the other hand, is a difficult challenge, even for more advanced users. Usually, it would seem that removing the process or possibly uninstalling the suspicious program can solve the problem for good. In reality, however, this will usually not work, as the keylogger has probably managed to replicate itself as another program, service or process, so the safest way to get rid of a software keylogger is to format the device to initial settings.",
                level: "basic",
                slide: <KeyloggerRemoving/>
            },
            {
                header: "Protection against keyloggers",
                text: "The ways to protect against software keyloggers are not fundamentally different from the ways to protect against similar types of malware. Above all, pay particular attention to attachments or programs that you run. This simple and effective step will allow you to avoid the unpleasantness associated with losing bank details or credentials to web services. <br/><br/>It is also worth remembering to use an antivirus and to apply an appropriate password policy - a password manager and 2FA codes, to authenticate with sensitive data. You should also be aware of the devices connected to your computer - if a previously unknown device is connected to your work computer, this may raise doubts and suspicions about a hardware keylogger infection.",
                level: "basic",
                slide: <KeyloggerProtectionMethods/>
            }
        ]
    },
    {
        course: "xss",
        name: "Atak XSS",
        description: "XSS jest atakiem skierowanym na klienta korzystaj??cego serwisu webowego, w przeciwie??stwie do np. SQL Injection, kt??rego celem jest aplikacja dzia??aj??ca po stronie serwera. Cross-site scripting opiera si?? g????wnie na wstrzykni??ciu do strony internetowej z??o??liwego skryptu, kt??ry, dla przyk??adu, mo??e odczyta?? ciasteczka u??ytkownika lub inne poufne informacje, kt??re przechowuje przegl??darka, wys??a?? je do atakuj??cego, aby ten -- u??ywaj??c zapisanych w ciasteczkach danych -- m??g?? zalogowa?? si?? na konto u??ytkownika, kt??ry nie??wiadomie uruchomi?? dany skrypt.",
        language: "pl",
        content: [
            {
                header: "Czym jest atak XSS?",
                text: "Cross-site scripting (XSS) opiera si?? na wstrzykni??ciu do strony internetowej z??o??liwego skryptu. Najcz????ciej mo??na go spotka?? w miejscach, w kt??rych u??ytkownicy maj?? mo??liwo???? dodania tre??ci do strony, na przyk??ad podczas dodawania komentarza.<br/><br/>Prosty skrypt mo??e ca??kowicie zmieni?? wygl??d i funkcjonalno???? strony internetowej. Przyk??adem jednego z typ??w ataku - Reflected XSS - mo??e by?? umieszczenie z??o??liwego skryptu w adresie URL strony internetowej, kt??ra renderuje parametry zapytania. Przegl??darka internetowa, kt??rej u??ywa ofiara, nie jest w stanie rozpozna?? intencji, kt??re stoj?? za umieszczonym skryptem, dlatego zawsze b??dzie stara??a si????go wykona??.<br/><br/>Ataki te cz??sto wyst??puj?? samodzielnie, wykradaj??c ciasteczka u??ytkownika celem zdobycia nieautoryzowanego dost??pu. Mog?? by?? te?? powi??zane mi??dzy innymi z keyloggerem, mailami lub stronami phishingowymi i nie tylko.",
                level: "basic",
                slide: <XssWhatIs/>
            },
            {
                header: "Typy atak??w XSS",
                text: "Pomimo faktu, i?? g????wnym celem XSS jest wstrzykni??cie z??o??liwego skryptu do przegl??darki, atak ten mo??e zosta?? wykonany wieloma sposobami.<br/><br/>Zdecydowana wi??kszo???? atak??w mo??e by?? podzielona na trzy g????wne kategorie: <strong>Reflected XSS</strong>, <strong>Stored XSS</strong>, <strong>DOM-based XSS</strong>. Mimo podzia??u, niekt??re, bardziej zaawansowane ataki XSS mog?? podlega?? pod wszystkie kategorie jednocze??nie.<br/><br/>Opr??cz metody wykonania, typy ataku okre??laj??, czy dany atak dzieje si?? po stronie klienta - przegl??darki internetowej - czy serwera, na kt??rym uruchomiony jest dany serwis. <br/><br/>Atak XSS po stronie klienta zazwyczaj jest prostszy w wykonaniu, gdy?? odnalezienie luki w oprogramowaniu zwi??zanej z tym typem ataku jest co do zasady ??atwiejsze po stronie klienta.  ",
                level: "basic",
                slide: <XssTypes/>
            },
            {
                header: "Scenariusz kursu",
                text: "Na slajdzie przedstawiony jest popularny serwis s??u????cy do wyszukiwania i interakcji ze znajomymi. Strona sk??ada si?? z trzech sekcji: znajomych, wyszukiwarki znajomych oraz profilu u??ytkownika.<br/><br/>Dane znajomego, wyszukiwane przez osob?? korzystaj??c?? z serwisu, s?? dodawane do parametru zapytania w adresie URL. Kolejno opr??cz zwr??cenia wyszukiwanych znajomych, w DOM strony internetowej renderowana jest tre???? zawarta w parametrach zapytania, tu?? pod 'Wynikami wyszukiwania'.<br/><br/><strong>W tym interaktywnym ??wiczeniu postaraj si?? wyszuka?? dowolnego znajomego, celem sprawdzenia funkcjonalno??ci strony. Zwr???? tak??e uwag?? na adres URL po wyszukaniu znajomego.</strong>",
                level: "basic",
                interactive: true,
                slide: <XssInteractiveIntroduction/>
            },
            {
                header: "Przyk??ad podatno??ci XSS",
                text: "Dane przes??ane do wyszukiwarki pojawiaj?? si?? zar??wno w zawarto??ci strony (wynikach wyszukiwania), jak i adresie URL. To pierwsza oznaka, ??e strona mo??e by?? podatna na atak XSS. Dodatkowo mo??liwo???? 'umieszczenia' danego elementu na stronie modyfikuj??c adres URL jest cech?? ataku Reflected XSS. <br/><br/>Kolejnym krokiem, kt??ry mo??na podj????, celem weryfikacji strony pod k??tem podatno??ci XSS, jest pr??ba umieszczenia w DOM dowolnego tagu HTML. Zgodnie z poznanymi funkcjonalno??ciami, wyszukiwany tekst umieszczany jest w 'Wynikach wyszukiwania'. Je??li oka??e si??, ??e wyszukanie tagu HTML zmodyfikuje zawarto???? strony, dodaj??c tym samym szukany tag do drzewa DOM, mo??na by?? niemal pewnym, ??e strona jest podatna na atak XSS.<br/><br/><strong>W tym interaktywnym ??wiczeniu przetestuj zachowanie strony, wpisuj??c, a nast??pnie wyszukuj??c dowolny tag HTML w pole wyszukiwarki.</strong>",
                level: "basic",
                interactive: true,
                slide: <XssInteractiveEnterHtml/>
            },
            {
                header: "Konsekwencje ataku XSS",
                text: "Mo??liwo???? wstrzykni??cia do zawarto??ci strony internetowej dowolnego tagu HTML oznacza, ??e nic nie stoi na przeszkodzie, aby na stronie umie??ci?? tak??e z??o??liwy kod JavaScript. Dodatkowo, maj??c na uwadze fakt, ??e z??o??liwy skrypt mo??e zosta?? uruchomiony przez dowolnego u??ytkownika, pod warunkiem wej??cia na adres URL zawieraj??cy skrypt, jest jasn?? oznak??, ??e strona jest podatna na atak Reflected XSS.<br/><br/>Niesie to ze sob?? bardzo powa??ne konsekwencje. Z??o??liwy skrypt mo??e wykona?? wszystko, na co pozwala j??zyk JavaScript. Przyk??adowo, atakuj??cy mo??e stworzy?? skrypt, kt??ry przesy??a tokeny sesyjne ofiary do atakuj??cego, umo??liwiaj??c mu na bezpo??redni dost??p do konta ofiary. Skrypt mo??e r??wnie?? chwilowo 'umie??ci??' w oknie ofiary keyloggera, wykorzystuj??c do tego metod?? <strong>addEventListener</strong>, kt??ry b??dzie nas??uchiwa?? aktywno???? klawiatury u??ytkownika.<br/><br/>Ofiara ataku XSS mo??e r??wnie?? nie??wiadomie pobra?? na swoje urz??dzenie wirusa lub zainfekowa?? swoj?? przegl??dark?? reklamami.",
                level: "basic",
                slide: <XssConsequences/>
            },
            {
                header: "Wstrzykni??cie z??o??liwego skryptu",
                text: "Maj??c na uwadze fakt, ??e prezentowana aplikacja jest r??wnie?? podatna na Reflected XSS, nic nie stoi na przeszkodzie, aby przekaza?? adres URL zawieraj??cy z??o??liwy skrypt innemu u??ytkownikowi tej aplikacji. Spowoduje to wykonanie z??o??liwego skryptu po jego stronie.<br/><br/>Jak do tej pory, przyj????o si??, ??e dowodem podatno??ci strony na atak XSS jest umieszczenie na stronie skryptu, kt??ry wywo??uje <strong>alert</strong>, wbudowan?? w przegl??dark?? metod?? wy??wietlaj??c?? okno komunikatu z podan?? tre??ci??.<br/><br/><strong>W tym interaktywnym ??wiczeniu postaraj si?? umie??ci?? w stronie skrypt, kt??ry wykona alert z dowoln?? wiadomo??ci??.</strong>",
                level: "advanced",
                interactive: true,
                slide: <XssInteractiveEnterScript/>
            },
            {
                header: "Ochrona przed podatno??ci?? XSS",
                text: "Odpowiedzialno???? zwi??zana z ochron?? strony przed podatno??ci?? XSS zazwyczaj powinna le??e?? po stronie zespo??u programist??w, tworz??cych dany serwis webowy. <br/><br/>Najwa??niejszymi zasadami, kt??re powinny by?? przestrzegane to <strong>walidacja i czyszczenie danych wprowadzonych przez u??ytkownika</strong>. Stosuj??c t?? prost?? regu????, mo??na praktycznie ca??kowicie wyeliminowa?? liczne zagro??enia zwi??zane z tym atakiem.<br/><br/>Dobrym rozwi??zaniem by??oby tak??e dodanie nag????wk??w do dokumentu HTML, kt??re nie pozwalaj?? na wykonywanie kodu JavaScript z zewn??trz. ",
                level: "basic",
                slide: <XssProtection/>
            },

        ]
    },
    {
        course: "xss",
        name: "XSS Attack",
        description: "XSS is an attack aimed at the client using a web service, in contrast to e.g. SQL Injection, which targets the server-side application. Cross-site scripting essentially involves injecting a malicious script into a web page that, for example, can read user cookies or other sensitive information stored in the browser, send it to an attacker, and the attacker -- using the cookie data -- can log into the account of the user who unknowingly ran the script.",
        language: "en",
        content: [
            {
                header: "What is an XSS attack?",
                text: "Cross-site scripting (XSS) is based on injecting a malicious script into a website. It is most often found in places where users are able to add content to a page, for example when adding a comment.<br/><br/>A simple script can completely change the appearance and functionality of a website. An example of one type of attack - Reflected XSS - can involve placing a malicious script in the URL of a web page that renders query parameters. The web browser the victim is using is unable to recognise the intent behind the placed script, so it will always try to execute it.<br/><br/>These attacks often occur alone, stealing user cookies to gain unauthorised access. They can also be linked to keyloggers, emails or phishing sites, among others, and more.",
                level: "basic",
                slide: <XssWhatIs/>
            },
            {
                header: "XSS attack types",
                text: "Despite the fact that the main goal of XSS is to inject a malicious script into the browser, this attack can be executed in many ways.<br/><br/>The vast majority of attacks can be divided into three main categories: <strong>Reflected XSS</strong>, <strong>Stored XSS</strong>, <strong>DOM-based XSS</strong>. Despite the division, some, more advanced XSS attacks may fall under all categories simultaneously.<br/><br/>In addition to the method of execution, the attack types determine whether the attack happens on the client side - the web browser - or the server that runs the service.<br/><br/>A client-side XSS attack is usually simpler to execute, as finding the vulnerability associated with this type of attack is generally easier on the client side.  ",
                level: "basic",
                slide: <XssTypes/>
            },
            {
                header: "Course scenario",
                text: "The slide shows a popular site for finding and interacting with friends. The site consists of three sections: friends, friend finder and user profile. <br/><br/>The friend data, searched for by the person using the service, is added to the query parameter of the URL. Subsequently, in addition to returning the searched friends, the content contained in the query parameters is rendered in the DOM of the web page, just below the 'Search Results'.<br/><br/><strong>In this interactive exercise, try to search for any friend to test the functionality of the page. Also note the URL after searching for a friend.</strong>",
                level: "basic",
                interactive: true,
                slide: <XssInteractiveIntroduction/>
            },
            {
                header: "XSS vulnerability example",
                text: "The data sent to the search engine appears in both the page content (search results) and the URL address. This is the first indication that a page may be vulnerable to the XSS attack. Additionally, the ability to 'place' an item on a page by modifying the URL is a feature of a Reflected XSS attack.<br/><br/>The next step that can be taken to verify a page for XSS vulnerability is to attempt to insert any HTML tag into the DOM. According to the learned functionality, the search text is placed in the 'Search results'. If you find that the search for an HTML tag modifies the page content, thereby adding the search tag to the DOM tree, you can be almost certain that the page is vulnerable to an XSS attack.<br/><br/><strong>In this interactive exercise, test the behavior of a page by typing and then searching for any HTML tag in the search box.</strong>",
                level: "basic",
                interactive: true,
                slide: <XssInteractiveEnterHtml/>
            },
            {
                header: "XSS attack consequences",
                text: "The ability to inject any HTML tag into the content of a web page means that there is nothing to prevent malicious JavaScript code from also being placed on the page. Additionally, bearing in mind that the malicious script can be run by any user, provided they enter the URL containing the script, it is a clear indication that the website is vulnerable to a Reflected XSS attack. <br/><br/>This carries very serious consequences. A malicious script can execute anything the JavaScript language allows. For example, an attacker could create a script that sends the victim's session tokens to the attacker, allowing the attacker to directly access the victim's account. The script can also temporarily 'place' a keylogger in the victim's window, using the <strong>addEventListener</strong> method to listen for user keyboard activity. <br/><br/>The victim of an XSS attack may also unknowingly download a virus to their device or infect their browser with adware.",
                level: "basic",
                slide: <XssConsequences/>
            },
            {
                header: "Injecting malicious script",
                text: "Given that the presented application is also vulnerable to Reflected XSS, there is nothing to prevent passing a URL containing a malicious script to another user of this application. This will trigger the execution of the malicious script on his side.<br/><br/>So far, it has been accepted that the proof of a website's vulnerability to an XSS attack is the inclusion of a script that triggers an alert, a built-in browser method that displays a message box with the given content. <br/><br/><strong>In this interactive exercise, try to place a script in a page that executes an alert with any message.</strong>",
                level: "advanced",
                interactive: true,
                slide: <XssInteractiveEnterScript/>
            },
            {
                header: "Protection against XSS attacks",
                text: "The responsibility for protecting a website from XSS vulnerabilities should usually lie with the development team creating the website. <br/><br/>The most important rules that should be followed are <strong>validation and cleaning of user input</strong>. By applying this simple rule, you can virtually eliminate many of the risks associated with this attack. <br/><br/>It would also be a good idea to add headers to the HTML document that do not allow external JavaScript code execution.",
                level: "basic",
                slide: <XssProtection/>
            },

        ]
    },
    {
        course: "dos",
        name: "DoS",
        description: "Celem Blokady us??ug (DoS) s?? zazwyczaj serwisy internetowe ma??ych i ??rednich przedsi??biorstw. Atak ten polega na wykonaniu tak wielu ????da?? do serwera w jednostkowym czasie, aby ten przesta?? odpowiada??. S?? relatywnie proste w wykonaniu i mog?? by?? powodem powa??nych strat dla sieci i system??w komputerowych. Wi??ksza cz?????? atak??w typu Flood odbywa si?? w oparciu o luki w protokole TCP, co prowadzi do takich atak??w jak TCP SYN Flood DoS.",
        language: "pl",
        content: [
            {
                header: "Jak dzia??aj?? serwery webowe?",
                text: "Serwery webowe to programy zainstalowane na komputerach, kt??re przechowuj?? i dostarczaj?? zawarto???? witryny internetowej. Przyk??adem zawarto??ci dostarczanej do klienta (przegl??darki) mo??e by?? kontent strony internetowej, gdy u??ytkownik j?? odwiedzi.  U??ywane s?? przez w??a??cicieli serwis??w webowych, celem zapewnienia mo??liwo??ci dost??pu zwyk??ym u??ytkownikom do serwisu.<br/><br/>Klient (przegl??darka) komunikuje si?? z serwerem webowym poprzez protok???? HTTP i otrzymuje od serwera odpowied??, najcz????ciej w postaci strony zakodowanej j??zyku HTML.<br/><br/>Serwery uruchomione s?? na komputerach (maszynach, instancjach serwerowych) kt??re posiadaj?? sw??j procesor czy pami???? RAM. Na maszynach, opr??cz serwera, cz??sto uruchomione s?? inne aplikacje potrzebne do prawid??owej pracy instancji, np. automatyczne tworzenie backup??w czy klient pocztowy.",
                level: "basic",
                slide: <HowWebServersWork/>
            },
            // {   //OPTIONAL
            //     header: "Reverse proxy na serwerze",
            //     text: "dos",
            //     level: "advanced"
            // },
            {
                header: "Czym jest atak DoS?",
                text: "Atak blokady us??ug - DoS (Denial of Service) w du??ym skr??cie polega na przekierowaniu na dany serwer webowy w danej jednostce czasu tak du??ego ruchu, ??e ten, pr??buj??c odpowiedzie?? na ka??de po????czenie, wykorzysta wszystkie swoje mo??liwe zasoby (procesor, pami????) co spowoduje w??skie gard??o dla innych akcji serwera, nierzadko powoduj??c jego ca??kowite, awaryjne wy????czenie.<br/><br/>Celami atak??w zazwyczaj s?? szeroko poj??te serwisy internetowe przedsi??biorstw: sklepy internetowe, instytucje finansowe czy popularne aplikacje.<br/><br/>Bardzo cz??sto, atakom towarzyszy propozycja dla ofiary, w kt??rej to atakuj??cy zaprzestanie nadsy??a?? fa??szywy ruch, w zamian za zap??at?? pieni????n??. Motywem atak??w mo??e by????tak??e dzia??alno???? konkurencyjna.",
                slide: <WhatIsDdos/>,
                level: "basic",
            },
            {
                header: "R????nice pomi??dzy atakiem DoS a DDoS",
                text: "Atak DoS (Denial of Service) i DDoS (Distributed Denial of Service) r????ni?? si??, jak sama nazwa wskazuje, rozdystrybuowaniem ??r??de?? ataku. <br/><br/>Atakiem DoS mo??na nazwa?? sytuacj??, w kt??rej z jednego urz??dzenia wysy??ane jest nienaturalnie wiele ????da?? w okre??lonej jednostce czasu. <br/><br/>Natomiast atak DDoS mia??by miejsce, kiedy to wiele r????nych maszyn symulowa??oby fa??szywy ruch, ka??da z innej lokalizacji. W takiej sytuacji zdecydowanie trudniej jest ustali??????r??d??o ataku, maj??c na uwadze, ??e ka??da maszyna posiada unikalny adres IP. Maszyny te s?? zazwyczaj pozyskiwane poprzez zainfekowanie z??o??liwym oprogramowaniem urz??dzenia ofiary. Sie?? zainfekowanych maszyn, kt??ra wykorzystywana jest w atach DDoS na wezwanie atakuj??cego nosi nazw?? <strong>botnet</strong>. <br/><br/>W dalszych slajdach, ataki DoS/DDoS b??d?? skr??towo opisywane DDoS.",
                level: "basic",
                slide: <DosVsDdos/>

            },
            {
                header: "Typy DDoS",
                text: "Typy atak??w DDoS r????ni????si????od miejsca, w kt??re s?? wymierzone, przyk??adowo atak warstwy aplikacyjnej dzia??a na innej warstwie modelu OSI ni?? atak TCP.<br/><br/>Pomimo faktu, i????ataki te na celu maj????obci????enie maszyny fa??szywym ruchem, mo??na je podzieli????na cztery kategorie, jednak ka??da z tych kategorii mo??e spowodowa?? jedn?? z dw??ch rzeczy: przeci????enie i restart serwera lub zape??nienie sieci fa??szywym ruchem.<br/><br/> Atakuj??cy mo??e pr??bowa?? stosowa?? jedn????lub wi??cej kategorii, celem uzyskania docelowego efektu. Dodatkowe zagro??enie stanowi ????czenie kategorii atak??w. Je??li maszyna zastosuje odpowiednie polityki bezpiecze??stwa, niweluj??c tym samym pr??b?? DDoS na warstwie aplikacyjnej, atakuj??cy mo??e to zauwa??y?? i zmieni?? kategori?? ataku, tym razem kieruj??c ruch na przepustowo???? sieci.",
                slide: <DdosTypes/>,
                level: "basic"
            },
            {
                header: "Identyfikacja ataku DDoS",
                text: "Ju?? po chwili, w kt??rej zostanie rozpocz??ty atak DDoS mo??na zauwa??y?? jego efekty. Je??li atak skierowany jest na serwer webowy, b??dzie probowa?? on odpowiada?? na ka??de nadchodz??ce ????danie, tym samym znacz??co zwi??kszy si?? czas potrzebny na odpowied??. W zale??no??ci od nasilenia ataku i zasob??w serwera ten mo??e przesta?? odpowiada?? na kolejne nadchodz??ce ????dania, gdy?? b??dzie zbyt zaj??ty odpowiadaniem na ????dania, kt??re nadesz??y wcze??niej. W najgorszym wypadku maszyna mo??e si?? wy????czy??, ze wzgl??du na zbyt du??e obci????enie przez okre??lony czas.<br/><br/>Metryki instancji serwerowej, takie jak wykorzystanie procesora lub pami??ci RAM b??d?? na szczytowych poziomach do momentu zako??czenia ataku, lub zablokowania podejrzanych adres??w IP w zaporze ogniowej.<br/><br/>W przypadku ataku na warstwie aplikacyjnej dodatkow?? wskaz??wk?? sugeruj??c?? atak mog?? by?? powi??zania pomi??dzy przychodz??cymi ????daniami, takimi jak wsp??lny nag????wek User-Agent czy geolokalizacja.",
                level: "basic"
            },
            {  
                header: "Wykorzystywanie AI w przeciwdzia??aniu atakom DDoS",
                text: "W dzisiejszych czasach sztuczna inteligencja znajduje coraz nowsze dziedziny, w kt??rych mo??e by?? wykorzystywana. Nowoczesne rozwi??zania w zaporach ogniowych, specjalnie utworzone do przeciwdzia??ania atakom DDoS wykorzystuj?? mechanizmy sztucznej inteligencji i uczenia maszynowego.<br/><br/>Analizuj??c ruch wchodz??cy na stron??, tworzony jest pewien model, do kt??rego por??wnywane s?? ewentualne p????niejsze statystki ruchu. Je??li w danej jednostce czasu po????czenia sieciowe przekraczaj?? przyj??te normy, ruch mo??e zosta?? zaklasyfikowany jako atak DDoS, co spowoduje wzmocnienie mechanizm??w zapory ogniowej lub zwi??kszy wra??liwo???? mechanizmu CAPTCHA na pewien okres czasu, do momentu przywr??cenia ruchu do zwyczajnych warunk??w.",
                slide: <DdosAi/>,
                level: "advanced"
            },
            // optional: autoscaling groups, use of cloud infrastructure against ddos
            {
                header: "Ochrona przed atakami DDoS",
                text: "Przeciwdzia??anie atakom DDoS powinno mie?? miejsce g????wnie w ustawieniach zapory infrastruktury sieciowej. Zazwyczaj to w??a??nie w tym wra??liwym miejscu nast??puje pierwszy etap procesowania ????da?? przychodz??cych do danego systemu.<br/><br/>Wykorzystywanie odpowiednich narz??dzi pozwalaj??cych na analiz?? i filtrowanie ruchu przychodz??cego to podstawa, kt??ra powinna mie?? miejsce w ka??dym serwisie zmagaj??cym si????z atakami typu DDoS.<br/><br/>Posiadanie infrastruktury teleinformatycznej w chmurze daje zupe??nie nowe mo??liwo??ci walki z tego typu atakami. Pierwszym sposobem mo??e by?? wykorzystanie <strong>systemu r??wnowa??enia obci????enia</strong>, kt??ry mo??e przekierowywa?? ????dania na instancje serwerowe (kt??rych mo??e by????kilka) wed??ug zu??ycia ich zasob??w. Dodaj??c do tego grup?? automatycznie skaluj??c?? liczb?? maszyn w zale??no??ci od ruchu, mo??na by????pewnym, ??e system wytrzyma praktycznie wi??kszo???? pr??b ataku.",
                level: "basic",
                slide: <DdosProtection/>
            }
        ]
    },
    {
        course: "dos",
        name: "DoS",
        description: "The targets of a Blocking of Services (DoS) are typically small to medium-sized business websites. This attack involves making so many requests to a server in a unit time that the server stops responding. They are relatively simple to execute and can cause serious damage to networks and computer systems. The majority of Flood attacks are based on vulnerabilities in the TCP protocol, leading to attacks such as TCP SYN Flood DoS.",
        language: "en",
        content: [
            {
                header: "How do web servers work?",
                text: "Web servers are programs installed on computers that store and deliver website content. An example of content delivered to a client (browser) could be the content of a website when a user visits it.  They are used by website owners to provide access to a website for ordinary users.<br/><br/>The client (browser) communicates with the web server via the HTTP protocol and receives a response from the server, usually in the form of a page encoded in HTML.<br/><br/>Servers are run on computers (machines, server instances) that have their own processor or RAM. On machines, apart from the server, there are often other applications running which are necessary for the instance to work properly, e.g. automatic creation of backups or a mail client.",
                level: "basic",
                slide: <HowWebServersWork/>
            },
            // {   //OPTIONAL
            //     header: "Reverse proxy na serwerze",
            //     text: "dos",
            //     level: "advanced"
            // },
            {
                header: "What is a DoS attack?",
                text: "DoS (Denial of Service) attack, in a nutshell, consists in redirecting so much traffic to a given web server in a given unit of time, that the server, trying to answer every connection, will use all possible resources (processor, memory), which will cause a bottleneck for other actions of the server, often causing its complete, emergency shutdown.<br/><br/>The targets of attacks are usually widely understood corporate websites: online shops, financial institutions or popular applications.<br/><br/>Very often, attacks are accompanied by a proposal to the victim, in which the attacker will stop sending false traffic in exchange for a monetary payment. Attacks can also be motivated by competitive activity.",
                slide: <WhatIsDdos/>,
                level: "basic",
            },
            {
                header: "Differences between DoS and DDoS attacks",
                text: "DoS (Denial of Service) and DDoS (Distributed Denial of Service) attacks differ, as the name suggests, in the distribution of attack sources.<br/><br/>A DoS attack can be called a situation where an unnaturally large number of requests are sent from a single device in a specific unit of time.<br/><br/>A DDoS attack, on the other hand, would occur when many different machines simulate false traffic, each from a different location. In this situation, it is far more difficult to determine the source of the attack, given that each machine has a unique IP address. These machines are usually acquired by infecting the victim's device with malware. The network of infected machines that is used in DDoS attacks at the behest of the attacker is called a <strong>botnet</strong>.<br/><br/>In the following slides, DoS/DDoS attacks will be briefly described as DDoS.",
                level: "basic",
                slide: <DosVsDdos/>

            },
            {
                header: "DDoS types",
                text: "The types of DDoS attacks vary depending on where they are targeted, for example an application layer attack operates on a different layer of the OSI model than a TCP attack.<br/><br/>Despite the fact that these attacks aim to load a machine with false traffic, they can be divided into four categories, but each of these categories can do one of two things: overload and reboot the server or fill the network with false traffic.<br/><br/>An attacker may attempt to use one or more of the categories to achieve the targeted effect. Combining attack categories is an additional threat. If a machine applies the appropriate security policies, thereby nullifying the DDoS attempt at the application layer, an attacker may notice this and change the attack category, this time targeting network bandwidth.",
                slide: <DdosTypes/>,
                level: "basic"
            },
            {
                header: "DDoS attack identification",
                text: "The very moment a DDoS attack is launched, its effects can be seen. If an attack is directed at a web server, it will attempt to respond to every incoming request, thus significantly increasing the time taken to respond. Depending on the severity of the attack and the server's resources, the server may stop responding to further incoming requests because it will be too busy responding to requests that arrived earlier. In the worst case, the machine may shut down due to being too busy for a certain amount of time.<br/><br/>Server instance metrics such as CPU or RAM usage will be at peak levels until the attack ends, or suspicious IP addresses are blocked in the firewall.<br/><br/>In the case of an attack at the application layer, additional clues suggesting an attack could be links between incoming requests, such as a common User-Agent header or geolocation.",
                level: "basic"
            },
            {  
                header: "Use of AI in countering DDoS attacks",
                text: "Nowadays, artificial intelligence is finding newer and newer areas in which it can be used. Modern firewall solutions specially created to counter DDoS attacks use artificial intelligence and machine learning mechanisms.<br/><br/>By analysing the traffic entering the website, a certain model is created, to which possible subsequent traffic statistics are compared. If, in a given unit of time, network connections exceed accepted norms, the traffic may be classified as a DDoS attack, which will cause firewall mechanisms to be strengthened or CAPTCHA mechanisms to become more sensitive for a certain period of time, until the traffic is restored to normal conditions.",
                slide: <DdosAi/>,
                level: "advanced"
            },
            // optional: autoscaling groups, use of cloud infrastructure against ddos
            {
                header: "Protection against DDoS attacks",
                text: "Countering DDoS attacks should mainly take place in the firewall settings of the network infrastructure. It is usually at this vulnerable point that the first stage of processing requests coming into a given system occurs.<br/><br/>The use of appropriate tools allowing for the analysis and filtering of incoming traffic is a cornerstone that should take place in any service struggling with DDoS attacks.<br/><br/>Having your ICT infrastructure in the cloud gives you a whole new way to fight these types of attacks. The first way may be to use a load balancing system that can redirect requests to server instances (of which there may be several) according to their resource consumption. By adding a group that automatically scales the number of machines according to traffic, you can be sure that the system can withstand virtually most attack attempts.",
                level: "basic",
                slide: <DdosProtection/>
            }
        ]
    }
    ]

export default content