"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Zurück
        </Link>
      </div>

      <Container size="md" className="pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Impressum Section */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-8">Impressum</h1>
            <p className="text-zinc-500 text-sm mb-8">Angaben gemäß § 5 TMG</p>

            <div className="space-y-8 text-zinc-400">
              <div>
                <h3 className="text-white font-medium mb-3">Unternehmen</h3>
                <p>The NEED GmbH</p>
                <p>Zettachring 12A</p>
                <p>D-70567 Stuttgart</p>
                <p>Germany</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">Handelsregister</h3>
                <p>Handelsregister: HRB 782273</p>
                <p>Registergericht: Amtsgericht Stuttgart</p>
                <p>Steuer-Nr.: 50/649/01607</p>
                <p>USt.-ID-Nr.: DE348532368</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">Kontakt</h3>
                <p>E-Mail: info@theneed.works</p>
                <p>Telefon: 0711 – 25 25 1916</p>
                <p>Website: www.theneed.works</p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">Geschäftsführer</h3>
                <p>Sinan Yurttadur</p>
              </div>

              <div className="pt-8 border-t border-white/[0.06]">
                <h3 className="text-white font-medium mb-3">I. Haftung</h3>
                <p className="mb-4">
                  <strong className="text-white">1. Für Inhalte:</strong> Obwohl wir uns um Genauigkeit, Vollständigkeit und Aktualität der Inhalte unserer Website bemühen, können wir diese nicht garantieren. Gemäß § 7 Abs. 1 TMG sind wir für unsere eigenen Inhalte verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  <strong className="text-white">2. Für Links:</strong> Wir können auf externe Seiten verlinken, auf deren Inhalt wir keinen Einfluss haben. Wir können keine Verantwortung für deren Inhalte übernehmen; die jeweiligen Seitenbetreiber sind verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">II. Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>

          {/* Datenschutz Section */}
          <section>
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-8">Datenschutz</h1>

            <div className="space-y-8 text-zinc-400">
              <div>
                <h3 className="text-white font-medium mb-3">Datenschutzbeauftragter</h3>
                <p>The NEED GmbH</p>
                <p>Zettachring 12a</p>
                <p>70567 Stuttgart</p>
                <p className="mt-2">E-Mail: info@theneed.works</p>
                <p>Telefon: 0711 – 25 25 1916</p>
              </div>

              <div className="pt-8 border-t border-white/[0.06]">
                <h3 className="text-white font-medium mb-3">III. Allgemeine Informationen zur Datenverarbeitung</h3>
                <p className="mb-4">
                  <strong className="text-white">1. Umfang:</strong> Wir erheben und verwenden personenbezogene Daten nur, soweit dies für unsere Dienstleistungen erforderlich ist und eine Einwilligung des Nutzers vorliegt, sofern nicht gesetzlich anders geregelt.
                </p>
                <p className="mb-4">
                  <strong className="text-white">2. Rechtsgrundlage:</strong> Die Verarbeitung basiert auf der EU-Datenschutz-Grundverordnung (DSGVO) Artikel 6.
                </p>
                <p>
                  <strong className="text-white">3. Datenspeicherung:</strong> Personenbezogene Daten werden gespeichert, bis ihr Zweck erfüllt ist oder bis dies gesetzlich vorgeschrieben ist.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">Website-Daten & Protokolldateien</h3>
                <p className="mb-4">
                  <strong className="text-white">4. Datenerhebung:</strong> Bei jedem Seitenzugriff werden Daten wie Browsertyp, IP-Adresse, Zugriffszeit, verweisende Seiten, angeforderte Inhalte und Betriebssystem erfasst.
                </p>
                <p className="mb-4">
                  <strong className="text-white">5. Rechtsgrundlage:</strong> Die Datenspeicherung erfolgt gemäß DSGVO Artikel 6 Absatz 1 Buchstabe f.
                </p>
                <p className="mb-4">
                  <strong className="text-white">6. Zweck:</strong> Die IP-Speicherung gewährleistet die ordnungsgemäße Bereitstellung der Website. Protokolldateien dienen der Funktionalität, Sicherheit und Optimierung der Website.
                </p>
                <p>
                  <strong className="text-white">7. Speicherdauer:</strong> Daten werden bis zum Ende einer Sitzung oder bis zu sieben Tage für Protokolldateien gespeichert. IP-Adressen werden danach anonymisiert.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">IV. Verwendung technisch notwendiger Cookies</h3>
                <p className="mb-4">
                  Unsere Website verwendet Cookies. Cookies sind Textdateien, die im Webbrowser auf dem Computersystem des Nutzers gespeichert werden. Wir verwenden Cookies, um die Benutzerfreundlichkeit unserer Website zu verbessern.
                </p>
                <p className="mb-4">
                  <strong className="text-white">Gespeicherte Daten:</strong> Spracheinstellungen, Suchbegriffe, Anmeldedaten
                </p>
                <p>
                  <strong className="text-white">Rechtsgrundlage:</strong> DSGVO Art. 6 Abs. 1 lit. f
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">V. SSL-Verschlüsselung</h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-3">VII. Kontaktformular und E-Mail-Kontakt</h3>
                <p className="mb-4">
                  Auf unserer Website befindet sich ein Kontaktformular für die elektronische Kommunikation. Bei Nutzung werden die eingegebenen Daten an uns übermittelt und gespeichert.
                </p>
                <p>
                  <strong className="text-white">Speicherdauer:</strong> Daten werden gelöscht, sobald sie für ihren Erhebungszweck nicht mehr benötigt werden. Für personenbezogene Daten aus dem Kontaktformular ist dies der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist.
                </p>
              </div>

              <div className="pt-8 border-t border-white/[0.06]">
                <h3 className="text-white font-medium mb-3">VIII. Rechte der betroffenen Person</h3>
                <p className="mb-4">Wenn Ihre personenbezogenen Daten verarbeitet werden, haben Sie folgende Rechte gegenüber dem Verantwortlichen:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-white">Auskunftsrecht:</strong> Sie können Auskunft über Ihre verarbeiteten personenbezogenen Daten verlangen.</li>
                  <li><strong className="text-white">Recht auf Berichtigung:</strong> Sie können die Berichtigung unrichtiger oder unvollständiger Daten verlangen.</li>
                  <li><strong className="text-white">Recht auf Einschränkung der Verarbeitung:</strong> Unter bestimmten Voraussetzungen können Sie die Einschränkung der Verarbeitung verlangen.</li>
                  <li><strong className="text-white">Recht auf Löschung:</strong> Unter bestimmten Umständen können Sie die Löschung Ihrer personenbezogenen Daten verlangen.</li>
                  <li><strong className="text-white">Recht auf Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem maschinenlesbaren Format erhalten.</li>
                  <li><strong className="text-white">Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer personenbezogenen Daten unter bestimmten Umständen widersprechen.</li>
                  <li><strong className="text-white">Recht auf Widerruf der Einwilligung:</strong> Eine erteilte Einwilligung können Sie jederzeit widerrufen.</li>
                  <li><strong className="text-white">Beschwerderecht:</strong> Sie haben das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] text-center">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Sinan Yurttadur. Alle Rechte vorbehalten.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
