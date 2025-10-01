# Követelmény specifikáció


## Jelenlegi helyzet
A felhasználók jelenleg egyszerű számológépeket használnak (fizikai vagy mobilalkalmazás), melyek nem mindig nyújtanak korszerű, weben keresztül elérhető megoldást.
A webes megoldások között kevés az egyszerűen kezelhető, reszponzív, tudományos funkciókat nyújtó kalkulátor.


## Vágyálomrendszer
A cél egy böngészőből bárhonnan elérhető, reszponzív, felhasználóbarát tudományos számológép létrehozása, amely:
lefedi az alap és haladó matematikai műveleteket,
képes a számítások előzményeit tárolni és megjeleníteni,
biztonságos, gyors és megbízható működést nyújt.


## Jelenlegi üzleti folyamatok modellje
A felhasználó fizikai számológépen vagy mobilalkalmazásban végzi a számításokat.
Az előzmények gyakran nem tárolhatók, vagy csak az adott eszközön elérhetők.
Nincs központi, platformfüggetlen megoldás.


## Igényelt üzleti folyamatok modellje
A felhasználó böngészőből megnyitja a számológép webalkalmazást.
Beírja a kifejezést → a rendszer kiszámolja → az eredmény megjelenik.
Az előzmények tárolódnak, és bármikor visszanézhetők.


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


## Fogalomtár

Frontend: A felhasználói felület, amely HTML, CSS és TypeScript segítségével valósul meg.

Backend: A szerveroldali logika, amely feldolgozza a kifejezéseket és visszaadja az eredményt.

API (Application Programming Interface): A frontend és backend közötti kommunikációs réteg.

Reszponzív dizájn: A felhasználói felület mobil és asztali nézetben is jól használható.

Előzmények: A felhasználó által korábban megadott kifejezések és kiszámított eredmények listája.