# NSA
- Rückblick: Was geschah?
	- Snowden
	- Kanzlerin
	- Five Eyes
- Fähigkeiten und Programme der NSA / GCHQ
	- PRISM
	- XKeyScore
	- Utah Datacenter
	- Tempora
- Rolle des BND, Untersuchungsausschuss
	- Selektorenliste
	- Vernichtung durch den BND
	- Prüfung durch ehem. Bundesrichter
	- Bericht
- Rolle eines Geheimdienstes in einer Demokratie
	- evtl. Vergleich mit Stasi
- Geheimdienste und Überwachung in Deutschland
	- BND, MAD, BfV
	- Art. 10 GG, G10-Gesetz

## Vorwort
### Abkürzungen
- __S:__ secret, geheim
- __SI:__ SigInt, Signals Intelligence, Aufklärung elektronischer Signale
- __COMINT:__ Communication Intelligence, Fernmeldeaufklärung
- __REL TO:__ release to, freigeben für
- __FVEY:__ Five Eyes (UKUSA-Staaten)
- __FOUO:__ for official use only, Nur für den Dienstgebrauch, niedrigste Geheimhaltungsstufe
- __U:__ unclassified, nicht geheim

## Rückblick
### Edward Snowden
Geboren 21. Juni 1983 (32 Jahre alt)  
Arbeitete bis 2013 für Booz Allen Hamilton (Contractor) im Kunia Regional SIGINT Operations Center  
War Systemadministrator, Zugriff auf SharePoint
[1]
### Leaks
Snowden sammelte Dokumente und gab diese Filmemacherin __Laura Poitras__ und Guardian-Journalist __Glenn Greenwald__.
### Five Eyes
(auch UKUSA-Vereinbarung)

- USA: _NSA_ (National Security Agency)
- Vereinigtes Königreich: _GCHQ_ (Government Communications Headquarters)
- Australien: _DSD_ (Defense Signals Directorate)
- Kanada: _CSEC_ (Communications Security Establishment Canada)
- Neuseeland: _GCSB_ (Government Communications Security Bureau)

Zuerst USA und UK (1947), später weitere Partner.

Diese Partner "zweiter Klasse" sind von Spionage durch die NSA ausgeschlossen. [14]

Bis Zum Zerfall der Sowjetunion war das "Hauptziel die [...] [militärische] __Aufklärung des Ostblocks__"[2], Heute Aufklärung des __Internationalen Terrorismus__.

__Kritiker__ befürchten __Industriespionage, Abhören von Diplomaten, Wissenschaftlern__

[2]

## Fähigkeiten und Programme
### XKeyscore
![XKeyscore at a glance](https://cdn.netzpolitik.org/wp-upload/xkeyscore-intercept-comic-1.jpg)

XKeyscore ist der Name eines Softwareprogramms. Es gibt mehrere Deployments davon. Einige davon z.B. durch GCHQ im Rahmen des TEMPORA-Programms.

XKeyscore analysiert den Traffic, speichert ihn für 3 Tage und extrahiert Metadaten, die für 30 Tage gespeichert werden. Die Daten sind von Analysten durchsuchbar.

[Beispiel für XKeyscore-Filter](http://daserste.ndr.de/panorama/xkeyscorerules100.txt)

[3]
#### Ausbaustufen
- _Traditional:_ Kann geringe Datenraten verarbeiten
- _Stage 2:_ Höhere Datenraten, vorherige Verarbeitung durch TURMOIL (5% der Daten werden analysiert)
- _Deep Dive:_ 10Gb/s, vorheriges Aussortieren von P2P/Netflix, etc. [4]

[3]

#### Datenquellen
- _SCS_ (Special Collection Service): NSA und CIA-Programm, infiltrieren von Botschaften, Kommunikationszentren, Ausländische Regierungen. Anbringen von Abhörequipment. a.k.a. "Händisch". War Quelle für Merkelphone. [5]
- _ECHELON/FORNSAT:_ Partnerschaft von Five Eyes, abhören von Satelliten, Telefonnetz (PSTN), Mikrowellen-Funk. [6][7|S. 34-50]
- _SSO_ (Special Sources Operations): Kooperation mit Telekommunikationsanbietern (ISPs), abgreifen an Glasfaserkabeln [8]
- _TAO_ (Tailorad Access Operations): Infiltriertes Netzwerkequipment. Bietet auch Möglichkeiten für echte Exploits. [9]
- _Overhead:_ Amerikanische Spionagedronen, -Flugzeuge, -Satelliten

### PRISM
Kooperation mit Internetunternehmen für Direkten Zugriff auf Daten. (Unklar, wie freiwillig)

### Utah Data Center
117 Bewertungen auf Google Maps, Durschnitt: 2 Sterne. [11]

- Nutzung unklar, vermutet wird
	- Speicherung von Internetdaten
	- Rechenleistung zum knacken von Verschlüsselung
- Kosten geschätzt
	- 2 000 000 000 USD Baukosten
	- 2 000 000 000 USD Hardware
	- 40 000 000 USD Strom/Jahr

[10]

## Rolle des BND
Aus dem Abkommen zwischen BND, BfV, NSA, das deutschen Geheimdiensten Zugriff auf XKeyscore gewährt. (Terms of Reference)

> It delineates an agreement made in June 2012 to provision the BfV, through the BND, with the NSA-developed XKeyscore computer network exploitation software to improve the BfV's processing analytic capability to encounter extremist threats and, to the maximum extent possible, share all data relevant to NSA's mission. [13]

BND, BfV tauscht Software gegen Daten, verspricht alle für die NSA wichtigen Daten an sie zu übermitteln.
[12]

Der BND ist für die NSA ein Partner "dritter Klasse". Ein Partner, der auch ausspioniert wird. [14]
(und zwar genau so stark wie China und die USA selbst) [15]
## Quellen
1. [Edward Snowden - Wikipedia](https://de.wikipedia.org/wiki/Edward_Snowden)
2. [UKUSA-Vereinbarung - Wikipedia](https://de.wikipedia.org/wiki/UKUSA-Vereinbarung)
3. [XKeyscore - Wikipedia](https://en.wikipedia.org/wiki/XKeyscore)
4. [TEMPORA - GCWiki](http://www.spiegel.de/media/media-34103.pdf)
5. [Special Collection Service - NSA](https://en.wikipedia.org/wiki/Special_Collection_Service)
6. [The Echelon spy network - The Guardian](http://www.theguardian.com/world/2001/may/29/qanda.janeperrone)
7. [Report on the existence of ECHELON - Europäisches Paralament](http://www.europarl.europa.eu/sides/getDoc.do?pubRef=-//EP//NONSGML+REPORT+A5-2001-0264+0+DOC+PDF+V0//EN&language=EN)
8. [Special Source Operations - Wikipedia](https://en.wikipedia.org/wiki/Special_Source_Operations)
9. [Tailored Access Operations - Wikipedia](https://en.wikipedia.org/wiki/Tailored_Access_Operations)
10. [Here's the $2 Billion Facility Where The NSA Stores And Analyzes Your Communications - Business Insider](http://www.webcitation.org/6J08eC9V0)
11. [NSA Utah Data Center - Google Maps](https://www.google.de/maps/place/NSA+Utah+Data+Center/@40.4262568,-111.9328731,15z/data=!4m2!3m1!1s0x0:0xe8a8479f97d2e68f)
12. [BND nutzt NSA-Spähsoftware für Auslandsaufklärung - Die Zeit](http://www.zeit.de/politik/deutschland/2013-08/bnd-xkeyscore-nsa)
13. [XKeyscore-Vertrag - Die Zeit](http://www.zeit.de/digital/datenschutz/2015-08/xks-xkeyscore-vertrag)
14. [NSA überwacht 500 Millionen Verbindungen in Deutschland](http://www.spiegel.de/netzwelt/netzpolitik/nsa-ueberwacht-500-millionen-verbindungen-in-deutschland-a-908517.html)
15. [Boundless Informant: the NSA's secret tool to track global surveillance data - The Guardian](http://www.theguardian.com/world/2013/jun/08/nsa-boundless-informant-global-datamining#)