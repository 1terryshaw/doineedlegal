import { Metadata } from "next";
import Link from "next/link";
import verticalConfig from "@/lib/vertical.config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${verticalConfig.name} — a comprehensive U.S. legal directory.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-3">About {verticalConfig.name}</h1>
        <p className="text-lg text-gray-700">
          A comprehensive U.S. legal directory. Find lawyers by practice area and state.
        </p>
      </header>

      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">What we do</h2>
        <p>
          We aggregate public records, bar-association directories, and nonprofit roster data
          into a single searchable directory across the United States. Coverage spans
          immigration, family, criminal defense, personal injury, estate, real estate,
          business, bankruptcy, employment, and civil practice areas.
        </p>
        <p>
          Listings show contact information and basic firm details. Verified attorneys can
          claim their listing to add a bio, photo, areas of focus, hours, and a direct contact
          form.
        </p>
      </section>

      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">What we are not</h2>
        <p>
          We are not a law firm. We do not provide legal advice. We do not refer cases. We do
          not vet, certify, or endorse the attorneys we list &mdash; you are responsible for
          confirming licensure, fee terms, and fit before retaining counsel.
        </p>
      </section>

      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Data sources</h2>
        <p>
          Public state-bar member directories; the U.S. Department of Justice EOIR roster of
          recognized organizations and accredited representatives; nonprofit legal-aid society
          rosters; and claims submitted directly by listed attorneys.
        </p>
      </section>

      <section className="space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Companion sites</h2>
        <p>
          For triage-first AI guidance, see{" "}
          <a
            href="https://doineedlegaladvice.com"
            className="underline"
            style={{ color: verticalConfig.primaryColor }}
            rel="noopener"
          >
            DoINeedLegalAdvice.com
          </a>
          . For free and low-cost legal help (nonprofits, legal aid, pro bono), see{" "}
          <a
            href="https://doineedlegalhelp.org"
            className="underline"
            style={{ color: verticalConfig.primaryColor }}
            rel="noopener"
          >
            DoINeedLegalHelp.org
          </a>
          .
        </p>
        <p>
          See our <Link href="/terms" className="underline">Terms</Link> and{" "}
          <Link href="/privacy" className="underline">Privacy Policy</Link> for details.
        </p>
      </section>
    </div>
  );
}
