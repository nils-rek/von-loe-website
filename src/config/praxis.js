/**
 * Zentrale Schalter für Sachverhalte, die sich ändern können, ohne dass die Texte
 * dafür neu geschrieben werden müssen. Beide Fassungen stehen im Code nebeneinander –
 * hier wird nur ausgewählt, welche ausgeliefert wird.
 *
 * KASSENZULASSUNG
 *   false = Privatpraxis. Stand September 2026: die Bewerbung auf einen Kassensitz war
 *   nicht erfolgreich, eine Abrechnung mit den gesetzlichen Krankenkassen ist derzeit
 *   nicht möglich.
 *
 *   Auf `true` setzen, sobald mit den gesetzlichen Krankenkassen abgerechnet werden kann.
 *   Dann greifen automatisch wieder:
 *     - HeroSection.vue  Überschrift „Willkommen in unserer Praxis" (statt „Privatpraxis")
 *     - Kosten.vue       Karten „Gesetzlich Versicherte" + „Selektivverträge",
 *                        GKV-Einleitung, Hinweis für gesetzlich Versicherte entfällt
 *     - Ablauf.vue       Schritt 4 wieder mit Antrag auf Kostenübernahme bei der Kasse
 *
 *   Zusätzlich von Hand nachziehen (statischer Text, hängt bewusst nicht am Flag):
 *     - index.html                „Privatpraxis für …" → „Praxis für …" in
 *                                 <meta name="description"> und og:description
 *     - components/FooterSection.vue  Untertitel „Privatpraxis für …" → „Praxis für …"
 *     - components/Wartelisten.vue    Versicherungsstatus-Aufzählung (Datei ist geparkt)
 *     - Kosten.vue                Text der Selektivvertrag-Karte: welche Selektivverträge
 *                                 tatsächlich gelten, ist weiterhin ungeklärt
 *     - Ablauf.vue + Therapieangebot.vue  „Erstgespräch" ist die neutrale Fassung von
 *                                 „psychotherapeutische Sprechstunde" (formal ein
 *                                 GKV-Begriff aus der Psychotherapie-Richtlinie).
 *                                 Mit Zulassung kann der Begriff „Sprechstunde" zurück –
 *                                 Überschrift, erster Absatz und Schritt 2.
 *     - HeroSection.vue           Die Abstände (Eyebrow mb-3, h1 mb-4, accent-rule mb-5,
 *                                 letzter Absatz mb-6) wurden um je 4 px gestrafft, weil
 *                                 „Privatpraxis" die Überschrift zweizeilig macht und der
 *                                 CTA sonst bei 1440×900 unter die Falz rutscht (911 px).
 *                                 Ist die Überschrift wieder einzeilig, können die alten
 *                                 Werte (mb-4/mb-5/mb-6/mb-7) zurück.
 */
export const KASSENZULASSUNG = false
