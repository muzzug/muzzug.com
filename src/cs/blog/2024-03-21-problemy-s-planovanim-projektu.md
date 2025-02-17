---
title: Problémy s plánováním projektu a co s nimi... # 53 znaků do zalomení na webu
date: 2024-03-21 19:00:00
description: Jak jsem (snad) vyřešil problémy s plánováním projektu o jednom člověku
updateDate:
layout: post.njk  
tags: [gamedev]
rssOnly: false
---

V posledních [Týdenních poznámkách](./tydenni-poznamky-11-2024) jsem si tak trochu postěžoval, že mi nejde plánování kolem projektu Vigmark.  

Mám celkem jasnou představu o tom, jak má hra vypadat a co v ní má být. Ještě teda trochu ladím příběh a o co tam půjde, ale hlavní __mechaniky__ mám připravené a rozepsané. Dost mi to usnadnil fakt, že vycházím z už existujících pravidel a v zásadě je modifikuju pro použití v digitálním prostředí.

Problém ale nastal v tom, že jsem hleděl do otevřeného Godotu a přemýšlel, co vlastně dělat. Měl jsem popis toho, co chci udělat, ale neměl plán jak toho dosáhnout. A tak jsem otevřel Obsidian (kde mám veškeré poznámky a kde si dělám dokumentaci) a začal přemýšlet co s tím.

Už jsem v jedněch starších [Týdenních poznámkách](./tydenni-poznamky-09-2024) popisoval, že si udělám Kanban board, a tak jsem se do toho vrhnul. Klasické rozložení na Backlog, Todo, Doing a Done mi mělo stačit.

Při vytváření jednotlivých kartiček mi ale došlo, že tohle nebude úplně šťastná cesta. Přišlo mi, že mi to bere hrozně moc času. Napsat nějak rozumně kartičku, případně ji propojit s danou poznámkou, a pak ji ještě přehazovat ze sloupečku do sloupečku. Kravina. V projektu o jednom člověku je to fakt zbytečná ztráta času, zvlášť když samotné vytvoření a zpracování kartičky občas zabere víc času, než samotné vytvořené té funkce.[^1] 😅

[^1]: Vtipná vsuvka: To jsem si i chvilku pohrával s myšlenkou, že to udělám jako Project na GitHubu, kanban bude obsahovat jednotlivé Issues a každý commit automaticky zavře dané Issue. Jo, občas mně ten overthinking fakt baví. Zpětně, samozřejmě. 😃

No, tak jsem se na to vykašlal a začal pracovat rovnou z hlavy. To ovšem neslo drobnou komplikaci v tom, že jsem se občas zasekl a přemýšlel nad tím, co dělat dál. Zas mi chyběl plán cesty k cíli. Už jsem se k němu ale aspoň začal pohybovat.

No, a tak jsem chvilku přemýšlel co vlastně potřebuju mít. Vydestiloval jsem jednoduché zadání:
- jednoduchý seznam úkolů
- jednotlivé úkoly by se měly vytvořit samy bez nutnosti cokoli někde klikat (žádné kartičky)
- úkoly by měly být jasně přiřazené ke konkrétní části projektu, optimálně nějak detailněji
- úkoly by na sebe měly moct odkazovat

Po chvilce hledání jsem zjistil, že pro Obsidian existuje skvělý plugin, jednoduše pojmenovaný [Obsidian Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks). A ten __přesně__ plní to, co potřebuju!

Jednoduše mi stačí v poznámce ke konkrétní části projektu vytvořit úkol, a ty si pak vyfiltrovat na jedné stránce. Udělal jsem si `_To Do_` stránku, kde je jenom následující kód:

```plaintext
    ```tasks
    not done
    sort by function task.priorityNumber
    group by function task.file.filenameWithoutExtension
    group by heading
    ```
```

Ten mi jednoduše vezme všechny nehotové úkoly co v Obsidianu mám (pro projekt jsem si udělal samostatný vault abych ho mohl mít rovnou i na GitHubu přímo v projektu, ale určitě by to šlo vymyslet i v hromadném vaultu). Úkoly seřadí podle priority (pokud ji určím, zatím jsem nad tím nepřemýšlel) a seřadí je nejdřív podle jména poznámky u které jsou, a pak podle nadpisu v poznámce, pod kterým jsou přímo vytvořené. Však koukni na screen 🙂.

<a href="/images/screenshot-obsidian.webp" target="_blank">
    <img src="/images/screenshot-obsidian.webp" alt="Zobrazení tasků v jednotlivých poznámkách (vlevo) a v souhrnném To Do listu (vpravo)">
</a>

Plugin umí pracovat i s termíny úkolu, jejich návazností (udělat před nebo po jiném úkolu), priority, stav (to do, in progress, done…) a tak, ale to mi už přijde zbytečné. Stačí mi, že  splňuje moje základní požadavky. Plus si můžu oddělit úkoly pomocí tagů, takže můžu i oddělit například designovou část od samotného vývoje. 🙂

Tohle si myslím, že úplně bohatě stačí. Jasně – pro práci ve více lidech bych fakt asi sáhl po Trellu nebo něčem podobném (možná Notion aby to byla rovnou i knowlege base/design document?). Tam to smysl dává. Ale pro mně samotného to stačí takhle. Teda – snad. Je mi jasné, že během práce určitě narazím na problémy, které teď nevidím.