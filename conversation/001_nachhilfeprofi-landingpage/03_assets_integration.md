# Asset-Integration Plan: Nachhilfeprofi Zürich

## Verfügbare Assets im Detail

### Bereits im Projekt: `/public/images/`

#### Core Landing Page Assets:
```
/public/images/
├── logo/
│   ├── logo.png                    # Hauptlogo für Header/Favicon
│   ├── favicon.png                 # Browser-Tab Icon
│   └── mit rosa hintergrundfarbe.png
├── testimonials/
│   ├── claudia-thumbnail.jpg       # Testimonial Avatars
│   ├── dieter-thumbnail.jpg
│   └── marie-thumbnail.jpg
└── authors/
    ├── Giuseppe_Dantico.jpg        # Team/Über uns
    ├── Mathe-Helden-Team-2024.jpg  # Team-Foto
    └── [weitere Autoren...]
```

#### Lernszenarien nach Altersgruppen:
- **Kindergarten**: `kindergarten-kind-kreativ-zuhause-spielen-lernen-geometrie-statik.jpg`
- **1.-3. Klasse**: `erstklaessler-*`, `drittklaessler-*`
- **4.-5. Klasse**: `viertklaessler-*`, `fuenftklaessler-*`
- **6. Klasse+**: `sechstklaessler-*`
- **Oberstufe**: `oberstufe-*`, `abiturient-*`
- **Universität**: `student-uni-*`, `student-stem-*`

## Spezifische Verwendung in der Landing Page

### Hero Section:
**Primary**: `/images/Vater-Tochter_Lerneinheit_mit_Freude_20250318_192428.jpg`
**Alternative**: `/images/nachhilfe-zuhause-schuelerin-teenager-junger-tutor-fokus.jpg`

### Problem Section ("Angst den Anschluss zu verlieren?"):
**Primary**: `/images/fuenftklaessler-mathe-niedergeschlagen-frust-schreibtisch-alleine-mathe-helden.jpg`
**Alternative**: `/images/Tochter_5_Klasse_Alleine_stark-frustriert.jpg`

### Solution Section:
**Primary**: `/images/drittklaessler-mathe-mutter-stolz-positiv-erfolg-zuhause-mathe-helden.jpg`
**Alternative**: `/images/Junge_feiert_Erfolg_mit_A_Zeugnis_20250318_192436.jpg`

### Benefits Section (Icons + Bilder):
- **Zuhause/Online**: `/images/Gemeinsames_Lernen_am_Küchentisch_20250318_192448_Mutter_Tochter.jpg`
- **Alle Altersgruppen**: `/images/grundschulkind-lernen-mathe-zuhause-konzentriert-mutter-unterstützt.jpg`
- **Erfolge feiern**: `/images/fuenftklaessler-eltern-mathe-familienfreude-positiv-verstanden-zuhause-mathe-helden.jpg`

### Testimonials Section:
```
/images/testimonials/claudia-thumbnail.jpg
/images/testimonials/dieter-thumbnail.jpg
/images/testimonials/marie-thumbnail.jpg
```

### Offers Section (3 Angebote):
- **Lerncoaching**: `/images/adhs-lerncoach-lerplan-erstellen-schreibtisch.png`
- **Gymi-Vorbereitung**: `/images/Junger_Schüler_vor_der_Tafel_20250318_192603.jpg`
- **Fachspezifisch**: `/images/zehntklaessler-algebra-whiteboard-zuhause-tutor-erklaert-mathe-helden.jpg`

## Technische Implementation

### Layout.tsx (Favicon):
```typescript
export const metadata: Metadata = {
  title: "Nachhilfeprofi Zürich",
  description: "Professionelle Nachhilfe in Zürich",
  icons: {
    icon: '/images/logo/favicon.png',
  },
};
```

### Next.js Image Components:
```typescript
<Image
  src="/images/Vater-Tochter_Lerneinheit_mit_Freude_20250318_192428.jpg"
  alt="Professionelle Nachhilfe mit qualifizierten Tutoren in Zürich"
  fill
  style={{ objectFit: 'cover' }}
  className="rounded-2xl shadow-xl"
  priority
/>
```

## Zusätzliche Features möglich

### Downloads:
- **PDF**: `Strategiegespräch.pdf` für Lead-Magnets

### Team-Seite (future):
- **Team-Foto**: `Mathe-Helden-Team-2024.jpg`
- **Giuseppe D'Antico**: `Giuseppe_Dantico.jpg` (Gründer)

### Partner-Integration:
```
/images/partners/
├── Fokus-Nachhilfe-Partnerschaft-Mathe-Helden.jpeg
├── Nachhilfeportal-Schweiz-Partnerschaft-Mathe-Helden.png
└── [weitere Partner...]
```

## Optimierungen

### Performance:
- Alle Bilder sind bereits optimiert (.jpg/.png)
- Verschiedene Auflösungen für responsive Design
- Priority Loading für Hero-Bilder

### SEO:
- Beschreibende Alt-Texts basierend auf Dateinamen
- Strukturierte Daten für Bilder
- WebP-Konvertierung für bessere Performance (optional)

**Status**: Alle benötigten Assets sind verfügbar und können direkt verwendet werden! 🚀