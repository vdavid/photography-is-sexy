import React from "react";

export default [
    {
        title: 'Csoportkép',
        body: (
            <div>
                <img src={require('../../images/challenges/week01-group.jpg')}/>
                <p>A csoportképek az ember legemlékezetesebb mérföldköveit örökítik meg: családi eseményeket, versenyeket, diplomaosztókat. Mégis, gyakran ezek a fényképalbumok legunalmasabb képei. Néhány egyszerű tippel te is felejthetetlenné varázsolhatod a csoportképeidet.</p>
                <ol>
                    <li>
                        <strong>Válassz fényképezési módot</strong><br />Az emberek gyakran spontán találják ki, hogy csoportképet szeretnének, ezért nincs mindig lehetőséged "M" módban manuálisan beállítani a képet. A "P" beállítás a legtöbb esetben elég rugalmasságot nyújt.
                    </li>
                    <li>
                        <strong>Használj állványt</strong><br />Ha nincs nálad rendes fotós állvány, használj egy pulcsit vagy párnát, ezek meglepően pontos beállítási lehetőséget adnak.
                    </li>
                    <li>
                        <strong>Mosolyogtasd meg a szereplőket</strong><br />A természetes jókedv mindig jobban néz ki, mint a felszólításra mosolygás. Gondoskodj néhány mókás kiegészítőről, amelyek segítenek mindenkinek ellazulni, pl. vicces kalap, álbajusz, repülő uborka stb. A komoly fotók mellett csinálsz néhány extrémebb képet is, ahol a szereplők hülye fejeket vágnak vagy felugrálnak a levegőbe.
                    </li>
                    <li>
                        <strong>Állítsd be az ISO értéket</strong><br />Ha tudod, állítsd mindig 80-ra. De ha zárt helyiségben, rosszabb fényviszonyok között készül a csoportkép, magasabb ISO értékre lehet szükség. Az emberek nehezen maradnak nyugton, hát még sok ember! 1/20 másodperc alatti exponálási idő esetén szinte biztosan el fog mosódni valakinek az arca.
                    </li>
                    <li>
                        <strong>Beállítás</strong><br />Ha van olyan biztonságos pont, ahová fölállhatsz (pl. állólétra, mászóka, teherautó-plató), új és érdekes szögből fényképezheted a csoportot, különösen ha nagyobb a létszám, mivel így több arcot és kevesebb testet kell befognod. Ráadásként ha a csoport tagjai mind fölfelé néznek, senkinek nem lesz tokája a képen.
                    </li>
                    <li>
                        <strong>Az események sűrűjében</strong><br />Alkalomadtán – és különösen a családi fotók esetében – a fényképésznek is a képen a helye. A fényképezőgépeden lévő önkioldóval akár 30 másodperced is van odaérni a képre, és akár 10 képet is készít utána, 2 másodpercenként. Hagyj magadnak elég időt odaérni a képre, és döntsd el előre, hol állsz majd te a csoportban, hogy ne kelljen pánikszerűen beállnod az első kínálkozó helyre.
                    </li>
                    <li>
                        <strong>Csinálj sokat</strong><br />A túl sok fénykép csak utólag baj, amikor válogatni kell közülük. Viszont nagyobb eséllyel lesz köztük olyan, amin mindenki a kamerába néz és nem mozdul be senki.
                    </li>
                    <li>
                        <strong>Utómunka</strong><br />Ha az emelkedett hangulat hevében nem sikerült jól beállítani a fehéregyensúlyt, ezt kis minőségromlás árán meg tudod tenni utólag, pl. a
                        <a href="http://www.faststone.org/FSViewerDownload.htm">FastStone Image Viewer</a> segítségével. Ha teljesen használhatatlan lett a fénykép és már úgysem tudsz neki ártani, tegyél rá valami teljesen gyökér szűrőt (pl. a
                        <a href="https://picasa.google.com/">Google Picasa</a> programmal), változtasd a fényképet ceruzarajzzá vagy invertáld a színeket. :)
                    </li>
                </ol>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Hosszú exponálási idő',
        body: (
            <div>
                <img src={require('../../images/challenges/week02-long-exposure.jpg')} title="Ezt Törökországban fotóztam :)"/>
                <p>Az egyik legmenőbb éjszakai képfajta a hosszú záridővel készített fénykép. Ennek sajátossága, hogy a mozgó fények szándékosan elmosódottak lesznek, és egy zseblámpával kukit lehet rajzolni az embereknek.</p>
                <p>No de hogyan is kell ilyen képeket készíteni?</p>

                <ol>
                    <li>
                        <strong>Fényképezési mód</strong><br />Az exponálási idő kézi beállításához a gépet - mint tudod :) - "Tv" vagy "M" módba kell tenni. A "Tv" egyszerűbben használható, és jelen esetben ugyanolyan jó, mint az "M'.
                    </li>
                    <li>
                        <strong>Állvány</strong><br />Hogy az álló dolgok élesek legyenek, mindenképp használj állványt vagy legalább egy pulcsit, vagy valami helyet, ahová stabilan le tudod rakni a gépet.
                    </li>
                    <li>
                        <strong>Önkioldó</strong><br />Bármilyen óvatosan is nyomod le az exponálógombot, a gép egy picit remegni fog, ettől pedig elmosódik a kép. Emiatt érdemes az önkioldót használni, és 2 másodpercre állítani. Vagy ha te akarsz bohóckodni a képen, akkor többre, hogy odaérj :)
                    </li>
                </ol>

                <p>További olvasmányok:</p>

                <ul>
                    <li>Itt például vonatokat fotóz a csávó:
                        <a href="http://www.vonatmagazin.hu/2009/01/fotozas-hosszu-zaridovel/" target="_blank">http://www.vonatmagazin.hu/2009/01/fotozas-hosszu-zaridovel/</a>
                    </li>
                    <li>Ez angolul van, de itt is van pár jó ötlet:
                        <a href="http://expertphotography.com/light-graffiti/" target="_blank">http://expertphotography.com/light-graffiti/</a>
                    </li>
                    <li>Pár nagyon profi kép, ez is angolul:
                        <a href="http://www.photochallenge.org/2015-challenge-week-47-long-exposure-night-photography/" target="_blank">http://www.photochallenge.org/2015-challenge-week-47-long-exposure-night-photography/</a>
                    </li>
                </ul>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Food',
        body: (
            <div>
                <img src={require('../../images/challenges/week03-food.jpg')} title="Food"/>
            </div>
        )
    }, {
        title: 'Állatok',
        body: (
            <div>
                <img src={require('../../images/challenges/week04-lion.jpg')} title="A képen látható, egyébként Iránban fotózott oroszlán valójában életben van :)"/>

                <p>A feladatot értelmezd, ahogyan szeretnéd: fotózhatsz hangyáktól elefántfókákig bármit. :)</p>

                <p>Ha Csipit fotóznád, olvasd el a
                    <a href="http://www.haziallat.hu/allati-trendi/technika/allatok-fotozasa-trukkok/1897/" target="_blank">haziallat.hu</a> cikkét.
                </p>

                <p>Ha az állatkertbe mennél, ezt az
                    <a href="http://www.origo.hu/digifoto/20080426-fotozas-az-allatkertben.html" target="_blank">Origo-s cikk</a>et ajánlom.
                </p>

                <p>A témaválasztásnál gondolj arra, hogy tél van: lehet, hogy ilyenkor szebb képet tudsz lőni beltérben, mint kinn, vagy válassz olyan napot, amikor szép idő van!</p>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Éjszakai',
        body: (
            <div>
                <img src={require('../../images/challenges/week05-night.jpg')} title="Róma nemrég"/>

                <p>Csak 3 hete volt a hosszú exponálási idős feladat, de még mindig tél van, és ilyenkor érdemes gyakorolni a sötétben fotózást, mert fény úgysincs sok.</p>
                <p>Úgyhogy ezen a héten próbálgasd ki, mit tud az éjszakai fényképezés a hosszú exponálási időn kívül.</p>
                <p>Itt egy jó kis
                    <a href="http://vna.hu/wp-content/uploads/2010/10/9046-Tippek-%C3%A9s-tr%C3%BCkk%C3%B6k-az-%C3%A9jszakai-fot%C3%B3z%C3%A1shoz.pdf" target="_blank">dokumentáció</a>,
                    ami egyébként a legjobb éjszakai fotós állványok egyikeként említi a
                    <a href="http://www.thinkgeek.co../../images/products/additional/large/gorilla_pod_slr1.jpg" target="_blank">gorilla pod</a>ot is, amit karácsonyra kaptál :)
                </p>

                <p>De fotózhatsz éjszakai utcákat, embereket, eget, földet, amit akarsz, csak éjszaka legyen.</p>

                <p>További random tipp:
                    <a href="http://fotozz.hu/cikket_megmutat?cikk_ID=148" target="_blank">Füstfotózás</a>.</p>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Portré',
        body: (
            <div>
                <img src={require('../../images/challenges/week06-portrait.jpg')} title="Color run"/>

                <p>Biztos unalmas, hogy nem engem olvasol, hanem cikkeket, amiket linkelek, de egyszerűen olyan jó fotós cikkek
                    vannak, hogy hülyeség lenne nekem leírnom mindent rosszabbul. :) Szóval bocsánat, de megint egy cikkre,
                    mégpedig a
                    <a href="http://www.fotozz-alkoss.inf../../images/modulok/oktatas/gyak_portrek.html" target="_blank">fotozz-alkoss.info cikkére</a>
                    hivatkozom, mert nagyon jól érthető, egyszerű tippeket ad.</p>

                <p>Ha viszont bővebben érdekel a téma, a
                    <a href="http://blog.fotosarok.hu/2012/05/101-portrefoto-tipp-2-resz/">fotosarok.hu blogon</a> 101 db igazán részletesen kidolgozott, érthető, de profi tippet találsz.
                </p>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Csendélet',
        body: (
            <div>
                <img src={require('../../images/challenges/week07-power.jpg')} title="Táp. A fotó a Vaterára készült. :)"/>
                <p>9 tipp Dávidtól :)</p>
                <ol>
                    <li>
                        <strong>Áttekintés</strong><br />Bár sokan azt gondolják, igényes csendéletet csak műteremben lehet fotózni, ez egyáltalán nem igaz: egy asztallal, egy könnyen elkészíthető fehér háttérrel és 1-2 lámpával otthon is nagyon szép képeket lehet lőni.<br />
                        A csendélet talán valamivel több kreativitást igényel, mint a tájkép- vagy a portréfotózás, hiszen ezeknél már adott az érdekes téma és csak jó beállításokkal le kell kapnunk. Csendélet esetén viszont a téma összeállítása is a művész feladata, és az is, hogy a témát izgalmas, egyedi módon kapja el.
                    </li>
                    <li>
                        <strong>Válassz témát</strong><br />Nézz körbe a lakásban! Keress valami egyszerűt, de érdekeset. Fotózhatsz standard témákat is, pl. gyümölcsöt vagy virágot, de kereshetsz akár az utcán is valami furcsa szemetet, amiben senki más nem látott fantáziát.<br />
                        Tipp: Elsőre kerüld a tükröző felületeket (üveg, fém), mert ezeket nagyon nehéz jól megvilágítani.
                    </li>
                    <li>
                        <strong>Fények</strong><br />Használj bármilyen lámpákat, amiket találsz a lakásban. Próbálj ki több szöget, magasságot, direkt és szórt fényt. Ablak mellett használhatod a napfényt is, mint alapvilágítást. Ne feledd, hogy csendélet esetén teljes kontrollod van a fények felett: kísérletezz bátran, amíg pont olyan nem lesz, mint amit szeretnél!
                    </li>
                    <li>
                        <strong>Állvány</strong><br />Mindenképp használj állványt, így megengedheted magadnak a szokásosnál hosszabb exponálási időt, így minden esetben tudsz 80-as ISO-val fényképezni.<br />
                        Viszont azt se felejtsd el, hogy az állványt te mozgatod! Ne mindent ugyanolyan szögből fotózz, játssz vele bátran! Próbálj egy képet a tárgy szintjéről, de magasról is, esetleg lentről stb. De közben vigyázz, nehogy a kamera árnyéka rávetüljön a fotótémádra!
                    </li>
                    <li>
                        <strong>Háttér</strong><br />A háttér nagyon sokat számít. Répához pl. használhatsz színes narancssárga papírokat háttérnek. Írógéphez régi újságpapírokat. Vagy egyszerű, fehér hátteret kb. bármihez.
                    </li>
                    <li><strong>Kompozíció</strong><br />Használd a
                        <a href="http://fotozasblog.hu/kompozicios-technikak-a-harmadolas-szabaly/">harmadolási szabályt</a>. Figyeld meg, hogy hova néz a szemed automatikusan, amikor a képedet nézed. Próbáld úgy beállítani, hogy a fotótémád éles legyen, a háttér élességét pedig úgy próbáld beállítani, ahogyan szeretnéd: ha szerinted fontos, legyen éles. Ha nem, akkor legyen homályos.
                    </li>
                    <li>
                        <strong>Ne siess</strong><br />Az a jó a csendéletben, hogy bármennyi időd van beállítani a képet. Az avokádó vagy plüssmackó nem fog elszaladni, az biztos, és ha mesterséges fényeket használsz, azok sem fognak változni, akár napok alatt sem.
                    </li>
                    <li>
                        <strong>Inspirálódj másoktól</strong><br />Ha nem tudod, hogyan kellene beállítanod vagy bevilágítanod a képet, ne félj rákeresni pl.
                        <a href="https://www.google.hu/search?q=still+life+photo">csendélet fotókra</a> és körbenézni, hogyan csinálják a tapasztaltabbak :)
                    </li>
                    <li><strong>Kezdd el</strong><br />Hajrá! :)</li>
                </ol>

                <p>Forrás (angolul):
                    <a href="http://photography.tutsplus.com/tutorials/10-tips-to-get-started-with-still-life-photography--photo-8278" target="_blank">http://photography.tutsplus.com</a> (nézd meg az illusztrációk miatt)
                </p>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Fekete-fehér',
        body: (
            <div>
                <img src={require('../../images/challenges/week08-bw.jpg')} title="Dórival találtuk ezt a szép temetőt a tavalyi Balcsikörbebringázáskor"/>

                <p>Megint mások az okosabbak:</p>

                <p>A
                    <a href="http://www.ktfoto.sokoldal.hu/sotet_es_vilagos_valtozasai" target="_blank">ktfotón</a> elolvashatod az alapokat gyönyörű Comic Sans betűtípussal írva :) A csávónak egyértelműen több érzéke van a fotózáshoz, mint a webdesignhoz. ;)
                </p>
                <p>A
                    <a href="http://blog.fotosarok.hu/2013/05/a-fekete-feher-konvertalas-muveszete/" target="_blank">Fotósarok</a> blogon pedig leginkább az utómunkákról írnak, de ez is nagyon hasznos.
                </p>

                <p>Ha nem jönnél rá, hogy hogyan kell RAW módba állítani a gépet, szólj, és segítek :)</p>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Party',
        body: (
            <div>
                <img src={require('../../images/challenges/week09-halloween.jpg')} title="Soma &amp; Liza :)"/>

                <p>A
                    <a href="http://blog.fotosarok.hu/2013/04/hogyan-fotozzunk-buliban/" target="_blank">Fotósarok blogon</a> királyul leírnak mindent.
                </p>

                <p>Koncert is ér!</p>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Szemét',
        body: (
            <div>
                <img src={require('../../images/challenges/week10-pigs.jpg')} title="Észak-India :)"/>

                <p>Hát, erre nem tudok semmi különös tippet adni. Fotózz szép vagy csúnya vagy furcsa szemetet :)</p>

                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Ismeretlen emberek',
        body: (
            <div>
                <img src={require('../../images/challenges/week11-leash.jpg')} title="Pórázos gyerek az állatkertben :)"/>

                <p>A lényeg, hogy a fotótéma 1 vagy több ember legyen, aki(k)nek nem szabad tudnod a nevét. :)</p>

                <p>Tippek:</p>
                <ul>
                    <li>
                        <a href="https://pixinfo.com/hu/blog/2012/01/19/nehany-tanacs-kezdo-utcai-fotosoknak/" target="_blank">Tökjó tippek</a>
                    </li>
                    <li>
                        <a href="https://vimeo.com/ondemand/everybodystreet/70639661" target="_blank">Filmelőzetes, menő képekkel</a>
                    </li>
                    <li><a href="http://www.fotovilag.hu/cikk/461/" target="_blank">Mit szabad, mit nem</a></li>
                </ul>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Épület',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Makró',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Fák',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Árnyékok',
        body: (
            <div>
                <p>Az árnyékfotózás egy elég szerteágazó témakör: lehet természetes fényben, mesterséges fényben, közelről, távolról...
                    Itt inkább téma-ötleteket lehet adni, nem annyira technikákat. Itt van azért pár tipp, meg ötlet is egy elég
                    <a href="https://fotozzklikkben.wordpress.com/2015/06/01/juniusi-kihivas-arnyek-a-fotozasban/" target="_blank">random blogon</a>.
                </p>
                <p>
                    <a href="http://www.lightstalking.com/photographing-shadows/" target="_blank">További ötletek</a>, ezek szerintem még jobbak.
                </p>
                <p>+1:
                    <a href="http://content.photojojo.com/tutorials/the-ultimate-guide-to-shadow-play/" target="_blank">Itt meg még királyabb ötletek vannak szerintem, de sajna ez már angolul.</a>
                </p>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Önarckép',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Panoráma',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Tükröződés',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Tájkép',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Mélységélesség',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Növények, virágok',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Naplemente',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Dolgok kerekeken',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Színek',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Számok',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Felületek',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Keretezés',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Víz',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Dinamikus',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }, {
        title: 'Család',
        body: (
            <div>
                <p>Jó fotózást! :)</p>
            </div>
        )
    }
];