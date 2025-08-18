# Lösungsplan: Nachhilfeprofi Zürich Landing Page

## Umsetzungsansatz

Die Umsetzung erfolgt durch systematische Übernahme und Anpassung der bewährten Vorlage-Struktur aus `/nachhilfeportal-zuerich`.

## Zu erstellende/ändernde Files

### 1. App Router Struktur
- **Erstellen**: `/src/app/(main)/page.tsx` - Neue Hauptseite
- **Erstellen**: `/src/app/(main)/impressum/page.tsx` - Impressum
- **Erstellen**: `/src/app/(main)/datenschutz/page.tsx` - Datenschutz  
- **Erstellen**: `/src/app/(form)/lehrer-finden/page.tsx` - Multistep Formular
- **Erstellen**: `/src/app/(form)/dankesseite/page.tsx` - Dankesseite
- **Anpassen**: `/src/app/layout.tsx` - Root Layout mit Google Analytics
- **Löschen**: `/src/app/page.tsx` - Basic Homepage entfernen

### 2. Landing Page Components  
- **Erstellen**: `/src/components/LPHero.tsx` - Hero Section
- **Erstellen**: `/src/components/LPBenefits.tsx` - Benefits Cards
- **Erstellen**: `/src/components/LPSection.tsx` - Wiederverwendbare Sections
- **Erstellen**: `/src/components/LPSteps.tsx` - 3-Schritte Prozess
- **Erstellen**: `/src/components/LPTestimonial.tsx` - Testimonials
- **Erstellen**: `/src/components/LPOffers.tsx` - Angebote
- **Erstellen**: `/src/components/AnimatedText.tsx` - Animierter Text mit Unterstreichung

### 3. Form Components
- **Erstellen**: `/src/components/MultiStepForm.tsx` - 5-Schritte Lead-Formular

### 4. Tracking & Analytics
- **Erstellen**: `/src/components/GoogleAnalytics.tsx` - Google Ads Setup (AW-16732398347)
- **Erstellen**: `/src/components/ConversionTracker.tsx` - Conversion Tracking
- **Erstellen**: `/src/lib/tracking.ts` - UTM Parameter Handling

### 5. Backend Services
- **Erstellen**: `/src/lib/hubspotService.ts` - HubSpot API Integration
- **Erstellen**: `/src/lib/csrf.ts` - CSRF Token Generation
- **Erstellen**: `/src/hooks/useCSRF.ts` - CSRF Hook
- **Erstellen**: `/src/app/api/submit-form/route.ts` - Form Submission API
- **Erstellen**: `/src/app/api/csrf-token/route.ts` - CSRF Token API

### 6. Styling & Assets
- **Anpassen**: `/src/app/globals.css` - Tailwind CSS Setup
- **Nutzen**: Bereits vorhandene Bilder in `/public/images/` 
- **Logo Integration**: `/public/images/logo/logo.png` als Favicon und Brand-Logo
- **Erstellen**: Violettes Farbschema in Komponenten

### 7. Configuration
- **Anpassen**: `/next.config.ts` - Next.js Konfiguration
- **Anpassen**: `/package.json` - Dependencies hinzufügen (cookie, @types/cookie)

## Potentiell betroffene Files (zu beobachten)

### Bestehende Files die angepasst werden könnten:
- `/tailwind.config.ts` - Eventuell Custom-Colors definieren
- `/tsconfig.json` - Path-Aliases für @ imports
- `/eslint.config.mjs` - ESLint Regeln
- `/.env.local` - Environment Variables (HUBSPOT_PRIVATE_APP_TOKEN, CSRF_SECRET)
- `/.gitignore` - Environment Files ausschließen

### Neue Ordnerstrukturen:
- `/src/app/(main)/` - Route Group für Hauptseiten
- `/src/app/(form)/` - Route Group für Formulare  
- `/src/components/` - Komponenten Library
- `/src/lib/` - Service Layer
- `/src/hooks/` - Custom React Hooks
- `/src/app/api/` - API Routes

## Content-Anpassungen

### Texte (direkt von Vorlage übernehmen und anpassen):
- "Nachhilfeportal Zürich" → "Nachhilfeprofi Zürich"
- "erstklassige Tutoren" → "professionelle Nachhilfe" (violett unterstrichen)
- "Jetzt Tutor in Zürich finden" → "Jetzt Nachhilfe in Zürich finden"
- Kontaktdaten: Telefon, E-Mail von Bildungsinstitut Fokus AG

### Bild-Mappings (spezifische Pfade):
- **Hero**: `/images/Vater-Tochter_Lerneinheit_mit_Freude_20250318_192428.jpg`
- **Problem**: `/images/fuenftklaessler-mathe-niedergeschlagen-frust-schreibtisch-alleine-mathe-helden.jpg`
- **Success**: `/images/drittklaessler-mathe-mutter-stolz-positiv-erfolg-zuhause-mathe-helden.jpg`
- **Logo/Favicon**: `/images/logo/logo.png`
- **Testimonials**: `/images/testimonials/claudia-thumbnail.jpg` etc.

### Farbanpassungen:
- Grün `#047857` → Violett `#7C3AED` 
- Hover Grün `#065f46` → Violett `#6D28D9`
- Alle CTA Buttons und Highlight-Elemente

### Google Ads Tracking:
- Tracking ID: `AW-17483108923` → `AW-16732398347`
- Conversion Label: `B5eZCOuOhIcbELukzJBB` → `P44WCMav44gbEIvG0Ko-`

## Implementierungsreihenfolge

1. **Setup**: App Router Struktur, Layout, CSS
2. **Komponenten**: Landing Page Components erstellen
3. **Hauptseite**: Hero, Benefits, Sections implementieren
4. **Formular**: MultiStep Form mit API Routes
5. **Tracking**: Google Analytics, Conversion Tracking
6. **HubSpot**: Lead-Integration testen
7. **Seiten**: Impressum, Datenschutz, Dankesseite
8. **Testing**: Alle Funktionalitäten prüfen
9. **Styling**: Final Polish, Responsive Design

## Validierung

Nach Implementation:
- Formular-Submission zu HubSpot testen
- Google Ads Conversion Tracking validieren  
- CSRF Protection prüfen
- Responsive Design auf allen Geräten
- SEO Metadaten überprüfen
- Accessibility Standards einhalten