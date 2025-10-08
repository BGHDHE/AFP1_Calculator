# Rendszerterv

## A rendszer célja
A projekt célja egy **tudományos számológép** fejlesztése, amely az informatikai eszközök adta lehetőségeket kihasználva gyors, pontos és felhasználóbarát számítási környezetet biztosít a felhasználók számára.  

A rendszer célja, hogy:
- megkönnyítse a matematikai, fizikai és mérnöki számításokat,  
- támogassa a tanulást és a mindennapi problémamegoldást,  
- modern, intuitív felületet kínáljon, amely **platformfüggetlenül** (reszponzív módon) működik.

## Felhasználói élmény és design

A rendszer tervezésénél kiemelt figyelmet fordítunk a **reszponzív megjelenésre** és a **felhasználói élményre**.  
Ennek célja, hogy a számológép:
- minden képernyőméreten (asztali gép, tablet, mobil) átlátható és könnyen kezelhető legyen,  
- ne csússzon szét,  
- ne zavarja a felhasználót a használat közben.

## Projektterv

### Projektmunkások és felelősek

A tudományos számológép fejlesztése **HTML**, **CSS** és **JavaScript** technológiákkal valósul meg.  
A csapat tagjai a fejlesztés különböző területeiért felelnek, hogy a projekt átlátható és hatékony munkamegosztásban valósuljon meg.

### Frontend

**Tagok:**
    + Krizsó Csaba
    + Kerekes Benedek

**Fő feladataik:**
- A felhasználók által elérhető, interaktív felületek megtervezése és megvalósítása.  
- A backend által biztosított funkciók integrálása a kliensoldali felületbe.  
- Egységes és reszponzív design kialakítása, amely különböző eszközökön is megfelelően jelenik meg.

### Backend

**Tagok:**
    + Hegedűs Gergő
    + Fábián Szilárd

**Fő feladataik:**
- A frontend kiszolgálása a szükséges adatokkal és számítási logikával.  
- Az alkalmazás logikai rétegének kialakítása **JavaScript** segítségével.

### Tesztelés

**Tagok:**
    + Kerekes Benedek
    + Krizsó Csaba
    + Hegedűs Gergő
    + Fábián Szilárd

**Fő feladataik:**
- A fejlesztett funkciók rendszeres tesztelése és hibajavítása az üzembe helyezés előtt.  
- A hibák feltárása, dokumentálása és javításának nyomon követése.

## Követelmények

### Funkcionális követelmények

A tudományos számológép rendszer az alábbi funkcionális követelményeknek kell, hogy megfeleljen:

- **Számítási műveletek kezelése:**  
  Képes legyen alapvető és haladó matematikai műveletek elvégzésére (összeadás, kivonás, szorzás, osztás, hatványozás, gyökvonás, szögfüggvények stb.).  
   

- **Webes környezetben való működés:**  
  A program **reszponzív webes felületen** működik, így számítógépen, tableten és okostelefonon egyaránt használható.  

- **Vendégmód támogatása:**  
  Bejelentkezés nélkül is használható a számológép alapfunkciói (gyors számítások, alapműveletek).  
 

- **Frontend–Backend kommunikáció:**  
  A webes felület gördülékenyen kommunikál a háttérrendszerrel, amely biztosítja a számítási logikát és az adatok tárolását.


### Nemfunkcionális követelmények

A rendszernek a következő nemfunkcionális feltételeknek is eleget kell tennie:
   

- **Felhasználóbarát működés:**  
  Az oldal könnyen kezelhető, minimális informatikai tudással is használható.  

- **Platformfüggetlenség:**  
  A számológép teljes mértékben webes környezetben működik, nem igényel telepítést és külön kiegészítőket sem.  

- **Erőforrás-hatékonyság:**  
  A rendszer használatához elegendő egy okoseszköz (számítógép, tablet vagy telefon) és internethozzáférés, nincs szükség különleges hardverre.  

- **Megbízhatóság és stabilitás:**  
  A számítási eredmények pontosan, gyorsan és kiszámíthatóan jelenjenek meg minden környezetben.  

- **Reszponzív design:**  
  A felhasználói felület automatikusan alkalmazkodik a képernyőmérethez, hogy a megjelenés minden eszközön megfelelő legyen.  

  ## Fizikai környezet

  A tudományos számológép egy **webalapú alkalmazás**, amely elsősorban **asztali platformra** készült, de reszponzív kialakításának köszönhetően **bármilyen eszközről** (PC, laptop, tablet, okostelefon) elérhető.

Az alkalmazás futtatásához:
- mindössze egy **modern webböngészőre** (pl. Chrome, Edge, Firefox)  
- és **aktív internetkapcsolatra** van szükség.

## Karbantartási terv

A tudományos számológép rendszer hosszú távú működésének biztosítása érdekében rendszeres karbantartási és felügyeleti feladatokat szükséges elvégezni.  
A karbantartás célja a stabilitás, a biztonság és a felhasználói élmény folyamatos fenntartása.

### Tartalmi karbantartás

Mivel az alkalmazás nem tartalomfeltöltésre szolgál, hanem felhasználói számításokat és adatokat kezel, a tartalmi karbantartás főként az adatok érvényességére és tisztaságára irányul.

**Főbb feladatok:**
- Az elmentett számítások, képletek és felhasználói adatok időszakos ellenőrzése és tisztítása, hogy elkerülhetők legyenek a felesleges vagy hibás bejegyzések.  
- A rendszeres biztonsági mentések elvégzése az adatvesztés elkerülése érdekében.  
- Az esetlegesen hibás vagy sérült adatok automatikus javítása vagy törlése.

