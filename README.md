# Straks Tjenester AS – nettside

Ny nettside for [Straks Tjenester AS](https://www.strakstjenester.no/): transport, rydding,
riving, rengjøring og avfallshåndtering i Oslo og omegn.

Bygget for fart og konvertering – den skal tåle betalt trafikk.

## Teknologi

- **Next.js 15** (App Router, React 19) – forsiden er statisk generert
- **Tailwind CSS v4**
- **Resend** for e-post fra kontaktskjemaet
- Hostes på **Vercel**

## Resultat (Lighthouse, mobil)

| | Gammel side | Ny side |
| --- | --- | --- |
| Performance | 40 | **94** |
| Accessibility | 92 | **100** |
| Best Practices | 57 | **100** |
| SEO | 100 | **100** |
| Largest Contentful Paint | 18,0 s | **2,9 s** |
| Speed Index | 25,5 s | **2,3 s** |
| Layout shift (CLS) | 0,234 | **0** |
| Sidevekt | 2 567 KB | **430 KB** |

## Kom i gang lokalt

```bash
npm install
cp .env.example .env.local   # fyll inn nøklene
npm run dev                  # http://localhost:3000
```

## Miljøvariabler

Settes i Vercel under **Settings → Environment Variables** (og i `.env.local` lokalt):

| Variabel | Påkrevd | Beskrivelse |
| --- | --- | --- |
| `RESEND_API_KEY` | **Ja** | API-nøkkel fra [resend.com/api-keys](https://resend.com/api-keys). **Uten denne virker ikke kontaktskjemaet.** |
| `LEAD_TO_EMAIL` | Nei | Hvem leadsene sendes til. Standard: `post@strakstjenester.no` |
| `LEAD_FROM_EMAIL` | Nei | Avsenderadresse. Må ligge på et domene som er verifisert i Resend. Bruk `onboarding@resend.dev` inntil domenet er verifisert. |
| `NEXT_PUBLIC_SITE_URL` | Nei | Brukes til canonical URL og sitemap. |

### Viktig om kontaktskjemaet

Uten `RESEND_API_KEY` svarer `/api/kontakt` med en tydelig feilmelding i stedet for å
late som alt gikk bra. Det er med vilje – et lead skal aldri forsvinne i stillhet.
Brukeren får samtidig telefonnummeret som reserveløsning.

**Test skjemaet med en ekte innsending etter at nøkkelen er satt i Vercel.**

## Innhold og redigering

Nesten alt tekstinnhold ligger samlet i [`lib/site.ts`](lib/site.ts):
telefonnumre, e-post, adresse, tjenester og ofte stilte spørsmål. Endrer du noe der,
slår det gjennom både på siden og i de strukturerte dataene (schema.org) som Google leser.

Bildene ligger i `public/bilder/` og er komprimert ned fra ~3 MB til 391 KB.

## Ting som gjenstår

- **Logo i høy oppløsning.** Logoen er hentet fra den gamle siden og finnes bare i
  208 px bredde. Be om original (SVG eller stor PNG) for skarp visning på retina.
- **Ekte bilder.** Alle bildene er stockbilder fra den gamle siden. Ekte bilder fra
  oppdrag konverterer typisk bedre for håndverks- og transportbransjen.
- **Bilde av rengjøring.** Det finnes ingen rengjøringsbilde i bildesettet, så det
  kortet er bevisst laget som et oransje merkevarekort i stedet.
- **Sporing.** Skjemaet sender en `lead_sendt`-hendelse til `window.dataLayer`, klar
  til å kobles mot Google Ads / Meta Pixel via Google Tag Manager.

## Struktur

```
app/
  layout.tsx        metadata, fonter, LocalBusiness-schema
  page.tsx          forsiden
  personvern/       personvernerklæring
  api/kontakt/      skjema-endepunkt (validering, honningkrukke, rate limit, Resend)
  sitemap.ts        sitemap.xml
  robots.ts         robots.txt
components/         seksjonene på forsiden
lib/site.ts         alt bedriftsinnhold ett sted
```
