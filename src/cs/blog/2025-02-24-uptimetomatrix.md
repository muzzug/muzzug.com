---
title: 'Jak si nastavit notifikace z Uptime Kuma na Matrix'
date: 2025-02-24 16:01:26
updateDate: ''
slugOverride: 'uptimetoelement'
tags: [self hosting]
description: 'Jak si nastavit notifikace z Uptime Kuma na Matrix. Snadno a rychle.'
layout: 'post.njk'
rssOnly: false
---

Jak jsem psal v Týdenních poznámkách, začal jsem zkoumat možnosti self-hostingu. Jedním z nástrojů, na které jsem už nějakou dobu koukal, byl [Uptime Kuma](https://uptime.kuma.pet) – nástroj na monitoring všeho možného.

Na dostupnost svých webů jsem zatím používal Uptime Robot, ale když už je možnost si něco podobného „zdarma“ hostovat, tak proč ne, že?

Jedna z věcí, kterou jsem řešil je, kam si nechat posílat notifikace. V nastavení je i možnost [Matrixu](https://matrix.org). Ten jsme kdysi používali v práci, mimo jiné i právě pro notifikace, a tak jsem si řekl že to zkusím i tady.

Nastaveno už mám, ale pro případ že bych to dělal někdy znovu si to tady poznamenám. A třeba to někomu taky pomůže.

## Jak na to
Nastavení je poměrně jednoduché – jsou k tomu vlastně potřeba jenom 2 věci:
- místnost v rámci Matrixu, kam budou notifikace chodit
- uživatel, který bude notifikace posílat

Místnost jsem si na notifikace vytvořil vlastní, a na doporučení v nastavení Uptime Kuma jsem vytvořil i nového uživatele.

V Uptime Kuma je potřeba nastavit jméno notifikace, URL Matrix serveru (v mém případě https://matrix.org), Internal ID místnosti a Access token uživatele.

> ![Nastavení notifikací v Uptime Kuma](/images/uptimekuma.webp)
> Nastavení notifikací v Uptime Kuma

Jako svůj Matrix klient používám Element, takže vyhledání ID místnosti a Access tokenu proběhlo takle:
- Detail místnosti -> Settings -> Advanced -> Internal room ID
- Detail uživatele -> All settings -> Help & About -> Access token (úplně dole)

Pak už stačilo jenom vložit požadované údaje do správných políček a nastavit přes Default enabled, aby se toto nastavení použilo jako výchozí i pro budoucí monitory. U těch pak už jenom stačí přepsat název, a je to. 🙂