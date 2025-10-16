# Funkcionális specifikáció

## Jelenlegi helyzet

AFP gyakorlatra szükség van kis projektre így egy tudományos számológép implementálása lett megbeszélve, mivel jelenleg nincsen korszerű weben elérhető alkalmazás.
Amelyek viszont mégis megtalálhatóak azok vagy nehezen kezelhetőek vagy nem reszponzívak.

## Vágyálomrendszer

A cél, hogy egy böngészőből könnyen elérhető felhasználóbarát tudományos számológépet hozzunk létre, ami képes alap illetve haladó matematikai műveletek elvégzésére valamint eltárolja és meg tudja jeleníteni a korábbi számításokat. Emellett az alkalmazás biztonságos, gyorsan és megbízhatóan működjön.


## Jelenlegi üzleti folyamatok modellje

Manapság az embereknek szüksége van egy könnyen elérhető és kezelhető tudományos számológépre amivel a számolásaikat tudják végezni. Jelenleg azonban nincs erre lehetőségük, hiszen  jelenleg az alkalmazások vagy nem érhetőek el könnyen, vagy pedig nem képesek a várt egyenlet kiszámítására. Természetesen vannak emberek akik képesek komplexebb műveletek megoldására, viszont az emberek nagyrészének szüksége van a bonyolultabb egyenletek leegyszerűsítésére, hogy a feladataival tudjon érdemben haladni.

## Igényelt üzleti folyamatok modellje

Az oldalon a látogatók képesek számolások végzésére és azok kiértékelésére.
Kiértékelés után az érték megjelenik illetve eltárolódik későbbi megtekintésre.
Ezek után a felhasználó képes korábbi számításait visszanézni vagy új számítást kezdeni.

## Követelménylista
| ID | Modul | Leírás | Prioritás |
|----|-------|--------|-----------|
| K1 | Felület | A rendszer tárolja és jelenítse meg az előzményeket | Magas |
| K2 | Felület | A rendszer adjon hibaüzenetet helytelen bemenet esetén | Magas |
| K3 | Felület | A rendszer legyen reszponzív (mobil/asztali eszközön is jól használható) | Közepes |
| K4 | Számítás | A rendszer támogassa az alap aritmetikai műveleteket (+, -, *, /) | Magas |
| K5 | Számítás | A rendszer támogassa a tudományos műveleteket (sin, cos, tan, log, ln, hatvány, gyök) | Magas |
| K6 | Számítás | A rendszer kezelje a zárójeleket és a műveleti sorrendet | Magas |
| K7 | Számítás | A számítás eredménye max. 300 ms alatt jelenjen meg | Alacsony |

## Használati esetek

Felhasználó: Képes számolásokat végezni az oldalon, valamint a korábban végrehajtott számolásokat képes visszatekinteni.

## Megfeleltetés, hogyan fedik le a használati eseteket a követelmények

K1 Tárolás: A felhasználók képesek korábbi számolásaikat visszanézni így ellenőrizni, hogy az eredményük valóban megfelelő-e.

K2 Hibaüzenet: Amennyiben a felhasználó hibás egyenletet adna meg abban az esetben a program egy hibaüzenettel jelzi, hogy a számolás nem végrehajtható.

K3 Reszponzivitás: A felhasználónak lehetősége van mobilon és asztali eszközön is könnyen folytatni matematikai műveleteket.

K4 Alapműveletek: A felhasználók képesek alapvető aritmetikai műveletek végzésére az oldalon.

K5 Tudományos művelete: Az oldal lehetőséget kínál komplexebb matematikai műveletek elvégzésére.

K6 Zárójelkezelés: Felhasználók a műveleteikben képesek zárójeleket használni amit a számológép megfelelően kezel majd.

K7 Reszponzivitás: A számolások komplexitástól függetlenül hamar kiszámolódnak, így elkerülve a felhasználó frusztrációját.

## Képernyőterv

| Kép | Leírás |

<img width="1176" height="604" alt="Image" src="https://github.com/user-attachments/assets/ad77ade1-57cf-4cb5-9dbc-cfa7b02dc063" /> Az oldal képernyőterve.

## Forgatókönyv

A felhasználó megnyitja a weboldalt ahol a számológép fogadja üres műveleti sávval és előzményekkel. Ezek után elkezdi begépelni a számológép gombjaival a kívánt egyenletet amik az a fölötti sávban megjelennek. A végén az egyenlőségjel lenyomása után kiíródik az eredmény illetve megjelenik az előzmények között is. Ezután ha a felhasználó új számolást kezd el akkor az előző eredmény tödlődik a sávból és a jelenlegi művelet mutatódik. Az előző művelet eredménnyel együtt pedig megmarad az előzmények ablakban. Több végzett művelet után pedig az elvégzett műveletek soronként jelennek meg az előzmények részben.

## Fogalomtár

Frontend: A felhasználói felület, amely HTML, CSS és JavaScript segítségével valósul meg.

Backend: A szerveroldali logika, amely feldolgozza a kifejezéseket és visszaadja az eredményt.

API (Application Programming Interface): A frontend és backend közötti kommunikációs réteg.

Adatkezelés: Az alkalmazás a számítások során keletkezett adatokat (pl. előzmények) biztonságosan tárolja, és csak a szükséges ideig őrzi meg.

Validáció: A bemeneti adatok ellenőrzése annak érdekében, hogy a felhasználó által megadott kifejezések matematikailag helyesek és feldolgozhatók legyenek.

Teljesítmény: Az alkalmazás úgy kerül kialakításra, hogy nagy számítási terhelés mellett is gyorsan és stabilan működjön.

Biztonság: A rendszer megakadályozza a rosszindulatú kódok vagy veszélyes kifejezések végrehajtását, így a felhasználói környezet védett marad.

Tesztelés: A fejlesztés során egység- és integrációs tesztek biztosítják a rendszer megbízhatóságát és hibamentes működését.

Reszponzív dizájn: A felhasználói felület mobil és asztali nézetben is jól használható.


Előzmények: A felhasználó által korábban megadott kifejezések és kiszámított eredmények listája.
