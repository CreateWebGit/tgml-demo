# TGML-inspirerad React Widget Demo
[Deployment](https://tgml-demo.createweb.se)

Ett litet proof-of-concept som demonstrerar hur ett TGML-liknande widgetsystem kan implementeras i en modern React-miljö. Fokus ligger på konfigurationsdriven rendering, datakopplade vektorwidgets och realtidsuppdatering.

## Funktionalitet
**JSON-baserad widget-konfiguration**    
Varje widget definieras i en konfigfil med type, position och datapunkt.

**SVG-baserade widgets**    
Widgets renderas som vektorobjekt (likt TGML-komponenter).

**Realtidsdatastream**    
En mockad datakälla skickar temperaturvärden var 1.5 sekund.

**Automatisk uppdatering**    
Widgets är helt synkade med inkommande värden och uppdateras utan manuell hantering.

**TGML-lik arkitektur**    
Layout + datapunktbindning + komponenttyp hanteras via konfiguration, inte hårdkodade komponenter.


## Stack
* React
* TypeScript
* Vite
* SVG för vektorgrafik
* Mockad datastream med setInterval