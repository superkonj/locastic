# Zadaci za testiranje - Frontend Developer

Test se sastoji od dva obvezna zadatka te bonus zadatka i pitanja za AngularJS ili React.
Prvi zadatak je izrada responsive HTML/CSS predloška prema danom dizajnu, dok drugi zadatak testira izradu client side validacijske forme.
Bonus zadatak i pitanje testiraju Vaše znanje AngularJS-a ili Reacta. Njihovo rješavanje može Vam biti prednost u nastavku natječaja.

Prilikom izrade zadataka obavezno je koristenje GIT-a, te redovito commitanje i pushanje na repozitorij tijekom rada.

Posebno će se cijeniti rješenja koja su optimizirana, iz kojih se vidi da je kandidat pokazao razumijevanje problema te sklonost prema efikasnom i uredno napisanom kodu.

**ROK ZA RJEŠAVANJE ZADATAKA** 10 dana od primitka zadataka.

Sretno i pametno!


## 1. Zadatak

Potrebno je napraviti responsive HTML/CSS/JS predložak prema dizajnu koji možete pogeldat na donjim linkovima:

* Desktop:  https://invis.io/CJ814A99E
* Tablet:  https://invis.io/VY814BNHJ
* Mobile:  https://invis.io/8K814CHDJ

Zadnjih par godina za dizajn mobilnih aplikacija i stranica koristimo Sketch (w ww.sketchapp.com ), ali on je dostupan samo za Apple računala.
Instalirajte trial verziju i skinite izvorni file dizajna u nastavku:

* https://drive.google.com/open?id=0B-CgIOwMlmbAMDVVZU1NYmJyTUk

Ukoliko nemate Mac, sve detalje (dimenzije, slike i slicno) možete provjeriti na:

* http://slicestic.com/frontend-test/

Ako još uvijek ne možete otvoriti izvorne materijale, sve fileove potrebne za slice imate ovdje:

* https://drive.google.com/drive/folders/0B-CgIOwMlmbARjFjQXlzS3FBSGc?usp=sharing

## Zahtjevi

### Obavezno
* Izraditi novi repozitorij za zadatak, te redovito commitati i pushati napredak.
* Implementirani HTML/CSS/JS predložak koji se mora se ispravno prikazivati u IE11+, Firefox, Chrome, Opera, Safari.
* Prilagoditi prijelome za Deskop: 1024px, Tablet: 768px, Mobile: 640px po potrebi.
* Pripaziti na prikaz na Retina zaslonima. **HINT** Koristiti svg ili css za sve graficke elemente.
* Čist i pregledan markup, konzistentno imenovanje klasa.
* Modularno korištenje CSS-a pomoću BEM metodologije i OOCSS pristupa **HINT** http://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use/
* Korištenje jednog od prekompajlera za CSS. (SASS, LESS, STYLUS, SUGARSS)
* CSS i JS fileovi se MORAJU kompajlirati iz source foldera u dist folder korištenjem nekog task runnera (Gulp, Grunt, Webpack, NPM skripte...)
* Korištenje sourcemap-a u development enviromentu.
* Korištenje autoprefiksera i normalize.css-a kao npm dependencia.
* Svi paketi se moraju instalirati preko npm-a i  moraju imati mogućnost updejta bez utjecaja na vaš kod.

### Zabranjeno
* Korištenje CSS frameworka (Bootstrap, Foundation...)
* Korištenje plugina za implementaciju glavnog izbornika.
* Nesting CSS-a viŠe od dvije razine. (osim u slučajevima kada je to neizbježno, primjerice stiliziranje glavne navigacije).

### Dozvoljeno:
* Korištenje jQuery librarya.
* Korištenje plugina za implementaciju slidera.

### Dodatni bodovi:
* Korištenje POSTCSS-a.
* Korištenje NPM skripti za kompajliranje CSS-a i JS-a.
* Korištenje Browserify-a ili Webpacka za kompajliranje JS-a.
* CSS-a i JS-a Linting (Styelint i Standard.js).
* Flex-box grid.
* Korištenje .editorconfiga

### Napomene
  Pozadina zaglavlja, podnožja stranice te prvog bloka u kojem se nalazi video proteže se po punoj širini prozora internetskog preglednika.
  U dostavljenom dizajnu, dizajner je koristio Roboto font.
  Font je dostupan preko Google Fonts servisa pa ga možete i putem njega implementirati.


## 2. Zadatak

Duplicirajte repozitorij iz prvog zadatka te implementirajte sljedeće:
* Bez korištenja gotovih komponenti napraviti client side-validaciju forme, te ako je forma validna, AJAX POST metodom je submitajte na endpoint w ww.locastic.com/api/v1/fe-dev
* Očekujemo da rješenje bude u skladu s OOP principima.
* Dodatno se boduje error handling i implementacija AJAX request bez 3rd party libraryja, ali nije obavezno.
* www.slicestic.com/api/v1/fe-dev . Ne postoji I vratiti ce vam 404, bitno je samo pokazati kako šaljete upi

## BONUS ZADACI

  Bonus zadaci nisu obavezni za riješiti, ali kandidati koji ih uspješno riješe imat će prednost u daljnjem postupku natječaja.


## 3. Zadatak

Potrebno je napraviti single-page aplikaciju koristeći Bootstrap i AngularJS ili React.
Aplikacija je jednostavni imenik koji omogućava korisniku unos podataka o kontaktima. Svaki kontakt ima sljedeće podatke

* `unikatni ID (integer, auto increment)`
* `ime`
* `prezime`
* `adresa`
* `poštanski broj`
* `grad`
* `država`
* `proizvoljan broj telefonskih brojeva`
* `email adresu`

Sva polja su obavezna i moraju se validirati prije pohrane. Storage birajte sami (nema komunikacije sa serverskom stranom). Aplikacija mora moći izlistati sve kontakte (s paginacijom), kreirati, izmijeniti, obrisati i prikazati svaki pojedini kontakt u svom "pageu" (viewu, zasebna ruta za svaki akciju).

Potrebna je mogućnost pretraživanje kontakata po imenu, prezimenu, broju telefona ili e-mail adresi (po nekom ili svim poljima).

Aplikacija nudi korisniku mogućnost merganja kontakata ako oni imaju isto ime i isto prezime. Merge akcija se pokreće na klik gumba. Svaki potencijalni merge mora odobriti korisnik aplikacije. Ako kontakti koji se mergaju imaju popunjene podatke za npr. adresu, onda korisnik mora odabrat koju adresu želi prihvatiti. Ako jedan kontakt ima neki podatak, a ostali u mergu nemaju, onda korisnik ne treba potvrditi merge tog podatka.

Aplikacija mora imati i mogućnost navigacije sa back/forward mogućnostima browsera te mogućnost “shareanja” ili "bookmarkanja" linkova – npr., ako korisnik ode na link .../user/45/edit, mora mu se pokazati forma za uređivanje korisnika sa ID-om 45.


## 4. Zadatak - Security u SPA aplikacijama

Razvijate single-page web aplikaciju u AngularJS-u ili nekom drugom JS frameworku. Komunikacija sa serverskom podrškom je pozadinska (AJAX). Da bi korisnik koristio vašu aplikaciju, mora se izvršiti uspješna autentifikacija nakon čega API vraća autorizacijski token (ograničene vremenske valjanosti) koji se koristi za sve ostale API pozive.

1. Kako bi pohranili autorizacijski token u vašoj aplikaciji?
3. Kako biste osigurali sigurnu vezu prema serveru u slučaju da promet ne ide preko HTTPS protokola? Što biste promijenili u slučaju da koristite HTTPS vezu?
4. Kako bi invalidirali token u slučaju isteka njegove valjanosti, a kako u slučaju odjave korisnika (logout)?
5. Koje alternative predlažete za osiguravanje autoriziranog pristupa API-ju osim autorizacijskim tokenom?
6. Prokomentirajte potpisivanje API poziva autorizacijskim tokenom na sigurnoj i nesigurnoj vezi (odlučite se za jedan algoritam i tehniku "digitalnog potpisivanja" zahtjeva).
