# 📌 Rättningsrapport – fed24s-the-last-todo-Edchy

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/VLovMVBC)
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Studenten har uppfyllt alla krav för både G och VG. Uppgiften innehåller en välstrukturerad hårdkodad todo-lista, funktionalitet att ta bort eller återställa to-dos, skapa nya to-dos via ett formulär och använda 'lifting state up'-tekniken för att hantera delad state mellan komponenterna. Dessutom implementeras ett grafiskt ramverk med Tailwind CSS för en estetiskt tilltalande och responsiv design. Användaren kan även sortera to-dos baserat på olika kriterier, och det finns ljudfeedback vid viktiga åtgärder. Kodstrukturen är modulär och kodstandarden är hög, med användning av TypeScript för typkontroll.

💡 **Förbättringsförslag:**  
I framtida projekt kan filtreringsalgoritmen möjligen optimeras för bättre prestanda genom att använda memoreringstekniker eller avancerade metoder för att minska onödiga omrendreringar. Dessutom kan man överväga att ytterligare förbättra tillgängligheten genom att se till att alla interaktiva element är korrekt märkta för skärmläsare och navigerbara via tangentbordet.